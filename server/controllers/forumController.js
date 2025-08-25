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
// export const createPost = async (req, res) => {
//   const { title, content, type } = req.body;
//   const image = req.file ? `/uploads/${req.file.filename}` : null;

//   try {
//     const newPost = await ForumPost.create({
//       author: req.user._id,
//       title,
//       content,
//       type,
//       image,
//     });
//     const populated = await newPost.populate("author", "name role pic");
//     res.status(201).json(populated);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }; 
// export const createPost = async (req, res) => {
//   const { title, content, type } = req.body;
//   const image = req.file ? `/uploads/${req.file.filename}` : null;

//   try {
//     const newPost = await ForumPost.create({
//       author: req.user._id,
//       title,
//       content,
//       type,
//       image,
//     });
//     const populated = await newPost.populate("author", "name role pic");

//     // EMIT SOCKET EVENT here
//     // if (req.app.get("io")) {
//     //   const io = req.app.get("io"); // make sure io is stored in app
//     //   io.emit("new post", populated); // emit to all connected clients
//     // } 

//     // 🔔 Emit to all connected clients
//     const io = req.app.get("io"); // get io instance
//     if (io) {
//       io.emit("new notification", {
//         type: "forum_post",
//         message: `New ${type} posted: ${title}`,
//         post: populated,
//       });
//     }

//     res.status(201).json(populated);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }; 
export const createPost = async (req, res) => {
  const { title, content, type } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    // 1️⃣ Create the new post in DB
    const newPost = await ForumPost.create({
      author: req.user._id,
      title,
      content,
      type,
      image,
    });

    // 2️⃣ Populate author details
    const populated = await newPost.populate("author", "name role pic");

    // 3️⃣ Emit notification via Socket.IO
    const io = req.app.get("io"); // get io instance from Express app
    if (io) {
      io.emit("new notification", {
        type: "forum_post",               // type of notification
        message: `New ${type} posted: ${title}`, // text message
        post: populated,                  // include the full post if needed
      });

      // Optional: emit specific event for new post (frontend can listen separately)
      io.emit("forum:postAdded", populated);
    }

    // 4️⃣ Send response back to API caller
    res.status(201).json(populated);
  } catch (error) {
    console.error("Error creating post:", error.message);
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

// export const reactToPost = async (req, res) => {
//   const { id } = req.params;
//   const { action } = req.body; // can be "like", "dislike", "heart", "plus"
//   const userId = new mongoose.Types.ObjectId(req.user._id);

//   try {
//     const post = await ForumPost.findById(id);
//     if (!post) return res.status(404).json({ message: "Post not found" });

//     // Helper function to toggle reactions
//     const toggleReaction = (reactionKey) => {
//       const alreadyReacted = post.reactions[reactionKey].some(
//         (uid) => uid.toString() === userId.toString()
//       );
//       if (alreadyReacted) {
//         post.reactions[reactionKey].pull(userId);
//       } else {
//         post.reactions[reactionKey].push(userId);
//       }
//     };

//     if (["like", "dislike", "heart", "plus"].includes(action)) {
//       toggleReaction(action);
//     } else {
//       return res.status(400).json({ message: "Invalid reaction type" });
//     }

//     await post.save();
//     const updated = await post.populate("author", "name role pic");
//     res.json(updated);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


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



// ================================== 

// @desc Add a comment to a discussion post
// @route POST /api/forum/:id/comment
export const addComment = async (req, res) => {
  const { text } = req.body;
  try {
    const post = await ForumPost.findById(req.params.id);
    if (!post || post.type !== "discussion") {
      return res.status(400).json({ message: "Not a discussion post" });
    }

    const comment = { user: req.user._id, text };
    post.comments.push(comment);
    await post.save();

    const populated = await post.populate([
      { path: "comments.user", select: "name pic" },
      { path: "author", select: "name role pic" },
    ]);

    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message }); 
    console.log(req.body);  
  }
  console.log(req.body); 
};


// @desc Create a poll post (admin only)
// @route POST /api/forum/poll
export const createPoll = async (req, res) => {
  const { title, content, options } = req.body; // options = ["Option A", "Option B"]
  if (!options || !Array.isArray(options) || options.length < 2) {
    return res.status(400).json({ message: "At least two poll options required" });
  }

  try {
    const pollOptions = options.map(opt => ({ option: opt, votes: [] }));
    const newPoll = await ForumPost.create({
      author: req.user._id,
      title,
      content,
      type: "poll",
      pollOptions,
    });
    const populated = await newPoll.populate("author", "name role pic");
    res.status(201).json(populated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// @desc Vote on a poll option
// @route PATCH /api/forum/:id/vote
export const votePoll = async (req, res) => {
  const { optionIndex } = req.body; // index of the chosen option
  try {
    const post = await ForumPost.findById(req.params.id);
    if (!post || post.type !== "poll") {
      return res.status(400).json({ message: "Not a poll post" });
    }

    const userId = new mongoose.Types.ObjectId(req.user._id);

    // Remove user vote from any previous option
    post.pollOptions.forEach(opt => {
      opt.votes = opt.votes.filter(voteId => voteId.toString() !== userId.toString());
    });

    // Add vote to the selected option
    if (post.pollOptions[optionIndex]) {
      post.pollOptions[optionIndex].votes.push(userId);
    } else {
      return res.status(400).json({ message: "Invalid option index" });
    }

    await post.save();
    const populated = await post.populate("author", "name role pic");
    res.json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


