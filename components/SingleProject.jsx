"use client";
import { useTheme } from "@/app/hooks/useTheme";
import projects from "@/app/projects/projects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from "./Footer";

export default function SingleProject({ urlTitle }) {
  const { theme } = useTheme();

  const project = projects.find((p) => p.urlTitle === urlTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div
      className={`w-full pt-[20%] sm:pt-[13%] ${
        theme ? "bg-[#ffffff] text-[#aaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mb-[5%] px-[5%] sm:px-0 relative">
        {/* Title */}
        <div className="mb-12">
          <div
            className={`flex items-center mb-5 gap-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl tracking-wide font-bold mb-2 ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              {project.title}
            </h1>
            <div
              className="flex-grow h-[1px]"
              style={{
                backgroundImage: theme
                  ? "linear-gradient(to right, rgba(51, 51, 51, 0), rgba(51, 51, 51, 1))"
                  : "linear-gradient(to right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.4))",
              }}
            />
          </div>
          <p
            className={`text-sm sm:text-base lg:text-md mt-2 ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            {project.longDescription}
          </p>
        </div>

        {/* Hero image — 16:9 */}
        <div className="mb-12">
          <div
            className={`relative w-full aspect-video overflow-hidden border-[1px] rounded-2xl ${
              theme ? "border-blue-800" : "border-blue-700"
            }`}
          >
            <Image
              src={project.img[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-12">
          <h2
            className={`text-2xl sm:text-3xl tracking-wide font-semibold mb-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.techStack.map(([name, src]) => (
              <div
                key={name}
                className={`flex flex-col items-center p-2.5 sm:p-3 lg:p-3.5 rounded-lg border-[1px] ${
                  theme ? "border-blue-800" : "border-blue-700"
                }`}
              >
                <Image
                  src={src}
                  alt={name}
                  width={24}
                  height={24}
                  className="object-contain mb-1.5 w-[18px] h-[18px] sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                />
                <span className="text-[10px] sm:text-xs text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features — all images 16:9 */}
        {project.feaTures.map((feature, index) => (
          <div key={index} className="mb-12">
            <h2
              className={`text-2xl sm:text-3xl tracking-wide font-semibold mb-4 ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              {feature.title}
            </h2>
            {feature.description.map((desc, descIndex) => (
              <div key={descIndex} className="mb-8">
                {desc.text.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-xs sm:text-sm lg:text-base mb-2 ${
                      theme ? "text-[#666666]" : "text-[#aaaaaa]"
                    }`}
                  >
                    {paragraph.replace(/^ paragraph \d+ :/, "")}
                  </p>
                ))}
                <ul className="list-disc pl-5 mb-4">
                  {desc.listItems.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-xs sm:text-sm lg:text-base ${
                        theme ? "text-[#666666]" : "text-[#aaaaaa]"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  {desc.images.map((imgSrc, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative w-full aspect-video overflow-hidden border-[1px] rounded-2xl ${
                        theme ? "border-blue-800" : "border-blue-700"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${feature.title} image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Floating action buttons — right */}
        <div className="fixed right-[5%] md:right-[11%] top-[80px] sm:top-[110px] md:top-[150px] transform -translate-y-1/2 flex flex-row gap-3 md:flex-col sm:gap-4 z-50">
          <Link
            href="/projects"
            className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl md:hidden block ${
              theme
                ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
            }`}
            title="Back to Projects"
          >
            <FaArrowLeft />
          </Link>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl ${
              theme
                ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
            }`}
            title="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
          {project.gitLink && (
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl ${
                theme
                  ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                  : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
              }`}
              title="GitHub"
            >
              <FaGithub />
            </a>
          )}
        </div>

        {/* Floating back button — left (desktop) */}
        <div className="md:fixed hidden left-[26%] sm:left-[4%] top-[80px] sm:top-[125px] transform -translate-y-1/2 md:flex flex-col gap-3 sm:gap-4 z-50">
          <Link
            href="/projects"
            className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl ${
              theme
                ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
            }`}
            title="Back to Projects"
          >
            <FaArrowLeft />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
