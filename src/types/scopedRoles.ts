export interface ScopedRoleAssignment {
  id: string;
  name: string;
  email: string;
  title: string;
  avatar: string;
  department: string;
  team?: string;
}

export interface VacantEntity {
  id: string;
  name: string;
  department?: string;
}

export interface ScopedRole {
  name: string;
  icon: string;
  color: string;
  description: string;
  assignments: ScopedRoleAssignment[];
  vacantDepartments?: VacantEntity[];
  vacantTeams?: VacantEntity[];
}

export interface ScopedRoles {
  hod: ScopedRole;
  teamManager: ScopedRole;
}
