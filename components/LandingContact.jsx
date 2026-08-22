"use client";
import { useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { SiFiverr, SiYoutube } from "react-icons/si";
import { FaBriefcase } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.10 } },
};

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

export default function LandingContact() {
  const { theme } = useTheme();
  const [showPopup, setShowPopup] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
    <div className="px-[5%] sm:px-[10%] mb-[2%] pb-[5%] w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-8"
      >
        <motion.div
          variants={fadeUp}
          className={`flex items-center mb-5 gap-4 ${
            theme ? "text-[#333333]" : "text-[#dddddd]"
          }`}
        >
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
              theme ? "text-[#333333]" : "text-[#dddddd]"
            }`}
          >
            Let&apos;s Build{" "}
            <span className={theme ? "text-blue-800" : "text-blue-500"}>
              Something Great
            </span>
          </h1>
          <div
            className="flex-grow h-[1px]"
            style={{
              backgroundImage: theme
                ? "linear-gradient(to right, rgba(51, 51, 51, 0), rgba(51, 51, 51, 1))"
                : "linear-gradient(to right, rgba(221, 221, 221, 0), rgba(221, 221, 221, 0.4))",
            }}
          />
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row mt-2 gap-4 sm:gap-0">
          <p
            className={`text-base lg:text-md w-full sm:w-[60%] ${
              theme ? "text-[#666666]" : "text-[#aaaaaa]"
            }`}
          >
            Have a project in mind? I&apos;m currently available for freelance work and new client projects. Reach out directly — I respond within 24 hours.
          </p>
          <div className="w-full sm:w-[40%] flex justify-start pl-0 sm:pl-8 items-center">
            {showPopup && (
              <div
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
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
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 relative"
      >
        {techStack.map((tech) => {
          const Icon = tech[3];
          return (
          <motion.a
            key={tech[0]}
            variants={fadeUp}
            whileHover={{ y: -3, scale: 1.04 }}
            transition={{ duration: 0.2 }}
            href={urls[tech[0]] === "email" ? "#" : urls[tech[0]]}
            target={urls[tech[0]] !== "email" ? "_blank" : undefined}
            rel={urls[tech[0]] !== "email" ? "noopener noreferrer" : undefined}
            onClick={
              urls[tech[0]] === "email"
                ? (e) => {
                    e.preventDefault();
                    handleGoogleClick();
                  }
                : undefined
            }
            onMouseEnter={
              urls[tech[0]] === "email"
                ? () => setShowPopup(true)
                : undefined
            }
            onMouseLeave={
              urls[tech[0]] === "email"
                ? () => {
                    if (!isClicked) setShowPopup(false);
                  }
                : undefined
            }
            className={`flex flex-col items-center justify-center p-4 sm:p-8 gap-2 hover:cursor-pointer rounded-lg border-[1px] ${
              theme
                ? "border-blue-800 hover:bg-[#fafafa] hover:shadow-md hover:shadow-blue-900/10"
                : "border-blue-700 hover:bg-[#080808] hover:shadow-md hover:shadow-blue-500/10"
            }`}
          >
            {Icon ? (
              <Icon size={28} />
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
                theme ? "text-[#666666]" : "text-[#888888]"
              }`}
            >
              {tech[0]}
            </span>
          </motion.a>
          );
        })}
      </motion.div>

      <div className="flex justify-start mt-8">
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
          <Link href="/contact">
            <div
              className={`px-4 py-2 rounded-md text-sm sm:text-[15px] font-medium hover:cursor-pointer ${
                theme
                  ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                  : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
              }`}
            >
              Stay Connected
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
