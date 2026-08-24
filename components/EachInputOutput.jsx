"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EachInputOutput({ pair, isLast, isLoading }) {
  const { theme } = useTheme();

  // Function to process text and make **text** bold
  const renderTextWithBold = (text) => {
    const parts = [];
    const regex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const before = text.slice(lastIndex, match.index);
      const boldText = match[1];
      if (before) parts.push({ text: before, isBold: false });
      parts.push({ text: boldText, isBold: true });
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), isBold: false });
    }

    return parts.map((part, index) => (
      <span key={index} className={part.isBold ? "font-semibold" : ""}>
        {part.text}
      </span>
    ));
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-end">
        <div
          className={`max-w-[82%] rounded-2xl rounded-br-md px-3.5 py-2 text-[13px] leading-relaxed ${
            theme ? "bg-blue-800 text-white" : "bg-blue-700 text-white"
          }`}
        >
          {renderTextWithBold(pair[0])}
        </div>
      </div>

      <div className="flex items-end gap-2">
        <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
          <Image
            src="/ProfilePic27.png"
            alt="Lawrence"
            fill
            className="object-cover"
          />
        </div>
        <div
          className={`max-w-[82%] rounded-2xl rounded-bl-md px-3.5 py-2 text-[13px] leading-relaxed ${
            theme ? "bg-[#f1f1f1] text-[#111111]" : "bg-[#161616] text-[#e5e5e5]"
          }`}
        >
          {isLast && isLoading ? (
            <div className="flex items-center gap-1.5 py-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 bg-current rounded-full inline-block"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.9,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          ) : (
            pair[1]
              .split("[/n]")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-2" : ""}>
                  {renderTextWithBold(paragraph)}
                </p>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
