import React from 'react';

export const Table: React.FC = ({ children }) => <table className="min-w-full">{children}</table>;
export const TableHeader: React.FC = ({ children }) => <thead className="bg-gray-200">{children}</thead>;
export const TableBody: React.FC = ({ children }) => <tbody>{children}</tbody>;
export const TableHead: React.FC = ({ children }) => <tr>{children}</tr>;
export const TableRow: React.FC = ({ children }) => <tr>{children}</tr>;
export const TableCell: React.FC = ({ children }) => <td className="border px-4 py-2">{children}</td>;
