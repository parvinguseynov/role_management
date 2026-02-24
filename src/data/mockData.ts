import { Role } from '../types';

export const roles: Role[] = [
  {
    id: '1',
    name: 'Owner',
    icon: 'Crown',
    color: '#8B5CF6',
    memberCount: 2,
    description: 'Ultimate authority over the workspace. Full access to all features including billing, subscription management, and account deletion.',
    members: [
      { id: '1', name: 'Hugh Inman', email: 'hugh@staffco.com', title: 'CEO', location: 'New York, USA', avatar: 'HI' },
      { id: '2', name: 'Sarah Chen', email: 'sarah@staffco.com', title: 'Co-founder', location: 'San Francisco, USA', avatar: 'SC' },
    ],
    permissions: {
      userManagement: {
        allowed: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users', 'Delete users'],
        denied: []
      },
      timePto: {
        allowed: ['View all timesheets', 'Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
        denied: []
      },
      finance: {
        allowed: ['View salary data', 'Edit pay rates', 'Process payroll'],
        denied: []
      },
      settings: {
        allowed: ['View company settings', 'Edit company settings', 'Manage billing', 'Manage integrations', 'Delete account'],
        denied: []
      }
    }
  },
  {
    id: '2',
    name: 'Admin',
    icon: 'Settings',
    color: '#3B82F6',
    memberCount: 1,
    description: 'Full administrative access to manage users, settings, and operations. Cannot manage billing or delete account.',
    members: [
      { id: '3', name: 'John Hamilton', email: 'john@staffco.com', title: 'Operations Manager', location: 'New York, USA', avatar: 'JH' },
    ],
    permissions: {
      userManagement: {
        allowed: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users'],
        denied: ['Delete users']
      },
      timePto: {
        allowed: ['View all timesheets', 'Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
        denied: []
      },
      finance: {
        allowed: ['View salary data', 'Edit pay rates', 'Process payroll'],
        denied: []
      },
      settings: {
        allowed: ['View company settings', 'Edit company settings', 'Manage integrations'],
        denied: ['Manage billing', 'Delete account']
      }
    }
  },
  {
    id: '3',
    name: 'HR Admin',
    icon: 'UserCog',
    color: '#EC4899',
    memberCount: 10,
    description: 'Human Resources administrator with access to employee data, PTO management, and user administration. No access to financial data.',
    members: [
      { id: '4', name: 'Diana Ross', email: 'diana@staffco.com', title: 'HR Manager', location: 'New York, USA', avatar: 'DR', scopedRoles: ['HOD: HR Department'] },
      { id: '5', name: 'Mike Chen', email: 'mike@staffco.com', title: 'HR Specialist', location: 'New York, USA', avatar: 'MC' },
      { id: '6', name: 'Sarah Park', email: 'sarah.p@staffco.com', title: 'Recruiter', location: 'Los Angeles, USA', avatar: 'SP', scopedRoles: ['Team Manager: Recruiting'] },
      { id: '7', name: 'Alex Kim', email: 'alex@staffco.com', title: 'HR Coordinator', location: 'Chicago, USA', avatar: 'AK' },
      { id: '8', name: 'Lisa Wang', email: 'lisa@staffco.com', title: 'People Ops', location: 'Seattle, USA', avatar: 'LW' },
    ],
    permissions: {
      userManagement: {
        allowed: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users'],
        denied: ['Delete users']
      },
      timePto: {
        allowed: ['View all timesheets', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
        denied: []
      },
      finance: {
        allowed: [],
        denied: ['View salary data', 'Edit pay rates', 'Process payroll']
      },
      settings: {
        allowed: ['View company settings'],
        denied: ['Edit company settings', 'Manage billing', 'Manage integrations']
      }
    }
  },
  {
    id: '4',
    name: 'Finance',
    icon: 'Banknote',
    color: '#F59E0B',
    memberCount: 3,
    description: 'Finance administrator with access to payroll, salary data, and financial settings. Limited access to HR data.',
    members: [
      { id: '9', name: 'Tom Wilson', email: 'tom@staffco.com', title: 'Finance Manager', location: 'New York, USA', avatar: 'TW' },
      { id: '10', name: 'Emma Brown', email: 'emma@staffco.com', title: 'Accountant', location: 'Boston, USA', avatar: 'EB' },
      { id: '11', name: 'James Lee', email: 'james@staffco.com', title: 'Payroll Specialist', location: 'New York, USA', avatar: 'JL' },
    ],
    permissions: {
      userManagement: {
        allowed: ['View all users'],
        denied: ['Invite users', 'Edit user profiles', 'Deactivate users', 'Delete users']
      },
      timePto: {
        allowed: ['View all timesheets'],
        denied: ['Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO']
      },
      finance: {
        allowed: ['View salary data', 'Edit pay rates', 'Process payroll'],
        denied: []
      },
      settings: {
        allowed: ['View company settings'],
        denied: ['Edit company settings', 'Manage billing', 'Manage integrations']
      }
    }
  },
  {
    id: '5',
    name: 'Member',
    icon: 'Users',
    color: '#64748B',
    memberCount: 45,
    description: 'Standard team member with access to their own data only. Can track time, request PTO, and view their own reports.',
    members: [
      { id: '12', name: 'Alice Wong', email: 'alice@staffco.com', title: 'Senior Developer', location: 'San Francisco, USA', avatar: 'AW', scopedRoles: ['Team Manager: Frontend'] },
      { id: '13', name: 'Bob Lee', email: 'bob@staffco.com', title: 'Developer', location: 'Austin, USA', avatar: 'BL' },
      { id: '14', name: 'Carol Jin', email: 'carol@staffco.com', title: 'Designer', location: 'Seattle, USA', avatar: 'CJ' },
      { id: '15', name: 'David Park', email: 'david@staffco.com', title: 'QA Engineer', location: 'Denver, USA', avatar: 'DP' },
      { id: '16', name: 'Eva Martinez', email: 'eva@staffco.com', title: 'Product Manager', location: 'Miami, USA', avatar: 'EM', scopedRoles: ['HOD: Product'] },
    ],
    permissions: {
      userManagement: {
        allowed: ['View own profile', 'Edit own profile'],
        denied: []
      },
      timePto: {
        allowed: ['Track own time', 'View own timesheets', 'Request PTO', 'View own PTO balance'],
        denied: []
      },
      finance: {
        allowed: ['View own salary'],
        denied: []
      },
      settings: {
        allowed: [],
        denied: []
      }
    }
  },
];
