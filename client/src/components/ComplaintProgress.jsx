// client\src\components\ComplaintProgress.jsx

import React from 'react';

const steps = ['Submitted', 'Under Review', 'In Progress', 'Resolved', 'Closed'];

const ComplaintProgress = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto my-4 px-4">
      {steps.map((step, index) => (
        <div key={index} className="flex-1">
          {/* Circle */}
          <div className="relative flex items-center justify-center">
            <div
              className={`w-6 h-6 rounded-full border-2 text-xs flex items-center justify-center z-10 ${
                index < currentStep
                  ? 'bg-blue-500 border-blue-500 text-white'
                  : 'bg-white border-gray-300 text-gray-400'
              }`}
            >
              {index + 1}
            </div>

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute top-1/2 left-full w-full h-0.5 transform -translate-y-1/2 ${
                  index < currentStep - 1 ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </div>

          {/* Label */}
          <p
            className={`text-center text-xs mt-2 ${
              index < currentStep ? 'text-blue-600 font-semibold' : 'text-gray-400'
            }`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ComplaintProgress;
