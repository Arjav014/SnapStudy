import express from "express";
import { processText } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/process", processText);

export default router;