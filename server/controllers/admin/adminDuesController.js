// server/controllers/admin/adminDuesController.js
import Due from "../../models/Due.js";
import User from "../../models/User.js";

// GET all dues across residents
export const getAllDues = async (req, res) => {
  try {
    const dues = await Due.find().populate("user", "name email").sort({ dueDate: -1 });
    res.json(dues);
  } catch (err) {
    res.status(500).json({ message: "Error fetching dues" });
  }
};

// PATCH update due (status, charges, etc.)
export const updateDue = async (req, res) => {
  try {
    const { dueId } = req.params;
    const { status, paymentDate, charges } = req.body;

    const due = await Due.findById(dueId);
    if (!due) return res.status(404).json({ message: "Due not found" });

    if (status) due.status = status;
    if (paymentDate) due.paymentDate = paymentDate;
    if (charges) {
      due.charges = charges;
      due.total = charges.reduce((sum, c) => sum + c.amount, 0);
    }

    await due.save();
    res.json({ message: "Due updated successfully", due });
  } catch (err) {
    res.status(500).json({ message: "Failed to update due" });
  }
};

// POST: Add custom charges to a user
export const addExtraCharges = async (req, res) => {
  try {
    const { userId, charges, month } = req.body;

    const user = await User.findById(userId);
    if (!user || user.role !== "resident")
      return res.status(404).json({ message: "Resident not found" });

    const existing = await Due.findOne({ user: userId, month });
    if (!existing)
      return res.status(404).json({ message: "Due not found for this month" });

    existing.charges.push(...charges);
    existing.total = existing.charges.reduce((sum, c) => sum + c.amount, 0);
    await existing.save();

    res.json({ message: "Extra charges added", due: existing });
  } catch (err) {
    res.status(500).json({ message: "Failed to add charges" });
  }
};

// POST: Manually generate dues (useful for testing)
export const generateMonthlyDuesManual = async (req, res) => {
  try {
    const month = new Date().toLocaleString("default", { month: "long", year: "numeric" });
    const dueDate = new Date(); dueDate.setDate(10);

    const baseCharges = [
      { category: "Water", amount: 300 },
      { category: "Maintenance", amount: 800 },
      { category: "Gas", amount: 400 }
    ];

    const residents = await User.find({ role: "resident" });
    for (const user of residents) {
      const already = await Due.findOne({ user: user._id, month });
      if (!already) {
        await Due.create({
          user: user._id,
          month,
          dueDate,
          charges: baseCharges,
          total: baseCharges.reduce((sum, c) => sum + c.amount, 0)
        });
      }
    }

    res.json({ message: "Manual generation successful" });
  } catch (err) {
    res.status(500).json({ message: "Manual generation failed" });
  }
};
