// C:\Users\harsh\Desktop\Community-Connect\server\controllers\forumController.js
import ForumPost from "../models/ForumPost.js"; 
import mongoose from "mongoose";

// @desc Get all posts
// @route GET /api/forum
export const getPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find({})
      .populate("author", "name role pic")
      .sort({ pinned: -1, createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new post (admin only)
// @route POST /api/forum
export const createPost = async (req, res) => {
  const { title, content, type } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const newPost = await ForumPost.create({
      author: req.user._id,
      title,
      content,
      type,
      image,
    });
    const populated = await newPost.populate("author", "name role pic");
    res.status(201).json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc React to a post (like/dislike toggle)
// @route PATCH /api/forum/:id/react



export const reactToPost = async (req, res) => {
  const { id } = req.params;
  const { action } = req.body; // "like" or "dislike"
  const userId = new mongoose.Types.ObjectId(req.user._id); // <-- ensure ObjectId

  try {
    const post = await ForumPost.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const isLiked = post.reactions.likes.some(
      (uid) => uid.toString() === userId.toString()
    );
    const isDisliked = post.reactions.dislikes.some(
      (uid) => uid.toString() === userId.toString()
    );

    if (action === "like") {
      if (isLiked) {
        post.reactions.likes.pull(userId);
      } else {
        post.reactions.likes.push(userId);
        post.reactions.dislikes.pull(userId);
      }
    } else if (action === "dislike") {
      if (isDisliked) {
        post.reactions.dislikes.pull(userId);
      } else {
        post.reactions.dislikes.push(userId);
        post.reactions.likes.pull(userId);
      }
    }

    await post.save();

    console.log("Likes after:", post.reactions.likes.map((id) => id.toString()));
    console.log("Dislikes after:", post.reactions.dislikes.map((id) => id.toString()));

    const updated = await post.populate("author", "name role pic");
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// @desc Delete a post (admin only)
// @route DELETE /api/forum/:id


export const deletePost = async (req, res) => {
  try {
    const post = await ForumPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await post.deleteOne();
    res.json({ message: "Post removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

