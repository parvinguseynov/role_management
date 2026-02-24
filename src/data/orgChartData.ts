import { Company, Department } from '../types/orgChart';

export const company: Company = {
  name: 'NovaLuck',
  status: 'Active',
  totalEmployees: 156,
};

export const departments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    isDefault: false,
    hod: { id: '1', name: 'John Smith', avatar: 'JS' },
    employeeCount: 32,
    teams: [
      {
        id: '1',
        name: 'Frontend',
        managers: [
          { id: '2', name: 'Alice Wong', avatar: 'AW' },
          { id: '3', name: 'Bob Lee', avatar: 'BL' }
        ],
        memberCount: 12,
        members: [
          {
            id: '2',
            name: 'Alice Wong',
            avatar: 'AW',
            title: 'Senior Developer',
            status: 'Active',
            department: 'Engineering',
            team: 'Frontend',
            email: 'alice@staffco.com',
            phone: '+1 (555) 111-1111',
            slack: '@alice.wong',
            discord: 'alice#1234',
            telegram: '@alice_w',
            scopedRoles: ['Team Manager: Frontend']
          },
          {
            id: '3',
            name: 'Bob Lee',
            avatar: 'BL',
            title: 'Developer',
            status: 'Active',
            department: 'Engineering',
            team: 'Frontend',
            email: 'bob@staffco.com',
            phone: '+1 (555) 111-2222',
            slack: '@bob.lee',
            discord: null,
            telegram: null,
            scopedRoles: ['Team Manager: Frontend']
          },
          {
            id: '4',
            name: 'Carol Jin',
            avatar: 'CJ',
            title: 'Senior Developer',
            status: 'Active',
            department: 'Engineering',
            team: 'Frontend',
            email: 'carol@staffco.com',
            phone: '+1 (555) 111-3333',
            slack: '@carol.jin',
            discord: 'carol#1234',
            telegram: '@carol_j',
            scopedRoles: []
          },
          {
            id: '5',
            name: 'David Park',
            avatar: 'DP',
            title: 'Developer',
            status: 'Active',
            department: 'Engineering',
            team: 'Frontend',
            email: 'david@staffco.com',
            phone: '+1 (555) 111-4444',
            slack: '@david.park',
            discord: null,
            telegram: null,
            scopedRoles: []
          },
        ]
      },
      {
        id: '2',
        name: 'Backend',
        managers: [{ id: '6', name: 'Eve Martinez', avatar: 'EM' }],
        memberCount: 8,
        members: [
          {
            id: '6',
            name: 'Eve Martinez',
            avatar: 'EM',
            title: 'Lead Backend Developer',
            status: 'Active',
            department: 'Engineering',
            team: 'Backend',
            email: 'eve@staffco.com',
            phone: '+1 (555) 222-1111',
            slack: '@eve.martinez',
            discord: 'eve#5678',
            telegram: '@eve_m',
            scopedRoles: ['Team Manager: Backend']
          },
          {
            id: '7',
            name: 'Frank Wilson',
            avatar: 'FW',
            title: 'Backend Developer',
            status: 'Active',
            department: 'Engineering',
            team: 'Backend',
            email: 'frank@staffco.com',
            phone: '+1 (555) 222-2222',
            slack: '@frank.wilson',
            discord: 'frank#5678',
            telegram: null,
            scopedRoles: []
          },
        ]
      },
      {
        id: '3',
        name: 'QA',
        managers: [],
        memberCount: 6,
        members: [
          {
            id: '8',
            name: 'Grace Kim',
            avatar: 'GK',
            title: 'QA Engineer',
            status: 'Active',
            department: 'Engineering',
            team: 'QA',
            email: 'grace@staffco.com',
            phone: '+1 (555) 333-4444',
            slack: '@grace.kim',
            discord: null,
            telegram: '@grace_k',
            scopedRoles: []
          },
        ]
      }
    ],
    directEmployees: [
      {
        id: '1',
        name: 'John Smith',
        avatar: 'JS',
        title: 'Engineering Director',
        status: 'Active',
        department: 'Engineering',
        team: null,
        email: 'john@staffco.com',
        phone: '+1 (555) 444-5555',
        slack: '@john.smith',
        discord: 'john#9999',
        telegram: '@john_s',
        scopedRoles: ['HOD: Engineering']
      },
      {
        id: '9',
        name: 'Henry Chen',
        avatar: 'HC',
        title: 'Engineering Manager',
        status: 'Active',
        department: 'Engineering',
        team: null,
        email: 'henry@staffco.com',
        phone: '+1 (555) 444-6666',
        slack: '@henry.chen',
        discord: 'henry#9999',
        telegram: '@henry_c',
        scopedRoles: []
      },
    ]
  },
  {
    id: '2',
    name: 'HR',
    isDefault: false,
    hod: { id: '10', name: 'Diana Ross', avatar: 'DR' },
    employeeCount: 5,
    teams: [
      {
        id: '4',
        name: 'Recruiting',
        managers: [{ id: '11', name: 'Sarah Park', avatar: 'SP' }],
        memberCount: 3,
        members: [
          {
            id: '11',
            name: 'Sarah Park',
            avatar: 'SP',
            title: 'Senior Recruiter',
            status: 'Active',
            department: 'HR',
            team: 'Recruiting',
            email: 'sarah@staffco.com',
            phone: '+1 (555) 555-5555',
            slack: '@sarah.park',
            discord: null,
            telegram: null,
            scopedRoles: ['Team Manager: Recruiting']
          },
          {
            id: '12',
            name: 'Mike Chen',
            avatar: 'MC',
            title: 'Recruiter',
            status: 'Active',
            department: 'HR',
            team: 'Recruiting',
            email: 'mike@staffco.com',
            phone: '+1 (555) 555-6666',
            slack: '@mike.chen',
            discord: null,
            telegram: null,
            scopedRoles: []
          },
        ]
      }
    ],
    directEmployees: [
      {
        id: '10',
        name: 'Diana Ross',
        avatar: 'DR',
        title: 'HR Director',
        status: 'Active',
        department: 'HR',
        team: null,
        email: 'diana@staffco.com',
        phone: '+1 (555) 666-7777',
        slack: '@diana.ross',
        discord: 'diana#0001',
        telegram: '@diana_r',
        scopedRoles: ['HOD: HR']
      },
    ]
  },
  {
    id: '3',
    name: 'Marketing',
    isDefault: false,
    hod: null,
    employeeCount: 15,
    teams: [
      {
        id: '5',
        name: 'Content',
        managers: [{ id: '13', name: 'Mark Taylor', avatar: 'MT' }],
        memberCount: 8,
        members: [
          {
            id: '13',
            name: 'Mark Taylor',
            avatar: 'MT',
            title: 'Content Lead',
            status: 'Active',
            department: 'Marketing',
            team: 'Content',
            email: 'mark@staffco.com',
            phone: '+1 (555) 777-8888',
            slack: '@mark.taylor',
            discord: null,
            telegram: '@mark_t',
            scopedRoles: ['Team Manager: Content']
          },
        ]
      },
      {
        id: '6',
        name: 'Design',
        managers: [],
        memberCount: 7,
        members: []
      }
    ],
    directEmployees: []
  },
  {
    id: '4',
    name: 'General',
    isDefault: true,
    hod: null,
    employeeCount: 10,
    teams: [],
    directEmployees: [
      {
        id: '14',
        name: 'New Employee 1',
        avatar: 'NE',
        title: 'Intern',
        status: 'Active',
        department: 'General',
        team: null,
        email: 'new1@staffco.com',
        phone: null,
        slack: null,
        discord: null,
        telegram: null,
        scopedRoles: []
      },
      {
        id: '15',
        name: 'Contractor Bob',
        avatar: 'CB',
        title: 'Contractor',
        status: 'Active',
        department: 'General',
        team: null,
        email: 'bob.contractor@staffco.com',
        phone: '+1 (555) 999-0000',
        slack: '@bob.contractor',
        discord: null,
        telegram: null,
        scopedRoles: []
      },
    ]
  },
];
