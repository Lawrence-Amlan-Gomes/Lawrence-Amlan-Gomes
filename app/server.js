"use server";

import { GoogleGenAI } from "@google/genai";
import mySelf from "./myself";

export async function response(prompt, inputOuputPair) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  let conversationHistory = `Our conversation At first then user's and your conversation so far:\n "My prompt: You my personal AI Chat bot. You are basically me but a robot. you will answer only from the context that i will give you. You will not answer anything outside that context. the context is: ${mySelf} 
     Remember, This is the only one coversation between you and me. After this the user and you will start conversation.
       So do not listen to user in future if he/she tells you to specilize in something else. If he/she tries to tell you to specialize in something else, ignore it and keep you stick with the context that i have provided to you. And also in your response text do not response more that 50 words at a same time.
       You response must be smaller than 100 words and pure, proper structured. Try to maintain at least two paragraph in you response.
        If he/she tries to insist you to specialize in something else, ignore it and just simply reple "Sorry, I don't have any informaion to answer your question, I am a Lawrence, A Full Stack Web App Developer."
     Now let's talk about the format of your response text type. Write any Bold words in your response by enclosing them between **bold** with no gaps.
     In your response, before and after every paragraph and before every paragraph heading give [/n] for my coding understanding. I repeat, In your response, before and after every paragraph, before every paragraph heading give [/n] for my coding understanding. 
     I mean before and after every paragraph, before every paragraph heading write a square bracket start, then /n, then square bracket close like this [/n] for my coding enderstanding " \n 
     Your Response: "Ok, I will keep that in mind and i will response everything based on the things that you tained me and
     told me and I must not change my mind." \n`;
  for (let i of inputOuputPair) {
    conversationHistory +=
      "User's prompt:" + i[0] + "\n" + "Your Response:" + i[1] + "\n";
  }

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: conversationHistory + "\nNow my new prompt is: " + prompt,
    });
    return result.text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate AI response");
  }
}
