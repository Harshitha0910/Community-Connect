// C:\Users\harsh\Desktop\Community-Connect\server\routes\privateMessageRoutes.js 

// import express from "express";
// import { sendPrivateMessage, getPrivateMessages } from '../controllers/chat/privateMessageController.js';

// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/", protect, sendPrivateMessage);
// router.get("/:receiverId", protect, getPrivateMessages);

// export default router;


// C:\Users\harsh\Desktop\Community-Connect\server\routes\privateMessageRoutes.js  


import express from "express";
import { sendPrivateMessage, getPrivateMessages } from "../controllers/chat/privateMessageController.js";
import { protect } from "../middleware/authMiddleware.js";
import User from '../models/User.js';

const router = express.Router();



router.get("/users", protect, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post("/", protect, sendPrivateMessage);
router.get("/:receiverId", protect, getPrivateMessages);

export default router;
 