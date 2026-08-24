"use client";

import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/hooks/useTheme";

export default function PromptInput({
  myText,
  setMyText,
  getResponse,
  setIsTyping,
  aiResponse,
}) {
  const [iAmThinking, setIAmThinking] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIAmThinking(false);
  }, [aiResponse]);

  const handleSend = () => {
    if (myText !== "") {
      setIAmThinking(true);
      getResponse();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`flex items-end gap-2 w-full rounded-2xl border-[1px] px-3 py-2 transition-colors focus-within:ring-2 ${
        theme
          ? "bg-white border-[#e0e0e0] focus-within:ring-blue-800/20 focus-within:border-blue-800"
          : "bg-[#0a0a0a] border-[#262626] focus-within:ring-blue-600/30 focus-within:border-blue-600"
      }`}
    >
      <textarea
        rows={1}
        className={`flex-1 max-h-24 text-[13px] resize-none outline-none bg-transparent py-1 overflow-y-auto scrollbar-thin ${
          theme
            ? "text-black placeholder:text-[#999999]"
            : "text-[#eeeeee] placeholder:text-[#666666]"
        }`}
        placeholder={iAmThinking ? "Thinking..." : "Message Lawrence's AI..."}
        value={myText}
        onChange={(e) => {
          setMyText(e.target.value);
          setIsTyping(true);
        }}
        onKeyDown={handleKeyDown}
      ></textarea>
      <button
        onClick={handleSend}
        disabled={myText === ""}
        aria-label="Send message"
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:cursor-pointer disabled:cursor-not-allowed ${
          myText === ""
            ? theme
              ? "bg-[#eeeeee] text-[#aaaaaa]"
              : "bg-[#1a1a1a] text-[#555555]"
            : theme
            ? "bg-blue-800 text-white hover:bg-blue-700"
            : "bg-blue-700 text-white hover:bg-blue-600"
        }`}
      >
        <FaArrowUp size={13} />
      </button>
    </div>
  );
}
