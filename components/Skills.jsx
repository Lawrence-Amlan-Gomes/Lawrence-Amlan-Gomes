"use client";
import Image from "next/image";
import { useTheme } from "@/app/hooks/useTheme";
import skillGroups from "@/app/about/skills";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <div className="mt-10 mb-10">
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl w-full font-bold mb-6 ${
          theme ? "text-[#333333]" : "text-[#dddddd]"
        }`}
      >
        Skills
      </h2>

      {skillGroups.map((group) => (
        <div key={group.category} className="mb-6 last:mb-0">
          <h3
            className={`text-sm sm:text-base font-semibold mb-3 ${
              theme ? "text-[#555555]" : "text-[#bbbbbb]"
            }`}
          >
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {group.items.map(([name, lightIcon, darkIcon]) => {
              const icon = theme ? lightIcon : darkIcon;
              return (
                <div
                  key={name}
                  className={`flex items-center gap-2 px-4 py-2 sm:py-3 rounded-lg border-[1px] ${
                    theme ? "border-blue-800" : "border-blue-700"
                  }`}
                >
                  {icon && (
                    <Image
                      src={icon}
                      alt={name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                  <span
                    className={`text-xs sm:text-sm ${
                      theme ? "text-[#444444]" : "text-[#cccccc]"
                    }`}
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
