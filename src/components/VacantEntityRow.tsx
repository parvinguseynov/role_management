import React from 'react';
import { Building2, Users, AlertTriangle, ChevronRight } from 'lucide-react';
import { VacantEntity } from '../types/scopedRoles';

interface VacantEntityRowProps {
  entity: VacantEntity;
  type: 'department' | 'team';
  warningText: string;
}

export const VacantEntityRow: React.FC<VacantEntityRowProps> = ({ entity, type, warningText }) => {
  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {type === 'department' ? (
            <Building2 className="w-5 h-5 text-slate-400" />
          ) : (
            <Users className="w-5 h-5 text-slate-400" />
          )}
          <div>
            <p className="font-medium text-slate-900">
              {entity.name}
              {entity.department && <span className="text-slate-500"> ({entity.department})</span>}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-amber-600">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">{warningText}</span>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            Go to Department & Teams
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
