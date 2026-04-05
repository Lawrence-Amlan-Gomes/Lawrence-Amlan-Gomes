"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "./Footer";
import LandingAbout from "./LandingAbout";
import LandingProjects from "./LandingProjects";
import LandingTestimonials from "./LandingTestimonials";
import LandingBlogs from "./LandingBlogs";
import LandingContact from "./LandingContact";
import LandingButtons from "./LandingButtons";

export default function LandingPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full sm:pt-[13%] pt-[70px] ${
        theme ? "bg-[#ffffff] text-[#aaaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <LandingAbout/>
      <LandingButtons/>
      <LandingProjects/>
      <LandingTestimonials/>
      <LandingBlogs/>
      <LandingContact/>
      <Footer />
    </div>
  );
}