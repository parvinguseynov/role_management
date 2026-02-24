import React from 'react';
import { Mail, Phone, MessageSquare, Gamepad2, Send, ChevronRight } from 'lucide-react';
import { Employee } from '../../types/orgChart';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';

interface EmployeeTooltipProps {
  employee: Employee;
  onViewProfile: () => void;
}

export const EmployeeTooltip: React.FC<EmployeeTooltipProps> = ({ employee, onViewProfile }) => {
  return (
    <div className="bg-white border-2 border-slate-300 rounded-lg shadow-xl w-80 animate-fade-in">
      <div className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <Avatar initials={employee.avatar} size="md" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-slate-900 text-sm">
                {employee.name}
              </h4>
              <Badge variant="success">{employee.status}</Badge>
            </div>
            <p className="text-xs text-slate-600 mb-1">{employee.title}</p>
            <p className="text-xs text-slate-500">
              {employee.department}
              {employee.team && ` · ${employee.team}`}
            </p>
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
            <span>{employee.slack} (Slack)</span>
          </div>
        )}
        {employee.discord && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Gamepad2 className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{employee.discord} (Discord)</span>
          </div>
        )}
        {employee.telegram && (
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Send className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{employee.telegram} (Telegram)</span>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 px-4 py-3">
        <button
          onClick={onViewProfile}
          className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1"
        >
          View full profile
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
