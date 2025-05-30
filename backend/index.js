import express from "express";
import cors from "cors";
import pdfRoutes from "./routes/pdf.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use("/uploads", express.static("uploads"));

app.use("/api/pdf", pdfRoutes);
app.use("/api/ai", aiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
