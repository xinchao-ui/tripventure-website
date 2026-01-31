import React from 'react';

const TestColors = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-8">Tailwind CSS Color Test</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="w-20 h-20 bg-blue-500 rounded-lg"></div>
        <div className="w-20 h-20 bg-purple-500 rounded-lg"></div>
        <div className="w-20 h-20 bg-green-500 rounded-lg"></div>
        <div className="w-20 h-20 bg-red-500 rounded-lg"></div>
        <div className="w-20 h-20 bg-yellow-500 rounded-lg"></div>
        <div className="w-20 h-20 bg-orange-500 rounded-lg"></div>
      </div>
      
      <p className="mt-8 text-blue-600 font-medium">This text should be blue</p>
      <p className="mt-2 text-purple-600 font-medium">This text should be purple</p>
      
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Blue Button
      </button>
    </div>
  );
};

export default TestColors;
