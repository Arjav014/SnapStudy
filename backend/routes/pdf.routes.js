import express from "express";
import { uploadSinglePdf, extractTextFromSelectedPdfs, deleteUploadedFile } from "../controllers/pdf.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadSinglePdf);
router.post("/extract-text", extractTextFromSelectedPdfs);
router.delete("/delete/:id", deleteUploadedFile);

export default router;
