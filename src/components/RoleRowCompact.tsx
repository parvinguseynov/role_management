import React from 'react';
import * as Icons from 'lucide-react';
import { Role } from '../types';
import { AvatarGroup } from './AvatarGroup';

interface RoleRowCompactProps {
  role: Role;
  onClick: () => void;
}

export const RoleRowCompact: React.FC<RoleRowCompactProps> = ({ role, onClick }) => {
  const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  // Truncate description for list view
  const shortDescription = role.description.length > 80
    ? role.description.substring(0, 80) + '...'
    : role.description;

  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:shadow-sm transition-all cursor-pointer"
    >
      <div className="flex items-center gap-4">
        {/* Icon + Name */}
        <div className="flex items-center gap-3 min-w-[200px]">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${role.color}10` }}
          >
            <div style={{ color: role.color }}>
              {IconComponent && <IconComponent className="w-5 h-5" />}
            </div>
          </div>
          <h3 className="text-sm font-semibold text-slate-900">{role.name}</h3>
        </div>

        {/* Description */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-600 truncate">{shortDescription}</p>
        </div>

        {/* Members */}
        <div className="flex items-center gap-3 min-w-[180px]">
          <AvatarGroup members={role.members} max={4} total={role.memberCount} />
          <span className="text-sm text-slate-500 whitespace-nowrap">
            {role.memberCount} {role.memberCount === 1 ? 'member' : 'members'}
          </span>
        </div>

        {/* View Link */}
        <a className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium whitespace-nowrap ml-4">
          View →
        </a>
      </div>
    </div>
  );
};
