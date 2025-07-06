// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState("resident");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add logic here to send signup data to your backend

//     if (role === "resident") {
//       navigate("/complete-profile");
//     } else {
//       navigate("/login"); // or wherever your admin lands
//     }
//   };

//   return (


//     <section id="signup" className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-6xl font-mono w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Join CommunityConnect 👋</h2>
//           <p className="mt-2 text-gray-600">Welcome! Let's get you set up.</p>

//           <form className="mt-8 space-y-5 font-mono" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block mb-1 text-start font-bold text-sm  text-gray-700">Full Name</label>
//               <input type="text" id="fullName" placeholder="Your full name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block mb-1 text-start text-sm font-bold text-gray-700">Password</label>
//               <input type="password" id="password" placeholder="Password (min. 8 characters)" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="block mb-1 text-start text-sm font-bold text-gray-700">Confirm Password</label>
//               <input type="password" id="confirmPassword" placeholder="Confirm password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" />
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
//               <input type="checkbox" id="terms" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
//               <label htmlFor="terms" className="ml-2 font-bold text-sm text-gray-700">
//                 I agree to the <a href="#" className="text-indigo-600 underline">Terms & Conditions</a>
//               </label>
//             </div>

//             <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200">
//               Sign Up
//             </button>

//             <p className="text-sm text-center text-gray-600">
//               Already have an account?
//               <Link to='/login' className="text-indigo-600 font-medium">Login now</Link>
//             </p>
//           </form>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden md:block font-mono">
//           <img src="src/assets/signup.jpg" alt="Preview" className="rounded-2xl shadow-xl" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;



// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState("resident");

//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!fullName || !email || !password || !confirmPassword) {
//       setError("Please fill in all fields.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/users/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: fullName,
//           email,
//           password,
//           role,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (role === "resident") {
//           navigate("/complete-profile");
//         } else {
//           navigate("/login");
//         }
//       } else {
//         setError(data.message || "Registration failed.");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-6xl font-mono w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900">Join CommunityConnect 👋</h2>
//           <p className="mt-2 text-gray-600">Welcome! Let's get you set up.</p>

//           <form className="mt-8 space-y-5 font-mono" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block mb-1 text-start font-bold text-sm text-gray-700">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 placeholder="Your full name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block mb-1 text-start font-bold text-sm text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block mb-1 text-start font-bold text-sm text-gray-700">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Password (min. 8 characters)"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
//               />
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label htmlFor="confirmPassword" className="block mb-1 text-start font-bold text-sm text-gray-700">Confirm Password</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
//               />
//             </div>

//             {/* Role Selection */}
//             <div>
//               <p className="text-sm text-start font-bold text-gray-700 mb-2">Select Role:</p>
//               <div className="flex gap-4">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="role"
//                     value="resident"
//                     checked={role === "resident"}
//                     onChange={(e) => setRole(e.target.value)}
//                     className="mr-2"
//                   />
//                   Resident
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="role"
//                     value="admin"
//                     checked={role === "admin"}
//                     onChange={(e) => setRole(e.target.value)}
//                     className="mr-2"
//                   />
//                   Admin
//                 </label>
//               </div>
//             </div>

//             {/* Terms Checkbox */}
//             <div className="flex items-center">
//               <input type="checkbox" id="terms" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
//               <label htmlFor="terms" className="ml-2 font-bold text-sm text-gray-700">
//                 I agree to the <a href="#" className="text-indigo-600 underline">Terms & Conditions</a>
//               </label>
//             </div>

//             {/* Error Display */}
//             {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

//             <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200">
//               Sign Up
//             </button>

//             <p className="text-sm text-center text-gray-600">
//               Already have an account?
//               <Link to="/login" className="text-indigo-600 font-medium ml-1">Login now</Link>
//             </p>
//           </form>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="hidden md:block font-mono">
//           <img src="src/assets/signup.jpg" alt="Preview" className="rounded-2xl shadow-xl" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignUp;










import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("resident");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Optionally store token here if backend sends it
        // localStorage.setItem("token", data.token);

        if (role === "resident") {
          navigate("/complete-profile");
        } else {
          navigate("/login");
        }
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-6xl font-mono w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Join CommunityConnect 👋</h2>
          <p className="mt-2 text-gray-600">Welcome! Let's get you set up.</p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block mb-1 text-sm font-bold text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-bold text-gray-700">Email</label>
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
              <label htmlFor="password" className="block mb-1 text-sm font-bold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block mb-1 text-sm font-bold text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-700 mb-2">Select Role:</p>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="resident"
                    checked={role === "resident"}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  Resident
                </label>
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === "admin"}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  Admin
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="h-4 w-4" />
              <label htmlFor="terms" className="ml-2 font-bold text-sm text-gray-700">
                I agree to the <a href="#" className="text-indigo-600 underline">Terms & Conditions</a>
              </label>
            </div>

            {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-600">
              Already have an account? <Link to="/login" className="text-indigo-600">Login now</Link>
            </p>
          </form>
        </div>

        <div className="hidden md:block">
          <img src="src/assets/signup.jpg" alt="Signup visual" className="rounded-2xl shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
