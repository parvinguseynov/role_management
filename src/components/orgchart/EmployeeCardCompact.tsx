import React, { useState } from 'react';
import { Employee } from '../../types/orgChart';
import { EmployeeTooltip } from './EmployeeTooltip';

interface EmployeeCardCompactProps {
  employee: Employee;
  onClick: () => void;
}

export const EmployeeCardCompact: React.FC<EmployeeCardCompactProps> = ({ employee, onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="bg-white border border-slate-200 rounded-lg px-3 py-2 hover:shadow-md transition-all cursor-pointer min-w-[200px]"
      >
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${employee.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
          <span className="text-xs font-semibold text-slate-600">{employee.avatar}</span>
          <span className="text-sm font-semibold text-slate-900 truncate">{employee.name}</span>
        </div>
        <p className="text-xs text-slate-500 mt-1 ml-4 truncate">{employee.title}</p>
      </div>

      {showTooltip && (
        <div className="absolute left-full ml-2 top-0 z-50">
          <EmployeeTooltip employee={employee} onViewProfile={onClick} />
        </div>
      )}
    </div>
  );
};
