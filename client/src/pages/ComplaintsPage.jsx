import React from 'react';
import Complaints from '../components/Complaints';

const ComplaintsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl  font-mono font-bold mb-6">Complaints Portal</h1>
        <Complaints />
      </div>
    </div>
  );
};

export default ComplaintsPage;
