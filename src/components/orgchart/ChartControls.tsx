import React from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { SearchInput } from '../SearchInput';
import { Department } from '../../types/orgChart';

interface ChartControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
  departments: Department[];
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export const ChartControls: React.FC<ChartControlsProps> = ({
  searchTerm,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
  departments,
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[280px]">
          <SearchInput
            value={searchTerm}
            onChange={onSearchChange}
            placeholder="Search employees..."
          />
        </div>

        <div className="relative">
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            className="appearance-none px-4 py-2 pr-10 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white cursor-pointer"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-2 border border-slate-200 rounded-lg p-1">
          <button
            onClick={onZoomOut}
            disabled={zoom <= 0.5}
            className="p-2 hover:bg-slate-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4 text-slate-600" />
          </button>
          <span className="text-sm text-slate-600 min-w-[50px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={onZoomIn}
            disabled={zoom >= 1.5}
            className="p-2 hover:bg-slate-100 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700"
          title="Reset view"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  );
};
