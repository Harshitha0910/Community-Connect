// client/src/components/Forum.jsx

import React, { useState, useEffect } from "react";
import ForumPostCard from "./ForumPostCard";
import socket from "../socket"; 
import { Link, useNavigate } from "react-router-dom"; 

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
    <section className="min-h-screen p-8 bg-gray-50 flex justify-center">
      <div className="w-full md:w-[60%]">  

        {/* <div className="flex items-center justify-between mb-6">
          <Link to="/resident-dashboard" className="text-blue-600 hover:underline font-mono text-sm"> ← Back to Dashboard
          </Link>
          <h2 className="text-2xl font-mono font-bold text-center flex-1">
            Community Forum
          </h2>
        </div> */}



        <h2 className="text-2xl font-mono font-bold mb-6 text-center">
          Community Forum
        </h2> 

        <div className="mb-6">
          <Link to="/resident-dashboard" className="text-blue-600 hover:underline font-mono text-sm flex items-center gap-1"> <span aria-hidden="true">←</span> Back to Dashboard
          </Link>
        </div> 

        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts yet.</p>
        ) : (
          <div className="grid font-mono grid-cols-1 gap-6">
            {posts.map((post) => (
              <ForumPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Forum;
