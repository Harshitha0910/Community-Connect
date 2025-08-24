// routes/duesRoutes.js
// import express from "express";
// import { getMyDues } from "../controllers/duesController.js";
// import { protect } from "../middleware/authMiddleware.js";

// import { generateMonthlyDues } from "../utils/generateMonthlyDues.js"; 


// const router = express.Router();

// router.get("/mine", protect, getMyDues); // Resident-specific


// router.get("/generate-test", async (req, res) => {
//   try {
//     await generateMonthlyDues();
//     res.status(200).json({ message: "Test dues generated" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error generating dues" });
//   }
// });


// export default router;


// routes/duesRoutes.js
import express from "express";
import { getMyDues } from "../controllers/duesController.js";
import { protect } from "../middleware/authMiddleware.js";
import { generateMonthlyDues } from "../utils/generateMonthlyDues.js"; // <-- IMPORT THIS

const router = express.Router();

router.get("/mine", protect, getMyDues);


// router.get("/generate-test", async (req, res) => {
//   try {
//     await generateMonthlyDues();
//     res.status(200).json({ message: "Test dues generated" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error generating dues" });
//   }
// });

export default router;
