// // // // client\src\components\ForumPostCard.jsx 
// // // import React, { useState } from "react";
// // // import socket from "../socket";

// // // const ForumPostCard = ({ post }) => {
// // //   const user = JSON.parse(localStorage.getItem("userInfo"));
// // //   const [likes, setLikes] = useState(post.reactions.likes || []);
// // //   const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);

// // //   const handleReaction = async (action) => {
// // //     try {
// // //       const res = await fetch(`http://localhost:5000/api/forum/${post._id}/react`, {
// // //         method: "PATCH",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           Authorization: `Bearer ${user?.token}`,
// // //         },
// // //         body: JSON.stringify({ action }),
// // //       });

// // //       const data = await res.json();
// // //       setLikes(data.reactions.likes);
// // //       setDislikes(data.reactions.dislikes);

// // //       // Emit socket update if you want live updates
// // //       socket.emit("post reacted", data);
// // //     } catch (err) {
// // //       console.error("Reaction error:", err);
// // //     }
// // //   };

// // //   const isLiked = likes.includes(user._id);
// // //   const isDisliked = dislikes.includes(user._id);

// // //   return (
// // //     <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
// // //       <div className="flex items-center justify-between mb-3">
// // //         <div className="flex items-center gap-2">
// // //           <img
// // //             src={post.author.pic || "https://via.placeholder.com/40"}
// // //             alt={post.author.name}
// // //             className="w-10 h-10 rounded-full object-cover"
// // //           />
// // //           <div>
// // //             <h4 className="font-bold text-gray-800">{post.author.name}</h4>
// // //             <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
// // //           </div>
// // //         </div>
// // //         <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">{post.type}</span>
// // //       </div>

// // //       <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
// // //       <p className="text-gray-700 mb-2">{post.content}</p>
// // //       {post.image && <img src={post.image} alt="post" className="rounded-lg mb-2 max-h-64 object-cover" />}

// // //       <div className="flex items-center gap-4 mt-3">
// // //         <button
// // //           onClick={() => handleReaction("like")}
// // //           className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
// // //             isLiked ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
// // //           }`}
// // //         >
// // //           👍 {likes.length}
// // //         </button>

// // //         <button
// // //           onClick={() => handleReaction("dislike")}
// // //           className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
// // //             isDisliked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"
// // //           }`}
// // //         >
// // //           👎 {dislikes.length}
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ForumPostCard; 


// // import React, { useState } from "react";
// // import socket from "../socket";

// // const ForumPostCard = ({ post }) => {
// //   const user = JSON.parse(localStorage.getItem("userInfo"));
// //   const [likes, setLikes] = useState(post.reactions.likes || []);
// //   const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);

// //   const handleReaction = async (action) => {
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/forum/${post._id}/react`, {
// //         method: "PATCH",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${user?.token}`,
// //         },
// //         body: JSON.stringify({ action }),
// //       });

// //       const data = await res.json();
// //       setLikes(data.reactions.likes);
// //       setDislikes(data.reactions.dislikes);
// //       socket.emit("post reacted", data);
// //     } catch (err) {
// //       console.error("Reaction error:", err);
// //     }
// //   }; 

// //   const isLiked = likes.includes(user._id);
// //   const isDisliked = dislikes.includes(user._id);

// //   // Determine border color by type
// //   const borderColor =
// //     post.type === "poll"
// //       ? "border-blue-500"
// //       : post.type === "discussion"
// //       ? "border-green-500"
// //       : "border-yellow-500";

// //   return (
// //     <div className={`bg-white p-5 rounded-lg shadow-md border-2 ${borderColor}`}>
// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-3">
// //         <div className="flex items-center gap-2">
// //           <img
// //             src={post.author.pic || "https://via.placeholder.com/40"}
// //             alt={post.author.name}
// //             className="w-10 h-10 rounded-full object-cover"
// //           />
// //           <div>
// //             <h4 className="font-bold text-gray-800">{post.author.name}</h4>
// //             <p className="text-xs text-gray-500">
// //               {new Date(post.createdAt).toLocaleString()}
// //             </p>
// //           </div>
// //         </div>
// //         <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">
// //           {post.type}
// //         </span>
// //       </div>

// //       {/* Content */}
// //       <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
// //       <p className="text-gray-700 mb-2">{post.content}</p>
// //       {post.image && (
// //         <img
// //           src={post.image}
// //           alt="post"
// //           className="rounded-lg mb-2 max-h-64 object-cover"
// //         />
// //       )}

// //       {/* Poll Options */}
// //       {post.type === "poll" && post.pollOptions?.length > 0 && (
// //         <div className="mt-4">
// //           <h4 className="font-medium mb-2">Options:</h4>
// //           <ul className="space-y-2">
// //             {post.pollOptions.map((option, index) => (
// //               <li
// //                 key={index}
// //                 className="flex justify-between items-center p-2 border rounded-lg bg-gray-50"
// //               >
// //                 <span>{option.option}</span>
// //                 <span className="text-sm text-gray-500">
// //                   {option.votes.length} votes
// //                 </span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )} 




// //       {/* Reactions */}
// //       <div className="flex items-center gap-4 mt-3">
// //         <button
// //           onClick={() => handleReaction("like")}
// //           className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
// //             isLiked ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
// //           }`}
// //         >
// //           👍 {likes.length}
// //         </button>

// //         <button
// //           onClick={() => handleReaction("dislike")}
// //           className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
// //             isDisliked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"
// //           }`}
// //         >
// //           👎 {dislikes.length}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ForumPostCard;



// // client/src/components/ForumPostCard.jsx
// import React, { useState } from "react";
// import socket from "../socket";

// const ForumPostCard = ({ post }) => {
//   const user = JSON.parse(localStorage.getItem("userInfo"));
//   const [likes, setLikes] = useState(post.reactions.likes || []);
//   const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);
//   const [pollOptions, setPollOptions] = useState(post.pollOptions || []);

//   const handleReaction = async (action) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/forum/${post._id}/react`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user?.token}`,
//           },
//           body: JSON.stringify({ action }),
//         }
//       );

//       const data = await res.json();
//       setLikes(data.reactions.likes);
//       setDislikes(data.reactions.dislikes);
//       socket.emit("post reacted", data);
//     } catch (err) {
//       console.error("Reaction error:", err);
//     }
//   };

//   const handlePollVote = async (optionIndex) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/forum/${post._id}/vote`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user?.token}`,
//           },
//           body: JSON.stringify({ optionIndex }),
//         }
//       );

//       const data = await res.json();
//       setPollOptions(data.pollOptions);
//       socket.emit("post updated", data);
//     } catch (err) {
//       console.error("Poll vote error:", err);
//     }
//   };

//   const isLiked = likes.includes(user._id);
//   const isDisliked = dislikes.includes(user._id);

//   const borderColor =
//     post.type === "poll"
//       ? "border-blue-500"
//       : post.type === "discussion"
//       ? "border-green-500"
//       : "border-yellow-500";

//   return (
//     <div className={`bg-white p-5 rounded-lg shadow-md border-2 ${borderColor}`}>
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <div className="flex items-center gap-2">
//           <img
//             src={post.author.pic || "https://via.placeholder.com/40"}
//             alt={post.author.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h4 className="font-bold text-gray-800">{post.author.name}</h4>
//             <p className="text-xs text-gray-500">
//               {new Date(post.createdAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//         <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">
//           {post.type}
//         </span>
//       </div>

//       {/* Content */}
//       <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
//       <p className="text-gray-700 mb-2">{post.content}</p>
//       {post.image && (
//         <img
//           src={post.image}
//           alt="post"
//           className="rounded-lg mb-2 max-h-64 object-cover"
//         />
//       )}

//       {/* Poll Options */}
//       {post.type === "poll" && pollOptions.length > 0 && (
//         <div className="mt-4">
//           {/* <h4 className="font-medium text-left mb-2">Options:</h4> */}
//           <ul className="space-y-2">
//             {pollOptions.map((option, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center p-2 border rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handlePollVote(index)}
//               >
//                 <span>{option.option}</span>
//                 <span className="text-sm text-gray-500">
//                   {option.votes.length} votes
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Reactions */}
//       <div className="flex items-center gap-4 mt-3">
//         <button
//           onClick={() => handleReaction("like")}
//           className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
//             isLiked ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
//           }`}
//         >
//           👍 {likes.length}
//         </button>

//         <button
//           onClick={() => handleReaction("dislike")}
//           className={`flex items-center gap-1 px-3 py-1 rounded-lg ${
//             isDisliked ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"
//           }`}
//         >
//           👎 {dislikes.length}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ForumPostCard;
 

// client/src/components/ForumPostCard.jsx
// import React, { useState } from "react";
// import socket from "../socket";

// const ForumPostCard = ({ post }) => {
//   const user = JSON.parse(localStorage.getItem("userInfo"));
//   const [likes, setLikes] = useState(post.reactions.likes || []);
//   const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);
//   const [pollOptions, setPollOptions] = useState(post.pollOptions || []);
//   const [selectedOption, setSelectedOption] = useState(null);

//   // --- Reactions setup (extendable)
//   const reactionTypes = [
//     { key: "like", label: "Like", icon: <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//   <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd"/>
// </svg>
// },
//     { key: "dislike", label: "Dislike", icon: <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//   <path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"/>
// </svg>
//  },
//     { key: "heart", label: "Heart", icon: <svg class="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//   <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
// </svg>
//  }, 
//   { key: "plus", label: "Plus", icon: <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14m-7 7V5"/>
// </svg>
// }, 
//   ]; 


//   const handleReaction = async (action) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/forum/${post._id}/react`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user?.token}`,
//           },
//           body: JSON.stringify({ action }),
//         }
//       );

//       const data = await res.json();
//       setLikes(data.reactions.likes);
//       setDislikes(data.reactions.dislikes);
//       socket.emit("post reacted", data);
//     } catch (err) {
//       console.error("Reaction error:", err);
//     }
//   };

//   const handlePollVote = async (optionIndex) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/forum/${post._id}/vote`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${user?.token}`,
//           },
//           body: JSON.stringify({ optionIndex }),
//         }
//       );

//       const data = await res.json();
//       setPollOptions(data.pollOptions);
//       setSelectedOption(optionIndex);
//       socket.emit("post updated", data);
//     } catch (err) {
//       console.error("Poll vote error:", err);
//     }
//   };

//   const isLiked = likes.includes(user._id);
//   const isDisliked = dislikes.includes(user._id);

//   const borderColor =
//     post.type === "poll"
//       ? "border-blue-500"
//       : post.type === "discussion"
//       ? "border-green-500"
//       : "border-yellow-500";

//   return (
//     <div
//       className={`bg-white p-5 rounded-lg shadow-md border-2 font-mono ${borderColor}`}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between mb-3">
//         <div className="flex items-center gap-2">
//           <img
//             src={post.author.pic || "https://via.placeholder.com/40"}
//             alt={post.author.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h4 className="font-bold text-gray-800">{post.author.name}</h4>
//             <p className="text-xs text-gray-500">
//               {new Date(post.createdAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//         <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">
//           {post.type}
//         </span>
//       </div>

//       {/* Content */}
//       <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
//       <p className="text-gray-700 mb-2">{post.content}</p>
//       {post.image && (
//         <img
//           src={post.image}
//           alt="post"
//           className="rounded-lg mb-2 max-h-64 object-cover"
//         />
//       )}
      
 
//       {/* Poll Options */}
//       {post.type === "poll" && pollOptions.length > 0 && (
//         <div className="mt-4">
//           <ul className="space-y-2">
//             {pollOptions.map((option, index) => {
//               const isSelected = selectedOption === index;
//               return (
//                 <li
//                   key={index}
//                   className={`flex justify-between items-center p-2 border rounded-lg cursor-pointer transition-all duration-100 
//                     ${isSelected 
//                       ? "bg-black text-white scale-105" 
//                       : "bg-gray-50 hover:bg-gray-100 text-black"
//                     }`}
//                   onClick={() => handlePollVote(index)}
//                   onAnimationEnd={(e) => e.currentTarget.classList.remove('scale-105')}
//                 >
//                   <span className="font-mono">{option.option}</span>
//                   <span className="text-sm font-mono">
//                     {option.votes.length} votes
//                   </span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       )}

//       {/* Reactions */}
//       <div className="flex items-center gap-4 mt-3">
//         {reactionTypes.map((reaction) => {
//           const isActive =
//             reaction.key === "like"
//               ? isLiked
//               : reaction.key === "dislike"
//               ? isDisliked
//               : false;

//           return (
//             <button
//               key={reaction.key}
//               onClick={() => handleReaction(reaction.key)}
//               className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
//                 isActive
//                   ? "bg-slate-300 text-white"
//                   : " text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {/* Replace with Lucide icons */}
//               <span className="w-5 h-5">{reaction.icon}</span>
//               {/* <span className="text-sm">{reaction.label}</span> */}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ForumPostCard;















// client/src/components/ForumPostCard.jsx
import React, { useState } from "react";
import socket from "../socket";

const ForumPostCard = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  // Local reaction state
  const [likes, setLikes] = useState(post.reactions.likes || []);
  const [dislikes, setDislikes] = useState(post.reactions.dislikes || []);
  // Poll state
  const [pollOptions, setPollOptions] = useState(post.pollOptions || []);
  const [selectedOption, setSelectedOption] = useState(null);

  // ---- helpers
  const uid = user?._id;
  const containsUser = (arr, id) =>
    (arr || []).some((x) => String(x?._id ?? x) === String(id));

  const isLiked = containsUser(likes, uid);
  const isDisliked = containsUser(dislikes, uid);

  // ---- reactions (hollow + solid, no backgrounds)
  const icons = {
    like: {
      hollow: (
        // <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        //   <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a2 2 0 0 0-2-2H7v6h7zM5 21h2V9H5v12z" />
        // </svg> 
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
        </svg>

      ),
      solid: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clip-rule="evenodd"/>
        </svg>

      ),
    },
    dislike: {
      hollow: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"/>
        </svg>

      ),
      solid: (
        <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"/>
        </svg>
      ),
    },
  };

  const handleReaction = async (action) => {
    try {
      const res = await fetch(`http://localhost:5000/api/forum/${post._id}/react`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ action }), // "like" or "dislike"
      });

      const data = await res.json();
      setLikes(data.reactions.likes || []);
      setDislikes(data.reactions.dislikes || []);
      socket.emit("post reacted", data);
    } catch (err) {
      console.error("Reaction error:", err);
    }
  };

  const handlePollVote = async (optionIndex) => {
    try {
      const res = await fetch(`http://localhost:5000/api/forum/${post._id}/vote`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify({ optionIndex }),
      });

      const data = await res.json();
      setPollOptions(data.pollOptions || []);
      setSelectedOption(optionIndex);

      // brief highlight then return to normal (handled by classes below)
      socket.emit("post updated", data);
    } catch (err) {
      console.error("Poll vote error:", err);
    }
  };

  // const borderColor =
  //   post.type === "poll"
  //     ? "border-gray-500"
  //     : post.type === "discussion"
  //     ? "border-green-500"
  //     : "border-yellow-500"; 

  const borderColor="border-gray-600";     

  return (
    <div className={`bg-white p-5 rounded-lg shadow-md border-2  font-mono ${borderColor} `}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={post.author.pic || "https://via.placeholder.com/40"}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-800">{post.author.name}</h4>
            <p className="text-xs text-left text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <span className="text-sm px-2 py-1 rounded-lg bg-gray-100 text-gray-700 uppercase">{post.type}</span>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-left text-lg mb-2">{post.title}</h3>
      <p className="text-gray-700 text-left mb-2">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="post" className="rounded-lg mb-2 max-h-64 object-cover" />
      )}

      {/* Poll Options */}
      {post.type === "poll" && (pollOptions?.length ?? 0) > 0 && (
        <div className="mt-4">
          <ul className="space-y-2">
            {pollOptions.map((option, index) => {
              const isSelected = selectedOption === index;
              return (
                <li
                  key={index}
                  className={`flex justify-between items-center p-2 border rounded-lg cursor-pointer transition-all duration-100 ${
                    isSelected
                      ? "bg-black text-white"
                      : "bg-gray-50 hover:bg-gray-100 text-black"
                  }`}
                  onClick={() => handlePollVote(index)}
                >
                  <span>{option.option}</span>
                  <span className={`text-sm ${isSelected ? "text-gray-200" : "text-gray-500"}`}>
                    {option.votes.length} votes
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Reactions (hollow -> solid, no background) */}
      <div className="flex items-center gap-6 mt-4">
        <button
          type="button"
          onClick={() => handleReaction("like")}
          aria-pressed={isLiked}
          className="flex items-center gap-2 px-1 py-1 hover:scale-105 transition"
        >
          <span className="w-6 h-6">{isLiked ? icons.like.solid : icons.like.hollow}</span>
          <span className="text-sm text-gray-700">{likes.length}</span>
        </button>

        <button
          type="button"
          onClick={() => handleReaction("dislike")}
          aria-pressed={isDisliked}
          className="flex items-center gap-2 px-1 py-1 hover:scale-105 transition"
        >
          <span className="w-6 h-6">{isDisliked ? icons.dislike.solid : icons.dislike.hollow}</span>
          <span className="text-sm text-gray-700">{dislikes.length}</span>
        </button>
      </div>
    </div>
  );
};

export default ForumPostCard;
