import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const classes = variant === 'success'
    ? 'bg-green-100 text-green-700'
    : 'bg-slate-100 text-slate-700';

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${classes}`}>
      {variant === 'success' && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
      {children}
    </span>
  );
};
