import React from 'react';
import { ChevronRight, ChevronDown, AlertTriangle, Building2, Users, Folder } from 'lucide-react';
import { Department } from '../../types/orgChart';
import { TeamNodeV2 } from './TeamNodeV2';
import { EmployeeCardCompact } from './EmployeeCardCompact';
import { Avatar } from '../Avatar';

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
        className="bg-white border border-slate-200 rounded-xl shadow-md p-5 w-[260px] cursor-pointer hover:shadow-lg transition-all"
        style={{ borderLeft: '4px solid #8B5CF6' }}
      >
        {/* Header with Icon and Name */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#8B5CF615' }}
          >
            <Building2 className="w-5 h-5" style={{ color: '#8B5CF6' }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-base text-slate-900">{department.name}</h3>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
              )}
            </div>
            {department.isDefault && (
              <span className="inline-block text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                Default
              </span>
            )}
          </div>
        </div>

        {/* HOD Section */}
        <div className="mb-3">
          {hasHod && department.hod ? (
            <div className="flex items-center gap-2">
              <Avatar initials={department.hod.avatar} size="sm" />
              <div>
                <p className="text-sm font-medium text-slate-900">{department.hod.name}</p>
                <span className="text-xs text-slate-500">HOD</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-amber-600">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">No HOD assigned</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{department.employeeCount} employees</span>
          </div>
          <span>·</span>
          <div className="flex items-center gap-1">
            <Folder className="w-3.5 h-3.5" />
            <span>{department.teams.length} teams</span>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (hasTeams || department.directEmployees.length > 0) && (
        <div className="mt-8 flex flex-col items-center gap-8">
          {/* Connector Line - Department to Teams (purple, medium) */}
          <div className="h-16" style={{ width: '2px', backgroundColor: '#C4B5FD' }} />

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
            <>
              {/* Connector Line - Department to Direct Employees (dashed purple) */}
              <div
                className="h-12"
                style={{
                  width: '2px',
                  backgroundImage: 'linear-gradient(to bottom, #C4B5FD 50%, transparent 50%)',
                  backgroundSize: '2px 8px',
                }}
              />
              <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
                {department.directEmployees.map((employee) => (
                  <EmployeeCardCompact
                    key={employee.id}
                    employee={employee}
                    onClick={() => onEmployeeClick(employee.id, employee.name)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
