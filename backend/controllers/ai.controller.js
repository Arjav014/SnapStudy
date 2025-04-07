import { getAIResponse } from "../services/ai.service.js";

const cleanJSON = (str) => {
  return str.replace(/```json|```/g, "").trim();
};

export const processText = async (req, res) => {
  try {
    const { combinedText } = req.body;
    if (!combinedText) return res.status(400).json({ error: "No text provided" });

    // Summary Prompt
    const summaryPrompt = "Summarize this document collection.";
    const summaryResponse = await getAIResponse(combinedText, summaryPrompt);

    // Quiz Prompt
    const quizPrompt = `
      Generate a multiple-choice quiz (5-10 questions) from the text.
      Format: JSON {"quiz": [{"question": "...", "options": ["A", "B", "C", "D"], "answer": "B"}]}
    `;
    const quizResponse = await getAIResponse(combinedText, quizPrompt);
    const quiz = JSON.parse(cleanJSON(quizResponse)).quiz;

    // Formula Prompt
    const formulaPrompt = `
      Extract all mathematical formulas. Return JSON {"formulas": ["Formula 1", "Formula 2", ...]}
    `;
    const formulaResponse = await getAIResponse(combinedText, formulaPrompt);
    const formulas = JSON.parse(cleanJSON(formulaResponse)).formulas;

    // Return all in one response
    return res.json({
      summary: summaryResponse,
      quiz,
      formulas,
    });

  } catch (error) {
    console.error("AI processing error:", error);
    return res.status(500).json({ error: "AI processing failed" });
  }
};
