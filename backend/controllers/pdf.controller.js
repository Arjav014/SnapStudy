import { extractTextFromMultiplePDFs } from "../services/pdf.service.js";

export const uploadSinglePdf = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const metadata = {
      name: req.file.originalname,
      type: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
    };

    res.status(200).json({ message: "File uploaded", metadata});
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Upload failed" });
  }
};

export const extractTextFromSelectedPdfs = async (req,res) => {
  try {
    const { filePaths } = req.body;

    if (!filePaths || !Array.isArray(filePaths) || filePaths.length === 0) {
      return res.status(400).json({ error: "No file paths provided" });
    }

    const extractedData = await extractTextFromMultiplePDFs(filePaths);
    const combinedText = extractedData.map(({ text }) => text).join("\n\n");

    res.json({ combinedText });
  } catch (error) {
    console.error("Error extracting text:", error);
    res.status(500).json({ error: "Text extraction failed" });
  }
}