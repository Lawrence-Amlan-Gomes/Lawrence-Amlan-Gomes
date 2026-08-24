"use client";
import Link from "next/link";
import { useTheme } from "@/app/hooks/useTheme";
import { FaLinkedin, FaGithub, FaBriefcase } from "react-icons/fa";
import { SiGmail, SiFiverr, SiYoutube } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

function Footer() {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  const handleGoogleClick = () => {
    // Copy email to clipboard
    navigator.clipboard.writeText("amlangomes@gmail.com");
    // Show popup
    setShowPopup(true);
    // Hide popup and navigate after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=amlangomes@gmail.com",
        "_blank",
        "noopener,noreferrer"
      );
    }, 2000);
  };

  return (
    <>
      <footer
        className={`w-full px-[5%] sm:px-[10%] py-[3%] bg-opacity-50 relative ${
          theme
            ? "bg-[#ffffff] border-t border-[#dddddd]"
            : "bg-[#000000] border-t border-[#222222]"
        }`}
      >
        <div className="w-full mx-auto flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex flex-col items-center gap-0.5 text-center sm:flex-row sm:items-center sm:gap-2 sm:text-left">
            <span
              className={`text-base sm:text-lg font-bold ${
                theme ? "text-[#0a0a0a]" : "text-[#ebebeb]"
              }`}
            >
              Lawrence
            </span>
            <span className="hidden sm:inline text-xs sm:text-sm">|</span>
            <span
              className={`text-xs sm:text-sm ${
                theme ? "text-[#555555]" : "text-[#cccccc]"
              }`}
            >
              <Link href="/login" className="no-underline hover:no-underline">
                ©
              </Link>{" "}
              {new Date().getFullYear()} Lawrence. All rights reserved.
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:flex-nowrap">
              <a
                href="https://x.com/AmlanGomes2001"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-xl ${
                  theme
                    ? "text-[#0a0a0a] hover:text-blue-800"
                    : "text-[#ebebeb] hover:text-blue-600"
                }`}
              >
                <BsTwitterX />
              </a>
              <a
                href="https://www.linkedin.com/in/lawrence-amlan-gomes/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-xl ${
                  theme
                    ? "text-[#0a0a0a] hover:text-blue-800"
                    : "text-[#ebebeb] hover:text-blue-600"
                }`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Lawrence-Amlan-Gomes"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-xl ${
                  theme
                    ? "text-[#0a0a0a] hover:text-blue-800"
                    : "text-[#ebebeb] hover:text-blue-600"
                }`}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.fiverr.com/s/qb8xwdy"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-xl ${
                  theme
                    ? "text-[#0a0a0a] hover:text-blue-800"
                    : "text-[#ebebeb] hover:text-blue-600"
                }`}
              >
                <SiFiverr />
              </a>
              <a
                href="https://contra.com/amlan_gomes_233w6dje?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=amlan_gomes_233w6dje"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-xl ${
                  theme
                    ? "text-[#0a0a0a] hover:text-blue-800"
                    : "text-[#ebebeb] hover:text-blue-600"
                }`}
              >
                <FaBriefcase />
              </a>
              <a
                href="https://www.youtube.com/channel/UCQGdRvyFVqexgZWts4O3jsA"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-xl ${
                  theme
                    ? "text-[#0a0a0a] hover:text-blue-800"
                    : "text-[#ebebeb] hover:text-blue-600"
                }`}
              >
                <SiYoutube />
              </a>
              <div className="relative">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleGoogleClick();
                  }}
                  className={`text-lg sm:text-xl ${
                    theme
                      ? "text-[#0a0a0a] hover:text-blue-800"
                      : "text-[#ebebeb] hover:text-blue-600"
                  }`}
                >
                  <SiGmail />
                </a>
                {showPopup && (
                  <div
                    className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium px-2 py-1 rounded-md border-[1px] ${
                      theme
                        ? "bg-white text-[#333333] border-[#dddddd]"
                        : "bg-[#0a0a0a] text-[#dddddd] border-[#222222]"
                    }`}
                  >
                    <div className="flex justify-center items-center gap-1">
                      Copied <TiTick />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Link href="/contact">
              <div
                className={`px-4 py-2 rounded-md text-xs sm:text-[15px] font-medium hover:cursor-pointer whitespace-nowrap ${
                  theme
                    ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                    : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
                }`}
              >
                Stay Connected
              </div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;