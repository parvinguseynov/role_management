import React from 'react';
import * as Icons from 'lucide-react';
import { Role } from '../types';
import { AvatarGroup } from './AvatarGroup';
import { Badge } from './Badge';
import { ChevronRight } from 'lucide-react';

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, onClick }) => {
  const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${role.color}15` }}
        >
          <div style={{ color: role.color }}>
            {IconComponent && <IconComponent className="w-6 h-6" />}
          </div>
        </div>
        <Badge variant="success">Active</Badge>
      </div>

      <h3 className="text-base font-semibold text-slate-900 mb-3">{role.name}</h3>

      <div className="mb-4">
        <AvatarGroup members={role.members} max={5} total={role.memberCount} />
      </div>

      <p className="text-sm text-slate-600 mb-4">
        {role.memberCount} {role.memberCount === 1 ? 'member' : 'members'}
      </p>

      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
        View details
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
