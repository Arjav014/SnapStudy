import express from "express";
import { extractFormulas, generateQuiz, generateSummary } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/summary", generateSummary);
router.post("/quiz", generateQuiz);
router.post("/formulas", extractFormulas);

export default router;