import React, { useState } from 'react';
import { Grid3x3, List } from 'lucide-react';
import { Role, ViewMode } from '../types';
import { ScopedRole } from '../types/scopedRoles';
import { SearchInput } from './SearchInput';
import { RoleCard } from './RoleCard';
import { RoleDrawer } from './RoleDrawer';
import { ScopedRoleCard } from './ScopedRoleCard';
import { ScopedRoleDrawer } from './ScopedRoleDrawer';
import { scopedRoles } from '../data/mockData';

interface RolesPageProps {
  roles: Role[];
}

export const RolesPage: React.FC<RolesPageProps> = ({ roles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedScopedRole, setSelectedScopedRole] = useState<{ role: ScopedRole; type: 'hod' | 'teamManager' } | null>(null);

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2">Roles</h1>
          <p className="text-sm text-slate-600">
            View and manage roles across your company.
          </p>
        </div>

        {/* Search & View Toggle */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 max-w-md">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search roles..."
            />
          </div>
          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              title="Grid view"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Global Roles Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">Global Roles</h2>
          <p className="text-sm text-slate-600 mb-6">
            Assigned to users across the entire company.
          </p>

          <div className={`mb-6 ${
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
              : 'space-y-4'
          }`}>
            {filteredRoles.map((role) => (
              <RoleCard
                key={role.id}
                role={role}
                onClick={() => setSelectedRole(role)}
              />
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No roles found matching your search.</p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300 my-8" />

        {/* Scoped Roles Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">Scoped Roles</h2>
          <p className="text-sm text-slate-600 mb-6">
            Assigned to specific departments or teams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ScopedRoleCard
              role={scopedRoles.hod}
              onClick={() => setSelectedScopedRole({ role: scopedRoles.hod, type: 'hod' })}
            />
            <ScopedRoleCard
              role={scopedRoles.teamManager}
              onClick={() => setSelectedScopedRole({ role: scopedRoles.teamManager, type: 'teamManager' })}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
            <span className="text-blue-600 text-lg flex-shrink-0">ℹ️</span>
            <p className="text-sm text-blue-900">
              To assign scoped roles, go to Department & Teams page.
            </p>
          </div>
        </div>

        {/* Role Drawer */}
        <RoleDrawer
          role={selectedRole}
          isOpen={!!selectedRole}
          onClose={() => setSelectedRole(null)}
        />

        {/* Scoped Role Drawer */}
        <ScopedRoleDrawer
          role={selectedScopedRole?.role || null}
          isOpen={!!selectedScopedRole}
          onClose={() => setSelectedScopedRole(null)}
          type={selectedScopedRole?.type || 'hod'}
        />
      </div>
    </div>
  );
};
