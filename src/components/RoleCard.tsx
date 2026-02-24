import React from 'react';
import * as Icons from 'lucide-react';
import { Role } from '../types';
import { AvatarGroup } from './AvatarGroup';

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, onClick }) => {
  const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  // Truncate description to 60 characters
  const shortDescription = role.description.length > 60
    ? role.description.substring(0, 60) + '...'
    : role.description;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col items-center text-center"
    >
      {/* Icon Container */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 p-4"
        style={{ backgroundColor: `${role.color}10` }}
      >
        <div style={{ color: role.color }}>
          {IconComponent && <IconComponent className="w-6 h-6" />}
        </div>
      </div>

      {/* Role Name */}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{role.name}</h3>

      {/* Short Description */}
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {shortDescription}
      </p>

      {/* Avatar Group */}
      <div className="mb-3">
        <AvatarGroup members={role.members} max={5} total={role.memberCount} />
      </div>

      {/* Member Count */}
      <p className="text-sm text-slate-500 mb-4">
        {role.memberCount} {role.memberCount === 1 ? 'member' : 'members'}
      </p>

      {/* View Details Link */}
      <a className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium">
        View details →
      </a>
    </div>
  );
};
