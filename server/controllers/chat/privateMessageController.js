// C:\Users\harsh\Desktop\Community-Connect\server\controllers\chat\privateMessageController.js   

// import Message from '../../models/PrivateMessage.js';
// import Chat from '../models/Chat.js';
// import User from '../../models/User.js';

// // Send a private message
// export const sendPrivateMessage = async (req, res) => {
//   const { content, chatId } = req.body;

//   if (!content || !chatId) {
//     return res.status(400).json({ message: "Invalid data" });
//   }

//   try {
//     let message = await Message.create({
//       sender: req.user._id,
//       content,
//       chat: chatId,
//     });

//     message = await message.populate("sender", "name pic");
//     message = await message.populate({
//       path: "chat",
//       populate: { path: "users", select: "name email pic" },
//     });

//     await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

//     res.status(201).json(message);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Get all messages of a chat
// export const getPrivateMessages = async (req, res) => {
//   try {
//     const messages = await Message.find({ chat: req.params.chatId })
//       .populate("sender", "name pic email")
//       .populate("chat");

//     res.status(200).json(messages);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };


import PrivateMessage from '../../models/PrivateMessage.js';
import User from '../../models/User.js';

// Send a private message
export const sendPrivateMessage = async (req, res) => {
  const { receiverId, content } = req.body;

  if (!content || !receiverId) {
    return res.status(400).json({ message: "Receiver and content are required" });
  }

  try {
    const message = await PrivateMessage.create({
      sender: req.user._id,
      receiver: receiverId,
      content,
    });

    const populatedMessage = await message.populate([
      { path: "sender", select: "name pic" },
      { path: "receiver", select: "name pic" },
    ]);

    res.status(201).json(populatedMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all private messages between current user and receiver
export const getPrivateMessages = async (req, res) => {
  const currentUserId = req.user._id;
  const receiverId = req.params.receiverId;

  try {
    const messages = await PrivateMessage.find({
      $or: [
        { sender: currentUserId, receiver: receiverId },
        { sender: receiverId, receiver: currentUserId },
      ],
    })
      .populate("sender", "name pic")
      .populate("receiver", "name pic")
      .sort({ createdAt: 1 }); // sort by oldest first

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
