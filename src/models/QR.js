import mongoose from "mongoose";

const qrSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    qrImage: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("QR", qrSchema);
