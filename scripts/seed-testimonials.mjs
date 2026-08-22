// One-off migration: seeds the 3 existing static testimonials into MongoDB.
// Run once with: node --env-file=.env.local scripts/seed-testimonials.mjs
import mongoose from "mongoose";
import { testimonialModel } from "../models/testimonial-model.js";

const SEED_DATA = [
  {
    name: "Mr. Zaman",
    designation: "Local Client, Dhaka",
    photoUrl: "/C1pic.png",
    photoKey: null,
    projectUrlTitle: "library-management",
    rating: 5,
    comment:
      "Lawrence did an outstanding job developing my library management system website. He was highly professional, understood my requirements quickly, and delivered a clean, efficient, and user-friendly system ahead of schedule. His technical expertise and attention to detail truly impressed me. I'd highly recommend him for any web development project.",
    locked: true,
  },
  {
    name: "Mr. Musfiq",
    designation: "Local Client, Dhaka",
    photoUrl: "/C3pic.png",
    photoKey: null,
    projectUrlTitle: "facelees",
    rating: 5,
    comment:
      "Thank you for the amazing website. You understood my requirements perfectly and delivered beyond my expectations. I'm extremely satisfied and grateful for your hard work. And thanks a lot brother.",
    locked: true,
  },
];

async function run() {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

  const existingCount = await testimonialModel.countDocuments();
  if (existingCount > 0) {
    console.log(
      `testimonials collection already has ${existingCount} document(s) — skipping seed to avoid duplicates.`
    );
    await mongoose.disconnect();
    return;
  }

  const inserted = await testimonialModel.insertMany(SEED_DATA);
  console.log(`Seeded ${inserted.length} testimonials.`);

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
