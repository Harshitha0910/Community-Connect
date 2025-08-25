// // C:\Users\harsh\Desktop\Community-Connect\server\models\ForumPost.js
// import mongoose from "mongoose";

// const forumPostSchema = new mongoose.Schema(
//   {
//     author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     title: { type: String, required: true },
//     content: { type: String, required: true },
//     type: { type: String, enum: ["announcement", "poll", "discussion"], required: true },
//     image: { type: String }, // optional image
//     reactions: {
//       likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//       dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
//     },
//     pinned: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("ForumPost", forumPostSchema);
 



// models/ForumPost.js
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const pollOptionSchema = new mongoose.Schema({
  option: { type: String, required: true },
  votes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const forumPostSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    type: { type: String, enum: ["announcement", "poll", "discussion"], required: true },
    image: { type: String },
    
    // Reactions (likes, dislikes, etc.)
    reactions: {
      likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    },

    // Discussion-specific comments
    comments: [commentSchema],

    // Poll-specific fields
    pollOptions: [pollOptionSchema],

    pinned: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("ForumPost", forumPostSchema);




