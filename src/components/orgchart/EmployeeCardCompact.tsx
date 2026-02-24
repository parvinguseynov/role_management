import React, { useState } from 'react';
import { Employee } from '../../types/orgChart';
import { EmployeeTooltip } from './EmployeeTooltip';
import { Avatar } from '../Avatar';

interface EmployeeCardCompactProps {
  employee: Employee;
  onClick: () => void;
}

export const EmployeeCardCompact: React.FC<EmployeeCardCompactProps> = ({ employee, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Check if employee has HOD or TM role
  const scopedRole = employee.scopedRoles.length > 0 ? employee.scopedRoles[0] : null;

  return (
    <div className="relative">
      <div
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-white border rounded-lg p-3 hover:shadow-md transition-all cursor-pointer w-[180px]"
        style={{ borderColor: '#E2E8F0' }}
      >
        <div className="flex items-start gap-2">
          <Avatar initials={employee.avatar} size="md" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <h5 className="text-sm font-semibold text-slate-900 truncate">{employee.name}</h5>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${employee.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
            </div>
            <p className="text-xs text-slate-600 truncate mb-1">{employee.title}</p>
            {scopedRole && (
              <span className="inline-block text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                🏷️ {scopedRole}
              </span>
            )}
          </div>
        </div>
      </div>

      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50">
          <EmployeeTooltip employee={employee} onViewProfile={onClick} />
        </div>
      )}
    </div>
  );
};
