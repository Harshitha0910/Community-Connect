// models/Due.js
import mongoose from "mongoose";

const dueSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  month: { type: String, required: true }, // e.g., "July 2025"
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ["Paid", "Unpaid"], default: "Unpaid" },
  paymentDate: { type: Date },
  total: { type: Number, required: true },
  charges: [
    {
      category: String,
      amount: Number,
    },
  ],
}, { timestamps: true });

export default mongoose.model("Due", dueSchema);
