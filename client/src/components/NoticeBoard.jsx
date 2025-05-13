import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const mockNotices = [
  {
    id: 1,
    title: 'Water Supply Shutdown',
    content: 'Water supply will be shut down for maintenance from 10 AM to 4 PM on May 5th.',
    category: 'Maintenance',
    postedOn: '2025-05-01',
  },
  {
    id: 2,
    title: 'Fire Drill on Sunday',
    content: 'A fire drill will be conducted in all blocks on Sunday, May 6th, at 11 AM. Participation is mandatory.',
    category: 'Emergency',
    postedOn: '2025-05-02',
  },
  {
    id: 3,
    title: 'Yoga Session Registration Open',
    content: 'Join our community yoga sessions every morning. Register now at the clubhouse.',
    category: 'Events',
    postedOn: '2025-05-01',
  },
  {
    id: 4,
    title: 'Weekly Cleaning Schedule',
    content: 'Routine cleaning of all common areas including the lobby, staircases, and terrace will take place every Saturday between 9 AM and 12 PM. Please cooperate with the staff during this time.',
    category: 'General',
    postedOn: '2025-05-03',
  }, 
];


const categoryColors = {
  Maintenance: 'border-l-4 border-yellow-600  text-yellow-800 font-mono font-semibold',
  Emergency: 'border-l-4 border-red-600 text-red-800 font-mono font-semibold',
  Events: 'border-l-4 border-green-600  text-green-800 font-mono font-semibold',
  General: 'border-l-4 border-blue-600 text-blue-800 font-mono font-semibold',
};

const NoticeBoard = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedNotice, setSelectedNotice] = useState(null);

  const filteredNotices = mockNotices.filter(notice => {
    const matchCategory = filter === 'All' || notice.category === filter;
    const matchSearch = notice.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  }).sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50">
      <h1 className="text-2xl font-bold font-mono mb-4">Notice Board</h1>

      {/* Filters */}
      <div className="flex font-mono flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <input
          type="text"
          placeholder="Search notices..."
          className="p-2 border rounded-md w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded-md w-full sm:w-1/4 "
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Emergency">Emergency</option>
          <option value="Events">Events</option>
          <option value="General">General</option>
        </select>
      </div>

      {/* Notice List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (

        <div
            key={notice.id}
            className={`p-4 rounded-lg font-mono shadow-sm bg-white border ${categoryColors[notice.category] || 'border-l-4 border-gray-300'}`}
            >
            <div className="flex justify-between items-start">
            <h2 className="text-lg font-semibold">{notice.title}</h2>
            <div className="text-xs text-gray-500">{notice.postedOn}</div>
            </div>
            <p className="text-sm text-gray-700 mt-1 text-left">{notice.content}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
