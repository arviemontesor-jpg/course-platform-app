import React from 'react';

const Button: React.FC<{ variant?: string; size?: string; children: React.ReactNode }> = ({ variant = 'default', size = 'default', children }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none';
  const variantStyles = {
    default: 'bg-blue-500 text-white',
    outline: 'border border-blue-500 text-blue-500',
    ghost: 'bg-transparent text-blue-500',
  }[variant];
  const sizeStyles = {
    default: '',
    sm: 'text-sm',
    lg: 'text-lg',
  }[size];
  return <button className={`${baseStyles} ${variantStyles} ${sizeStyles}`}>{children}</button>;
};

export default Button;
