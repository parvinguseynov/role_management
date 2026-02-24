import React, { useState } from 'react';
import { Role } from '../../types';
import { RoleCard } from './RoleCard';
import { RoleDrawer } from './RoleDrawer';
import { SearchInput } from '../common/SearchInput';

interface RolesListProps {
  roles: Role[];
}

export const RolesList: React.FC<RolesListProps> = ({ roles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search roles..."
        className="mb-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {filteredRoles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            onClick={() => setSelectedRole(role)}
          />
        ))}
      </div>

      {filteredRoles.some(role => role.name === 'Member') && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
          <span className="text-blue-600 text-lg flex-shrink-0">ℹ️</span>
          <div>
            <p className="text-sm text-blue-900">
              Scoped roles (HOD, Team Manager) are assigned in the Organizations tab when you create departments and teams.
            </p>
          </div>
        </div>
      )}

      <RoleDrawer
        role={selectedRole}
        isOpen={!!selectedRole}
        onClose={() => setSelectedRole(null)}
      />
    </div>
  );
};
