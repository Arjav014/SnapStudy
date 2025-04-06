import { extractTextFromMultiplePDFs } from "../services/pdf.service.js";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const uploadedFilesStore = new Map();

export const uploadSinglePdf = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const id = uuidv4();
    const metadata = {
      id,
      name: req.file.originalname,
      type: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
    };

    uploadedFilesStore.set(id, metadata.path);

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

export const deleteUploadedFile = async (req,res) => {
  const id = req.params.id;

  try {
    const filePath = uploadedFilesStore.get(id);
    if (!filePath) {
      return res.status(404).json({ error: "File not found" });
    }

    fs.unlinkSync(filePath);
    uploadedFilesStore.delete(id);

    res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ error: "Failed to delete file" });
  }
}