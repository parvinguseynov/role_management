import React, { useState } from 'react';
import { Building2, ChevronDown, ChevronRight, Plus } from 'lucide-react';
import { Department } from '../../types';
import { TeamRow } from './TeamRow';
import { Dropdown } from '../common/Dropdown';
import { Button } from '../common/Button';

interface DepartmentCardProps {
  department: Department;
  onEditDepartment: () => void;
  onAddTeam: () => void;
  onArchiveDepartment: () => void;
  onEditTeam: (teamId: string) => void;
  onArchiveTeam: (teamId: string) => void;
}

export const DepartmentCard: React.FC<DepartmentCardProps> = ({
  department,
  onEditDepartment,
  onAddTeam,
  onArchiveDepartment,
  onEditTeam,
  onArchiveTeam,
}) => {
  const [isExpanded, setIsExpanded] = useState(department.id === '1');

  return (
    <div className="bg-white rounded-lg border border-border mb-4">
      <div
        className="p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-text-secondary flex-shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-text-secondary flex-shrink-0" />
        )}
        <Building2 className="w-5 h-5 text-text-secondary flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-base text-text-primary">{department.name}</h3>
          {!isExpanded && (
            <p className="text-sm text-text-secondary">
              HOD: {department.hod.name} · {department.memberCount} members · {department.teams.length} team{department.teams.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <Dropdown
            items={[
              { label: 'Edit Department', onClick: onEditDepartment },
              { label: 'Add Team', onClick: onAddTeam },
              { label: 'Archive Department', onClick: onArchiveDepartment, destructive: true },
            ]}
          />
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 pl-12">
          <div className="mb-4 text-sm text-text-secondary space-y-1">
            <p>HOD: {department.hod.name}</p>
            <p>{department.memberCount} members</p>
          </div>

          {department.teams.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-text-primary mb-2">Teams:</h4>
              <div className="border border-border rounded-lg overflow-hidden">
                {department.teams.map((team) => (
                  <TeamRow
                    key={team.id}
                    team={team}
                    onEdit={() => onEditTeam(team.id)}
                    onArchive={() => onArchiveTeam(team.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {department.membersWithoutTeam > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-text-primary mb-2">Without team:</h4>
              <div className="border border-border rounded-lg p-3 flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  {department.membersWithoutTeam} member{department.membersWithoutTeam !== 1 ? 's' : ''} not assigned to any team
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" className="text-sm px-3 py-1">
                    View
                  </Button>
                  <Button variant="ghost" className="text-sm px-3 py-1">
                    Assign to team ▼
                  </Button>
                </div>
              </div>
            </div>
          )}

          <Button
            variant="ghost"
            onClick={(e) => {
              e?.stopPropagation();
              onAddTeam();
            }}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Team
          </Button>
        </div>
      )}
    </div>
  );
};
