"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function AddTestimonialCard({ onClick, href }) {
  const { theme } = useTheme();

  const content = (
    <>
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 border-2 border-dashed ${
          theme ? "border-blue-700 text-blue-700" : "border-blue-500 text-blue-500"
        }`}
      >
        <FaPlus />
      </div>
      <span className={`text-sm sm:text-base font-medium ${theme ? "text-blue-700" : "text-blue-500"}`}>
        Add your testimonial
      </span>
    </>
  );

  const className = `w-full h-full min-h-[220px] mx-auto p-8 rounded-2xl border-2 border-dashed hover:cursor-pointer flex flex-col items-center justify-center text-center transition-colors ${
    theme
      ? "border-blue-700 hover:bg-blue-50"
      : "border-blue-500 hover:bg-blue-950/20"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="w-full h-full"
    >
      {href ? (
        <Link href={href} className={className}>
          {content}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={className}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
