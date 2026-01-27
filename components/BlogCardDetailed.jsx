"use client";

import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCardDetailed({
  urlTitle,
  title,
  img,
  shortDescription,
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        flex w-full rounded-lg overflow-hidden border-[1px] mb-6
        ${theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#333333] border-blue-800"
          : "bg-[#000000] hover:bg-[#0a0a0a] text-[#dddddd] border-blue-800"
        }`}
    >
      {/* ---------- Text side ---------- */}
      <div className="flex flex-col w-[55%] sm:w-1/2 p-4 sm:p-6">
        <h2 className="text-md xs:text-xl lg:text-2xl font-semibold mb-3">
          {title}
        </h2>

        <p className="text-[10px] sm:text-sm lg:text-base mb-4 flex-grow">
          {shortDescription}
        </p>
      </div>

      {/* ---------- Image side ---------- */}
      <div className="relative w-[45%] sm:w-1/2 h-[200px] xs:h-[250px] sm:h-[300px] p-4 sm:p-6 overflow-hidden">
        <div
          className={`
            relative h-full w-full overflow-hidden rounded-lg border-[1px]
            ${theme ? "border-[#dddddd]" : "border-[#222222]"}
          `}
        >
          <Link href={`/blog/${urlTitle}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}