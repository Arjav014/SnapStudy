import { extractTextFromMultiplePDFs } from "../services/pdf.service.js";

export const processMultiplePdfs = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const extractedData = await extractTextFromMultiplePDFs(req.files);

    const combinedText = extractedData.map(({ text }) => text).join("\n\n");

    res.json({ combinedText });
  } catch (error) {
    res.status(500).json({ error: "Error processing PDFs" });
  }
};
