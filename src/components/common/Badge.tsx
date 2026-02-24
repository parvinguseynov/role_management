import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'owner' | 'admin' | 'hr' | 'finance' | 'member' | 'default';
  className?: string;
}

const variantClasses = {
  owner: 'bg-purple-100 text-purple-700',
  admin: 'bg-blue-100 text-blue-700',
  hr: 'bg-pink-100 text-pink-700',
  finance: 'bg-amber-100 text-amber-700',
  member: 'bg-gray-100 text-gray-700',
  default: 'bg-gray-100 text-gray-700',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
