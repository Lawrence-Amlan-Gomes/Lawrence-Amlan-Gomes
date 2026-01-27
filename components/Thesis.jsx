"use client";

import { useTheme } from "@/app/hooks/useTheme";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdLocalPrintshop } from "react-icons/md";
import Footer from "./Footer";

export default function Thesis() {
  const { theme } = useTheme();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Thesis.pdf";
    link.download = "Lawrence_Thesis.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    // Opens the PDF in a new tab — most reliable for printing multi-page PDFs
    window.open("/Thesis.pdf", "_blank");
  };

  return (
    <div
      className={`w-full pt-[20%] sm:pt-[13%] ${
        theme ? "bg-[#ffffff] text-[#aaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto mb-[5%] px-[5%] sm:px-0 relative">
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
              Thesis
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
            className={`text-sm sm:text-base sm:text-left text-justify lg:text-md w-full sm:w-[80%] mt-2 ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            My undergraduate thesis completed at Brac University as part of the
            Bachelor of Science in Computer Science program (2022–2025). This
            research develops a system for automatic generation of Multiple
            Choice Questions (MCQs) with answers for Bangla medium SSC-level
            students, incorporating Natural Language Processing (NLP),
            Graph-based Retrieval Augmented Generation (GraphRAG), and Bengali
            text processing to create efficient educational tools for model
            tests and learning.
          </p>
        </div>
        <div className="mb-12 relative">
          {/* PDF Viewer */}
          <div className="w-full min-h-screen flex items-center justify-center px-[5%] sm:px-[10%] md:px-[15%] py-10 overflow-hidden">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
              <div
                className={`
        relative overflow-hidden rounded-2xl 
        w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl
        border-[2px] shadow-2xl
        ${theme ? "border-blue-800" : "border-blue-700"}
        bg-white dark:bg-black
      `}
                style={{
                  aspectRatio: "1 / 1.414", // True A4 portrait ratio (width:height ≈ 1:1.414)
                  height: "90vh", // Limits height to screen
                  maxHeight: "90vh",
                }}
              >
                <iframe
                  src="/Thesis.pdf#view=FitH&toolbar=1&navpanes=0&scrollbar=1"
                  width="100%"
                  height="100%"
                  className="border-0 scale-100 origin-top-left"
                  title="Lawrence's Undergraduate Thesis"
                  allowFullScreen
                  style={{
                    pointerEvents: "auto",
                    overflow: "hidden",
                  }}
                />
              </div>

              {/* Fallback Message */}
              <div className="mt-8 text-center px-4">
                <p
                  className={`text-sm ${
                    theme ? "text-[#888888]" : "text-[#999999]"
                  }`}
                >
                  Can&apos;t view the PDF here?{" "}
                  <a
                    href="/Thesis.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-500"
                  >
                    Open in new tab
                  </a>{" "}
                  or download it.
                </p>
              </div>
            </div>
          </div>
          <div className="fixed right-[5%] md:right-[11%] top-[80px] sm:top-[110px] md:top-[150px] transform -translate-y-1/2 flex flex-row gap-3 md:flex-col sm:gap-4 z-50">
            <Link
              href="/home"
              className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl md:hidden block ${
                theme
                  ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                  : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
              }`}
              title="Back to Home"
            >
              <FaArrowLeft />
            </Link>
            <button
              onClick={handleDownload}
              className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl ${
                theme
                  ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                  : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
              }`}
              title="Download Resume"
            >
              <IoCloudDownloadOutline />
            </button>
            <button
              onClick={handlePrint}
              className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl ${
                theme
                  ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                  : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
              }`}
              title="Print Resume"
            >
              <MdLocalPrintshop />
            </button>
          </div>
          <div className="md:fixed hidden left-[26%] sm:left-[4%] top-[80px] sm:top-[125px] transform -translate-y-1/2 md:flex flex-col gap-3 sm:gap-4 z-50">
            <Link
              href="/home"
              className={`p-2 sm:p-3 rounded-lg text-md sm:text-xl ${
                theme
                  ? "bg-[#ffffff] text-[#0a0a0a] border-[1px] border-blue-800 hover:bg-blue-800 hover:text-[#ffffff]"
                  : "bg-[#1a1a1a] text-[#ebebeb] border-[1px] border-blue-700 hover:bg-blue-700 hover:text-[#ffffff]"
              }`}
              title="Back to Home"
            >
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
