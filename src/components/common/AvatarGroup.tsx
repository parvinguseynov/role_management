import React from 'react';
import { Avatar } from './Avatar';
import { Member } from '../../types';

interface AvatarGroupProps {
  members: Member[];
  max?: number;
  total?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ members, max = 5, total }) => {
  const displayMembers = members.slice(0, max);
  const remaining = (total || members.length) - max;

  if (members.length === 0) {
    return (
      <div className="flex items-center gap-2 text-text-muted">
        <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
          <span className="text-lg">+</span>
        </div>
        <span className="text-sm">No member</span>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {displayMembers.map((member, index) => (
        <div
          key={member.id}
          className="-mr-2 last:mr-0"
          style={{ zIndex: max - index }}
        >
          <Avatar initials={member.avatar} size="sm" className="ring-2 ring-white" />
        </div>
      ))}
      {remaining > 0 && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-text-secondary ring-2 ring-white -ml-2">
          +{remaining}
        </div>
      )}
    </div>
  );
};
