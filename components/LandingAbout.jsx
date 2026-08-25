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
          I help people and businesses turn ideas into real, working products
          — I design them, build them, and take them all the way to
          production. I&apos;ve independently shipped multiple SaaS products
          and client projects, handling everything a launch needs: the app
          itself, payments, deployment, and the domain it runs on — mostly
          with Next.js and TypeScript. I move fast, lean on AI tools to build
          faster, and deliver clean work that scales.
        </motion.p>

        {/* Mobile bio */}
        <motion.p
          variants={fadeUp}
          className={`leading-relaxed mb-4 text-justify text-xs sm:hidden block ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          }`}
        >
          I turn ideas into real, working products — from first line of code
          to production. I&apos;ve independently shipped multiple SaaS
          products and client projects, handling payments, deployment, and
          everything in between.
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
          <li>Build full-stack apps with Next.js, fast and reliable end to end</li>
          <li>Handle deployment and custom domains so it just works in production</li>
          <li>Set up real payments — subscriptions and one-time purchases</li>
          <li>Add AI-powered features that genuinely help users</li>
          <li>Automate testing and releases so updates ship safely</li>
          <li>Build backends that stay fast as data and traffic grow</li>
          <li>Design clean, responsive interfaces people enjoy using</li>
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
          className={`relative rounded-xl overflow-hidden w-full aspect-square mb-4 sm:mb-4 ${
            theme ? "border-[#000000]" : "border-[#444444]"
          }`}
        >
          <Image
            src="/ProfilePic27.png"
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
          href="https://cal.com/lawrence-amlan-gomes/15min?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
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
