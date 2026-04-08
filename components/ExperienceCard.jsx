import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";

// Function to calculate duration from date range
const calculateDuration = (duration) => {
  const [startDate, endDate] = duration.split(" - ");

  if (endDate === "Present") {
    const start = new Date(startDate);
    const now = new Date();
    const months =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth()) +
      1;

    if (months < 1) return "Less than 1 month";
    if (months === 1) return "1 month";
    if (months < 12) return `${months} months`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 1) {
      return remainingMonths === 0
        ? "1 year"
        : `1 year ${remainingMonths} months`;
    }
    return remainingMonths === 0
      ? `${years} years`
      : `${years} years ${remainingMonths} months`;
  } else {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;

    if (months < 1) return "Less than 1 month";
    if (months === 1) return "1 month";
    if (months < 12) return `${months} months`;

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 1) {
      return remainingMonths === 0
        ? "1 year"
        : `1 year ${remainingMonths} months`;
    }
    return remainingMonths === 0
      ? `${years} years`
      : `${years} years ${remainingMonths} months`;
  }
};

export default function ExperienceCard({ exp }) {
  const { theme } = useTheme();

  return (
    <div
      className={`flex w-full max-w-3xl mx-auto transition-all duration-300`}
    >
      {/* Left icon */}
      <div className="flex w-[15%] sm:w-[10%] items-start justify-center relative">
        <div
          className={`relative w-full aspect-[1/1] z-10 flex items-center justify-center p-2 hover:cursor-pointer rounded-lg border-[1px] ${
            theme ? "border-blue-800 bg-white" : "border-blue-700 bg-black"
          }`}
        >
          <Image
            src={exp.img || "/React.png"}
            alt={exp.companyName}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        {exp.id != 1 && (
          <div
            className={`absolute h-full w-[1px] z-0 ${
              theme ? "bg-blue-800" : "bg-blue-700"
            }`}
          ></div>
        )}
      </div>

      {/* Right content */}
      <div className="w-[85%] sm:w-[90%] px-4 sm:px-6 pt-3 sm:pt-5 pb-10">
        <h3
          className={`text-lg xs:text-xl sm:text-2xl font-bold mb-2 ${
            theme ? "text-[#333333]" : "text-[#dddddd]"
          }`}
        >
          {exp.title}
        </h3>

        {/* Company & Duration */}
        <div
          className={`flex justify-between mb-2 text-xs sm:text-base  ${
            theme ? "text-[#555555]" : "text-[#bbbbbb]"
          }`}
        >
          <div className="font-medium pr-2">{exp.companyName}</div>
          <div className="italic">
            {exp.duration} · {calculateDuration(exp.duration)}
          </div>
        </div>

        {/* Challenge, Action, Result */}
        {exp.paragraphs.map(([label, text], index) => (
          <div key={index} className="mt-4 mb-5">
            <h4
              className={`${
                theme ? "text-[#222222]" : "text-[#cccccc]"
              }  font-semibold text-base sm:text-lg mb-1`}
            >
              {label}:
            </h4>
            <p
              className={`${
                theme ? "text-[#444444]" : "text-[#aaaaaa]"
              } text-justify sm:text-left  leading-relaxed text-xs sm:text-base`}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
