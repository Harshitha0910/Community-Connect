// C:\Users\harsh\Desktop\Community-Connect\client\src\components\messages\PrivateChat.jsx

import { useEffect, useState } from "react";
import socket from "../../socket";
import MessageBox from "./MessageBox";

const PrivateChat = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch(`/api/private-messages/${selectedUser._id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();

    socket.on("message received", (newMessage) => {
      if (
        newMessage.sender._id === selectedUser._id ||
        newMessage.receiver._id === selectedUser._id
      ) {
        setMessages((prev) => [...prev, newMessage]);
      }
    });

    return () => {
      socket.off("message received");
    };
  }, [selectedUser]);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-white font-bold border-b">{selectedUser.name}</div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg) => {
          const isMe = msg.sender._id === user._id;

          return (
            <div
              key={msg._id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                  isMe
                    ? "bg-black text-white"
                    : "bg-white text-black border"
                }`}
              >
                {msg.content}
              </div>
            </div>
          );
        })}
      </div>

      <MessageBox receiverId={selectedUser._id} setMessages={setMessages} />
    </div>
  );
};

export default PrivateChat;
