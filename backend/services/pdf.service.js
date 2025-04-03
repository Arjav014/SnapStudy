import pdf from "pdf-parse";
import fs from "fs";

export const extractTextFromMultiplePDFs = async (filePaths) => {
  try {
    const extractedTexts = await Promise.all(
      filePaths.map(async (filePath) => {
        const dataBuffer = fs.readFile(filePath);
        const data = await pdf(dataBuffer);
        return { file: filePath, text: data.text };
      })
    );
    return extractedTexts;
  } catch (error) {
    console.error("Error extracting text from Pdfs:", error);
    throw new Error("Failed to process Pdfs");
  }
};
