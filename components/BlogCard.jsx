"use client";
import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogCard({ title, img, shortDescription }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col rounded-lg overflow-hidden border-[1px] hover:cursor-pointer ${
        theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#333333] border-blue-800"
          : "bg-[#000000] hover:bg-[#0a0a0a] text-[#dddddd] border-blue-800"
      }`}
    >
      <div className="w-full px-6 pt-6">
        <div
          className={`relative w-full aspect-video overflow-hidden rounded-md border-[1px] ${
            theme ? "border-[#dddddd]" : "border-[#222222]"
          }`}
        >
          <Link href="/blogs">
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
      <div className="flex flex-col p-6">
        <h2 className="md:text-lg font-semibold mb-3">{title}</h2>
        <p className="text-sm mb-4 flex-grow">{shortDescription}</p>
      </div>
    </div>
  );
}