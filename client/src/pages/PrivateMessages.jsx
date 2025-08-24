// C:\Users\harsh\Desktop\Community-Connect\client\src\pages\PrivateMessages.jsx

// import React, { useState, useEffect } from "react";
// import ChatList from "../components/messages/ChatList";
// import PrivateChat from "../components/messages/PrivateChat";
// import socket from "../socket";

// const PrivateMessages = () => {
//   const [selectedUser, setSelectedUser] = useState(null);
//   const user = JSON.parse(localStorage.getItem("userInfo"));

//   useEffect(() => {
//     if (user) {
//       socket.emit("setup", user);
//       socket.on("connected", () => console.log("✅ Socket connected"));
//     }
//   }, []);

//   return (
//     <section className="flex h-screen font-mono bg-gray-100">
//       <div className="w-1/3 border-r bg-white overflow-y-auto">
//         <ChatList setSelectedUser={setSelectedUser} />
//       </div>
//       <div className="flex-1">
//         {selectedUser ? <PrivateChat selectedUser={selectedUser} /> : <p className="p-4">Select a user to chat</p>}
//       </div>
//     </section>
//   );
// };

// export default PrivateMessages;



import { useState, useEffect } from "react";
import ChatList from "../components/messages/ChatList";
import PrivateChat from "../components/messages/PrivateChat";
import socket from "../socket";

const PrivateMessages = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (user) {
      socket.emit("setup", user);
      socket.on("connected", () => console.log("✅ Socket connected"));
    }
  }, []);

  return (
    <section className="flex h-screen font-mono bg-gray-100">
      <div className="w-1/3 border-r bg-white overflow-y-auto">
        <ChatList setSelectedUser={setSelectedUser} />
      </div>
      <div className="flex-1">
        {selectedUser ? <PrivateChat selectedUser={selectedUser} /> : <p className="p-4">Select a user to chat</p>}
      </div>
    </section>
  );
};

export default PrivateMessages;
