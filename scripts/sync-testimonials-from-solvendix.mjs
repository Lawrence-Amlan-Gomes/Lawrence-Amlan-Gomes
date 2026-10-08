// Manual, on-request sync: pulls every testimonial from Solvendix's database and
// regenerates app/testimonials-data.js, downloading any new photo into public/.
//
// Run with: node scripts/sync-testimonials-from-solvendix.mjs
// Requires SOLVENDIX_MONGODB_CONNECTION_STRING in .env.local (read-only use).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MongoClient } from "mongodb";
import projects from "../app/projects/projects.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function loadEnvLocal() {
  const env = {};
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return env;
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_0-9]+)=(.*)$/);
    if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
  }
  return env;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function downloadPhoto(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buf);
}

async function main() {
  const env = loadEnvLocal();
  const connectionString = env.SOLVENDIX_MONGODB_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error("SOLVENDIX_MONGODB_CONNECTION_STRING missing from .env.local");
  }

  const client = new MongoClient(connectionString);
  await client.connect();
  const db = client.db();
  const docs = await db
    .collection("testimonials")
    .find({})
    .sort({ order: 1, createdAt: -1 })
    .toArray();
  await client.close();

  const entries = [];
  for (const doc of docs) {
    const slug = slugify(doc.name);
    const ext = path.extname(new URL(doc.photoUrl).pathname) || ".png";
    const fileName = `testimonial-${slug}${ext}`;
    const destPath = path.join(root, "public", fileName);

    if (!fs.existsSync(destPath)) {
      console.log(`Downloading new photo for ${doc.name}...`);
      await downloadPhoto(doc.photoUrl, destPath);
    }

    const refSlug = doc.solvendixCaseStudyRef ?? doc.projectUrlTitle ?? null;
    const knownSlugs = projects.map((p) => p.urlTitle);
    if (refSlug && !knownSlugs.includes(refSlug)) {
      console.warn(
        `WARNING: ${doc.name}'s project reference "${refSlug}" doesn't match any urlTitle in app/projects/projects.js. ` +
          `It was probably renamed on this side since Solvendix last synced. Writing it as null — fix manually once you know the new slug.`
      );
    }
    const projectUrlTitle = refSlug && knownSlugs.includes(refSlug) ? refSlug : null;

    entries.push({
      id: String(doc._id),
      name: doc.name,
      designation: doc.designation,
      rating: doc.rating,
      comment: doc.comment,
      photoUrl: `/${fileName}`,
      photoPosition: doc.photoPosition ?? { x: 50, y: 50 },
      projectUrlTitle,
    });
  }

  const fileContents = `// Static testimonial data, mirrored from Solvendix's database.
// Regenerate with \`node scripts/sync-testimonials-from-solvendix.mjs\` when a new client is added there.

const testimonials = ${JSON.stringify(entries, null, 2)};

export default testimonials;
`;

  fs.writeFileSync(path.join(root, "app", "testimonials-data.js"), fileContents);
  console.log(`Wrote ${entries.length} testimonials to app/testimonials-data.js`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
