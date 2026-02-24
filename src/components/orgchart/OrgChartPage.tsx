import React, { useState } from 'react';
import { Company, Department } from '../../types/orgChart';
import { ChartControls } from './ChartControls';
import { OrgChart } from './OrgChart';

interface OrgChartPageProps {
  company: Company;
  departments: Department[];
}

export const OrgChartPage: React.FC<OrgChartPageProps> = ({ company, departments }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setSearchTerm('');
    setSelectedDepartment('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-6">
        <h1 className="text-2xl font-semibold text-slate-900 mb-2">Organization Chart</h1>
        <p className="text-sm text-slate-600">
          View your company's organizational structure and reporting hierarchy.
        </p>
      </div>

      {/* Controls */}
      <ChartControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedDepartment={selectedDepartment}
        onDepartmentChange={setSelectedDepartment}
        departments={departments}
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />

      {/* Chart */}
      <OrgChart
        company={company}
        departments={departments}
        zoom={zoom}
        searchTerm={searchTerm}
        selectedDepartmentId={selectedDepartment}
      />
    </div>
  );
};
