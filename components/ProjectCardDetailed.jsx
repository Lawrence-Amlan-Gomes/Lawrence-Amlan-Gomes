"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCardDetailed({
  urlTitle,
  title,
  img,
  liveLink,
  shortDescription,
  techStack,
  gitLink,
  type,
  hasCaseStudy,
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex flex-col sm:flex-row w-full rounded-lg overflow-hidden border-[1px] mb-6 ${
        theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#333333] border-blue-800"
          : "bg-[#000000] hover:bg-[#0a0a0a] text-[#dddddd] border-blue-800"
      }`}
    >
      {/* IMAGE: top on mobile, right on desktop */}
      <div className="w-full sm:hidden px-4 pt-4">
        <div
          className={`relative w-full aspect-video overflow-hidden rounded-lg border-[1px] ${
            theme ? "border-[#dddddd]" : "border-[#222222]"
          }`}
        >
          <Link href={`/project/${urlTitle}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image src={img[0]} alt={title} fill className="object-cover" />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* LEFT: text content */}
      <div className="flex flex-col w-full sm:w-1/2 p-4 sm:p-6">
        <h2 className="text-lg xs:text-xl lg:text-2xl font-semibold mb-3">
          {title}
        </h2>
        <div className="flex gap-2 mb-4">
          {techStack.slice(0, 5).map(([name, src]) => (
            <Image
              key={name}
              src={src}
              alt={name}
              width={20}
              height={20}
              className="object-contain"
            />
          ))}
        </div>
        <p className="text-[10px] sm:text-sm lg:text-base mb-4 flex-grow">
          {shortDescription}
        </p>
        <div className="flex gap-4 text-xs sm:text-sm lg:text-base">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 ${
              theme ? "hover:text-blue-800" : "hover:text-blue-600"
            }`}
          >
            <span>→</span> {type === "saas" ? "See Live" : "Live Demo"}
          </a>
          {hasCaseStudy && (
            <Link
              href={`/case-study/${urlTitle}`}
              className={`flex items-center gap-1 ${
                theme ? "hover:text-blue-800" : "hover:text-blue-600"
              }`}
            >
              <span>→</span> Case Study
            </Link>
          )}
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center hover:tracking-wider gap-1 ${
                theme ? "hover:text-[#111111]" : "hover:text-[#ffffff]"
              }`}
            >
              <Image
                src={theme ? "/gitHubLight.png" : "/gitHubDark.png"}
                alt="GitHub"
                width={16}
                height={16}
                className="object-contain"
              />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* RIGHT: image on desktop only */}
      <div className="hidden sm:flex w-1/2 p-4 sm:p-6 items-center">
        <div
          className={`relative w-full aspect-video overflow-hidden rounded-lg border-[1px] ${
            theme ? "border-[#dddddd]" : "border-[#222222]"
          }`}
        >
          <Link href={`/project/${urlTitle}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full"
            >
              <Image src={img[0]} alt={title} fill className="object-cover" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
