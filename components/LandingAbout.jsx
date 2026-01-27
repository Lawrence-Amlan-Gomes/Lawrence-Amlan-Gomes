import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/app/hooks/useTheme";
import Link from "next/link";

export default function LandingAbout() {
  const { theme } = useTheme();

  return (
    <div className="w-full px-[5%] sm:px-[10%] flex flex-row justify-between items-start gap-4 sm:gap-6 mb-[10%]">
      {/* LEFT TEXT SECTION */}
      <div className={`w-[60%] sm:w-[70%] mr-[2.5%]`}>
        <h1
          className={`text-2xl xs:text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-3 text-justify ${
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
          Full-Stack Developer | Building Scalable, User-Centric Web Solutions
        </h2>
        <p
          className={`leading-relaxed mb-6 text-justify text-xs sm:text-base ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          } block sm:hidden`}
        >
          I&apos;m a Full-Stack Developer building intelligent, user-centric web
          apps with React, Next.js, and AI APIs. I deliver responsive, secure,
          and high-performance solutions using Tailwind CSS, Framer Motion,
          Redux, MongoDB, and GraphQL.
        </p>

        <p
          className={`leading-relaxed mb-6 text-justify text-xs sm:text-base ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          } hidden sm:block`}
        >
          I&apos;m a Full-Stack Developer passionate about engineering
          intelligent, high-performance web applications. With deep expertise in
          React and Next.js, I build dynamic, responsive, and SEO-optimized
          frontends styled with Tailwind CSS and animated with Framer Motion for
          immersive user experiences. On the backend, I design scalable systems
          using MongoDB and GraphQL for efficient data flow and API performance.
          I streamline complex state with Redux Toolkit and integrate real-time
          functionality via Firebase. I also implement AI API integrations
          (OpenAI, Hugging Face, etc.) to power smart features like chatbots,
          predictive analytics, content generation, and automation. From secure
          payment gateways to data-driven UX, I deliver innovative, future-ready
          solutions that drive impact.
        </p>

        <p
          className={`font-medium mb-3 text-justify text-xs sm:text-base ${
            theme ? "text-[#444444]" : "text-[#bbbbbb]"
          }`}
        >
          Ready to build your next intelligent, high-performance web app? Let’s
          collaborate.
        </p>

        <ul
          className={`list-disc ml-5 space-y-2 mb-8 text-justify text-xs sm:text-base ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          <li>
            Develop dynamic, type-safe apps with React, Next.js & TypeScript
          </li>
          <li>Boost performance with SSR, lazy loading & code splitting</li>
          <li>Manage complex state efficiently using Redux Toolkit</li>
          <li>Create fluid, engaging animations with Framer Motion</li>
          <li>Build scalable backends with MongoDB and GraphQL</li>
          <li>Integrate AI APIs for chatbots, predictions & automation</li>
          <li>Enable real-time features with Firebase</li>
          <li>Craft responsive, accessible UIs with Tailwind CSS</li>
        </ul>

        <div className="flex gap-4">
          <Link href="/about">
            <div
              className={`px-4 py-2 flex justify-center items-center rounded-md text-sm sm:text-[15px] font-medium hover:cursor-pointer ${
                theme
                  ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                  : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
              }`}
            >
              Experience
            </div>
          </Link>
          <Link
            href="/resume"
            className={`px-5 py-2 rounded-lg text-sm sm:text-[15px] font-semibold transition ${
              theme
                ? "bg-[#0a0a0a] text-[#ffffff] border-[1px] hover:bg-transparent hover:text-black border-[#0a0a0a]"
                : "bg-[#ebebeb] text-[#0a0a0a] border-[1px] hover:bg-transparent hover:text-white border-[#ebebeb]"
            }`}
          >
            Resume
          </Link>
          <Link href="/thesis">
            <div
              className={`px-5 py-2 rounded-lg text-sm sm:text-[15px] font-semibold transition hover:cursor-pointer ${
                theme
                  ? "bg-[#0a0a0a] text-[#ffffff] border-[1px] hover:bg-transparent hover:text-black border-[#0a0a0a]"
                  : "bg-[#ebebeb] text-[#0a0a0a] border-[1px] hover:bg-transparent hover:text-white border-[#ebebeb]"
              }`}
            >
              Thesis
            </div>
          </Link>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-[40%] sm:w-[30%] ml-[2.5%]">
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
              className="absolute top-[-5px] sm:top-2 left-0 sm:left-3 object-contain"
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
