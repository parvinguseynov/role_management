import React from 'react';
import * as Icons from 'lucide-react';
import { Role } from '../../types';
import { AvatarGroup } from '../common/AvatarGroup';
import { Button } from '../common/Button';

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

export const RoleCard: React.FC<RoleCardProps> = ({ role, onClick }) => {
  const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
      <div className={`w-12 h-12 ${role.iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
        {IconComponent && <IconComponent className={`w-6 h-6 ${role.iconColor}`} />}
      </div>

      <h3 className="text-base font-semibold text-text-primary mb-3">{role.name}</h3>

      <div className="mb-4">
        <AvatarGroup members={role.members} max={5} total={role.memberCount} />
      </div>

      <p className="text-sm text-text-secondary mb-4">
        {role.memberCount === 0 ? 'No member' : `${role.memberCount} member${role.memberCount !== 1 ? 's' : ''}`}
      </p>

      <Button variant="secondary" className="w-full" onClick={(e) => { e?.stopPropagation(); onClick(); }}>
        View members
      </Button>
    </div>
  );
};
