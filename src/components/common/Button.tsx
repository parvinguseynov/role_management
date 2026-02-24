import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  className?: string;
  title?: string;
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed',
  secondary: 'bg-white text-text-primary border border-border hover:bg-gray-50',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-gray-100',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  title,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`px-4 py-2 rounded-md font-medium text-sm transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
