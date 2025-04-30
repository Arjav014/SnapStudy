import { GoogleGenAI } from "@google/genai";
import { AI_KEY } from "../config.js";

const genAI = new GoogleGenAI({ apiKey: AI_KEY });

export const getAIResponse = async (text, prompt) => {
  try {
    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `${prompt}\n\n${text}`,
    });
    if(!response || !response.text){
      return null;
    }
    return response.text;
  } catch (error) {
    console.error("Error generating AI response:",error);
  }
};
