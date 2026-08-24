"use client";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import projects from "@/app/projects/projects";
import Footer from "./Footer";
import ProjectCardDetailed from "./ProjectCardDetailed";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "saas", label: "SaaS" },
  { key: "clients-project", label: "Client Projects" },
  { key: "hobby-project", label: "Hobby Projects" },
];

export default function Projects() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const measureScrollbar = () => {
      const el = document.getElementById("app-scroll-root");
      if (el) setScrollbarWidth(el.offsetWidth - el.clientWidth);
    };
    measureScrollbar();
    window.addEventListener("resize", measureScrollbar);
    return () => window.removeEventListener("resize", measureScrollbar);
  }, []);

  // Sort projects by date (latest to oldest)
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const filteredProjects =
    activeFilter === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.type === activeFilter);

  return (
    <div
      className={`w-full pt-[150px] md:pt-[160px] ${
        theme ? "bg-[#ffffff] text-[#aaaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div
        style={{ right: scrollbarWidth }}
        className={`fixed left-0 top-14 sm:top-14 md:top-16 z-40 border-b-[1px] bg-opacity-65 backdrop-blur-xl ${
          theme
            ? "bg-[#ffffff] border-[#dddddd]"
            : "bg-[#000000] border-[#222222]"
        }`}
      >
        <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`shrink-0 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
                activeFilter === filter.key
                  ? theme
                    ? "bg-blue-800 text-white border-blue-800"
                    : "bg-blue-700 text-white border-blue-700"
                  : theme
                  ? "text-[#333333] border-[#dddddd] hover:bg-[#f2f2f2]"
                  : "text-[#dddddd] border-[#333333] hover:bg-[#111111]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mb-[5%] px-[5%] sm:px-0">
        <div className="mb-8">
          <div
            className={`flex items-center mb-5 gap-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            <h1
              className={`
             text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
               theme ? "text-[#333333]" : "text-[#dddddd]"
             }`}
            >
              My Projects
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
            Everything I&apos;ve built — SaaS products, client work, and
            personal projects — each one solving a real problem for someone,
            from the most recent to the very first.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCardDetailed
              key={project.id}
              urlTitle={project.urlTitle}
              title={project.title}
              img={project.img}
              liveLink={project.liveLink}
              shortDescription={project.shortDescription}
              techStack={project.techStack}
              gitLink={project.gitLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
