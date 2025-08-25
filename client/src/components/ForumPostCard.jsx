// client/src/components/ForumPostCard.jsx

import React, { useState } from "react";
import socket from "../socket";

const ForumPostCard = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  // Local reaction state
  const [likes, setLikes] = useState(post.reactions.likes || []);
  const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);
  // Poll state
  const [pollOptions, setPollOptions] = useState(post.pollOptions || []);
  const [selectedOption, setSelectedOption] = useState(null);

    // Comment state
    const [allComments, setAllComments] = useState(post.comments || []);
    const [newComment, setNewComment] = useState("");
    const [showAll, setShowAll] = useState(false);  

    const latestComment =
    allComments?.length > 0 ? allComments[allComments.length - 1] : null;

  // ---- helpers
  const uid = user?._id;
  const containsUser = (arr, id) =>
    (arr || []).some((x) => String(x?._id ?? x) === String(id));

  const isLiked = containsUser(likes, uid);
  const isDisliked = containsUser(dislikes, uid);

  // ---- reactions (hollow + solid, no backgrounds)
  const icons = {
    like: {
      hollow: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
        </svg>

      ),
      solid: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd"/>
        </svg>

      ),
    },
    dislike: {
      hollow: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"/>
        </svg>

      ),
      solid: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"/>
        </svg>
      ),
    },
  };

  const handleReaction = async (action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/forum/${post._id}/react`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ action }), // "like" or "dislike"
      });

      const data = await res.json();
      setLikes(data.reactions.likes || []);
      setDislikes(data.reactions.dislikes || []);
      socket.emit("post reacted", data);
    } catch (err) {
      console.error("Reaction error:", err);
    }
  };

  const handlePollVote = async (optionIndex) => {
    try {
      const res = await fetch(`http://localhost:5000/api/forum/${post._id}/vote`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ optionIndex }),
      });

      const data = await res.json();
      setPollOptions(data.pollOptions || []);
      setSelectedOption(optionIndex);

      // brief highlight then return to normal (handled by classes below)
      socket.emit("post updated", data);
    } catch (err) {
      console.error("Poll vote error:", err);
    }
  }; 

  // ---- Comment handler
  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      const res = await fetch(`http://localhost:5000/api/forum/${post._id}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ text: newComment }),
      });
      const updatedPost = await res.json();
      setAllComments(updatedPost.comments);
      setNewComment("");
      socket.emit("comment added", updatedPost);
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const borderColor="border-gray-600";     

  return (
    <div className={`bg-white p-5 rounded-lg shadow-md border-2  font-mono ${borderColor} `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={post.author.pic || "https://via.placeholder.com/40"}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-800">{post.author.name}</h4>
            <p className="text-xs text-left text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">{post.type}</span>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-left text-lg mb-2">{post.title}</h3>
      <p className="text-gray-700 text-left mb-2">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="post" className="rounded-lg mb-2 max-h-64 object-cover" />
      )}

      {/* Poll Options */}
      {post.type === "poll" && (pollOptions?.length ?? 0) > 0 && (
        <div className="mt-4">
          <ul className="space-y-2">
            {pollOptions.map((option, index) => {
              const isSelected = selectedOption === index;
              return (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 border rounded-lg cursor-pointer transition-all duration-100 ${
                    isSelected
                      ? "bg-black text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-black"
                  }`}
                  onClick={() => handlePollVote(index)}
                >
                  <span>{option.option}</span>
                  <span className={`text-sm ${isSelected ? "text-gray-200" : "text-gray-500"}`}>
                    {option.votes.length} votes
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Reactions (hollow -> solid, no background) & Comments */}
      <div className="flex items-center gap-6 mt-4">
        <button
          type="button"
          onClick={() => handleReaction("like")}
          aria-pressed={isLiked}
          className="flex items-center gap-2 px-1 py-1 hover:scale-105 transition"
        >
          <span className="w-6 h-6">
            {isLiked ? icons.like.solid : icons.like.hollow}
          </span>
          <span className="text-sm text-gray-700">{likes.length}</span>
        </button>

        <button
          type="button"
          onClick={() => handleReaction("dislike")}
          aria-pressed={isDisliked}
          className="flex items-center gap-2 px-1 py-1 hover:scale-105 transition"
        >
          <span className="w-6 h-6">
            {isDisliked ? icons.dislike.solid : icons.dislike.hollow}
          </span>
          <span className="text-sm text-gray-700">{dislikes.length}</span>
        </button>
      </div>

      {/* Show comments only if post is a discussion */}
      {post.type === "discussion" && (
        <>
          {/* Latest Comment */}
          {latestComment && (
            <div className="mt-4 p-2 bg-gray-50 rounded-lg border text-sm">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={latestComment.user.pic}
                  alt={latestComment.user.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-semibold">{latestComment.user.name}</span>
                <span className="text-xs text-gray-500 ml-auto">
                  {new Date(latestComment.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="text-gray-700 text-left">{latestComment.text}</p>
            </div>
          )}

          {/* View all comments button */}
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-xs text-blue-600 hover:underline"
            >
              {showAll ? "Hide comments" : "View all comments"}
            </button>
          </div>

          {/* All comments */}
          {showAll && (
            <div className="mt-2 max-h-48 overflow-y-auto space-y-2">
              {allComments.map((c) => (
                <div key={c._id} className="p-2 bg-gray-100 rounded text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      src={c.user.pic}
                      alt={c.user.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-semibold">{c.user.name}</span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {new Date(c.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-700 text-left ">{c.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* Add new comment */}
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded px-2 py-1 text-sm"
            />
            <button
              onClick={handleAddComment}
              className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800"
            >
              Post
            </button>
          </div>
        </>
      )}

    </div>
  );
};

export default ForumPostCard;
