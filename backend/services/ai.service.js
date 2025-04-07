import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

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
