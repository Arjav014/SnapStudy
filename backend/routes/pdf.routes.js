import express from "express";
import { processMultiplePdfs } from "../controllers/pdf.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.array("files", 5), processMultiplePdfs);

export default router;
