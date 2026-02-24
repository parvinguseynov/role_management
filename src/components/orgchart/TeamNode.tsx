import React, { useState } from 'react';
import { Users, ChevronDown, ChevronRight, AlertTriangle } from 'lucide-react';
import { Team } from '../../types/orgChart';
import { EmployeeCard } from './EmployeeCard';

interface TeamNodeProps {
  team: Team;
  onEmployeeClick: (employeeId: string, employeeName: string) => void;
}

export const TeamNode: React.FC<TeamNodeProps> = ({ team, onEmployeeClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasManager = team.managers.length > 0;
  const managerNames = team.managers.map(m => m.name).join(', ');

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 min-w-[250px]">
        <div
          onClick={() => team.members.length > 0 && setIsExpanded(!isExpanded)}
          className={`${team.members.length > 0 ? 'cursor-pointer' : ''}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-slate-600" />
            <h3 className="font-semibold text-slate-900">{team.name}</h3>
            {team.members.length > 0 && (
              <div className="ml-auto">
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </div>
            )}
          </div>

          <div className="text-center py-2">
            {hasManager ? (
              <>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue-600">
                      {team.managers[0].avatar}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-900">{managerNames}</p>
                <p className="text-xs text-slate-500">
                  Team Manager{team.managers.length > 1 ? 's' : ''}
                </p>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium">No TM assigned</span>
              </div>
            )}
          </div>

          <div className="text-center pt-2 border-t border-slate-200 mt-2">
            <p className="text-sm text-slate-600">{team.memberCount} members</p>
          </div>
        </div>
      </div>

      {isExpanded && team.members.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3 justify-center max-w-4xl">
          {team.members.map((member) => (
            <EmployeeCard
              key={member.id}
              employee={member}
              onClick={() => onEmployeeClick(member.id, member.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
