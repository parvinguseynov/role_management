import React from 'react';
import { Mail, Phone, MessageSquare, Gamepad2, Send, ChevronRight } from 'lucide-react';
import { Employee } from '../../types/orgChart';
import { Avatar } from '../Avatar';

interface EmployeeTooltipProps {
  employee: Employee;
  onViewProfile: () => void;
}

export const EmployeeTooltip: React.FC<EmployeeTooltipProps> = ({ employee, onViewProfile }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl w-80 animate-fade-in" style={{ border: '1px solid #E2E8F0' }}>
      {/* Header Section */}
      <div className="p-5">
        <div className="flex items-start gap-3">
          <Avatar initials={employee.avatar} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-slate-900 text-base">
                {employee.name}
              </h4>
              <div className={`w-2 h-2 rounded-full ${employee.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span className="text-xs text-slate-500">{employee.status}</span>
            </div>
            <p className="text-sm text-slate-600 mb-1">{employee.title}</p>
            <p className="text-xs text-slate-500">
              {employee.department}
              {employee.team && ` · ${employee.team}`}
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200" />

      {/* Contact Information */}
      <div className="px-5 py-4 space-y-2.5">
        <div className="flex items-center gap-2.5 text-sm text-slate-600">
          <Mail className="w-4 h-4 flex-shrink-0 text-slate-400" />
          <span className="truncate">{employee.email}</span>
        </div>
        {employee.phone && (
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <Phone className="w-4 h-4 flex-shrink-0 text-slate-400" />
            <span>{employee.phone}</span>
          </div>
        )}
        {employee.slack && (
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <MessageSquare className="w-4 h-4 flex-shrink-0 text-slate-400" />
            <span>{employee.slack}</span>
          </div>
        )}
        {employee.discord && (
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <Gamepad2 className="w-4 h-4 flex-shrink-0 text-slate-400" />
            <span>{employee.discord}</span>
          </div>
        )}
        {employee.telegram && (
          <div className="flex items-center gap-2.5 text-sm text-slate-600">
            <Send className="w-4 h-4 flex-shrink-0 text-slate-400" />
            <span>{employee.telegram}</span>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200" />

      {/* Footer */}
      <div className="px-5 py-4">
        <button
          onClick={onViewProfile}
          className="w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700 font-medium rounded-lg transition-colors text-sm flex items-center justify-center gap-1.5"
        >
          View full profile
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
