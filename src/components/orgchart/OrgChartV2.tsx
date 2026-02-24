import React, { useState } from 'react';
import { Company, Department } from '../../types/orgChart';
import { CompanyNode } from './CompanyNode';
import { DepartmentNodeV2 } from './DepartmentNodeV2';

interface OrgChartV2Props {
  company: Company;
  departments: Department[];
  zoom: number;
  searchTerm: string;
  selectedDepartmentId: string;
}

export const OrgChartV2: React.FC<OrgChartV2Props> = ({
  company,
  departments,
  zoom,
  searchTerm,
  selectedDepartmentId,
}) => {
  const [expandedDepartments, setExpandedDepartments] = useState<Set<string>>(new Set());
  const [expandedTeams, setExpandedTeams] = useState<Set<string>>(new Set());

  const handleToggleDepartment = (deptId: string) => {
    const newExpanded = new Set(expandedDepartments);
    if (newExpanded.has(deptId)) {
      newExpanded.delete(deptId);
      // Also collapse all teams in this department
      const dept = departments.find(d => d.id === deptId);
      if (dept) {
        dept.teams.forEach(team => {
          expandedTeams.delete(team.id);
        });
        setExpandedTeams(new Set(expandedTeams));
      }
    } else {
      newExpanded.add(deptId);
    }
    setExpandedDepartments(newExpanded);
  };

  const handleToggleTeam = (teamId: string) => {
    const newExpanded = new Set(expandedTeams);
    if (newExpanded.has(teamId)) {
      newExpanded.delete(teamId);
    } else {
      newExpanded.add(teamId);
    }
    setExpandedTeams(newExpanded);
  };

  const handleEmployeeClick = (employeeId: string, employeeName: string) => {
    console.log('Navigate to profile:', employeeId, employeeName);
    alert(`Navigate to profile: ${employeeName}`);
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

  return (
    <div className="flex-1 overflow-auto bg-slate-50 p-8">
      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'top center',
          transition: 'transform 0.2s ease-out',
        }}
        className="inline-block min-w-full"
      >
        <div className="flex flex-col items-center gap-10">
          {/* Company Node */}
          <CompanyNode company={company} />

          {/* Vertical Connector */}
          <div className="w-0.5 h-10 bg-slate-300" />

          {/* Departments */}
          <div className="flex flex-wrap gap-12 justify-center max-w-7xl">
            {filteredDepartments.map((dept) => (
              <DepartmentNodeV2
                key={dept.id}
                department={dept}
                isExpanded={expandedDepartments.has(dept.id)}
                onToggle={() => handleToggleDepartment(dept.id)}
                expandedTeams={expandedTeams}
                onToggleTeam={handleToggleTeam}
                onEmployeeClick={handleEmployeeClick}
              />
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
  );
};
