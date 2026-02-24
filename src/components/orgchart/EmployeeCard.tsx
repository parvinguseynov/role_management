import React from 'react';
import { Mail, Phone, MessageSquare, Gamepad2, Send } from 'lucide-react';
import { Employee } from '../../types/orgChart';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';

interface EmployeeCardProps {
  employee: Employee;
  onClick?: () => void;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer max-w-xs"
    >
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <Avatar initials={employee.avatar} size="md" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-slate-900 text-sm truncate">
                {employee.name}
              </h4>
              <Badge variant="success">{employee.status}</Badge>
            </div>
            <p className="text-xs text-slate-600 mb-1">{employee.title}</p>
            <p className="text-xs text-slate-500">
              {employee.department}
              {employee.team && ` · ${employee.team}`}
            </p>
            {employee.scopedRoles.length > 0 && (
              <div className="mt-2">
                {employee.scopedRoles.map((role, index) => (
                  <span
                    key={index}
                    className="inline-block text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded mr-1 mb-1"
                  >
                    🏷️ {role}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-3 space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{employee.email}</span>
        </div>
        {employee.phone && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{employee.phone}</span>
          </div>
        )}
        {employee.slack && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{employee.slack}</span>
          </div>
        )}
        {employee.discord && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Gamepad2 className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{employee.discord}</span>
          </div>
        )}
        {employee.telegram && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Send className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{employee.telegram}</span>
          </div>
        )}
      </div>
    </div>
  );
};
