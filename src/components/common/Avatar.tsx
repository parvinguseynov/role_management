import React from 'react';

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
};

const colors = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-red-500',
  'bg-indigo-500',
  'bg-teal-500',
];

const getColorFromInitials = (initials: string): string => {
  const charCode = initials.charCodeAt(0) + initials.charCodeAt(initials.length - 1);
  return colors[charCode % colors.length];
};

export const Avatar: React.FC<AvatarProps> = ({ initials, size = 'md', className = '' }) => {
  const bgColor = getColorFromInitials(initials);

  return (
    <div
      className={`${sizeClasses[size]} ${bgColor} rounded-full flex items-center justify-center text-white font-semibold ${className}`}
    >
      {initials}
    </div>
  );
};
