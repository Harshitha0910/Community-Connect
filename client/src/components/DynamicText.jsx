import React, { useEffect, useState } from 'react';

const DynamicText = () => {
  const texts = [
    "📢 Check Notices",
    "🛠️ Raise a Complaint",
    "📊 See Community Stats",
    "💬 Post in the Forum",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true); // trigger fade in
      }, 300);
    }, 1000); // every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-2xl font-semibold text-center 
      bg-gradient-to-r from-blue-900 via-yellow-300 to-green-600 
      bg-clip-text text-transparent 
      transition-opacity duration-500 ease-in-out 
      ${fade ? 'opacity-100' : 'opacity-0'}
    `}>
      {texts[index]}
    </div>
  );
};

export default DynamicText;
