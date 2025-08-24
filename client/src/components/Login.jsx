// client\src\components\Login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");




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
      // Save full user info to localStorage
      const userInfo = {
        _id: data.user._id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
        token: data.token,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      if (data.user.role === "resident") {
        navigate("/resident-dashboard");
      } else if (data.user.role === "admin") {
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
