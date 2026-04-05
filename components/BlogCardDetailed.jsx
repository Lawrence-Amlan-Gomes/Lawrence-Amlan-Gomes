"use client";
import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCardDetailed({ urlTitle, title, img, shortDescription }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col sm:flex-row w-full rounded-lg overflow-hidden border-[1px] mb-6 ${
        theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#333333] border-blue-800"
          : "bg-[#000000] hover:bg-[#0a0a0a] text-[#dddddd] border-blue-800"
      }`}
    >
      {/* IMAGE: top on mobile only */}
      <div className="w-full sm:hidden px-4 pt-4">
        <div
          className={`relative w-full aspect-video overflow-hidden rounded-lg border-[1px] ${
            theme ? "border-[#dddddd]" : "border-[#222222]"
          }`}
        >
          <Link href={`/blog/${urlTitle}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image src={img} alt={title} fill className="object-cover" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col w-full sm:w-1/2 p-4 sm:p-6">
        <h2 className="text-md xs:text-xl lg:text-2xl font-semibold mb-3">
          {title}
        </h2>
        <p className="text-[10px] sm:text-sm lg:text-base mb-4 flex-grow">
          {shortDescription}
        </p>
      </div>

      {/* IMAGE: right on desktop only */}
      <div className="hidden sm:flex w-1/2 p-4 sm:p-6 items-center">
        <div
          className={`relative w-full aspect-video overflow-hidden rounded-lg border-[1px] ${
            theme ? "border-[#dddddd]" : "border-[#222222]"
          }`}
        >
          <Link href={`/blog/${urlTitle}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image src={img} alt={title} fill className="object-cover" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}