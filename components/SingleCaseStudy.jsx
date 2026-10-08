"use client";
import { useTheme } from "@/app/hooks/useTheme";
import projects from "@/app/projects/projects";
import { getCaseStudy } from "@/app/case-studies/case-studies";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./Footer";

export default function SingleCaseStudy({ urlTitle }) {
  const { theme } = useTheme();

  const caseStudy = getCaseStudy(urlTitle);
  const project = projects.find((p) => p.urlTitle === urlTitle);

  if (!caseStudy || !project) {
    return <div>Case study not found</div>;
  }

  const heading = theme ? "text-[#333333]" : "text-[#dddddd]";
  const body = theme ? "text-[#666666]" : "text-[#aaaaaa]";
  const border = theme ? "border-blue-800" : "border-blue-700";

  return (
    <div
      className={`w-full pt-[20%] sm:pt-[13%] ${
        theme ? "bg-[#ffffff] text-[#aaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mb-[5%] px-[5%] sm:px-0 relative">
        <div className="mb-8">
          <p className={`text-sm font-medium mb-2 ${theme ? "text-blue-700" : "text-blue-500"}`}>
            {caseStudy.industry} · {caseStudy.client}
          </p>
          <div className={`flex items-center mb-5 gap-4 ${heading}`}>
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl tracking-wide font-bold mb-2 ${heading}`}
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
          <p className={`text-sm sm:text-base lg:text-md mt-2 ${body}`}>
            {caseStudy.summary}
          </p>
          <p className={`text-xs sm:text-sm mt-3 ${body}`}>
            Timeline: {caseStudy.timeline}
          </p>
        </div>

        <div className="mb-12">
          <div
            className={`relative w-full aspect-video overflow-hidden border-[1px] rounded-2xl ${border}`}
          >
            <Image
              src={caseStudy.heroImg}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className={`text-2xl sm:text-3xl tracking-wide font-semibold mb-4 ${heading}`}>
            The Challenge
          </h2>
          <p className={`text-xs sm:text-sm lg:text-base ${body}`}>
            {caseStudy.challenge}
          </p>
        </div>

        <div className="mb-12">
          <h2 className={`text-2xl sm:text-3xl tracking-wide font-semibold mb-4 ${heading}`}>
            The Approach
          </h2>
          <div className="space-y-6">
            {caseStudy.approach.map((step, i) => (
              <div key={i} className={`p-4 sm:p-5 rounded-lg border-[1px] ${border}`}>
                <h3 className={`text-base sm:text-lg font-semibold mb-2 ${heading}`}>
                  {step.title}
                </h3>
                <p className={`text-xs sm:text-sm lg:text-base ${body}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className={`text-2xl sm:text-3xl tracking-wide font-semibold mb-4 ${heading}`}>
            The Results
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {caseStudy.results.map((result, i) => (
              <li key={i} className={`text-xs sm:text-sm lg:text-base ${body}`}>
                {result}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 text-sm mb-4">
          <Link
            href={`/project/${project.urlTitle}`}
            className={`px-4 py-2 rounded-md border-[1px] ${
              theme
                ? "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                : "border-blue-700 text-blue-500 hover:bg-blue-700 hover:text-white"
            }`}
          >
            View Full Project Details
          </Link>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-md border-[1px] ${
              theme
                ? "border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white"
                : "border-blue-700 text-blue-500 hover:bg-blue-700 hover:text-white"
            }`}
          >
            <FaExternalLinkAlt className="text-xs" /> Live Demo
          </a>
        </div>

        <Link
          href="/case-studies"
          className={`inline-flex items-center gap-2 text-sm mt-4 ${
            theme ? "text-blue-700 hover:text-blue-800" : "text-blue-500 hover:text-blue-400"
          }`}
        >
          <FaArrowLeft className="text-xs" /> Back to Case Studies
        </Link>
      </div>
      <Footer />
    </div>
  );
}
