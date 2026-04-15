import React from 'react';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">{children}</span>
);

export default Badge;
