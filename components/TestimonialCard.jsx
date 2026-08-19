"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialCard({
  clientName,
  urlTitle,
  clientImg,
  clientRole,
  clientQuote,
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`w-full h-full mx-auto p-8 rounded-2xl hover:cursor-pointer border-[1px] flex flex-col justify-between relative transition-shadow ${
        theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#aaaaaa] border-blue-800 hover:shadow-lg hover:shadow-blue-900/10"
          : "bg-[#000000] hover:bg-[#060606] text-[#eeeeee] border-blue-800 hover:shadow-lg hover:shadow-blue-500/10"
      }`}
    >
      <div className="flex flex-col flex-grow">
        {/* Quote Icon */}
        <FaQuoteLeft
          className={`text-xl mb-3 ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        />

        {/* Star Ratings */}
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-xs sm:text-sm" />
          ))}
        </div>

        {/* Quote Text */}
        <p
          className={`lg:text-md text-sm leading-relaxed text-justify mb-6 ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          {clientQuote}
        </p>
      </div>

      {/* Author + View Project Section */}
      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src={clientImg}
              alt={clientName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3
              className={`font-semibold lg:text-md text-sm ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              {clientName}
            </h3>
            <p
              className={`text-xs sm:text-sm font-medium ${
                theme ? "text-blue-700" : "text-blue-500"
              }`}
            >
              {clientRole}
            </p>
          </div>
        </div>

        {/* Small "View Project" link */}
        <Link
          href={`/project/${urlTitle}`}
          className={`text-xs sm:text-sm font-medium underline-offset-4 transition-colors ${
            theme
              ? "text-blue-600 hover:text-blue-700"
              : "text-blue-700 hover:text-blue-800"
          }`}
        >
          View Project →
        </Link>
      </div>
    </motion.div>
  );
}
