// C:\Users\harsh\Desktop\Community-Connect\client\src\components\messages\MessageBox.jsx

import { useState } from "react";
import socket from "../../socket";

const MessageBox = ({ receiverId, setMessages }) => {
  const [content, setContent] = useState("");
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleSend = async () => {
    if (!content.trim()) return;

    const res = await fetch("/api/private-messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ receiverId, content }),
    });

    const message = await res.json();

    socket.emit("new message", message);
    setMessages((prev) => [...prev, message]);
    setContent("");
  };

  return (
    <div className="p-4 bg-white border-t flex">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message..."
        className="flex-1 px-3 py-2 border rounded-l"
      />
      <button onClick={handleSend} className="bg-zinc-800 text-white px-5 rounded-r">
        Send
      </button>
    </div>
  );
};

export default MessageBox;
