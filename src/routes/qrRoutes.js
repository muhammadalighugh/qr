import express from "express";
import { generateQR, getAllQR } from "../controllers/qrController.js";

const router = express.Router();

// POST /api/qr/generate → generate a new QR code
router.post("/generate", generateQR);

// GET /api/qr/all → fetch all generated QR codes
router.get("/all", getAllQR);

export default router;
