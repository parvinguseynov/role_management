import React from 'react';
import { Users, ChevronRight, ChevronDown, AlertTriangle } from 'lucide-react';
import { Team } from '../../types/orgChart';
import { EmployeeCardCompact } from './EmployeeCardCompact';
import { Avatar } from '../Avatar';

interface TeamNodeV2Props {
  team: Team;
  isExpanded: boolean;
  onToggle: () => void;
  onEmployeeClick: (employeeId: string, employeeName: string) => void;
}

export const TeamNodeV2: React.FC<TeamNodeV2Props> = ({ team, isExpanded, onToggle, onEmployeeClick }) => {
  const hasManager = team.managers.length > 0;
  const primaryManager = team.managers[0];

  return (
    <div className="flex flex-col items-center">
      {/* Team Card */}
      <div
        onClick={onToggle}
        className="border rounded-lg shadow-sm p-4 w-[220px] cursor-pointer hover:shadow-md transition-all"
        style={{
          backgroundColor: '#F0F9FF',
          borderColor: '#BAE6FD',
        }}
      >
        {/* Header with Icon and Name */}
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5 flex-shrink-0" style={{ color: '#0EA5E9' }} />
          <h4 className="font-semibold text-[15px] text-slate-900 flex-1">{team.name}</h4>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
          )}
        </div>

        {/* Team Manager Section */}
        <div className="mb-2">
          {hasManager && primaryManager ? (
            <div className="flex items-center gap-2">
              <Avatar initials={primaryManager.avatar} size="sm" />
              <div>
                <p className="text-xs font-medium text-slate-900">{primaryManager.name}</p>
                <span className="text-[10px] text-slate-500">TM</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-amber-600">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">No manager assigned</span>
            </div>
          )}
        </div>

        {/* Member Count */}
        <p className="text-xs text-slate-500">
          {team.memberCount} members
        </p>
      </div>

      {/* Expanded Members */}
      {isExpanded && team.members.length > 0 && (
        <div className="mt-6 flex flex-col items-center gap-4">
          {/* Connector Line - Team to Employees (blue, thin) */}
          <div className="h-10" style={{ width: '1.5px', backgroundColor: '#93C5FD' }} />

          {/* Members */}
          <div className="flex flex-wrap gap-6 justify-center max-w-2xl">
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
