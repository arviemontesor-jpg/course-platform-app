import React from 'react';

export const Card: React.FC = ({ children }) => { return <div className="bg-white shadow rounded p-4">{children}</div>; };

export const CardHeader: React.FC = ({ children }) => <div className="font-bold text-lg">{children}</div>;
export const CardTitle: React.FC = ({ children }) => <h2 className="text-xl">{children}</h2>;
export const CardDescription: React.FC = ({ children }) => <p>{children}</p>;
export const CardContent: React.FC = ({ children }) => <div>{children}</div>;
export const CardFooter: React.FC = ({ children }) => <div className="mt-4">{children}</div>;
