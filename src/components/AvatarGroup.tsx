import React from 'react';
import { Avatar } from './Avatar';
import { Member } from '../types';

interface AvatarGroupProps {
  members: Member[];
  max?: number;
  total?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ members, max = 5, total }) => {
  const displayMembers = members.slice(0, max);
  const remaining = (total || members.length) - max;

  return (
    <div className="flex items-center -space-x-2">
      {displayMembers.map((member, index) => (
        <div
          key={member.id}
          className="ring-2 ring-white"
          style={{ zIndex: max - index }}
        >
          <Avatar initials={member.avatar} size="sm" />
        </div>
      ))}
      {remaining > 0 && (
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 ring-2 ring-white">
          +{remaining}
        </div>
      )}
    </div>
  );
};
