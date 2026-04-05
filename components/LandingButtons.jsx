import { useTheme } from "@/app/hooks/useTheme";
import Link from "next/link";

export default function LandingButtons() {
  const { theme } = useTheme();

  const buttons = [
    {
      label: "Experience",
      isPrimary: true,
      href: "/about",
    },
    {
      label: "Resume",
      isPrimary: false,
      href: "/resume",
    },
    {
      label: "Published Paper",
      isPrimary: false,
      href: "/thesis",
    },
    // You can easily add more later:
    // {
    //   label: "Projects",
    //   isPrimary: false,
    //   href: "/projects",
    // },
  ];

  return (
    <div className="w-full px-[5%] sm:px-[10%] flex flex-row flex-nowrap sm:flex-wrap overflow-x-auto gap-3 sm:gap-6 mb-[10%] scrollbar-hide mt-4">
      {buttons.map((btn, index) => (
        <Link key={index} href={btn.href}>
          {btn.isPrimary ? (
            <div
              className={`px-3 py-1.5 sm:px-4 sm:py-2 flex justify-center items-center rounded-md text-xs sm:text-sm sm:text-[15px] font-medium hover:cursor-pointer flex-shrink-0 whitespace-nowrap ${
                theme
                  ? "bg-blue-800 text-[#ffffff] hover:bg-white border-[1px] border-blue-800 hover:text-blue-800"
                  : "bg-blue-700 text-[#ffffff] hover:bg-black border-[1px] border-blue-600 hover:text-blue-600"
              }`}
            >
              {btn.label}
            </div>
          ) : (
            <div
              className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm sm:text-[15px] font-semibold transition hover:cursor-pointer flex-shrink-0 whitespace-nowrap ${
                theme
                  ? "bg-[#0a0a0a] text-[#ffffff] border-[1px] hover:bg-transparent hover:text-black border-[#0a0a0a]"
                  : "bg-[#ebebeb] text-[#0a0a0a] border-[1px] hover:bg-transparent hover:text-white border-[#ebebeb]"
              }`}
            >
              {btn.label}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}
