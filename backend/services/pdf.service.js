import fs from "fs"
import pdf from "pdf-parse-new";

export const extractTextFromMultiplePDFs = async (filePaths) => {
  const results = [];

  for(const filePath of filePaths){
    try {
      const dataBuffer = await fs.readFile(filePath);
      const pdfData = await pdf(dataBuffer);
      results.push({ text: pdfData.text, file: filePath});
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
      results.push({ text: "", file: filePath, error: "Failed to parse PDF" });
    }
  }

  return results;
};
