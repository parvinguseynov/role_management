export interface Member {
  id: string;
  name: string;
  email: string;
  avatar: string;
  scopedRoles?: string[];
}

export interface PermissionGroup {
  [key: string]: string[];
}

export interface Role {
  id: string;
  name: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  memberCount: number;
  members: Member[];
  description: string;
  permissions: PermissionGroup;
}

export interface Team {
  id: string;
  name: string;
  managers: { name: string }[];
  memberCount: number;
}

export interface Department {
  id: string;
  name: string;
  hod: { id: string; name: string; avatar: string };
  memberCount: number;
  teams: Team[];
  membersWithoutTeam: number;
}

export interface ArchivedItem {
  id: string;
  type: 'department' | 'team';
  name: string;
  archivedAt: string;
  details: string;
}

export type TabType = 'roles' | 'organizations' | 'archive';
