import React, { useState, useRef, useEffect } from 'react';
import { Company, Department } from '../../types/orgChart';
import { CompanyNode } from './CompanyNode';
import { DepartmentNode } from './DepartmentNode';

interface OrgChartProps {
  company: Company;
  departments: Department[];
  zoom: number;
  searchTerm: string;
  selectedDepartmentId: string;
}

export const OrgChart: React.FC<OrgChartProps> = ({
  company,
  departments,
  zoom,
  searchTerm,
  selectedDepartmentId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - scroll.x,
      y: e.clientY - scroll.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setScroll({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleEmployeeClick = (employeeId: string, employeeName: string) => {
    alert(`Navigate to profile: ${employeeName}`);
    console.log('Employee clicked:', employeeId, employeeName);
  };

  // Filter departments based on search and selection
  const filteredDepartments = departments.filter((dept) => {
    if (selectedDepartmentId && dept.id !== selectedDepartmentId) {
      return false;
    }

    if (!searchTerm) return true;

    const search = searchTerm.toLowerCase();
    const matchesDept = dept.name.toLowerCase().includes(search);
    const matchesTeam = dept.teams.some(team =>
      team.name.toLowerCase().includes(search) ||
      team.members.some(member =>
        member.name.toLowerCase().includes(search) ||
        member.title.toLowerCase().includes(search)
      )
    );
    const matchesEmployee = dept.directEmployees.some(emp =>
      emp.name.toLowerCase().includes(search) ||
      emp.title.toLowerCase().includes(search)
    );

    return matchesDept || matchesTeam || matchesEmployee;
  });

  // Center the chart on mount
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const centerX = (container.scrollWidth - container.clientWidth) / 2;
      container.scrollLeft = centerX;
    }
  }, []);

  return (
    <div className="flex-1 overflow-auto bg-slate-50">
      <div
        ref={containerRef}
        className="min-h-full p-8"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          style={{
            transform: `scale(${zoom}) translate(${scroll.x}px, ${scroll.y}px)`,
            transformOrigin: 'top center',
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
          className="inline-block min-w-full"
        >
          <div className="flex flex-col items-center gap-12 pb-12">
            {/* Company Node */}
            <CompanyNode company={company} />

            {/* Vertical Line */}
            <div className="w-0.5 h-12 bg-slate-300" />

            {/* Departments Grid */}
            <div className="flex flex-wrap gap-12 justify-center max-w-7xl">
              {filteredDepartments.map((dept, index) => (
                <div key={dept.id} className="flex flex-col items-center">
                  <DepartmentNode
                    department={dept}
                    onEmployeeClick={handleEmployeeClick}
                  />
                </div>
              ))}
            </div>

            {filteredDepartments.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-slate-500">No results found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
