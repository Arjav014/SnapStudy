import { extractTextFromMultiplePDFs } from "../services/pdf.service.js";

export const processMultiplePdfs = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    // Pass only the paths of uploaded files
    const filePaths = req.files.map(file => file.path);
    const extractedData = await extractTextFromMultiplePDFs(filePaths);
    const combinedText = extractedData.map(({ text }) => text).join("\n\n");

    res.json({ combinedText });
  } catch (error) {
    console.error("Error in processing PDFs:", error);
    res.status(500).json({ error: "Error processing PDFs" });
  }
};
