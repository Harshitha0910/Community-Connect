// server\server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import smsRoutes from './routes/smsRoutes.js';
import complaintRoutes from "./routes/complaintRoutes.js";
import duesRoutes from "./routes/duesRoutes.js";
import adminDuesRoutes from "./routes/admin/adminDuesRoutes.js";
import cron from "node-cron";
import { generateMonthlyDues } from "./utils/generateMonthlyDues.js";
import privateMessageRoutes from "./routes/privateMessageRoutes.js";
import forumRoutes from "./routes/forumRoutes.js"; // ✅ Forum routes

// ✅ Load .env
dotenv.config();

// ✅ Connect MongoDB
connectDB();

// ✅ Setup Express
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Create HTTP Server from Express App
const server = http.createServer(app);

// ✅ Setup Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
  pingTimeout: 60000,
});

// =========================================
//  SOCKET.IO EVENTS
// =========================================
io.on("connection", (socket) => {
  console.log("🔌 Socket connected:", socket.id);

  // ---- Existing Private Messaging Events ----
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log(`📥 User joined room: ${room}`);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (message) => {
    if (message.chat && message.chat.users) {
      // Group or forum message
      message.chat.users.forEach((user) => {
        if (user._id === message.sender._id) return;
        socket.to(user._id).emit("message received", message);
      });
    } else if (message.receiver) {
      // Private message
      socket.to(message.receiver._id).emit("message received", message);

      // 🔔 Emit notification for private message
      socket.to(message.receiver._id).emit("new notification", {
        type: "private_message",
        message: `New message from ${message.sender.name}`,
        senderName: message.sender.name,
        senderId: message.sender._id,
      });
    } else {
      console.log("⚠️ Unknown message format", message);
    }
  });

  // ---- NEW Forum Events ----
  // Broadcast when a new post is created
  socket.on("forum:newPost", (post) => {
    io.emit("forum:postAdded", post);
  });

  // Broadcast when a reaction is updated
  socket.on("forum:reaction", (updatedPost) => {
    io.emit("forum:reactionUpdated", updatedPost);
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected");
  });
});

// =========================================
//  API ROUTES
// =========================================
app.use('/api/users', userRoutes);
app.use("/api/private-messages", privateMessageRoutes);
app.use("/api/admin/dues", adminDuesRoutes);
app.use("/api/dues", duesRoutes);
app.use('/api/sms', smsRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/forum", forumRoutes); // ✅ Forum API

// =========================================
//  CRON JOBS
// =========================================
cron.schedule("0 1 1 * *", async () => {
  console.log("📅 Generating monthly dues...");
  await generateMonthlyDues();
});

// =========================================
//  START SERVER
// =========================================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
