import React from 'react';
import * as Icons from 'lucide-react';
import { ScopedRole } from '../types/scopedRoles';
import { AvatarGroup } from './AvatarGroup';
import { ChevronRight } from 'lucide-react';

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
      className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex items-center justify-center mb-4">
        <div
          className="w-16 h-16 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${role.color}15` }}
        >
          <div style={{ color: role.color }}>
            {IconComponent && <IconComponent className="w-8 h-8" />}
          </div>
        </div>
      </div>

      <h3 className="text-base font-semibold text-slate-900 mb-4 text-center">
        {role.name}
      </h3>

      <div className="flex justify-center mb-4">
        <AvatarGroup members={members} max={5} total={role.assignments.length} />
      </div>

      <p className="text-sm text-slate-600 mb-4 text-center">
        {role.assignments.length} assigned
      </p>

      <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
        View assignments
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
