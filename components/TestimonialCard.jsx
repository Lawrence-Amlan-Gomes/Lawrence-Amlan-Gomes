"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialCard({
  clientName,
  urlTitle,
  clientImg,
  clientRole,
  clientQuote,
}) {
  console.log("urlTitle:", urlTitle);
  const { theme } = useTheme();

  return (
    <div
      className={`w-full mx-auto p-8 rounded-2xl hover:cursor-pointer border-[1px] flex flex-col justify-between relative ${
        theme
          ? "bg-[#ffffff] hover:bg-[#fafafa] text-[#aaaaaa] border-blue-800"
          : "bg-[#000000] hover:bg-[#060606] text-[#eeeeee] border-blue-800"
      }`}
    >
      <div className="flex flex-col flex-grow">
        {/* Quote Icon */}
        <FaQuoteLeft
          className={`text-xl mb-4 ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        />

        {/* Quote Text */}
        <p
          className={`lg:text-md text-sm leading-relaxed text-justify mb-6 ${
            theme ? "text-[#666666]" : "text-[#aaaaaa]"
          }`}
        >
          {clientQuote}
        </p>
      </div>

      {/* Author + View Project Section */}
      <div className="mt-auto">
        <div className="flex items-center gap-4 mb-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src={clientImg}
              alt={clientName}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3
              className={`font-semibold lg:text-md text-sm ${
                theme ? "text-[#333333]" : "text-[#dddddd]"
              }`}
            >
              {clientName}
            </h3>
            <p
              className={`text-sm ${theme ? "text-[#666666]" : "text-[#aaaaaa]"}`}
            >
              {clientRole}
            </p>
          </div>
        </div>

        {/* Small "View Project" link */}
        <Link
          href={`/project/${urlTitle}`}
          className={`text-xs sm:text-sm font-medium underline-offset-4 transition-colors ${
            theme
              ? "text-blue-600 hover:text-blue-700"
              : "text-blue-700 hover:text-blue-800"
          }`}
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}