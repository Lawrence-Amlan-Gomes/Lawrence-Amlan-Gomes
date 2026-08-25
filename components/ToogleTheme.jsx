"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

function ToogleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center items-center h-full">
      <button
        type="button"
        role="switch"
        aria-checked={!theme}
        aria-label={theme ? "Switch to dark mode" : "Switch to light mode"}
        onClick={() => setTheme((prev) => !prev)}
        className={`relative lg:h-[26px] lg:w-[50px] sm:h-[24px] sm:w-[46px] h-[22px] w-[42px] rounded-full border-[1px] transition-colors duration-300 ${
          theme
            ? "bg-[#f0f0f0] border-[#d5d5d5]"
            : "bg-[#141414] border-[#2e2e2e]"
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className={`absolute top-[2px] flex items-center justify-center rounded-full lg:h-[20px] lg:w-[20px] sm:h-[18px] sm:w-[18px] h-[16px] w-[16px] ${
            theme ? "bg-blue-800 text-white" : "bg-blue-500 text-[#0a0a0a]"
          }`}
          style={theme ? { left: 2 } : { right: 2 }}
        >
          {theme ? (
            <FiSun className="text-[11px] sm:text-xs" />
          ) : (
            <FiMoon className="text-[11px] sm:text-xs" />
          )}
        </motion.div>
      </button>
    </div>
  );
}

export default ToogleTheme;
