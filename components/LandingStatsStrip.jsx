"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function LandingStatsStrip() {
  const { theme } = useTheme();

  const stats = [
    { value: "20+", label: "Projects Shipped" },
    { value: "3+", label: "Happy Clients" },
    { value: "2+", label: "Years Experience" },
    { value: "SaaS", label: "Products Launched" },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="w-full px-[5%] sm:px-[10%] mb-[6%]"
    >
      <div
        className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border-[1px] p-4 sm:p-6 ${
          theme
            ? "border-[#dddddd] bg-[#fafafa]"
            : "border-[#1a1a1a] bg-[#080808]"
        }`}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="flex flex-col items-center justify-center py-3 sm:py-5 text-center"
          >
            <span
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme ? "text-blue-800" : "text-blue-500"
              }`}
            >
              {stat.value}
            </span>
            <span
              className={`text-xs sm:text-sm mt-1 ${
                theme ? "text-[#666666]" : "text-[#888888]"
              }`}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
