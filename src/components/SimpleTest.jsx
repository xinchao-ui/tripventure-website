import React from 'react';

const SimpleTest = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-8">Simple Tailwind Test</h1>
      
      {/* Test basic styling */}
      <div className="mb-4 p-4 border border-gray-300 rounded-lg">
        <p className="font-medium">This should have a border</p>
      </div>
      
      {/* Test colors */}
      <div className="mb-4">
        <p className="text-red-500 mb-2">This text should be red</p>
        <p className="text-blue-500 mb-2">This text should be blue</p>
        <p className="text-green-500 mb-2">This text should be green</p>
      </div>
      
      {/* Test background colors */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="h-20 bg-red-500 rounded-lg flex items-center justify-center text-white">Red</div>
        <div className="h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white">Blue</div>
        <div className="h-20 bg-green-500 rounded-lg flex items-center justify-center text-white">Green</div>
      </div>
      
      {/* Test buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Blue Button</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Green Button</button>
      </div>
    </div>
  );
};

export default SimpleTest;
