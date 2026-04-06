'use client';
import { useState, useEffect } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import testimonials from "@/app/testimonials/testimonials";
import TestimonialCard from "./TestimonialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

export default function LandingTestimonials() {
  const { theme } = useTheme();
  const [numtestimonials, setNumtestimonials] = useState(6);

  useEffect(() => {
    const updateNumtestimonials = () => {
      if (window.innerWidth < 768) {
        setNumtestimonials(2);
      } else if (window.innerWidth < 1024) {
        setNumtestimonials(2);
      } else {
        setNumtestimonials(3);
      }
    };

    updateNumtestimonials();
    window.addEventListener("resize", updateNumtestimonials);

    return () => window.removeEventListener("resize", updateNumtestimonials);
  }, []);

  return (
    <div className="px-[5%] sm:px-[10%] mb-[5%] pb-[5%] w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-8"
      >
        <motion.div
          variants={fadeUp}
          className={`flex items-center mb-5 gap-4 ${
            theme ? "text-[#333333]" : "text-[#dddddd]"
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            Testimonials
          </h1>
          <span
            className={`text-xs sm:text-sm px-2.5 py-0.5 rounded-full font-medium flex-shrink-0 ${
              theme
                ? "bg-blue-100 text-blue-800"
                : "bg-blue-900/30 text-blue-400"
            }`}
          >
            {testimonials.length} clients
          </span>
          <div
            className="flex-grow h-[1px]"
            style={{
              backgroundImage: theme
                ? "linear-gradient(to right, rgba(51, 51, 51, 0), rgba(51, 51, 51, 1))"
                : "linear-gradient(to right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.4))"
            }}
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          className={`text-base lg:text-md w-full md:w-[50%] mt-2 ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          Every project I ship is a commitment to quality. Here&#39;s what clients say about working with me directly.
        </motion.p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {testimonials.slice(0, numtestimonials).map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            urlTitle={testimonial.urlTitle}
            clientName={testimonial.clientName}
            clientImg={testimonial.clientImg}
            clientRole={testimonial.clientRole}
            clientQuote={testimonial.clientQuote}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
          <Link href="/testimonials">
            <div
              className={`px-4 py-2 rounded-md text-sm sm:text-[15px] font-medium hover:cursor-pointer ${
                theme
                  ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                  : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
              }`}
            >
              View All Feedbacks
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
