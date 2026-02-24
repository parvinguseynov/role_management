import React from 'react';
import * as Icons from 'lucide-react';
import { ScopedRole } from '../types/scopedRoles';
import { AvatarGroup } from './AvatarGroup';

interface ScopedRoleCardProps {
  role: ScopedRole;
  onClick: () => void;
}

export const ScopedRoleCard: React.FC<ScopedRoleCardProps> = ({ role, onClick }) => {
  const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  // Convert assignments to members format for AvatarGroup
  const members = role.assignments.map(a => ({
    id: a.id,
    name: a.name,
    email: a.email,
    avatar: a.avatar,
    title: a.title,
    location: a.department,
    scopedRoles: [],
  }));

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md hover:-translate-y-px transition-all cursor-pointer flex flex-col items-center text-center"
    >
      {/* Icon Container */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 p-5"
        style={{ backgroundColor: `${role.color}10` }}
      >
        <div style={{ color: role.color }}>
          {IconComponent && <IconComponent className="w-6 h-6" />}
        </div>
      </div>

      {/* Role Name */}
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {role.name}
      </h3>

      {/* Avatar Group */}
      <div className="mb-3">
        <AvatarGroup members={members} max={5} total={role.assignments.length} />
      </div>

      {/* Assignment Count */}
      <p className="text-sm text-slate-500 mb-4">
        {role.assignments.length} assigned
      </p>

      {/* View Assignments Link */}
      <a className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
        View assignments →
      </a>
    </div>
  );
};
