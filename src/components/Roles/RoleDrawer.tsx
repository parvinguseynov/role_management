import React from 'react';
import { Check, X } from 'lucide-react';
import { Role } from '../../types';
import { Drawer } from '../common/Drawer';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';

interface RoleDrawerProps {
  role: Role | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoleDrawer: React.FC<RoleDrawerProps> = ({ role, isOpen, onClose }) => {
  if (!role) return null;

  const renderPermissionGroup = (groupName: string, permissions: string[], isDenied = false) => {
    if (permissions.length === 0) return null;

    return (
      <div key={groupName} className="mb-6">
        <h4 className="font-semibold text-sm text-text-primary mb-3">{groupName}</h4>
        <div className="space-y-2">
          {permissions.map((permission, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              {isDenied ? (
                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              ) : (
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              )}
              <span className={isDenied ? 'text-text-muted' : 'text-text-primary'}>
                {permission}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={role.name}>
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">
            DESCRIPTION
          </h3>
          <p className="text-sm text-text-primary leading-relaxed">{role.description}</p>
        </div>

        <div className="border-t border-border pt-6 mb-6">
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-4">
            PERMISSIONS
          </h3>
          {Object.entries(role.permissions).map(([groupName, permissions]) => {
            const isDenied = groupName.includes('Denied');
            const displayName = groupName.replace(' Denied', '');
            return renderPermissionGroup(displayName, permissions, isDenied);
          })}
        </div>

        <div className="border-t border-border pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wide">
              MEMBERS ({role.memberCount})
            </h3>
            {role.memberCount > 3 && (
              <button className="text-sm text-primary hover:text-blue-700 font-medium">
                View all →
              </button>
            )}
          </div>

          {role.members.length > 0 ? (
            <div className="space-y-3 mb-4">
              {role.members.slice(0, 3).map((member) => (
                <div key={member.id} className="border border-border rounded-lg p-3">
                  <div className="flex items-center gap-3 mb-1">
                    <Avatar initials={member.avatar} size="sm" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text-primary">{member.name}</p>
                      <p className="text-xs text-text-secondary">{member.email}</p>
                    </div>
                  </div>
                  {member.scopedRoles && member.scopedRoles.length > 0 && (
                    <div className="mt-2 pl-11">
                      {member.scopedRoles.map((scopedRole, index) => (
                        <Badge key={index} variant="default" className="text-xs">
                          {scopedRole}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-text-muted mb-4">No members assigned to this role.</p>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex gap-2">
            <span className="text-blue-600 text-sm">ℹ️</span>
            <p className="text-xs text-blue-900">
              To change a user's role, go to their profile
            </p>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
