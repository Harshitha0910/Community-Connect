// routes/complaintRoutes.js
import express from "express";
import {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
} from "../controllers/complaintController.js";
 
import { protect, adminOnly } from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js"; 


const router = express.Router();

// @route   POST /api/complaints
// @desc    Resident creates a complaint
// router.post("/", protect, createComplaint);

// @route   GET /api/complaints/mine
// @desc    Get complaints submitted by logged-in resident
router.get("/mine", protect, getMyComplaints);

// @route   GET /api/complaints
// @desc    Admin gets all complaints
router.get("/", protect, adminOnly, getAllComplaints);

// @route   PUT /api/complaints/:id/status
// @desc    Admin updates complaint status step
router.put("/:id/status", protect, adminOnly, updateComplaintStatus);

router.post("/", protect, upload.single("image"), createComplaint); 

export default router;




 