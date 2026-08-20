import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  key: { type: String, required: true, unique: true },
  testimonialSubmissionsOpen: { type: Boolean, default: false },
});

export const settingsModel =
  mongoose.models.settings ?? mongoose.model("settings", schema);
