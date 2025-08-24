// server/routes/admin/adminDuesRoutes.js
import express from "express";
import {
  getAllDues,
  updateDue,
  addExtraCharges,
  generateMonthlyDuesManual
} from "../../controllers/admin/adminDuesController.js";

import { protect, adminOnly } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect, adminOnly); // 🔐 Protect all admin routes

router.get("/all", getAllDues);                 // View all dues
router.patch("/:dueId", updateDue);             // Update status or amounts
router.post("/extra", addExtraCharges);         // Add extra charges to specific user
router.post("/generate", generateMonthlyDuesManual); // Trigger dues generation manually

export default router;
