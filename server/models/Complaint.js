import mongoose from "mongoose";
// import upload from '../middleware/uploadMiddleware.js';

const complaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Water", "Electricity", "Cleanliness", "Security", "Noise", "Other"],
      required: true,
    },
    image: {
      type: String,
    },
    statusStep: {
      type: Number,
      default: 0, // 0: Submitted, 1: Under Review, 2: In Progress, 3: Resolved, 4: Closed
    },
  },
  {
    timestamps: true,
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

// router.post('/', protect, upload.single('image'), createComplaint); 

export default Complaint;
