import React, { useState } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';
import { PermissionCategory } from '../types';

interface PermissionGroupProps {
  title: string;
  permissions: PermissionCategory;
}

export const PermissionGroup: React.FC<PermissionGroupProps> = ({ title, permissions }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const hasAnyPermissions = permissions.allowed.length > 0 || permissions.denied.length > 0;

  if (!hasAnyPermissions) return null;

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-3 hover:bg-slate-50 px-4 -mx-4 transition-colors"
      >
        <span className="font-semibold text-slate-900">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isExpanded && (
        <div className="pb-3 space-y-2">
          {permissions.allowed.map((permission, index) => (
            <div key={`allowed-${index}`} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-700">{permission}</span>
            </div>
          ))}
          {permissions.denied.map((permission, index) => (
            <div key={`denied-${index}`} className="flex items-start gap-2 text-sm">
              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-500">{permission}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
