// import { useState } from "react";
// import React from "react";

// const duesData = [
//   {
//     id: 1,
//     name: "David Johnson",
//     email: "david.johnson@example.com",
//     total: "₹1500",
//     details: ["Water - ₹300", "Maintenance - ₹800", "Gas - ₹400"],
//     dueDate: "Apr 30, 2025",
//     status: "Paid",
//     paymentDate: "Apr 20, 2025",
//   },
//   {
//     id: 2,
//     name: "David Johnson",
//     email: "jane.smith@example.com",
//     total: "₹1750",
//     details: ["Water - ₹300", "Maintenance - ₹800", "Gas - ₹400", "Repair Fund - ₹250"],
//     dueDate: "Apr 30, 2025",
//     status: "Unpaid",
//     paymentDate: "-",
//   },
// ];

// const StatusBadge = ({ status }) => {
//   const color = status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
//   return <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{status}</span>;
// };

// const MaintenanceTable = () => {
//   const [expandedRow, setExpandedRow] = useState(null);

//   const toggleDetails = (id) => {
//     setExpandedRow((prev) => (prev === id ? null : id));
//   };

//   const selectedDues = duesData.find((d) => d.id === expandedRow);

//   return (
//     <div className="relative p-4">
//       <h2 className="text-2xl font-semibold mb-4">Maintenance Dues</h2>

//       {/* Details Card Overlay */}
//       {selectedDues && (
//         <div className="fixed inset-0 flex justify-center items-center z-20">
//           <div className="bg-white shadow-xl rounded-lg w-96 p-6 border border-gray-200 relative">
//             <div className="flex justify-between items-start mb-3">
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">Details for {selectedDues.name}</h3>
//                 <p className="text-sm text-gray-500">{selectedDues.email}</p>
//               </div>
//               <button
//                 onClick={() => setExpandedRow(null)}
//                 className="text-red-600 text-sm hover:underline"
//               >
//                 Close
//               </button>
//             </div>
//             <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
//               {selectedDues.details.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//             <div className="mt-4 text-sm text-gray-600">
//               <p><strong>Due Date:</strong> {selectedDues.dueDate}</p>
//               <p><strong>Status:</strong> {selectedDues.status}</p>
//               <p><strong>Payment Date:</strong> {selectedDues.paymentDate}</p>
//               <p><strong>Total:</strong> {selectedDues.total}</p>
//             </div>
//           </div>
//         </div>
//       )}

      {/* Table */}
    //   <div className="bg-white rounded-lg shadow overflow-x-auto">
    //     <table className="min-w-full divide-y divide-gray-200">
    //       <thead className="bg-gray-50">
    //       <tr>
    //         {/* <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Resident</th> */}
    //         <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Total</th>
    //         <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Due Date</th>
    //         <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Status</th>
    //         <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Payment Date</th>
    //         <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Action</th>
    //       </tr>
    //         </thead>
    //         <tbody className="divide-y divide-gray-100">
    //           {duesData.map((dues) => (
    //             <tr key={dues.id}>
    //               {/* <td className="text-left px-6 py-4 text-sm font-medium">{dues.name}</td> */}
    //               <td className="text-left px-6 py-4 text-sm text-gray-700">{dues.total}</td>
    //               <td className="text-left px-6 py-4 text-sm text-gray-700">{dues.dueDate}</td>
    //               <td className="text-left px-6 py-4 text-sm"><StatusBadge status={dues.status} /></td>
    //               <td className="text-left px-6 py-4 text-sm text-gray-700">{dues.paymentDate}</td>
    //               <td className="text-left px-6 py-4">
    //                 <button
    //                   onClick={() => toggleDetails(dues.id)}
    //                   className="text-blue-600 hover:underline text-sm"
    //                 >
    //                   View Details
    //                 </button>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody> 
    //     </table>
    // </div>
//     </div>
//   );
// };

// export default MaintenanceTable;

// import { useState } from "react";
// import React from "react";

// // Sample resident dues data
// const duesData = [
//   {
//     id: 1,
//     name: "David Johnson",
//     email: "david.johnson@example.com",
//     month: "April 2025",
//     total: 1500,
//     details: [
//       { category: "Water", amount: 300 },
//       { category: "Maintenance", amount: 800 },
//       { category: "Gas", amount: 400 }
//     ],
//     dueDate: "Apr 30, 2025",
//     status: "Paid",
//     paymentDate: "Apr 20, 2025",
//   },
//   {
//     id: 2,
//     name: "David Johnson",
//     email: "david.johnson@example.com",
//     month: "May 2025",
//     total: 1750,
//     details: [
//       { category: "Water", amount: 300 },
//       { category: "Maintenance", amount: 800 },
//       { category: "Gas", amount: 400 },
//       { category: "Repair Fund", amount: 250 }
//     ],
//     dueDate: "May 31, 2025",
//     status: "Unpaid",
//     paymentDate: "-",
//   },
// ];

// const StatusBadge = ({ status }) => {
//   const color = status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
//   return <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{status}</span>;
// };

// const MaintenanceTable = () => {
//   const [expandedRow, setExpandedRow] = useState(null);

//   const toggleDetails = (id) => {
//     setExpandedRow((prev) => (prev === id ? null : id));
//   };

//   const selectedDues = duesData.find((d) => d.id === expandedRow);

//   return (
//     <div className="relative p-4">
//       <h2 className="text-2xl font-semibold mb-4">Maintenance Dues</h2>

//       {/* Floating Detail Card */}
//       {selectedDues && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//           <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6 relative">
//             <button
//               onClick={() => setExpandedRow(null)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
//             >
//               ×
//             </button>
//             <h3 className="text-xl font-semibold mb-1 text-gray-800">
//               Details for {selectedDues.month}
//             </h3>
//             <p className="text-sm text-gray-500 mb-3">{selectedDues.name} &middot; {selectedDues.email}</p>
//             <ul className="list-disc pl-5 mb-4 text-gray-700 text-sm space-y-1">
//               {selectedDues.details.map((item, idx) => (
//                 <li key={idx}>{item.category} - ₹{item.amount}</li>
//               ))}
//             </ul>
//             <div className="text-sm text-gray-600 space-y-1">
//               <p><strong>Due Date:</strong> {selectedDues.dueDate}</p>
//               <p><strong>Status:</strong> {selectedDues.status}</p>
//               <p><strong>Payment Date:</strong> {selectedDues.paymentDate}</p>
//               <p><strong>Total:</strong> ₹{selectedDues.total}</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow overflow-x-auto">
//         <table className="min-w-full table-fixed">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500">Month</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500">Total</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500">Due Date</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500">Status</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500">Payment Date</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {duesData.map((dues) => (
//               <tr key={dues.id}>
//                 <td className="px-6 py-4 text-sm text-gray-700">{dues.month}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700">₹{dues.total}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700">{dues.dueDate}</td>
//                 <td className="px-6 py-4 text-sm"><StatusBadge status={dues.status} /></td>
//                 <td className="px-6 py-4 text-sm text-gray-700">{dues.paymentDate}</td>
//                 <td className="px-6 py-4 text-sm">
//                   <button
//                     onClick={() => toggleDetails(dues.id)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>


              


//       </div>
//     </div>
//   );
// };

// export default MaintenanceTable;



// import { useState } from "react";
// import React from "react";

// // Sample resident dues data
// const duesData = [
//   {
//     id: 1,
//     name: "David Johnson",
//     email: "david.johnson@example.com",
//     month: "April 2025",
//     total: 1500,
//     details: [
//       { category: "Water", amount: 300 },
//       { category: "Maintenance", amount: 800 },
//       { category: "Gas", amount: 400 }
//     ],
//     dueDate: "Apr 30, 2025",
//     status: "Paid",
//     paymentDate: "Apr 20, 2025",
//   },
//   {
//     id: 2,
//     name: "David Johnson",
//     email: "david.johnson@example.com",
//     month: "May 2025",
//     total: 1750,
//     details: [
//       { category: "Water", amount: 300 },
//       { category: "Maintenance", amount: 800 },
//       { category: "Gas", amount: 400 },
//       { category: "Repair Fund", amount: 250 }
//     ],
//     dueDate: "May 31, 2025",
//     status: "Unpaid",
//     paymentDate: "-",
//   },
// ];

// // Status Badge Component
// const StatusBadge = ({ status }) => {
//   const color = status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
//   return <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{status}</span>;
// };

// // Detail Card Component
// const DetailCard = ({ selectedDues, close }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//       <div className="bg-white shadow-2xl rounded-lg w-full max-w-md p-6 border border-gray-300">
//         <button
//           onClick={close}
//           className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
//         >
//           ×
//         </button>
//         <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-2">
//           Details for {selectedDues.month}
//         </h3>
//         <p className="text-sm text-gray-500 mb-3">{selectedDues.name} &middot; {selectedDues.email}</p>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-sm text-left">Category</th>
//               <th className="border border-gray-300 px-4 py-2 text-sm text-left">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {selectedDues.details.map((item, idx) => (
//               <tr key={idx} className="border-b border-gray-300">
//                 <td className="border border-gray-300 px-4 py-2 text-sm">{item.category}</td>
//                 <td className="border border-gray-300 px-4 py-2 text-sm">₹{item.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="mt-4 text-sm space-y-1 text-gray-600">
//           <p><strong>Due Date:</strong> {selectedDues.dueDate}</p>
//           <p><strong>Status:</strong> {selectedDues.status}</p>
//           <p><strong>Payment Date:</strong> {selectedDues.paymentDate}</p>
//           <p><strong>Total:</strong> ₹{selectedDues.total}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Maintenance Table Component
// const MaintenanceTable = () => {
//   const [expandedRow, setExpandedRow] = useState(null);

//   const toggleDetails = (id) => {
//     setExpandedRow((prev) => (prev === id ? null : id));
//   };

//   const selectedDues = duesData.find((d) => d.id === expandedRow);

//   return (
//     <div className="relative p-4">
//       <h2 className="text-2xl font-semibold mb-4">Maintenance Dues</h2>

//       {/* Floating Detail Card */}
//       {selectedDues && <DetailCard selectedDues={selectedDues} close={() => setExpandedRow(null)} />}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-300">
//         <table className="min-w-full table-fixed">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">Month</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">Total</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">Due Date</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">Status</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">Payment Date</th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {duesData.map((dues) => (
//               <tr key={dues.id}>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{dues.month}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">₹{dues.total}</td>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{dues.dueDate}</td>
//                 <td className="px-6 py-4 text-sm border border-gray-300"><StatusBadge status={dues.status} /></td>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{dues.paymentDate}</td>
//                 <td className="px-6 py-4 text-sm border border-gray-300">
//                   <button
//                     onClick={() => toggleDetails(dues.id)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MaintenanceTable;





// import React, { useState, useEffect } from "react";

// // Status Badge Component
// const StatusBadge = ({ status }) => {
//   const color =
//     status === "Paid"
//       ? "bg-green-100 text-green-700"
//       : "bg-red-100 text-red-700";
//   return (
//     <span
//       className={`px-2 py-1 rounded text-sm font-medium whitespace-nowrap ${color}`}
//     >
//       {status}
//     </span>
//   );
// };

// // Detail Card Component
// const DetailCard = ({ selectedDues, close }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//       <div className="bg-white shadow-2xl rounded-lg w-full max-w-md p-6 border border-gray-300 relative">
//         <button
//           onClick={close}
//           className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
//         >
//           ×
//         </button>
//         <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-2">
//           Details for {selectedDues.month}
//         </h3>
//         <p className="text-sm text-gray-500 mb-3">
//           {selectedDues?.resident?.name} &middot;{" "}
//           {selectedDues?.resident?.email}
//         </p>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-sm text-left">
//                 Category
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-sm text-left">
//                 Amount
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {selectedDues.details.map((item, idx) => (
//               <tr key={idx} className="border-b border-gray-300">
//                 <td className="border border-gray-300 px-4 py-2 text-sm">
//                   {item.category}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-sm">
//                   ₹{item.amount}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="mt-4 text-sm space-y-1 text-gray-600">
//           <p>
//             <strong>Due Date:</strong>{" "}
//             {new Date(selectedDues.dueDate).toLocaleDateString()}
//           </p>
//           <p>
//             <strong>Status:</strong> {selectedDues.status}
//           </p>
//           <p>
//             <strong>Payment Date:</strong>{" "}
//             {selectedDues.paymentDate
//               ? new Date(selectedDues.paymentDate).toLocaleDateString()
//               : "-"}
//           </p>
//           <p>
//             <strong>Total:</strong> ₹{selectedDues.total}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Component
// const MaintenanceTable = () => {
//   const [duesData, setDuesData] = useState([]);
//   const [expandedRow, setExpandedRow] = useState(null);

//   const fetchDues = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:5000/api/dues/mine", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (!res.ok) throw new Error("Failed to fetch dues");

//       const data = await res.json();
//       setDuesData(data);
//     } catch (err) {
//       console.error("Error fetching dues:", err);
//       alert("Failed to load maintenance dues.");
//     }
//   };

//   useEffect(() => {
//     fetchDues();
//   }, []);

//   const toggleDetails = (id) => {
//     setExpandedRow((prev) => (prev === id ? null : id));
//   };

//   const selectedDues = duesData.find((d) => d._id === expandedRow);

//   return (
//     <div className="relative p-4 font-sans">
//       <h2 className="text-2xl font-semibold mb-4">Maintenance Dues</h2>

//       {/* Floating Detail Card */}
//       {selectedDues && (
//         <DetailCard selectedDues={selectedDues} close={() => setExpandedRow(null)} />
//       )}

//       {/* Table */}
//       <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-300">
//         <table className="min-w-full table-fixed">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">
//                 Month
//               </th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">
//                 Total
//               </th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">
//                 Due Date
//               </th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">
//                 Payment Date
//               </th>
//               <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border border-gray-300">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {duesData.map((dues) => (
//               <tr key={dues._id}>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
//                   {dues.month}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
//                   ₹{dues.total}
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
//                   {new Date(dues.dueDate).toLocaleDateString()}
//                 </td>
//                 <td className="px-6 py-4 text-sm border border-gray-300">
//                   <StatusBadge status={dues.status} />
//                 </td>
//                 <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
//                   {dues.paymentDate
//                     ? new Date(dues.paymentDate).toLocaleDateString()
//                     : "-"}
//                 </td>
//                 <td className="px-6 py-4 text-sm border border-gray-300">
//                   <button
//                     onClick={() => toggleDetails(dues._id)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {duesData.length === 0 && (
//               <tr>
//                 <td colSpan="6" className="text-center text-gray-500 py-4">
//                   No dues found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MaintenanceTable;


import React, { useState, useEffect } from "react";

// Remove static duesData

const StatusBadge = ({ status }) => {
  const color = status === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  return <span className={`px-2 py-1 rounded text-sm font-medium ${color}`}>{status}</span>;
};

// const DetailCard = ({ selectedDues, close }) => (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
//     <div className="bg-white shadow-2xl rounded-lg w-full max-w-md p-6 border border-gray-300">
//       <button
//         onClick={close}
//         className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
//       >
//         ×
//       </button>
//       <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-2">
//         Details for {selectedDues.month}
//       </h3>
//       <p className="text-sm text-gray-500 mb-3">Status: {selectedDues.status}</p>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="border border-gray-300 px-4 py-2 text-sm text-left">Category</th>
//             <th className="border border-gray-300 px-4 py-2 text-sm text-left">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {selectedDues.charges.map((item, idx) => (
//             <tr key={idx}>
//               <td className="border px-4 py-2 text-sm">{item.category}</td>
//               <td className="border px-4 py-2 text-sm">₹{item.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4 text-sm text-gray-600 space-y-1">
//         <p><strong>Due Date:</strong> {new Date(selectedDues.dueDate).toLocaleDateString()}</p>
//         <p><strong>Total:</strong> ₹{selectedDues.total}</p>
//         <p><strong>Payment Date:</strong> {selectedDues.paymentDate ? new Date(selectedDues.paymentDate).toLocaleDateString() : "-"}</p>
//       </div>
//     </div>
//   </div>
// );

const DetailCard = ({ selectedDues, close }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 relative border border-gray-300 animate-fade-in">
      {/* Close Button in top right */}
      <button
        onClick={close}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>

      <h3 className="text-xl font-semibold mb-2 text-gray-800 border-b pb-2">
        Dues for {selectedDues.month}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        <strong>Status:</strong> {selectedDues.status}
      </p>

      <table className="w-full border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-1 text-left text-sm">Category</th>
            <th className="border px-3 py-1 text-left text-sm">Amount</th>
          </tr>
        </thead>
        <tbody>
          {selectedDues.charges.map((item, idx) => (
            <tr key={idx}>
              <td className="border px-3 py-1 text-sm">{item.category}</td>
              <td className="border px-3 py-1 text-sm">₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>Due Date:</strong> {new Date(selectedDues.dueDate).toLocaleDateString()}</p>
        <p><strong>Total:</strong> ₹{selectedDues.total}</p>
        <p><strong>Payment Date:</strong> {selectedDues.paymentDate ? new Date(selectedDues.paymentDate).toLocaleDateString() : "-"}</p>
      </div>

      {/* Optional close button at bottom */}
      <div className="mt-4 text-right">
        <button
          onClick={close}
          className="px-4 py-1 text-sm font-medium bg-zinc-800 text-white rounded hover:bg-zinc-700"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);


const MaintenanceTable = () => {
  const [duesData, setDuesData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

  const fetchDues = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/dues/mine", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to fetch dues");

      const data = await res.json();
      setDuesData(data);
    } catch (err) {
      console.error("Error fetching maintenance dues:", err.message);
      alert("Failed to load maintenance dues.");
    }
  };

  useEffect(() => {
    fetchDues();
  }, []);

  const selectedDues = duesData.find((d) => d._id === expandedRow);

  return (
    <div className="relative p-4">
      <h2 className="text-2xl font-semibold mb-4">Maintenance Dues</h2>

      {selectedDues && <DetailCard selectedDues={selectedDues} close={() => setExpandedRow(null)} />}

      <div className="bg-white rounded-lg shadow overflow-x-auto border border-gray-300">
        <table className="min-w-full table-fixed">
          {/* <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border">Month</th>
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border">Total</th>
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border">Due Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border">Payment Date</th>
              <th className="px-6 py-3 text-sm font-medium text-left text-gray-500 border">Action</th>
            </tr>
          </thead> */}

          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-center align-middle text-gray-600 border border-gray-300">Month</th>
              <th className="px-6 py-3 text-sm font-medium text-center align-middle text-gray-600 border border-gray-300">Total</th>
              <th className="px-6 py-3 text-sm font-medium text-center align-middle text-gray-600 border border-gray-300">Due Date</th>
              <th className="px-6 py-3 text-sm font-medium text-center align-middle text-gray-600 border border-gray-300">Status</th>
              <th className="px-6 py-3 text-sm font-medium text-center align-middle text-gray-600 border border-gray-300">Payment Date</th>
              <th className="px-6 py-3 text-sm font-medium text-center align-middle text-gray-600 border border-gray-300">Action</th>
            </tr>
          </thead>
 
          <tbody>
            {duesData.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-4">No dues found.</td>
              </tr>
            ) : (
              duesData.map((dues) => (
                <tr key={dues._id}>
                  <td className="px-6 py-4 text-sm border">{dues.month}</td>
                  <td className="px-6 py-4 text-sm border">₹{dues.total}</td>
                  <td className="px-6 py-4 text-sm border">{new Date(dues.dueDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-sm border"><StatusBadge status={dues.status} /></td>
                  <td className="px-6 py-4 text-sm border">
                    {dues.paymentDate ? new Date(dues.paymentDate).toLocaleDateString() : "-"}
                  </td>
                  <td className="px-6 py-4 text-sm border">
                    <button onClick={() => setExpandedRow(dues._id)} className="text-blue-600 hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenanceTable;
