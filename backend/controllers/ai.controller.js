import { getAIResponse } from "../services/ai.service.js";

export const generateSummary = async (req,res) => {
    try {
        const { combinedText } = req.body;
        if(!combinedText) return res.status(400).json({ error: "No text provided" });

        const aiResponse = await getAIResponse(combinedText, "Summarize this document collection.");
        return res.json({ summary: aiResponse});

    } catch (error) {
        console.log("Summary error:",error);
        return res.status(500).json({ error: "Error generating summary" });
    }
}

export const generateQuiz= async (req,res) => {
    try {
        const { combinedText } = req.body;
        if(!combinedText) return res.status(400).json({ error: "No text provided" });
        
        const quizPrompt = `
            Generate a multiple-choice quiz (5-10 questions) from the text.
            Format: JSON {"quiz": [{"question": "...", "options": ["A", "B", "C", "D"], "answer": "B"}]}
        `;

        const aiResponse = await getAIResponse(combinedText, quizPrompt);
        return res.json({quiz: JSON.parse(aiResponse).quiz})

    } catch (error) {
        console.log("Quiz error:",error);
        return res.status(500).json({ error: "Error generating quiz" });
    }
}

export const extractFormulas = async (req,res) => {
    try {
        const { combinedText } = req.body;
        if(!combinedText) return res.status(400).json({ error: "No text provided" });

        const formulaPrompt = `
            Extract all mathematical formulas. Return JSON {"formulas": ["Formula 1", "Formula 2", ...]}
        `;

        const aiResponse = await getAIResponse(combinedText, formulaPrompt);
        return res.json({ formulas: JSON.parse(aiResponse).formulas });

    } catch (error) {
        console.log("Formula error:",error);
        return res.status(500).json({ error: "Error generating formula" });
    }
}