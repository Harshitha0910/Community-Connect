// C:\Users\harsh\Desktop\Community-Connect\client\src\components\messages\ChatList.jsx 

import { useState, useEffect } from "react";

const ChatList = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!user || !user.token) {
      console.log("User not logged in");
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        console.log("User fetch failed", err);
      }
    };

    fetchUsers();
  }, []);

  // Handle live search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(value)
    );

    setFilteredUsers(filtered);
  };

  return (
    <div className="p-4 h-full flex flex-col">
      <h2 className="font-bold text-lg mb-3">Residents</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search residents..."
        value={search}
        onChange={handleSearch}
        className="mb-4 px-3 py-2 border rounded w-full"
      />

      {/* 🗂 Resident List */}
      <div className="flex-1 overflow-y-auto">
        {filteredUsers.length === 0 ? (
          <p>No residents found.</p>
        ) : (
          filteredUsers.map((u) => (
            <button
              key={u._id}
              onClick={() => setSelectedUser(u)}
              className="block w-full text-left bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded mb-2"
            >
              {u.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatList;
