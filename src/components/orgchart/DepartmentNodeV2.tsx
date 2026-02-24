import React from 'react';
import { ChevronRight, ChevronDown, AlertTriangle } from 'lucide-react';
import { Department } from '../../types/orgChart';
import { TeamNodeV2 } from './TeamNodeV2';
import { EmployeeCardCompact } from './EmployeeCardCompact';

interface DepartmentNodeV2Props {
  department: Department;
  isExpanded: boolean;
  onToggle: () => void;
  expandedTeams: Set<string>;
  onToggleTeam: (teamId: string) => void;
  onEmployeeClick: (employeeId: string, employeeName: string) => void;
}

export const DepartmentNodeV2: React.FC<DepartmentNodeV2Props> = ({
  department,
  isExpanded,
  onToggle,
  expandedTeams,
  onToggleTeam,
  onEmployeeClick
}) => {
  const hasHod = department.hod !== null;
  const hasTeams = department.teams.length > 0;

  return (
    <div className="flex flex-col items-center">
      {/* Department Card */}
      <div
        onClick={onToggle}
        className="bg-white border-2 border-slate-300 rounded-lg shadow-sm p-4 min-w-[280px] cursor-pointer hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-2 mb-2">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-slate-600" />
          ) : (
            <ChevronRight className="w-5 h-5 text-slate-600" />
          )}
          <h3 className="font-semibold text-base text-slate-900 flex-1">{department.name}</h3>
          {department.isDefault && (
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
              🏷️ Default
            </span>
          )}
        </div>

        {hasHod && department.hod ? (
          <p className="text-sm text-slate-600 mb-1">
            HOD: {department.hod.name}
          </p>
        ) : (
          <div className="flex items-center gap-1 text-amber-600 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">No HOD assigned</span>
          </div>
        )}

        <p className="text-sm text-slate-500">
          {department.employeeCount} employees · {department.teams.length} team{department.teams.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Expanded Content */}
      {isExpanded && (hasTeams || department.directEmployees.length > 0) && (
        <div className="mt-8 flex flex-col items-center gap-8">
          {/* Connector Line */}
          <div className="w-0.5 h-8 bg-slate-300" />

          {/* Teams */}
          {hasTeams && (
            <div className="flex flex-wrap gap-6 justify-center items-start">
              {department.teams.map((team) => (
                <div key={team.id} className="flex flex-col items-center">
                  <TeamNodeV2
                    team={team}
                    isExpanded={expandedTeams.has(team.id)}
                    onToggle={() => onToggleTeam(team.id)}
                    onEmployeeClick={onEmployeeClick}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Direct Employees */}
          {department.directEmployees.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
              {department.directEmployees.map((employee) => (
                <EmployeeCardCompact
                  key={employee.id}
                  employee={employee}
                  onClick={() => onEmployeeClick(employee.id, employee.name)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
