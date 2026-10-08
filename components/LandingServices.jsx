"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import services from "@/app/services";
import { FiCode, FiMessageCircle, FiCalendar, FiMail, FiArrowRight } from "react-icons/fi";

const ICONS = [FiCode, FiMessageCircle, FiCalendar, FiMail];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function LandingServices() {
  const { theme } = useTheme();

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
            Services
          </h1>
          <div
            className="flex-grow h-[1px]"
            style={{
              backgroundImage: theme
                ? "linear-gradient(to right, rgba(51, 51, 51, 0), rgba(51, 51, 51, 1))"
                : "linear-gradient(to right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.4))",
            }}
          />
        </motion.div>
        <motion.p
          variants={fadeUp}
          className={`text-base lg:text-md max-w-2xl ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          Beyond my own projects, here&apos;s what I can build for your business —
          each one solving a specific, real problem.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-4 sm:gap-6"
      >
        {services.map((service, index) => {
          const Icon = ICONS[index];
          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className={`flex flex-col p-5 sm:p-6 rounded-lg border-[1px] transition-colors ${
                theme
                  ? "bg-[#ffffff] hover:bg-[#fafafa] border-blue-800"
                  : "bg-[#000000] hover:bg-[#0a0a0a] border-blue-800"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 text-lg ${
                  theme ? "bg-blue-50 text-blue-800" : "bg-blue-500/10 text-blue-400"
                }`}
              >
                <Icon />
              </div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  theme ? "text-[#222222]" : "text-[#eeeeee]"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm mb-4 flex-grow ${
                  theme ? "text-[#666666]" : "text-[#aaaaaa]"
                }`}
              >
                {service.implementation}
              </p>
              <div
                className={`pt-3 border-t-[1px] text-sm font-medium ${
                  theme
                    ? "border-[#eeeeee] text-blue-800"
                    : "border-[#1a1a1a] text-blue-400"
                }`}
              >
                {service.outcome}
              </div>
              {service.proof && (
                <p
                  className={`mt-2 text-xs italic ${
                    theme ? "text-[#999999]" : "text-[#666666]"
                  }`}
                >
                  {service.proof}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex justify-center mt-8">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
          <Link href="/contact">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm sm:text-[15px] font-medium hover:cursor-pointer ${
                theme
                  ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                  : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
              }`}
            >
              Let&apos;s build yours <FiArrowRight />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
