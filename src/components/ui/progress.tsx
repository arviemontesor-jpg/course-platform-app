import React from 'react';

const Progress: React.FC<{ value: number }> = ({ value }) => (
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div>
        <span className="text-xs text-gray-500">{value}%</span>
      </div>
    </div>
    <div className="block w-full bg-gray-300 rounded-full">
      <div className={`bg-blue-600 h-full rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default Progress;
