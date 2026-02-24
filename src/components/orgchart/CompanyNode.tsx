import React from 'react';
import { Building2, Users } from 'lucide-react';
import { Company } from '../../types/orgChart';

interface CompanyNodeProps {
  company: Company;
}

export const CompanyNode: React.FC<CompanyNodeProps> = ({ company }) => {
  return (
    <div
      className="text-white rounded-2xl shadow-2xl p-8 w-[280px]"
      style={{
        background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
          <Building2 className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-3">{company.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">{company.totalEmployees} employees</span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-sm text-white">{company.status}</span>
        </div>
      </div>
    </div>
  );
};
