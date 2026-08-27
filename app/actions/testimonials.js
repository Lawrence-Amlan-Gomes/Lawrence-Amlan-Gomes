"use server";

import { dbConnect } from "@/services/mongo";
import { auth } from "../auth";
import {
  getAllTestimonials,
  getPublicTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  reorderTestimonials,
  getSettings,
  updateSettings,
} from "@/db/queries";
import { createUploadPost, deleteObject } from "@/services/s3";
import { revalidatePath } from "next/cache";
import projects from "@/app/projects/projects";

const ADMIN_EMAIL = "amlangomes@gmail.com";

async function requireAdmin() {
  const session = await auth();
  if (session?.user?.email !== ADMIN_EMAIL) {
    throw new Error("Not authorized");
  }
}

async function isAdminSession() {
  const session = await auth();
  return session?.user?.email === ADMIN_EMAIL;
}

async function requireSubmissionsOpen() {
  await dbConnect();
  const settings = await getSettings();
  if (!settings.testimonialSubmissionsOpen) {
    throw new Error("Public testimonial submissions are currently closed");
  }
}

function revalidateTestimonialPages() {
  revalidatePath("/testimonials");
  revalidatePath("/");
  revalidatePath("/admin/testimonials");
}

function validateCoreFields({ rating, comment, name, designation }) {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw new Error("Rating must be a whole number between 1 and 5");
  }
  if (!comment?.trim() || !name?.trim() || !designation?.trim()) {
    throw new Error("Comment, name, and designation are required");
  }
}

function sanitizeVisitorFields(data) {
  const { rating, comment, name, designation, photoUrl, photoKey, videoUrl, videoKey } =
    data;
  validateCoreFields({ rating, comment, name, designation });
  return { rating, comment, name, designation, photoUrl, photoKey, videoUrl, videoKey };
}

function sanitizeAdminFields(data) {
  const {
    rating,
    comment,
    name,
    designation,
    photoUrl,
    photoKey,
    photoPosition,
    videoUrl,
    videoKey,
    videoPosition,
    videoHidden,
    projectUrlTitle,
    locked,
  } = data;

  validateCoreFields({ rating, comment, name, designation });

  const validProjectUrlTitle =
    projectUrlTitle && projects.some((p) => p.urlTitle === projectUrlTitle)
      ? projectUrlTitle
      : null;

  return {
    rating,
    comment,
    name,
    designation,
    photoUrl,
    photoKey,
    photoPosition,
    videoUrl,
    videoKey,
    videoPosition,
    videoHidden,
    projectUrlTitle: validProjectUrlTitle,
    locked,
  };
}

async function requestUploadUrl({ kind, contentType }) {
  const admin = await isAdminSession();
  if (!admin) {
    await requireSubmissionsOpen();
  }
  return await createUploadPost({ kind, contentType });
}

async function getAllTestimonialsAction() {
  await dbConnect();
  return await getAllTestimonials();
}

async function getPublicTestimonialsAction() {
  await dbConnect();
  return await getPublicTestimonials();
}

async function adminSetTestimonialStatusAction(id, status) {
  await requireAdmin();
  await dbConnect();
  if (!["approved", "rejected"].includes(status)) {
    throw new Error("Invalid status");
  }
  const updated = await updateTestimonial(id, { status });
  revalidateTestimonialPages();
  return updated;
}

async function getSettingsAction() {
  await dbConnect();
  return await getSettings();
}

async function adminUpdateSettingsAction(open) {
  await requireAdmin();
  await dbConnect();
  const updated = await updateSettings({ testimonialSubmissionsOpen: !!open });
  revalidateTestimonialPages();
  return updated;
}

async function createPublicTestimonialAction(data) {
  await requireSubmissionsOpen();
  const payload = {
    ...sanitizeVisitorFields(data),
    locked: false,
    videoHidden: false,
    projectUrlTitle: null,
  };
  const created = await createTestimonial(payload);
  revalidateTestimonialPages();
  return created;
}

async function updatePublicTestimonialAction(id, data) {
  await requireSubmissionsOpen();
  await dbConnect();
  const existing = await getTestimonialById(id);
  if (!existing) throw new Error("Testimonial not found");
  if (existing.locked) throw new Error("This testimonial is locked");

  const payload = sanitizeVisitorFields(data);

  if (payload.photoKey && payload.photoKey !== existing.photoKey) {
    await deleteObject(existing.photoKey);
  }
  if (
    existing.videoKey &&
    payload.videoKey !== undefined &&
    payload.videoKey !== existing.videoKey
  ) {
    await deleteObject(existing.videoKey);
  }

  const updated = await updateTestimonial(id, payload);
  revalidateTestimonialPages();
  return updated;
}

async function adminCreateTestimonialAction(data) {
  await requireAdmin();
  await dbConnect();
  const payload = sanitizeAdminFields({
    photoPosition: { x: 50, y: 50 },
    videoPosition: { x: 50, y: 50 },
    videoHidden: false,
    locked: false,
    ...data,
  });
  const created = await createTestimonial(payload);
  revalidateTestimonialPages();
  return created;
}

async function adminUpdateTestimonialAction(id, data) {
  await requireAdmin();
  await dbConnect();
  const existing = await getTestimonialById(id);
  if (!existing) throw new Error("Testimonial not found");

  const payload = sanitizeAdminFields(data);

  if (payload.photoKey && payload.photoKey !== existing.photoKey) {
    await deleteObject(existing.photoKey);
  }
  if (
    existing.videoKey &&
    payload.videoKey !== undefined &&
    payload.videoKey !== existing.videoKey
  ) {
    await deleteObject(existing.videoKey);
  }

  const updated = await updateTestimonial(id, payload);
  revalidateTestimonialPages();
  return updated;
}

async function adminReorderTestimonialsAction(orderedIds) {
  await requireAdmin();
  await dbConnect();
  await reorderTestimonials(orderedIds);
  revalidateTestimonialPages();
}

async function adminDeleteTestimonialAction(id) {
  await requireAdmin();
  await dbConnect();
  const existing = await getTestimonialById(id);
  if (!existing) return null;

  if (existing.photoKey) await deleteObject(existing.photoKey);
  if (existing.videoKey) await deleteObject(existing.videoKey);

  const deleted = await deleteTestimonial(id);
  revalidateTestimonialPages();
  return deleted;
}

export {
  requestUploadUrl,
  getAllTestimonialsAction,
  getPublicTestimonialsAction,
  getSettingsAction,
  adminUpdateSettingsAction,
  createPublicTestimonialAction,
  updatePublicTestimonialAction,
  adminCreateTestimonialAction,
  adminUpdateTestimonialAction,
  adminSetTestimonialStatusAction,
  adminReorderTestimonialsAction,
  adminDeleteTestimonialAction,
};
