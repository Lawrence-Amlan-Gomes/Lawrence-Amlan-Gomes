"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

export default function LandingAbout() {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="w-full px-[5%] sm:px-[10%] flex flex-row justify-between items-start gap-4 sm:gap-6 md:mb-0 mb-[5%]"
    >
      {/* LEFT TEXT SECTION */}
      <div className="w-[60%] mr-[2.5%]">

        {/* Available for Work badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className={`text-xs sm:text-sm font-medium tracking-wide ${theme ? "text-green-700" : "text-green-400"}`}>
            Available for Work
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className={`text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-3 text-justify ${
            theme ? "text-[#0a0a0a]" : "text-[#ebebeb]"
          }`}
        >
          Hi, I&apos;m{" "}
          <span className={theme ? "text-blue-800" : "text-blue-500"}>Lawrence.</span>
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className={`text-xs xs:text-sm sm:text-xl font-semibold mb-4 text-justify ${
            theme ? "text-[#333333]" : "text-[#cccccc]"
          }`}
        >
          Full-Stack Developer | Shipping Production-Ready Web Apps End-to-End
        </motion.h2>

        {/* Desktop bio */}
        <motion.p
          variants={fadeUp}
          className={`leading-relaxed mb-6 text-justify text-xs hidden sm:block sm:text-base xl:text-lg ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          }`}
        >
          I&apos;m a Full-Stack Developer based in Dhaka, Bangladesh,
          specializing in building and shipping complete, production-ready web
          applications — from architecture to deployment. My core stack: Next.js
          (App Router) · TypeScript · React · Node.js · MongoDB · Redis ·
          Tailwind CSS · Redux Toolkit · AWS S3. I&apos;ve independently built
          and launched multiple SaaS products and client projects — handling
          feature development, Paddle payment integrations, CI/CD pipelines,
          custom domains, and cloud deployments on Vercel, Netlify, and
          self-hosted Coolify. I move fast, integrate AI APIs across projects,
          and deliver clean, maintainable codebases that scale.
        </motion.p>

        {/* Mobile bio */}
        <motion.p
          variants={fadeUp}
          className={`leading-relaxed mb-4 text-justify text-xs sm:hidden block ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          }`}
        >
          Full-Stack Developer shipping production apps end-to-end. Next.js ·
          TypeScript · MongoDB · Redis · Tailwind · AWS S3. Paddle payments,
          CI/CD, and cloud deployments.
        </motion.p>

        {/* Desktop CTA */}
        <motion.p
          variants={fadeUp}
          className={`font-medium mb-3 text-justify text-xs hidden sm:block sm:text-base ${
            theme ? "text-[#444444]" : "text-[#bbbbbb]"
          }`}
        >
          Looking to build your next production web app? Let&apos;s ship
          something great together.
        </motion.p>

        {/* Desktop bullet list */}
        <motion.ul
          variants={fadeUp}
          className={`list-disc ml-5 space-y-2 mb-4 text-justify xl:text-lg text-xs sm:text-base hidden lg:block ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          <li>Build type-safe, full-stack apps with Next.js & TypeScript</li>
          <li>Deploy via Vercel, Netlify, and self-hosted Coolify on VPS</li>
          <li>Integrate Paddle for subscriptions and one-time payment flows</li>
          <li>Implement AI-powered features via third-party APIs</li>
          <li>Set up GitHub-based CI/CD pipelines and custom domains</li>
          <li>Scale backends with MongoDB and Redis caching</li>
          <li>Manage state efficiently using Redux Toolkit</li>
          <li>Craft responsive, accessible UIs with Tailwind CSS</li>
        </motion.ul>

        {/* Desktop social quick-links */}
        <motion.div variants={fadeUp} className="hidden lg:flex items-center gap-3 mt-2 mb-6">
          <a
            href="https://github.com/Lawrence-Amlan-Gomes"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              theme
                ? "border-[#333333] text-[#333333] hover:border-blue-800 hover:text-blue-800"
                : "border-[#555555] text-[#aaaaaa] hover:border-blue-500 hover:text-blue-400"
            }`}
          >
            <FaGithub className="text-sm" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lawrence-amlan-gomes/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              theme
                ? "border-[#333333] text-[#333333] hover:border-blue-800 hover:text-blue-800"
                : "border-[#555555] text-[#aaaaaa] hover:border-blue-500 hover:text-blue-400"
            }`}
          >
            <FaLinkedin className="text-sm" /> LinkedIn
          </a>
          <span className={`text-xs ${theme ? "text-[#999999]" : "text-[#555555]"}`}>
            · Based in Dhaka, BD
          </span>
        </motion.div>

        {/* Mobile: horizontally scrollable pill list */}
        <motion.div variants={fadeUp} className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-hide">
          {[
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Redis",
            "AWS S3",
            "Paddle",
            "Tailwind CSS",
            "Redux Toolkit",
            "CI/CD",
            "Vercel",
            "Netlify",
            "Coolify",
            "AI APIs",
          ].map((tag) => (
            <span
              key={tag}
              className={`flex-shrink-0 text-[10px] px-2 py-1 rounded-full border whitespace-nowrap ${
                theme
                  ? "border-[#cccccc] text-[#555555]"
                  : "border-[#444444] text-[#aaaaaa]"
              }`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* RIGHT COLUMN */}
      <motion.div variants={fadeUp} className="w-[40%] ml-[2.5%]">
        {/* Profile image */}
        <div
          className={`relative rounded-xl overflow-hidden w-full aspect-[3/4] mb-4 sm:mb-4 ${
            theme ? "border-[#000000]" : "border-[#444444]"
          }`}
        >
          <Image
            src="/22.jpg"
            alt="Profile picture"
            fill
            className="object-cover object-top"
          />
          {/* Gradient overlay at bottom for depth */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-20 ${
              theme
                ? "bg-gradient-to-t from-white/60 to-transparent"
                : "bg-gradient-to-t from-black/60 to-transparent"
            }`}
          />
        </div>

        {/* Hire Me CTA button */}
        <a
          href="mailto:amlangomes@gmail.com"
          className={`flex items-center justify-center gap-2 w-full py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm mb-3 sm:mb-4 transition-all border-[1px] ${
            theme
              ? "bg-blue-800 text-white border-blue-800 hover:bg-white hover:text-blue-800"
              : "bg-blue-700 text-white border-blue-700 hover:bg-black hover:text-blue-500"
          }`}
        >
          <MdEmail className="text-sm sm:text-base" /> Hire Me
        </a>

        {/* University card */}
        <a
          href="https://www.bracu.ac.bd/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <div
            className={`relative rounded-xl border ${
              theme
                ? "hover:bg-[#f8f8f8] border-[#888888]"
                : "border-[#333333] hover:bg-[#080808]"
            }`}
          >
            <Image
              src="/graduationIcon.png"
              alt="Graduation Icon"
              width={16}
              height={16}
              className="absolute top-2 left-2 sm:top-2 sm:left-3 object-contain w-4 h-4 sm:w-6 sm:h-6"
            />
            <div className="p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3">
              <Image
                src={theme ? "/bracuIconLight.png" : "/bracuIconDark.png"}
                alt="Brac University Icon"
                width={500}
                height={500}
                className="object-contain mt-4 sm:mt-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px]"
              />
              <p
                className={`hidden sm:block text-[9px] xs:text-[10px] sm:text-[15px] 2xl:text-[18px] font-medium text-center ${
                  theme ? "text-[#333333]" : "text-[#cccccc]"
                }`}
              >
                Bachelor of Science in Computer Science (2022 Jan –2026 Apr)
              </p>
              <p
                className={`sm:hidden block text-[9px] xs:text-[10px] sm:text-[15px] 2xl:text-[18px] font-medium text-center ${
                  theme ? "text-[#333333]" : "text-[#cccccc]"
                }`}
              >
                BSc in CS | Brac University
              </p>
              <p
                className={`hidden sm:block text-[8px] xs:text-[9px] sm:text-[14px] 2xl:text-[16px] text-center ${
                  theme ? "text-[#555555]" : "text-[#aaaaaa]"
                }`}
              >
                Brac University | Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
}
