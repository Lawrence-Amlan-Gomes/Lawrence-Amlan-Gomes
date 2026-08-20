export async function uploadToPresignedPost({ url, fields }, file) {
  const formData = new FormData();
  Object.entries(fields).forEach(([key, value]) => formData.append(key, value));
  formData.append("file", file);

  const res = await fetch(url, { method: "POST", body: formData });
  if (!res.ok) {
    throw new Error("Upload failed");
  }
}
