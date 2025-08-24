// C:\Users\harsh\Desktop\Community-Connect\client\src\socket.js 

// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000", {
//   transports: ["websocket"],
// });

// export default socket;

import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],
});

export default socket;
