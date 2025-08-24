// controllers/duesController.js
import Due from "../models/Due.js";

export const getMyDues = async (req, res) => {
  try {
    // const dues = await Dues.find({ resident: req.user._id }).sort({ dueDate: -1 });
    const dues = await Due.find({ user: req.user._id }).sort({ dueDate: -1 });

    res.json(dues);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching your dues." });
  }
};
