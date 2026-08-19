"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({
  title,
  img,
  liveLink,
  shortDescription,
  techStack,
  gitLink,
}) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`flex flex-col h-full rounded-lg overflow-hidden border-[1px] transition-shadow ${
        theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#333333] border-blue-800 hover:shadow-lg hover:shadow-blue-900/10"
          : "bg-[#000000] hover:bg-[#0a0a0a] text-[#dddddd] border-blue-800 hover:shadow-lg hover:shadow-blue-500/10"
      }`}
    >
      {/* Top blue accent bar */}
      <div className={`h-[2px] w-full ${theme ? "bg-blue-800" : "bg-blue-700"}`} />

      <div className="w-full px-6 pt-6">
        <div
          className={`relative w-full aspect-video overflow-hidden rounded-md border-[1px] ${
            theme ? "border-[#dddddd]" : "border-[#222222]"
          }`}
        >
          <Link href="/projects">
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
      <div className="flex flex-col p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="md:text-lg font-semibold pr-5">{title}</h2>
          <div className="flex gap-2 pr-2 flex-shrink-0">
            {techStack.slice(0, 4).map(([name, src]) => (
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
        </div>
        <p className="text-sm mb-4 flex-grow">{shortDescription}</p>
        <div className="flex gap-4 text-sm">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 ${
              theme ? "hover:text-blue-800" : "hover:text-blue-500"
            }`}
          >
            <FiExternalLink className="text-sm" /> Live Demo
          </a>
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${
                theme ? "hover:text-[#000000]" : "hover:text-[#ffffff]"
              }`}
            >
              <FaGithub className="text-sm" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
