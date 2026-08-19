'use client';
import { useEffect, useRef } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import testimonials from "@/app/testimonials/testimonials";
import TestimonialCard from "./TestimonialCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const scrollRef = useRef(null);
  const holdDirectionRef = useRef(0);
  const holdRafRef = useRef(null);

  const scrollByCard = (direction) => {
    scrollRef.current?.scrollBy({ left: direction * 380, behavior: "smooth" });
  };

  const holdStep = () => {
    if (scrollRef.current && holdDirectionRef.current !== 0) {
      scrollRef.current.scrollLeft += holdDirectionRef.current * 9;
      holdRafRef.current = requestAnimationFrame(holdStep);
    }
  };

  const startHoldScroll = (direction) => {
    holdDirectionRef.current = direction;
    cancelAnimationFrame(holdRafRef.current);
    holdRafRef.current = requestAnimationFrame(holdStep);
  };

  const stopHoldScroll = () => {
    holdDirectionRef.current = 0;
    cancelAnimationFrame(holdRafRef.current);
  };

  useEffect(() => stopHoldScroll, []);

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
        <motion.div
          variants={fadeUp}
          className="flex items-start justify-between gap-4 mt-2"
        >
          <p
            className={`text-base lg:text-md flex-1 md:max-w-[50%] ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            Every project I ship is a commitment to quality. Here&#39;s what clients say about working with me directly.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => scrollByCard(-1)}
              onMouseDown={() => startHoldScroll(-1)}
              onMouseUp={stopHoldScroll}
              onMouseLeave={stopHoldScroll}
              onTouchStart={() => startHoldScroll(-1)}
              onTouchEnd={stopHoldScroll}
              onTouchCancel={stopHoldScroll}
              aria-label="Scroll testimonials left"
              className={`p-2 rounded-full border-[1px] text-lg cursor-pointer transition-colors select-none ${
                theme
                  ? "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                  : "border-blue-700 text-blue-500 hover:bg-blue-700 hover:text-white"
              }`}
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              onMouseDown={() => startHoldScroll(1)}
              onMouseUp={stopHoldScroll}
              onMouseLeave={stopHoldScroll}
              onTouchStart={() => startHoldScroll(1)}
              onTouchEnd={stopHoldScroll}
              onTouchCancel={stopHoldScroll}
              aria-label="Scroll testimonials right"
              className={`p-2 rounded-full border-[1px] text-lg cursor-pointer transition-colors select-none ${
                theme
                  ? "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                  : "border-blue-700 text-blue-500 hover:bg-blue-700 hover:text-white"
              }`}
            >
              <FiChevronRight />
            </button>
          </div>
        </motion.div>
      </motion.div>
      <div
        ref={scrollRef}
        className="flex flex-nowrap items-stretch overflow-x-auto overflow-y-hidden gap-4 sm:gap-6 py-4 scrollbar-hide"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-[300px] sm:w-[360px] lg:w-[420px] flex-shrink-0"
          >
            <TestimonialCard
              urlTitle={testimonial.urlTitle}
              clientName={testimonial.clientName}
              clientImg={testimonial.clientImg}
              clientRole={testimonial.clientRole}
              clientQuote={testimonial.clientQuote}
            />
          </div>
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
