export interface Employee {
  id: string;
  name: string;
  avatar: string;
  title: string;
  status: 'Active' | 'Inactive';
  department: string;
  team: string | null;
  email: string;
  phone: string | null;
  slack: string | null;
  discord: string | null;
  telegram: string | null;
  scopedRoles: string[];
}

export interface Manager {
  id: string;
  name: string;
  avatar: string;
}

export interface Team {
  id: string;
  name: string;
  managers: Manager[];
  memberCount: number;
  members: Employee[];
}

export interface Department {
  id: string;
  name: string;
  isDefault: boolean;
  hod: Manager | null;
  employeeCount: number;
  teams: Team[];
  directEmployees: Employee[];
}

export interface Company {
  name: string;
  status: 'Active' | 'Inactive';
  totalEmployees: number;
}
