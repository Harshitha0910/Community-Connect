// // C:\Users\harsh\Desktop\Community-Connect\server\routes\forumRoutes.js
// import express from "express";
// import upload from "../middleware/uploadMiddleware.js";
// import { protect, adminOnly } from "../middleware/authMiddleware.js";
// import {
//   getPosts,
//   createPost,
//   reactToPost,
//   deletePost,
// } from "../controllers/forumController.js";

// const router = express.Router();

// router.get("/", protect, getPosts);
// router.post("/", protect, adminOnly, upload.single("image"), createPost);
// router.patch("/:id/react", protect, reactToPost);
// router.delete("/:id", protect, adminOnly, deletePost);

// export default router;



import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  getPosts,
  createPost,
  reactToPost,
  deletePost,
  addComment,
  createPoll,
  votePoll,
} from "../controllers/forumController.js";

const router = express.Router();

router.get("/", protect, getPosts);
router.post("/", protect, adminOnly, upload.single("image"), createPost);
router.patch("/:id/react", protect, reactToPost);
router.post("/:id/comment", protect, addComment);
router.post("/poll", protect, adminOnly, createPoll);
router.patch("/:id/vote", protect, votePoll);
router.delete("/:id", protect, adminOnly, deletePost);

export default router;

