import React, { useEffect, useState } from 'react';
import { ChevronRight, Building2, Users } from 'lucide-react';
import { ScopedRole } from '../types/scopedRoles';
import { Drawer } from './Drawer';
import { Avatar } from './Avatar';
import { Badge } from './Badge';
import { VacantEntityRow } from './VacantEntityRow';

interface ScopedRoleDrawerProps {
  role: ScopedRole | null;
  isOpen: boolean;
  onClose: () => void;
  type: 'hod' | 'teamManager';
}

export const ScopedRoleDrawer: React.FC<ScopedRoleDrawerProps> = ({ role, isOpen, onClose, type }) => {
  const [showAllAssignments, setShowAllAssignments] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAllAssignments(false);
    }
  }, [isOpen]);

  if (!role) return null;

  const displayedAssignments = showAllAssignments ? role.assignments : role.assignments.slice(0, 3);
  const hasVacant = type === 'hod'
    ? (role.vacantDepartments && role.vacantDepartments.length > 0)
    : (role.vacantTeams && role.vacantTeams.length > 0);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={role.name}>
      <div className="p-6">
        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            DESCRIPTION
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">{role.description}</p>
        </div>

        {/* Assignments */}
        <div className="mb-6 pb-6 border-b border-slate-200">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
            ASSIGNMENTS ({role.assignments.length})
          </h3>
          <div className="space-y-3 mb-4">
            {displayedAssignments.map((assignment) => (
              <div key={assignment.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-3">
                  <Avatar initials={assignment.avatar} size="md" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {assignment.name}
                    </h4>
                    <p className="text-xs text-slate-600 mb-1">{assignment.title}</p>
                    <p className="text-xs text-slate-500 mb-2">{assignment.email}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        {type === 'hod' ? (
                          <>
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{assignment.department}</span>
                          </>
                        ) : (
                          <>
                            <Users className="w-3.5 h-3.5" />
                            <span>{assignment.team} ({assignment.department})</span>
                          </>
                        )}
                        <Badge variant="success">Active</Badge>
                      </div>
                    </div>
                    <button className="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      View profile
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {role.assignments.length > 3 && !showAllAssignments && (
            <button
              onClick={() => setShowAllAssignments(true)}
              className="w-full py-2 px-4 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Show all {role.assignments.length} assignments
            </button>
          )}
        </div>

        {/* Vacant Entities */}
        {hasVacant && (
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
              {type === 'hod'
                ? `VACANT DEPARTMENTS (${role.vacantDepartments?.length || 0})`
                : `TEAMS WITHOUT MANAGER (${role.vacantTeams?.length || 0})`
              }
            </h3>
            <div className="space-y-3">
              {type === 'hod' && role.vacantDepartments?.map((dept) => (
                <VacantEntityRow
                  key={dept.id}
                  entity={dept}
                  type="department"
                  warningText="No HOD assigned"
                />
              ))}
              {type === 'teamManager' && role.vacantTeams?.map((team) => (
                <VacantEntityRow
                  key={team.id}
                  entity={team}
                  type="team"
                  warningText="No TM assigned"
                />
              ))}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex gap-2">
          <span className="text-blue-600 text-sm flex-shrink-0">ℹ️</span>
          <p className="text-xs text-blue-900">
            {type === 'hod'
              ? 'To assign HOD, go to Department & Teams page'
              : 'To assign Team Manager, go to Department & Teams page'
            }
          </p>
        </div>
      </div>
    </Drawer>
  );
};
