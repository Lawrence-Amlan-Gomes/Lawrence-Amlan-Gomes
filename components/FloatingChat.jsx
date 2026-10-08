"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useTheme } from "@/app/hooks/useTheme";
import Chat from "./Chat";

export default function FloatingChat() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const hidden =
    pathname?.startsWith("/admin") || pathname?.startsWith("/login");
  if (hidden) return null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-[60] w-[calc(100vw-2rem)] max-w-[380px] h-[70vh] max-h-[560px] rounded-2xl shadow-2xl border-[1px] flex flex-col overflow-hidden ${
              theme
                ? "bg-white border-[#e5e5e5]"
                : "bg-[#050505] border-[#1a1a1a]"
            }`}
          >
            <div
              className={`flex items-center justify-between gap-3 px-4 py-3 border-b-[1px] shrink-0 ${
                theme
                  ? "border-[#e5e5e5] bg-[#fafafa]"
                  : "border-[#1a1a1a] bg-[#0a0a0a]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ${
                    theme ? "ring-blue-800" : "ring-blue-700"
                  }`}
                >
                  <Image
                    src="/ProfilePic27.png"
                    alt="Lawrence"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span
                    className={`text-sm font-semibold ${
                      theme ? "text-[#111111]" : "text-[#eeeeee]"
                    }`}
                  >
                    Lawrence
                  </span>
                  <span className="text-[11px] flex items-center gap-1 text-green-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    AI Assistant
                  </span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className={`p-1.5 rounded-full hover:cursor-pointer transition-colors ${
                  theme
                    ? "text-[#555555] hover:bg-[#eeeeee]"
                    : "text-[#aaaaaa] hover:bg-[#1a1a1a]"
                }`}
              >
                <FiX size={18} />
              </button>
            </div>
            <div className="flex-1 min-h-0 px-3 pb-3 pt-2">
              <Chat />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={open ? "Close chat" : "Chat with Lawrence"}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl border-[2px] overflow-hidden hover:cursor-pointer ${
          open
            ? theme
              ? "border-white"
              : "border-black"
            : theme
            ? "border-blue-800"
            : "border-blue-600"
        }`}
      >
        {open ? (
          <div
            className={`w-full h-full flex items-center justify-center ${
              theme ? "bg-blue-800 text-white" : "bg-blue-700 text-white"
            }`}
          >
            <FiX size={26} />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src="/ProfilePic27.png"
              alt="Chat with Lawrence"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
          </div>
        )}
      </motion.button>
    </>
  );
}
