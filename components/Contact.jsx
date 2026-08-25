"use client";
import { useTheme } from "@/app/hooks/useTheme";
import ProjectCardDetailed from "./ProjectCardDetailed";
import projects from "@/app/projects/projects";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import CalEmbed from "./CalEmbed";
import { SiFiverr, SiYoutube } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";

const techStack = [
  ["X", "/XLight.png", "/XDark.png"],
  ["LinkedIn", "/LinkedIn.png", "/LinkedIn.png"],
  ["GitHub", "/gitHubLight.png", "/gitHubDark.png"],
  ["Email", "/gmail.png", "/gmail.png"],
  ["Fiverr", null, null, SiFiverr],
  ["Contra", null, null, FaBriefcase],
  ["YouTube", null, null, SiYoutube],
];

const urls = {
  Email: "email",
  X: "https://x.com/AmlanGomes2001",
  LinkedIn: "https://www.linkedin.com/in/lawrence-amlan-gomes/",
  GitHub: "https://github.com/Lawrence-Amlan-Gomes",
  Fiverr: "https://www.fiverr.com/s/qb8xwdy",
  Contra:
    "https://contra.com/amlan_gomes_233w6dje?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=amlan_gomes_233w6dje",
  YouTube: "https://www.youtube.com/channel/UCQGdRvyFVqexgZWts4O3jsA",
};

export default function Contact() {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#cal-booking") {
      const scrollToCal = () => {
        const el = document.getElementById("cal-booking");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      const t = setTimeout(scrollToCal, 300);
      return () => clearTimeout(t);
    }
  }, []);

  const handleGoogleClick = () => {
    navigator.clipboard.writeText("amlangomes@gmail.com");
    setIsClicked(true);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClicked(false);
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=amlangomes@gmail.com",
        "_blank",
        "noopener,noreferrer"
      );
    }, 2000);
  };

  return (
    <div
      className={`w-full pt-[20%] sm:pt-[13%] ${
        theme ? "bg-[#ffffff] text-[#aaaaaaa]" : "bg-[#000000] text-[#eeeeee]"
      }`}
    >
      <div className="w-full mb-[5%] px-[5%] sm:px-[10%]">
        <div className="flex flex-col items-center text-center mb-10">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            Contact Me
          </h1>
          <p
            className={`text-sm sm:text-base lg:text-md max-w-xl ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            Looking for a custom app, an AI chatbot, or automated scheduling
            for your business? Get in touch via email or connect with me on
            X, LinkedIn, or GitHub — tap any icon below to reach out.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 max-w-4xl mx-auto mb-16">
          {techStack.map((tech) => {
            const Icon = tech[3];
            const isEmail = urls[tech[0]] === "email";
            return (
              <div key={tech[0]} className="relative">
                <a
                  href={isEmail ? "#" : urls[tech[0]]}
                  target={!isEmail ? "_blank" : undefined}
                  rel={!isEmail ? "noopener noreferrer" : undefined}
                  onClick={
                    isEmail
                      ? (e) => {
                          e.preventDefault();
                          handleGoogleClick();
                        }
                      : undefined
                  }
                  onMouseEnter={isEmail ? () => setShowPopup(true) : undefined}
                  onMouseLeave={
                    isEmail
                      ? () => {
                          if (!isClicked) setShowPopup(false);
                        }
                      : undefined
                  }
                  className={`flex flex-col items-center justify-center gap-2 aspect-square p-3 sm:p-5 hover:cursor-pointer rounded-xl border-[1px] transition-colors ${
                    theme
                      ? "border-[#e5e5e5] hover:border-blue-800 hover:bg-[#fafafa]"
                      : "border-[#222222] hover:border-blue-700 hover:bg-[#0a0a0a]"
                  }`}
                >
                  {Icon ? (
                    <Icon
                      size={28}
                      className={theme ? "text-[#333333]" : "text-[#dddddd]"}
                    />
                  ) : (
                    <Image
                      src={theme ? tech[1] : tech[2]}
                      alt={tech[0]}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  )}
                  <span
                    className={`text-[10px] sm:text-xs font-medium ${
                      theme ? "text-[#555555]" : "text-[#aaaaaa]"
                    }`}
                  >
                    {tech[0]}
                  </span>
                </a>
                {isEmail && showPopup && (
                  <div
                    className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1 z-10 ${
                      theme
                        ? "bg-[#ffffff] text-[#333333] border-[1px] border-[#333333]"
                        : "bg-[#080808] text-[#bbbbbb] border-[1px] border-[#bbbbbb]"
                    }`}
                  >
                    {isClicked ? (
                      <>
                        Copied <TiTick />
                      </>
                    ) : (
                      "amlangomes@gmail.com"
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div id="cal-booking" className="mt-24 scroll-mt-24">
          <div
            className={`flex items-center mb-5 gap-4 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              Book a Discovery Call
            </h2>
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
            className={`text-sm sm:text-base lg:text-md mb-6 ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            Pick a time that works for you and let&apos;s chat. Schedule a
            quick 15-minute discovery call directly on my calendar below.
          </p>
          <div
            className={`w-full rounded-lg border-[1px] overflow-hidden ${
              theme ? "border-[#e5e5e5]" : "border-[#222222]"
            }`}
          >
            <CalEmbed theme={theme} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
