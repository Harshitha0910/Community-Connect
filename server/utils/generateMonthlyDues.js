// utils/generateMonthlyDues.js
import Due from "../models/Due.js";
import User from "../models/User.js";

export const generateMonthlyDues = async () => {
  const month = new Date().toLocaleString('default', { month: 'long', year: 'numeric' }); // e.g. July 2025
  const dueDate = new Date(); // Due date: 10th of current month
  dueDate.setDate(10);

  const users = await User.find({ role: "resident" });

  const baseCharges = [
    { category: "Water", amount: 300 },
    { category: "Maintenance", amount: 800 },
    { category: "Gas", amount: 400 }
  ];

  for (const user of users) {
    const total = baseCharges.reduce((sum, c) => sum + c.amount, 0);

    await Due.create({
      user: user._id,
      month,
      dueDate,
      total,
      charges: baseCharges,
    });
  }

  console.log("✅ Monthly dues generated for all residents");
};
