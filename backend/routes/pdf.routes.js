import express from "express";
import { uploadSinglePdf, extractTextFromSelectedPdfs } from "../controllers/pdf.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadSinglePdf);
router.post("/extract-text", extractTextFromSelectedPdfs);

export default router;
