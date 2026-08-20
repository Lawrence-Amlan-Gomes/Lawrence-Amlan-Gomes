import mongoose, { Schema } from "mongoose";

const positionSchema = new Schema(
  {
    x: { type: Number, default: 50 },
    y: { type: Number, default: 50 },
  },
  { _id: false }
);

const schema = new Schema(
  {
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },

    photoUrl: { type: String, required: true },
    photoKey: { type: String, default: null },
    photoPosition: { type: positionSchema, default: () => ({}) },

    videoUrl: { type: String, default: null },
    videoKey: { type: String, default: null },
    videoPosition: { type: positionSchema, default: () => ({}) },
    videoHidden: { type: Boolean, default: false },

    projectUrlTitle: { type: String, default: null },
    locked: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const testimonialModel =
  mongoose.models.testimonials ?? mongoose.model("testimonials", schema);
