import QRCode from "qrcode";
import QRModel from "../models/QR.js";

// Generate a new QR code and store in MongoDB
export const generateQR = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Text is required" });
    }

    // Generate QR code as Data URL
    const qrImage = await QRCode.toDataURL(text);

    // Store in MongoDB
    const qr = await QRModel.create({ text, qrImage });

    res.json({ qrImage });
  } catch (err) {
    console.error("QR Generation Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all generated QR codes from MongoDB
export const getAllQR = async (req, res) => {
  try {
    const qrs = await QRModel.find().sort({ createdAt: -1 }); // newest first
    res.json(qrs);
  } catch (err) {
    console.error("Get All QR Error:", err);
    res.status(500).json({ error: err.message });
  }
};
