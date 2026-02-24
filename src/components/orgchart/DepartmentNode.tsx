import React, { useState } from 'react';
import { Building2, ChevronDown, ChevronRight, AlertTriangle, Users } from 'lucide-react';
import { Department } from '../../types/orgChart';
import { TeamNode } from './TeamNode';
import { EmployeeCard } from './EmployeeCard';

interface DepartmentNodeProps {
  department: Department;
  onEmployeeClick: (employeeId: string, employeeName: string) => void;
}

export const DepartmentNode: React.FC<DepartmentNodeProps> = ({
  department,
  onEmployeeClick
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasHod = department.hod !== null;
  const hasTeams = department.teams.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white border-2 border-slate-300 rounded-lg shadow-md p-5 min-w-[280px]">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5 text-slate-600" />
            <h3 className="font-semibold text-lg text-slate-900">{department.name}</h3>
            {department.isDefault && (
              <span className="ml-auto text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                🏷️ Default
              </span>
            )}
            {!department.isDefault && (
              <div className="ml-auto">
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                )}
              </div>
            )}
          </div>

          <div className="text-center py-3 border-y border-slate-200 my-3">
            {hasHod ? (
              <>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">
                      {department.hod.avatar}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900">{department.hod.name}</p>
                <p className="text-xs text-slate-500">Head of Department</p>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium">No HOD assigned</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-1 text-sm text-slate-600">
            <Users className="w-4 h-4" />
            <span>{department.employeeCount} employees</span>
            <span className="text-slate-400">·</span>
            <span>{department.teams.length} team{department.teams.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      {isExpanded && (hasTeams || department.directEmployees.length > 0) && (
        <div className="mt-8 flex flex-col items-center gap-8">
          {hasTeams && (
            <div className="flex flex-wrap gap-6 justify-center">
              {department.teams.map((team) => (
                <TeamNode
                  key={team.id}
                  team={team}
                  onEmployeeClick={onEmployeeClick}
                />
              ))}
            </div>
          )}

          {department.directEmployees.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl">
              {department.directEmployees.map((employee) => (
                <EmployeeCard
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
