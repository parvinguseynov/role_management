import React from 'react';
import { Users, ChevronRight, ChevronDown, AlertTriangle } from 'lucide-react';
import { Team } from '../../types/orgChart';
import { EmployeeCardCompact } from './EmployeeCardCompact';

interface TeamNodeV2Props {
  team: Team;
  isExpanded: boolean;
  onToggle: () => void;
  onEmployeeClick: (employeeId: string, employeeName: string) => void;
}

export const TeamNodeV2: React.FC<TeamNodeV2Props> = ({ team, isExpanded, onToggle, onEmployeeClick }) => {
  const hasManager = team.managers.length > 0;
  const managerNames = team.managers.map(m => m.name).join(', ');

  return (
    <div className="flex flex-col items-center">
      {/* Team Card */}
      <div
        onClick={onToggle}
        className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 min-w-[250px] cursor-pointer hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-2 mb-2">
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-slate-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-600" />
          )}
          <Users className="w-4 h-4 text-slate-600" />
          <h4 className="font-semibold text-sm text-slate-900 flex-1">{team.name}</h4>
        </div>

        {hasManager ? (
          <p className="text-xs text-slate-600 mb-1">
            TM: {managerNames}
          </p>
        ) : (
          <div className="flex items-center gap-1 text-amber-600 mb-1">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">No TM assigned</span>
          </div>
        )}

        <p className="text-xs text-slate-500">
          {team.memberCount} members
        </p>
      </div>

      {/* Expanded Members */}
      {isExpanded && team.members.length > 0 && (
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Connector Line */}
          <div className="w-0.5 h-6 bg-slate-300" />

          {/* Members */}
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
            {team.members.map((member) => (
              <EmployeeCardCompact
                key={member.id}
                employee={member}
                onClick={() => onEmployeeClick(member.id, member.name)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
