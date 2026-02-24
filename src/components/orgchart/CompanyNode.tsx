import React from 'react';
import { Building2, Users } from 'lucide-react';
import { Company } from '../../types/orgChart';
import { Badge } from '../Badge';

interface CompanyNodeProps {
  company: Company;
}

export const CompanyNode: React.FC<CompanyNodeProps> = ({ company }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6 min-w-[320px]">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{company.name}</h2>
        <Badge variant="success">{company.status}</Badge>
        <div className="flex items-center gap-2 mt-4 text-blue-100">
          <Users className="w-4 h-4" />
          <span className="text-sm font-medium">{company.totalEmployees} employees</span>
        </div>
      </div>
    </div>
  );
};
