import { userModel } from "@/models/user-model";
import { messageModel } from "@/models/message";
import { testimonialModel } from "@/models/testimonial-model";
import { settingsModel } from "@/models/settings-model";

import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";
import { Imprima } from "next/font/google";

async function getAllUsers() {
  const allUsers = await userModel.find().lean();
  return replaceMongoIdInArray(allUsers);
}

async function getAllMessages() {
  const allMessages = await messageModel.find().lean();
  return replaceMongoIdInArray(allMessages);
}

async function createUser(user) {
  return await userModel.create(user);
}

async function createMessage(user) {
  return await messageModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateUser(email, name, firstTimeLogin) {
  await userModel.updateOne(
    { email: email },
    { $set: { name: name, firstTimeLogin: firstTimeLogin } }
  );
}

async function updateMessage(email, message) {
  await messageModel.updateOne(
    { email: email },
    { $set: { message:message } }
  );
}

async function changePassword(email, password) {
  await userModel.updateOne({ email: email }, { $set: { password: password } });
}

async function changePhoto(email, photo) {
  await userModel.updateOne({ email: email }, { $set: { photo: photo } });
}

async function getAllTestimonials() {
  const all = await testimonialModel.find().sort({ order: 1, createdAt: -1 }).lean();
  return replaceMongoIdInArray(all);
}

async function getTestimonialById(id) {
  const found = await testimonialModel.findById(id).lean();
  if (!found) return null;
  return replaceMongoIdInObject(found);
}

async function createTestimonial(data) {
  if (data.order === undefined) {
    const highest = await testimonialModel.findOne().sort({ order: -1 }).select("order").lean();
    data.order = (highest?.order ?? -1) + 1;
  }
  const created = await testimonialModel.create(data);
  return replaceMongoIdInObject(created.toObject());
}

async function reorderTestimonials(orderedIds) {
  await testimonialModel.bulkWrite(
    orderedIds.map((id, index) => ({
      updateOne: { filter: { _id: id }, update: { $set: { order: index } } },
    }))
  );
}

async function updateTestimonial(id, data) {
  const updated = await testimonialModel
    .findByIdAndUpdate(id, { $set: data }, { new: true })
    .lean();
  if (!updated) return null;
  return replaceMongoIdInObject(updated);
}

async function deleteTestimonial(id) {
  const deleted = await testimonialModel.findByIdAndDelete(id).lean();
  if (!deleted) return null;
  return replaceMongoIdInObject(deleted);
}

async function getSettings() {
  const settings = await settingsModel
    .findOneAndUpdate(
      { key: "global" },
      { $setOnInsert: { key: "global" } },
      { new: true, upsert: true }
    )
    .lean();
  return replaceMongoIdInObject(settings);
}

async function updateSettings(data) {
  const updated = await settingsModel
    .findOneAndUpdate({ key: "global" }, { $set: data }, { new: true, upsert: true })
    .lean();
  return replaceMongoIdInObject(updated);
}

export {
  changePassword,
  changePhoto,
  createUser,
  findUserByCredentials,
  getAllUsers,
  updateUser,
  createMessage,
  getAllMessages,
  updateMessage,
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  reorderTestimonials,
  getSettings,
  updateSettings,
};