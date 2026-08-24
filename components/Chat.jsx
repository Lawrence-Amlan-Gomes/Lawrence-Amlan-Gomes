"use client";

import { useEffect, useState, useRef } from "react";
import { useResponse } from "@/app/hooks/useResponse";
import { response } from "@/app/server";
import PromptInput from "./PromptInput";
import EachInputOutput from "./EachInputOutput";
import { useTheme } from "@/app/hooks/useTheme";

const SUGGESTIONS = [
  "What's your tech stack?",
  "Which clients have you worked with?",
  "What projects have you shipped?",
];

export default function Chat() {
  const {
    myText,
    setMyText,
    aiResponse,
    setAiResponse,
    inputOuputPair,
    setInputOutputPair,
  } = useResponse();
  const [isTyping, setIsTyping] = useState(true);
  const { theme } = useTheme();
  const [firstTime, setFirstTime] = useState(true);
  const [request, setRequest] = useState(false);
  const [tempMyText, setTempMyText] = useState("");
  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      const { scrollHeight, clientHeight } = messagesRef.current;
      messagesRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  };

  const getResponse = async (overrideText) => {
    const text = overrideText ?? myText;
    if (text !== "") {
      setIsTyping(false);
      setRequest(true);
      setTempMyText(text);
      const tempInputOutputPair = [...inputOuputPair, [text, "loading"]];
      setInputOutputPair(tempInputOutputPair);
      setMyText("");
      setTimeout(scrollToBottom, 0);
    }
  };

  useEffect(() => {
    setTimeout(scrollToBottom, 0);
  }, [inputOuputPair]);

  useEffect(() => {
    if (inputOuputPair.length > 0) setFirstTime(false);
  }, [inputOuputPair]);

  useEffect(() => {
    async function fetchData() {
      if (request) {
        try {
          const res = await response(tempMyText, inputOuputPair);
          setAiResponse(res);
          const tempInputOutputPair = [...inputOuputPair];
          tempInputOutputPair[tempInputOutputPair.length - 1] = [
            tempMyText,
            res,
          ];
          setInputOutputPair(tempInputOutputPair);
        } catch (error) {
          console.error("Error fetching AI response:", error);
          setAiResponse("Could not fetch AI response, try again later.");
          const tempInputOutputPair = [...inputOuputPair];
          tempInputOutputPair[tempInputOutputPair.length - 1] = [
            tempMyText,
            "Error: Could not fetch response",
          ];
          setInputOutputPair(tempInputOutputPair);
        } finally {
          setRequest(false);
        }
      }
    }
    fetchData();
  }, [request, tempMyText, inputOuputPair, setAiResponse, setInputOutputPair]);

  return (
    <div className="w-full h-full flex flex-col">
      {firstTime ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-4">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
              theme ? "bg-blue-50" : "bg-blue-500/10"
            }`}
          >
            👋
          </div>
          <div>
            <div
              className={`text-base font-semibold ${
                theme ? "text-[#111111]" : "text-[#f0f0f0]"
              }`}
            >
              Ask me anything
            </div>
            <p
              className={`text-xs mt-1 ${
                theme ? "text-[#777777]" : "text-[#999999]"
              }`}
            >
              I can talk about my skills, projects, and clients.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-1">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => getResponse(s)}
                className={`text-xs px-3 py-1.5 rounded-full border-[1px] transition-colors hover:cursor-pointer ${
                  theme
                    ? "border-[#dddddd] text-[#444444] hover:bg-[#f2f2f2]"
                    : "border-[#2a2a2a] text-[#cccccc] hover:bg-[#141414]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={messagesRef}
          className={`flex-1 min-h-0 overflow-y-auto scrollbar-thin px-0.5 ${
            theme ? "scrollbar-thumb-[#cccccc]" : "scrollbar-thumb-[#333333]"
          }`}
        >
          <div className="flex flex-col gap-3 py-3">
            {inputOuputPair.map((item, index) => (
              <EachInputOutput
                key={index}
                pair={item}
                isLast={index === inputOuputPair.length - 1}
                isLoading={request && index === inputOuputPair.length - 1}
              />
            ))}
          </div>
        </div>
      )}
      <div className="pt-2 shrink-0">
        <PromptInput
          myText={myText}
          setMyText={setMyText}
          getResponse={getResponse}
          setIsTyping={setIsTyping}
          aiResponse={aiResponse}
        />
      </div>
    </div>
  );
}
