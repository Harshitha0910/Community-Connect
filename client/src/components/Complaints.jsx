import React, { useState } from 'react';
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
  const progressStages = ['Submitted', 'Under Review', 'In Progress', 'Resolved'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComplaint = {
      ...form,
      id: Date.now(),
      statusStep: 0,
      createdAt: new Date().toISOString().slice(0, 10),
    };

    setComplaints([newComplaint, ...complaints]);
    setForm({ title: '', description: '', category: '', image: null });
  };

  return (
    <div className="flex flex-col gap-6 font-mono p-4">
      
      {/* Submit Complaint Card */}
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
                <option key={cat}>{cat}</option>
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

      {/* My Complaints Card */}
      <div className="w-full bg-white shadow rounded-md p-4">
        <h2 className="text-xl font-semibold mb-4">My Complaints</h2>
        {complaints.length === 0 ? (
          <p className="text-gray-500">No complaints submitted yet.</p>
        ) : (
          <ul className="space-y-4">
            {complaints.map((c) => (
              <li key={c.id} className="border p-3 rounded shadow-sm bg-gray-50">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{c.title}</h4>
                  <span className="text-sm text-gray-500">{c.createdAt}</span>
                </div>
                <p className="text-sm mt-1 text-left">{c.description}</p>
                <div className="text-xs text-left text-gray-600 mt-1">
                  Category: {c.category}
                </div>
                {c.image && (
                  <div className="mt-3">
                    <img
                      src={c.image}
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
