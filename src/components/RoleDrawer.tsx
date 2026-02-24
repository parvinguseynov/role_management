import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Role } from '../types';
import { Badge } from './Badge';
import { AvatarGroup } from './AvatarGroup';
import { PermissionGroup } from './PermissionGroup';
import { MemberCard } from './MemberCard';

interface RoleDrawerProps {
  role: Role | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoleDrawer: React.FC<RoleDrawerProps> = ({ role, isOpen, onClose }) => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setShowAllMembers(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !role) return null;

  const IconComponent = Icons[role.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  const displayedMembers = showAllMembers ? role.members : role.members.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="ml-auto relative bg-white w-full max-w-xl h-full shadow-xl flex flex-col animate-slide-in overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Role Details</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Role Header */}
            <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-slate-200">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${role.color}15` }}
              >
                <div style={{ color: role.color }}>
                  {IconComponent && <IconComponent className="w-10 h-10" />}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{role.name}</h3>
              <Badge variant="success">Active</Badge>
            </div>

            {/* Role Information */}
            <div className="mb-6 pb-6 border-b border-slate-200">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Role Information
              </h4>
              <div className="mb-4">
                <p className="text-sm font-medium text-slate-700 mb-2">Description:</p>
                <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-700">Members:</span>
                <AvatarGroup members={role.members} max={5} total={role.memberCount} />
                <span className="text-sm text-slate-600">
                  {role.memberCount} {role.memberCount === 1 ? 'member' : 'members'}
                </span>
              </div>
            </div>

            {/* Permissions */}
            <div className="mb-6 pb-6 border-b border-slate-200">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Permissions
              </h4>
              <div className="space-y-1">
                <PermissionGroup title="User Management" permissions={role.permissions.userManagement} />
                <PermissionGroup title="Time & PTO" permissions={role.permissions.timePto} />
                <PermissionGroup title="Finance" permissions={role.permissions.finance} />
                <PermissionGroup title="Settings" permissions={role.permissions.settings} />
              </div>
            </div>

            {/* Role Members */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Role Members
              </h4>
              <div className="space-y-3 mb-4">
                {displayedMembers.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>

              {role.members.length > 3 && !showAllMembers && (
                <button
                  onClick={() => setShowAllMembers(true)}
                  className="w-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Show all {role.memberCount} members
                </button>
              )}

              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex gap-2">
                <span className="text-blue-600 text-sm flex-shrink-0">ℹ️</span>
                <p className="text-xs text-blue-900">
                  To change a user's role, go to their profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
