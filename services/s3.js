import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { randomUUID } from "crypto";

const s3Client = new S3Client({
  endpoint: process.env.S3_ENDPOINT,
  region: process.env.S3_REGION,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});

const LIMITS = {
  photo: {
    maxBytes: 8 * 1024 * 1024,
    allowedTypes: ["image/jpeg", "image/png", "image/webp"],
  },
  video: {
    maxBytes: 80 * 1024 * 1024,
    allowedTypes: ["video/mp4", "video/webm", "video/quicktime"],
  },
};

function extensionForContentType(contentType) {
  const map = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "video/mp4": "mp4",
    "video/webm": "webm",
    "video/quicktime": "mov",
  };
  return map[contentType] ?? "bin";
}

export async function createUploadPost({ kind, contentType }) {
  const limits = LIMITS[kind];
  if (!limits) throw new Error("Invalid upload kind");
  if (!limits.allowedTypes.includes(contentType)) {
    throw new Error(`Unsupported ${kind} content type`);
  }

  const ext = extensionForContentType(contentType);
  const key = `testimonials/${kind}s/${randomUUID()}.${ext}`;

  const { url, fields } = await createPresignedPost(s3Client, {
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Conditions: [
      ["content-length-range", 0, limits.maxBytes],
      ["eq", "$Content-Type", contentType],
    ],
    Fields: {
      "Content-Type": contentType,
    },
    Expires: 60,
  });

  return {
    url,
    fields,
    key,
    publicUrl: buildPublicUrl(key),
  };
}

export function buildPublicUrl(key) {
  return `${process.env.S3_PUBLIC_URL}/${key}`;
}

export async function deleteObject(key) {
  if (!key) return;
  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
    })
  );
}

export function keyFromPublicUrl(url) {
  if (!url) return null;
  const prefix = `${process.env.S3_PUBLIC_URL}/`;
  return url.startsWith(prefix) ? url.slice(prefix.length) : null;
}
