// client\src\components\Forum.jsx 
import React, { useState, useEffect } from "react";
import ForumPostCard from "./ForumPostCard";
import socket from "../socket";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const res = await fetch("http://localhost:5000/api/forum", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      });
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();

    socket.on("new post", (newPost) => {
      setPosts((prev) => [newPost, ...prev]);
    });

    socket.on("post reacted", (updatedPost) => {
      setPosts((prev) =>
        prev.map((p) => (p._id === updatedPost._id ? updatedPost : p))
      );
    });

    return () => {
      socket.off("new post");
      socket.off("post reacted");
    };
  }, []);

  return (
    <section className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Community Forum</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <ForumPostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Forum;
