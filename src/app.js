import express from "express";
import cors from "cors";
import qrRoutes from "./routes/qrRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/qr", qrRoutes);

export default app;
