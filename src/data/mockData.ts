import { Role, Department, ArchivedItem } from '../types';

export const roles: Role[] = [
  {
    id: '1',
    name: 'Owner',
    icon: 'Crown',
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    memberCount: 2,
    members: [
      { id: '1', name: 'Hugh Inman', email: 'hugh@staffco.com', avatar: 'HI' },
      { id: '2', name: 'Sarah Chen', email: 'sarah@staffco.com', avatar: 'SC' },
    ],
    description: 'Ultimate authority over the workspace. Full access to all features including billing and account deletion.',
    permissions: {
      'User Management': ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users', 'Delete users'],
      'Time & PTO': ['View all timesheets', 'Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
      'Finance': ['View salary data', 'Edit pay rates', 'Process payroll'],
      'Settings': ['View company settings', 'Edit company settings', 'Manage billing', 'Delete account'],
    }
  },
  {
    id: '2',
    name: 'Admin',
    icon: 'Settings',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    memberCount: 1,
    members: [
      { id: '3', name: 'John Hamilton', email: 'john@staffco.com', avatar: 'JH' },
    ],
    description: 'Full administrative access to manage users, settings, and operations. Cannot manage billing or delete account.',
    permissions: {
      'User Management': ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users'],
      'User Management Denied': ['Delete users'],
      'Time & PTO': ['View all timesheets', 'Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
      'Finance': ['View salary data', 'Edit pay rates', 'Process payroll'],
      'Settings': ['View company settings', 'Edit company settings', 'Manage integrations'],
      'Settings Denied': ['Manage billing', 'Delete account'],
    }
  },
  {
    id: '3',
    name: 'HR Admin',
    icon: 'UserCog',
    iconBgColor: 'bg-pink-100',
    iconColor: 'text-pink-600',
    memberCount: 10,
    members: [
      { id: '4', name: 'Diana Ross', email: 'diana@staffco.com', avatar: 'DR', scopedRoles: ['HOD: HR Department'] },
      { id: '5', name: 'Mike Chen', email: 'mike@staffco.com', avatar: 'MC' },
      { id: '6', name: 'Sarah Park', email: 'sarah.p@staffco.com', avatar: 'SP', scopedRoles: ['Team Manager: Recruiting'] },
      { id: '7', name: 'Alex Kim', email: 'alex@staffco.com', avatar: 'AK' },
      { id: '8', name: 'Lisa Wang', email: 'lisa@staffco.com', avatar: 'LW' },
    ],
    description: 'Human Resources administrator with access to employee data, PTO management, and user administration. No access to financial data.',
    permissions: {
      'User Management': ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users'],
      'User Management Denied': ['Delete users'],
      'Time & PTO': ['View all timesheets', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
      'Finance': [],
      'Finance Denied': ['View salary data', 'Edit pay rates', 'Process payroll'],
      'Settings': ['View company settings'],
      'Settings Denied': ['Edit company settings', 'Manage billing'],
    }
  },
  {
    id: '4',
    name: 'Finance',
    icon: 'Banknote',
    iconBgColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
    memberCount: 3,
    members: [
      { id: '9', name: 'Tom Wilson', email: 'tom@staffco.com', avatar: 'TW' },
      { id: '10', name: 'Emma Brown', email: 'emma@staffco.com', avatar: 'EB' },
      { id: '11', name: 'James Lee', email: 'james@staffco.com', avatar: 'JL' },
    ],
    description: 'Finance administrator with access to payroll, salary data, and financial settings. No access to HR data.',
    permissions: {
      'User Management': [],
      'User Management Denied': ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users', 'Delete users'],
      'Time & PTO': ['View all timesheets'],
      'Time & PTO Denied': ['Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances'],
      'Finance': ['View salary data', 'Edit pay rates', 'Process payroll'],
      'Settings': ['View company settings'],
      'Settings Denied': ['Edit company settings', 'Manage billing'],
    }
  },
  {
    id: '5',
    name: 'Member',
    icon: 'Users',
    iconBgColor: 'bg-gray-100',
    iconColor: 'text-gray-600',
    memberCount: 45,
    members: [],
    description: 'Standard team member with access to their own data only. Can track time, request PTO, and view their own reports.',
    permissions: {
      'User Management': ['View own profile', 'Edit own profile'],
      'Time & PTO': ['Track own time', 'View own timesheets', 'Request PTO', 'View own PTO balance'],
      'Finance': ['View own salary'],
      'Settings': [],
    }
  },
];

export const departments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    hod: { id: '12', name: 'John Smith', avatar: 'JS' },
    memberCount: 32,
    teams: [
      { id: '1', name: 'Frontend', managers: [{ name: 'Alice Wong' }, { name: 'Bob Lee' }], memberCount: 12 },
      { id: '2', name: 'Backend', managers: [{ name: 'Carol Jin' }], memberCount: 8 },
      { id: '3', name: 'QA', managers: [], memberCount: 6 },
    ],
    membersWithoutTeam: 6,
  },
  {
    id: '2',
    name: 'Marketing',
    hod: { id: '13', name: 'Jane Doe', avatar: 'JD' },
    memberCount: 15,
    teams: [
      { id: '4', name: 'Content', managers: [{ name: 'Mark Taylor' }], memberCount: 8 },
      { id: '5', name: 'Design', managers: [{ name: 'Anna White' }], memberCount: 7 },
    ],
    membersWithoutTeam: 0,
  },
  {
    id: '3',
    name: 'HR',
    hod: { id: '4', name: 'Diana Ross', avatar: 'DR' },
    memberCount: 5,
    teams: [
      { id: '6', name: 'Recruiting', managers: [{ name: 'Sarah Park' }], memberCount: 3 },
    ],
    membersWithoutTeam: 2,
  },
];

export const archivedItems: ArchivedItem[] = [
  {
    id: '1',
    type: 'department',
    name: 'Operations',
    archivedAt: 'Jan 15, 2026',
    details: '8 members, 2 teams',
  },
];
