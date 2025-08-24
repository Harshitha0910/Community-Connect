import React, { useState } from "react";
import socket from "../socket";

const ForumPostCard = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [likes, setLikes] = useState(post.reactions.likes || []);
  const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);

  const handleReaction = async (action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/forum/${post._id}/react`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ action }),
      });

      const data = await res.json();
      setLikes(data.reactions.likes);
      setDislikes(data.reactions.dislikes);

      // Emit socket update if you want live updates
      socket.emit("post reacted", data);
    } catch (err) {
      console.error("Reaction error:", err);
    }
  };

  const isLiked = likes.includes(user._id);
  const isDisliked = dislikes.includes(user._id);

  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={post.author.pic || "https://via.placeholder.com/40"}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-800">{post.author.name}</h4>
            <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">{post.type}</span>
      </div>

      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-2">{post.content}</p>
      {post.image && <img src={post.image} alt="post" className="rounded-lg mb-2 max-h-64 object-cover" />}

      <div className="flex items-center gap-4 mt-3">
        <button
          onClick={() => handleReaction("like")}
          className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
            isLiked ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          👍 {likes.length}
        </button>

        <button
          onClick={() => handleReaction("dislike")}
          className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
            isDisliked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          👎 {dislikes.length}
        </button>
      </div>
    </div>
  );
};

export default ForumPostCard;
