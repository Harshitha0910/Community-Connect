// C:\Users\harsh\Desktop\Community-Connect\server\models\PrivateMessage.js 

// import mongoose from "mongoose";

// const privateMessageSchema = new mongoose.Schema(
//   {
//     chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
//     sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     content: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("PrivateMessage", privateMessageSchema);



// C:\Users\harsh\Desktop\Community-Connect\server\models\PrivateMessage.js 

import mongoose from "mongoose";

const privateMessageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("PrivateMessage", privateMessageSchema);
