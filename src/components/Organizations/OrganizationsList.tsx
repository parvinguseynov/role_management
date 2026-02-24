import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Department } from '../../types';
import { DepartmentCard } from './DepartmentCard';
import { DepartmentModal } from './DepartmentModal';
import { TeamModal } from './TeamModal';
import { SearchInput } from '../common/SearchInput';
import { Button } from '../common/Button';

interface OrganizationsListProps {
  departments: Department[];
}

export const OrganizationsList: React.FC<OrganizationsListProps> = ({ departments }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.teams.some((team) => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddTeam = (departmentId: string) => {
    setSelectedDepartment(departmentId);
    setIsTeamModalOpen(true);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search departments or teams..."
          className="flex-1"
        />
        <Button
          variant="primary"
          onClick={() => setIsDepartmentModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Department
        </Button>
      </div>

      <div>
        {filteredDepartments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
            onEditDepartment={() => console.log('Edit department', department.id)}
            onAddTeam={() => handleAddTeam(department.id)}
            onArchiveDepartment={() => console.log('Archive department', department.id)}
            onEditTeam={(teamId) => console.log('Edit team', teamId)}
            onArchiveTeam={(teamId) => console.log('Archive team', teamId)}
          />
        ))}
      </div>

      <DepartmentModal
        isOpen={isDepartmentModalOpen}
        onClose={() => setIsDepartmentModalOpen(false)}
        onSave={(data) => console.log('Create department', data)}
      />

      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => {
          setIsTeamModalOpen(false);
          setSelectedDepartment(null);
        }}
        onSave={(data) => console.log('Create team', data)}
        departments={departments.map(d => ({ id: d.id, name: d.name }))}
      />
    </div>
  );
};
