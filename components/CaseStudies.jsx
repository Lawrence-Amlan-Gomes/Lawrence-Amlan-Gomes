"use client";
import { useTheme } from "@/app/hooks/useTheme";
import projects from "@/app/projects/projects";
import caseStudies from "@/app/case-studies/case-studies";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function CaseStudies() {
  const { theme } = useTheme();

  const entries = caseStudies
    .map((cs) => ({
      ...cs,
      project: projects.find((p) => p.urlTitle === cs.projectUrlTitle),
    }))
    .filter((entry) => entry.project);

  return (
    <div
      className={`w-full pt-[20%] sm:pt-[13%] ${
        theme ? "bg-[#ffffff] text-[#aaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mb-[5%] px-[5%] sm:px-0">
        <div className="mb-8">
          <div
            className={`flex items-center mb-5 gap-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              Case Studies
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
            className={`text-sm sm:text-base lg:text-md w-full sm:w-[70%] mt-2 ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            A closer look at real client work — the problem going in, how I
            approached it, and what shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {entries.map((entry) => (
            <Link
              key={entry.projectUrlTitle}
              href={`/case-study/${entry.projectUrlTitle}`}
              className={`flex flex-col rounded-lg overflow-hidden border-[1px] transition-shadow ${
                theme
                  ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#333333] border-blue-800 hover:shadow-lg hover:shadow-blue-900/10"
                  : "bg-[#000000] hover:bg-[#0a0a0a] text-[#dddddd] border-blue-800 hover:shadow-lg hover:shadow-blue-500/10"
              }`}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={entry.heroImg}
                  alt={entry.project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <p
                  className={`text-xs font-medium mb-1 ${
                    theme ? "text-blue-700" : "text-blue-500"
                  }`}
                >
                  {entry.industry}
                </p>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                  {entry.project.title}
                </h2>
                <p
                  className={`text-sm ${
                    theme ? "text-[#666666]" : "text-[#aaaaaa]"
                  }`}
                >
                  {entry.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
