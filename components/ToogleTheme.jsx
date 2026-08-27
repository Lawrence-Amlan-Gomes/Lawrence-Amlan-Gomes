"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

function ToogleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center items-center h-full">
      <button
        type="button"
        aria-label={theme ? "Switch to dark mode" : "Switch to light mode"}
        onClick={() => setTheme((prev) => !prev)}
        className={`flex items-center justify-center rounded-sm border-[1px] transition-colors duration-300 lg:h-[36px] lg:w-[36px] sm:h-[32px] sm:w-[32px] h-[28px] w-[28px] ${
          theme
            ? "bg-[#f0f0f0] border-[#d5d5d5] text-[#333333]"
            : "bg-[#141414] border-[#2e2e2e] text-[#eeeeee]"
        }`}
      >
        {theme ? (
          <FiMoon className="text-sm sm:text-base lg:text-lg" />
        ) : (
          <FiSun className="text-sm sm:text-base lg:text-lg" />
        )}
      </button>
    </div>
  );
}

export default ToogleTheme;
