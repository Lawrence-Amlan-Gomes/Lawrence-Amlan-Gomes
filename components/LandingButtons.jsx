"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUser, FaFileAlt, FaBookOpen, FaRegCalendarAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

export default function LandingButtons() {
  const { theme } = useTheme();

  const buttons = [
    {
      label: "Experience",
      isPrimary: true,
      href: "/about",
      icon: <FaUser className="text-sm" />,
    },
    {
      label: "Resume",
      isPrimary: false,
      href: "/resume",
      icon: <FaFileAlt className="text-sm" />,
    },
    {
      label: "Published Paper",
      isPrimary: false,
      href: "/thesis",
      icon: <FaBookOpen className="text-sm" />,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full px-[5%] sm:px-[10%] flex flex-row flex-nowrap sm:flex-wrap overflow-x-auto gap-3 sm:gap-4 mb-[10%] scrollbar-hide mt-4"
    >
      {buttons.map((btn, index) => (
        <motion.div key={index} variants={fadeUp} className="flex-shrink-0">
          <Link href={btn.href}>
            {btn.isPrimary ? (
              <div
                className={`px-3 py-1.5 sm:px-4 sm:py-2 flex justify-center items-center gap-2 rounded-md text-xs sm:text-sm font-medium hover:cursor-pointer whitespace-nowrap transition-colors ${
                  theme
                    ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                    : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
                }`}
              >
                {btn.icon}
                {btn.label}
              </div>
            ) : (
              <div
                className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition hover:cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  theme
                    ? "bg-[#0a0a0a] text-[#ffffff] border-[1px] hover:bg-transparent hover:text-black border-[#0a0a0a]"
                    : "bg-[#ebebeb] text-[#0a0a0a] border-[1px] hover:bg-transparent hover:text-white border-[#ebebeb]"
                }`}
              >
                {btn.icon}
                {btn.label}
              </div>
            )}
          </Link>
        </motion.div>
      ))}

      {/* Book a Meeting ghost button */}
      <motion.div variants={fadeUp} className="flex-shrink-0">
        <Link
          href="/contact#cal-booking"
          className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition hover:cursor-pointer whitespace-nowrap flex items-center gap-2 border-[1px] ${
            theme
              ? "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
              : "border-blue-600 text-blue-500 hover:bg-blue-700 hover:text-white"
          }`}
        >
          <FaRegCalendarAlt className="text-sm" />
          Book a Meeting
        </Link>
      </motion.div>
    </motion.div>
  );
}
