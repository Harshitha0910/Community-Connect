// // components/Login.jsx
// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//     const navigate = useNavigate();
//       const [role, setRole] = useState("resident");
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         // Add logic here to send signup data to your backend
    
//         if (role === "resident") {
//           navigate("/resident-dashboard");
//         } else {
//           navigate("/admin-dashboard"); // or wherever your admin lands
//         }
//       };

//       const [fullName, setFullName] = useState("");
//     const [password, setPassword] = useState("");

//   return (
//     <section id="signup" className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-6xl font-mono w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* LEFT SIDE - Sign Up Form */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Welcome back! 👋</h2>

//           <form onSubmit={handleSubmit} className="mt-8 space-y-5 font-mono">
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block mb-1 text-start font-bold text-sm  text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 value={fullName}
//                 placeholder="Full Name"
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block mb-1 text-start text-sm font-bold text-gray-700">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
//               />
//             </div>

//             {/* Role Selection */}
//             <div>
//               <p className="text-sm text-start font-bold text-gray-700 mb-2">Select Role:</p>
//               <div className="flex gap-4">
//                 <label className="flex items-center">
//                   <input type="radio" name="role" value="resident" checked={role === "resident"} onChange={(e) => setRole(e.target.value)} className="mr-2" />
//                   Resident
//                 </label>
//                 <label className="flex items-center">
//                   <input type="radio" name="role" value="admin" checked={role === "admin"} onChange={(e) => setRole(e.target.value)} className="mr-2" />
//                   Admin
//                 </label>
//               </div>
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//               />
//               <label htmlFor="terms" className="ml-2 font-bold text-sm text-gray-700"> Remember me 
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-indigo-700 font-mono hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
//             >
//               Login 
//             </button>

//             {/* Login Link */}
//             <p className="text-sm text-center text-gray-600">
//               Don't have an account?<Link to='/signup' className="text-indigo-600 font-medium">Sign Up Now</Link>
              
//             </p>
//           </form>
//         </div>

//         {/* RIGHT SIDE - Visual */}
//         <div className="hidden md:block font-mono">
//           <img
//             src="src\assets\signup.jpg" 
//             alt="Preview"
//             className="rounded-2xl shadow-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:5000/api/users/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       localStorage.setItem("token", data.token);
  //       if (data.role === "resident") {
  //         navigate("/resident-dashboard");
  //       } else {
  //         navigate("/admin-dashboard");
  //       }
  //     } else {
  //       setError(data.message || "Login failed.");
  //     }
  //   } catch (err) {
  //     setError("Something went wrong. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role); // optional

      // ✅ Get role from backend response
      if (data.user.role === "resident") {
        navigate("/resident-dashboard");
      } else if (data.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        setError("Invalid role. Contact admin.");
      }
    } else {
      setError(data.message || "Login failed.");
    }
  } catch (err) {
    setError("Something went wrong. Please try again.");
  }
};


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-6xl font-mono w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome back! 👋</h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5 font-mono">
            <div>
              <label htmlFor="email" className="block mb-1 font-bold text-sm text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-bold text-sm text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

            <button type="submit" className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-lg">
              Login
            </button>

            <p className="text-sm text-center text-gray-600">
              Don’t have an account?
              <Link to='/signup' className="text-indigo-600 font-medium ml-1">Sign Up Now</Link>
            </p>
          </form>
        </div>

        <div className="hidden md:block">
          <img src="src/assets/signup.jpg" alt="Login visual" className="rounded-2xl shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Login;
