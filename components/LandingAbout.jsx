import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";

export default function LandingAbout() {
  const { theme } = useTheme();

  return (
    <div className="w-full px-[5%] sm:px-[10%] flex flex-row justify-between items-start gap-4 sm:gap-6 md:mb-0 mb-[5%]">
      {/* LEFT TEXT SECTION */}
      <div className="w-[60%] mr-[2.5%]">
        <h1
          className={`text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold mb-3 text-justify ${
            theme ? "text-[#0a0a0a]" : "text-[#ebebeb]"
          }`}
        >
          👋 Hi, <br /> I&apos;m Lawrence.
        </h1>

        <h2
          className={`text-xs xs:text-sm sm:text-xl font-semibold mb-4 text-justify ${
            theme ? "text-[#333333]" : "text-[#cccccc]"
          }`}
        >
          Full-Stack Developer | Shipping Production-Ready Web Apps End-to-End
        </h2>

        {/* Desktop bio */}
        <p
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
        </p>

        {/* Mobile bio */}
        <p
          className={`leading-relaxed mb-4 text-justify text-xs sm:hidden block ${
            theme ? "text-[#555555]" : "text-[#aaaaaa]"
          }`}
        >
          Full-Stack Developer shipping production apps end-to-end. Next.js ·
          TypeScript · MongoDB · Redis · Tailwind · AWS S3. Paddle payments,
          CI/CD, and cloud deployments.
        </p>

        {/* Desktop CTA */}
        <p
          className={`font-medium mb-3 text-justify text-xs hidden sm:block sm:text-base ${
            theme ? "text-[#444444]" : "text-[#bbbbbb]"
          }`}
        >
          Looking to build your next production web app? Let&apos;s ship
          something great together.
        </p>

        {/* Desktop bullet list */}
        <ul
          className={`list-disc ml-5 space-y-2 mb-8 text-justify xl:text-lg text-xs sm:text-base hidden lg:block ${
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

        {/* Mobile: horizontally scrollable pill list */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-hide">
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
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-[40%] ml-[2.5%]">
        {/* Profile image */}
        <div
          className={`relative rounded-xl overflow-hidden w-full aspect-[3/4] mb-4 sm:mb-6 ${
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
      </div>
    </div>
  );
}
