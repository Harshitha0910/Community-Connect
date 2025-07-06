// import React, { useState } from 'react';
// import ComplaintProgress from './ComplaintProgress';

// const Complaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     category: '',
//     image: null,
//   });

//   const categories = ['Water', 'Electricity', 'Cleanliness', 'Security', 'Noise'];
//   const progressStages = ['Submitted', 'Under Review', 'In Progress', 'Resolved'];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm({ ...form, image: URL.createObjectURL(file) });
//     }
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   const newComplaint = {
//   //     ...form,
//   //     id: Date.now(),
//   //     statusStep: 0,
//   //     createdAt: new Date().toISOString().slice(0, 10),
//   //   };

//   //   setComplaints([newComplaint, ...complaints]);
//   //   setForm({ title: '', description: '', category: '', image: null });
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   const token = localStorage.getItem("token"); // Assuming token is stored in localStorage after login

//   const formData = new FormData();
//   formData.append("title", form.title);
//   formData.append("description", form.description);
//   formData.append("category", form.category);
//   if (form.image) {
//     formData.append("image", form.image);
//   }

//   try {
//     const response = await fetch("http://localhost:5000/api/complaints", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Complaint submitted!");
//       setComplaints([data, ...complaints]); // Add new complaint to list
//       setForm({ title: "", description: "", category: "", image: null });
//     } else {
//       alert(data.message || "Failed to submit complaint.");
//     }
//   } catch (err) {
//     console.error("Error:", err);
//     alert("Error submitting complaint.");
//   }
// };
 

//   return (
//     <div className="flex flex-col gap-6 font-mono p-4">
      
//       {/* Submit Complaint Card */}
//       <div className="w-full bg-white shadow rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-4">Submit a Complaint</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             placeholder="Complaint title"
//             className="w-full border p-2 rounded"
//             required
//           />

//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Describe the issue..."
//             className="w-full border p-2 rounded"
//             rows="3"
//             required
//           />

//           <div className="flex flex-col md:flex-row gap-4">
//             <select
//               name="category"
//               value={form.category}
//               onChange={handleChange}
//               className="w-full md:w-1/2 border p-2 rounded"
//               required
//             >
//               <option value="">Select category</option>
//               {categories.map((cat) => (
//                 <option key={cat}>{cat}</option>
//               ))}
//             </select>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full md:w-1/2 text-sm border border-gray-300 rounded p-2"
//             />
//           </div>

//           <div className="flex justify-center mt-4">
//             <button
//               type="submit"
//               className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-zinc-900 rounded-lg transition-all duration-200 hover:bg-zinc-900 hover:text-white group"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* My Complaints Card */}
//       <div className="w-full bg-white shadow rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-4">My Complaints</h2>
//         {complaints.length === 0 ? (
//           <p className="text-gray-500">No complaints submitted yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {complaints.map((c) => (
//               <li key={c.id} className="border p-3 rounded shadow-sm bg-gray-50">
//                 <div className="flex justify-between items-center">
//                   <h4 className="font-semibold">{c.title}</h4>
//                   <span className="text-sm text-gray-500">{c.createdAt}</span>
//                 </div>
//                 <p className="text-sm mt-1 text-left">{c.description}</p>
//                 <div className="text-xs text-left text-gray-600 mt-1">
//                   Category: {c.category}
//                 </div>
//                 {c.image && (
//                   <div className="mt-3">
//                     <img
//                       src={c.image}
//                       alt="Complaint proof"
//                       className="max-h-40 object-contain border rounded"
//                     />
//                   </div>
//                 )}
//                 <div className="mt-3">
//                   <ComplaintProgress currentStep={c.statusStep} />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Complaints;

// 





// import React, { useState, useEffect } from 'react';
// import ComplaintProgress from './ComplaintProgress';

// const Complaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [form, setForm] = useState({
//     title: '',
//     description: '',
//     category: '',
//     imageFile: null,
//   });

//   const categories = ['Water', 'Electricity', 'Cleanliness', 'Security', 'Noise'];

//   // Load existing complaints from backend
//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/complaints/mine", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         const data = await res.json();
//         setComplaints(data);
//       } catch (err) {
//         console.error("Error fetching complaints:", err);
//       }
//     };
//     fetchComplaints();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm({ ...form, imageFile: file });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", form.title);
//     formData.append("description", form.description);
//     formData.append("category", form.category);
//     if (form.imageFile) {
//       formData.append("image", form.imageFile);
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/complaints", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: formData,
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         alert(err.message || "Error submitting complaint");
//         return;
//       }

//       const newComplaint = await res.json();
//       setComplaints([newComplaint, ...complaints]);
//       setForm({ title: '', description: '', category: '', imageFile: null });
//       alert("Complaint submitted successfully!");
//     } catch (err) {
//       alert("Server error. Try again later.");
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 font-mono p-4">

//       {/* Complaint Submission */}
//       <div className="w-full bg-white shadow rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-4">Submit a Complaint</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             type="text"
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             placeholder="Complaint title"
//             className="w-full border p-2 rounded"
//             required
//           />

//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Describe the issue..."
//             className="w-full border p-2 rounded"
//             rows="3"
//             required
//           />

//           <div className="flex flex-col md:flex-row gap-4">
//             <select
//               name="category"
//               value={form.category}
//               onChange={handleChange}
//               className="w-full md:w-1/2 border p-2 rounded"
//               required
//             >
//               <option value="">Select category</option>
//               {categories.map((cat) => (
//                 <option key={cat}>{cat}</option>
//               ))}
//             </select>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full md:w-1/2 text-sm border border-gray-300 rounded p-2"
//             />
//           </div>

//           <div className="flex justify-center mt-4">
//             <button
//               type="submit"
//               className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-zinc-900 rounded-lg transition-all duration-200 hover:bg-zinc-900 hover:text-white group"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Complaint List */}
//       <div className="w-full bg-white shadow rounded-md p-4">
//         <h2 className="text-xl font-semibold mb-4">My Complaints</h2>
//         {complaints.length === 0 ? (
//           <p className="text-gray-500">No complaints submitted yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {complaints.map((c) => (
//               <li key={c._id} className="border p-3 rounded shadow-sm bg-gray-50">
//                 <div className="flex justify-between items-center">
//                   <h4 className="font-semibold">{c.title}</h4>
//                   <span className="text-sm text-gray-500">
//                     {new Date(c.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <p className="text-sm mt-1 text-left">{c.description}</p>
//                 <div className="text-xs text-left text-gray-600 mt-1">
//                   Category: {c.category}
//                 </div>
//                 {c.image && (
//                   <div className="mt-3">
//                     <img
//                       src={`http://localhost:5000/${c.image}`}
//                       alt="Complaint proof"
//                       className="max-h-40 object-contain border rounded"
//                     />
//                   </div>
//                 )}
//                 <div className="mt-3">
//                   <ComplaintProgress currentStep={c.statusStep} />
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Complaints;






import React, { useState, useEffect } from 'react';
import ComplaintProgress from './ComplaintProgress';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
  });

  const categories = ['Water', 'Electricity', 'Cleanliness', 'Security', 'Noise'];

  // 🔁 Fetch complaints from backend
  const fetchMyComplaints = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/complaints/mine", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch complaints");
      }

      const data = await response.json();
      setComplaints(data);
    } catch (err) {
      console.error("Error fetching complaints:", err.message);
      alert("Could not load complaints");
    }
  };

  // 🔃 Load once on component mount
  // useEffect(() => {
  //   fetchMyComplaints();
  // }, []);


  useEffect(() => {
      fetchMyComplaints(); // initial load

      const interval = setInterval(() => {
        fetchMyComplaints(); // refresh every 10 seconds
      }, 10000);

      return () => clearInterval(interval); // cleanup
    }, []);
 


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    if (form.image) formData.append("image", form.image);

    try {
      const response = await fetch("http://localhost:5000/api/complaints", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit complaint");
      }

      await fetchMyComplaints(); // refresh list after new complaint
      setForm({ title: '', description: '', category: '', image: null });
    } catch (err) {
      console.error(err);
      alert("Server error. Could not submit complaint.");
    }
  };

  return (
    <div className="flex flex-col gap-6 font-mono p-4">
      
      {/* Submit Complaint Form */}
      <div className="w-full bg-white shadow rounded-md p-4">
        <h2 className="text-xl font-semibold mb-4">Submit a Complaint</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Complaint title"
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the issue..."
            className="w-full border p-2 rounded"
            rows="3"
            required
          />

          <div className="flex flex-col md:flex-row gap-4">
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full md:w-1/2 border p-2 rounded"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full md:w-1/2 text-sm border border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-900 border border-zinc-900 rounded-lg transition-all duration-200 hover:bg-zinc-900 hover:text-white group"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <div className="flex justify-end mb-2">
        <button
          onClick={fetchMyComplaints}
          className="text-sm px-4 py-1 border border-gray-600 rounded hover:bg-gray-200"
        >
          🔁 Reload Complaints
        </button>
      </div> */}
       

       <button onClick={fetchMyComplaints}>🔁 Reload Complaints</button>
 


 

      {/* My Complaints List */}
      <div className="w-full bg-white shadow rounded-md p-4">
        <h2 className="text-xl font-semibold mb-4">My Complaints</h2>
        {complaints.length === 0 ? (
          <p className="text-gray-500">No complaints submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {complaints.map((c) => (
              <li key={c._id} className="border p-3 rounded shadow-sm bg-gray-50">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{c.title}</h4>
                  {/* <h5> console.log("Complaints:", complaints);</h5> */}
                  <span className="text-sm text-gray-500"> 
                    {new Date(c.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm mt-1 text-left">{c.description}</p>
                <div className="text-xs text-left text-gray-600 mt-1">
                  Category: {c.category}
                </div>
                {/* {c.image && (
                  <div className="mt-3">
                    <img
                      src={`http://localhost:5000/uploads/${c.image}`}
                      alt="Complaint proof"
                      className="max-h-40 object-contain border rounded"
                    />
                  </div>
                )} */}
                {c.image && (
                  <div className="mt-3">
                    <img
                      src={
                        c.image.startsWith("http") || c.image.startsWith("data:")
                          ? c.image
                          : `http://localhost:5000/${c.image.replace(/^uploads[\\/]/, "uploads/")}`
                      }
                      alt="Complaint proof"
                      className="max-h-40 object-contain border rounded"
                    />
                  </div>
                )}

                <div className="mt-3">
                  <ComplaintProgress currentStep={c.statusStep} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Complaints;
