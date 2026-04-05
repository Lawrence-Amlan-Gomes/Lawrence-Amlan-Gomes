import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/hooks/useTheme";
import Link from "next/link";

export default function LandingAbout() {
  const { theme } = useTheme();

  return (
    <div className="w-full px-[5%] sm:px-[10%] flex flex-row justify-between items-start gap-4 sm:gap-6 md:mb-0 mb-[5%]">
      {/* LEFT TEXT SECTION */}
      <div className={`w-[50%] sm:w-[70%] mr-[2.5%]`}>
        <h1
          className={`text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-3 text-justify ${
            theme ? "text-[#0a0a0a]" : "text-[#ebebeb]"
          }`}
        >
          👋 Hi, <br /> I&apos;m Lawrence.
        </h1>

        <h2
          className={`text-sm xs:text-base sm:text-xl font-semibold mb-4 text-justify ${
            theme ? "text-[#333333]" : "text-[#cccccc]"
          }`}
        >
          Full-Stack Developer | Shipping Production-Ready Web Apps End-to-End
        </h2>

        {/* Desktop bio */}
        <p
          className={`leading-relaxed mb-6 text-justify text-xs hidden sm:block sm:text-base ${
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
        </p>

        {/* Mobile bio */}
        <p
          className={`leading-relaxed mb-6 text-justify text-xs sm:hidden block sm:text-base ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          }`}
        >
          I&apos;m a Full-Stack Developer building production-ready web apps
          end-to-end. Stack: Next.js, TypeScript, MongoDB, Redis, Tailwind CSS,
          AWS S3. I&apos;ve shipped SaaS products and client projects with
          Paddle payments, CI/CD pipelines, and cloud deployments — fast, clean,
          and scalable.
        </p>

        <p
          className={`font-medium mb-3 text-justify text-xs hidden sm:block sm:text-base ${
            theme ? "text-[#444444]" : "text-[#bbbbbb]"
          }`}
        >
          Looking to build your next production web app? Let&apos;s ship
          something great together.
        </p>

        <ul
          className={`list-disc ml-5 space-y-2 mb-8 text-justify text-xs sm:text-base hidden sm:block ${
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
        </ul>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-[50%] sm:w-[30%] ml-[2.5%]">
        {/* RIGHT IMAGE SECTION */}
        <div
          className={`relative rounded-xl overflow-hidden h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[350px] 2xl:h-[400px] mb-6 ${
            theme ? "border-[#000000]" : "border-[#444444]"
          }`}
        >
          <Image
            src="/22.jpg"
            alt="Profile picture"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* NEW UNIVERSITY SECTION */}
        <a
          className="h-full w-full"
          href="https://www.bracu.ac.bd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`relative rounded-xl h-[300px] xs:h-[300px] sm:h-[300px] lg:h-[250px] 2xl:h-[300px] border ${
              theme
                ? "hover:bg-[#f8f8f8] border-[#888888]"
                : "border-[#333333] hover:bg-[#080808]"
            }`}
          >
            <Image
              src="/graduationIcon.png"
              alt="Graduation Icon"
              width={32}
              height={32}
              className="absolute top-[3px] sm:top-2 left-2 sm:left-3 object-contain"
            />
            <div className="absolute inset-0 p-4 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center mb-4">
                <Image
                  src={theme ? "/bracuIconLight.png" : "/bracuIconDark.png"}
                  alt="Brac University Icon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <p
                  className={`text-xs sm:text-[15px] 2xl:text-[18px] font-medium mb-2 text-center ${
                    theme ? "text-[#333333]" : "text-[#cccccc]"
                  }`}
                >
                  Bachelor of Science in Computer Science (2022-2025)
                </p>
                <p
                  className={`text-[10px] sm:text-[14px] 2xl:text-[16px] text-center ${
                    theme ? "text-[#555555]" : "text-[#aaaaaa]"
                  }`}
                >
                  Brac University | Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
