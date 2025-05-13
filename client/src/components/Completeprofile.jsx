import React from "react";

import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send complete profile data to backend

    navigate("/login");
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-3xl w-full font-mono bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-start text-sm font-semibold text-gray-700">Full Name</label>
            <input type="text" id="fullName" className="w-11/12 px-0 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-0" />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-start text-sm font-semibold text-gray-700">Mobile No</label>
            <input type="tel" id="mobile" className="w-11/12 px-0 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-0" />
          </div>

          <div>
            <label htmlFor="email" className="block text-start text-sm font-semibold text-gray-700">Email</label>
            <input type="email" id="email" className="w-11/12 px-0 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-0" />
          </div>

          <div>
            <label htmlFor="flatNo" className="block text-start text-sm font-semibold text-gray-700">Flat No</label>
            <input type="text" id="flatNo" className="w-11/12 px-0 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-0" />
          </div>

          <div>
            <label htmlFor="blockNo" className="block text-start text-sm font-semibold text-gray-700">Block No</label>
            <input type="text" id="blockNo" className="w-11/12 px-0 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-900 focus:ring-0" />
          </div>

          {/* Role Selection */}
          <div>
              <p className="text-sm text-start font-bold text-gray-700 mb-2">Select Role:</p>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="role" value="owner"  className="mr-2" />
                  Owner
                </label>
                <label className="flex items-center">
                  <input type="radio" name="role" value="tenant"  className="mr-2" />
                 Tenant
                </label>
              </div>
            </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CompleteProfile;
