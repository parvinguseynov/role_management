export interface Member {
  id: string;
  name: string;
  email: string;
  title: string;
  location: string;
  avatar: string;
  scopedRoles?: string[];
}

export interface PermissionCategory {
  allowed: string[];
  denied: string[];
}

export interface Permissions {
  userManagement: PermissionCategory;
  timePto: PermissionCategory;
  finance: PermissionCategory;
  settings: PermissionCategory;
}

export interface Role {
  id: string;
  name: string;
  icon: string;
  color: string;
  memberCount: number;
  description: string;
  members: Member[];
  permissions: Permissions;
}

export type ViewMode = 'grid' | 'list';
