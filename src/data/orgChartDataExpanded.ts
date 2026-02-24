import { Company, Department, Employee } from '../types/orgChart';

export const company: Company = {
  name: 'NovaLuck',
  status: 'Active',
  totalEmployees: 100,
};

// Helper to generate employees
const createEmployee = (id: string, name: string, avatar: string, title: string, dept: string, team: string | null, scopedRoles: string[] = []): Employee => ({
  id,
  name,
  avatar,
  title,
  status: 'Active',
  department: dept,
  team,
  email: `${name.toLowerCase().replace(' ', '.')}@novaluck.com`,
  phone: Math.random() > 0.3 ? `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9000) + 1000)}` : null,
  slack: Math.random() > 0.2 ? `@${name.toLowerCase().replace(' ', '.')}` : null,
  discord: Math.random() > 0.5 ? `${name.split(' ')[0].toLowerCase()}#${Math.floor(Math.random() * 9000) + 1000}` : null,
  telegram: Math.random() > 0.6 ? `@${name.toLowerCase().replace(' ', '_')}` : null,
  scopedRoles,
});

export const departments: Department[] = [
  {
    id: '1',
    name: 'Engineering',
    isDefault: false,
    hod: { id: '1', name: 'John Smith', avatar: 'JS' },
    employeeCount: 45,
    teams: [
      {
        id: '1',
        name: 'Frontend',
        managers: [
          { id: '2', name: 'Alice Wong', avatar: 'AW' },
          { id: '3', name: 'Bob Lee', avatar: 'BL' }
        ],
        memberCount: 15,
        members: [
          createEmployee('2', 'Alice Wong', 'AW', 'Senior Frontend Developer', 'Engineering', 'Frontend', ['Team Manager: Frontend']),
          createEmployee('3', 'Bob Lee', 'BL', 'Frontend Team Lead', 'Engineering', 'Frontend', ['Team Manager: Frontend']),
          createEmployee('4', 'Carol Martinez', 'CM', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('5', 'David Chen', 'DC', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('6', 'Emma Rodriguez', 'ER', 'UI Developer', 'Engineering', 'Frontend'),
          createEmployee('7', 'Frank Wilson', 'FW', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('8', 'Grace Kim', 'GK', 'React Developer', 'Engineering', 'Frontend'),
          createEmployee('9', 'Henry Park', 'HP', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('10', 'Ivy Johnson', 'IJ', 'Junior Frontend Dev', 'Engineering', 'Frontend'),
          createEmployee('11', 'Jack Brown', 'JB', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('12', 'Kelly White', 'KW', 'UI/UX Developer', 'Engineering', 'Frontend'),
          createEmployee('13', 'Leo Garcia', 'LG', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('14', 'Maya Patel', 'MP', 'Frontend Developer', 'Engineering', 'Frontend'),
          createEmployee('15', 'Noah Davis', 'ND', 'Junior Frontend Dev', 'Engineering', 'Frontend'),
          createEmployee('16', 'Olivia Taylor', 'OT', 'Frontend Developer', 'Engineering', 'Frontend'),
        ]
      },
      {
        id: '2',
        name: 'Backend',
        managers: [{ id: '17', name: 'Carol Jin', avatar: 'CJ' }],
        memberCount: 12,
        members: [
          createEmployee('17', 'Carol Jin', 'CJ', 'Backend Tech Lead', 'Engineering', 'Backend', ['Team Manager: Backend']),
          createEmployee('18', 'Peter Anderson', 'PA', 'Senior Backend Dev', 'Engineering', 'Backend'),
          createEmployee('19', 'Quinn Thomas', 'QT', 'Backend Developer', 'Engineering', 'Backend'),
          createEmployee('20', 'Rachel Moore', 'RM', 'Backend Developer', 'Engineering', 'Backend'),
          createEmployee('21', 'Sam Jackson', 'SJ', 'API Developer', 'Engineering', 'Backend'),
          createEmployee('22', 'Tina Martinez', 'TM', 'Backend Developer', 'Engineering', 'Backend'),
          createEmployee('23', 'Uma Wilson', 'UW', 'Backend Developer', 'Engineering', 'Backend'),
          createEmployee('24', 'Victor Lee', 'VL', 'Junior Backend Dev', 'Engineering', 'Backend'),
          createEmployee('25', 'Wendy Clark', 'WC', 'Backend Developer', 'Engineering', 'Backend'),
          createEmployee('26', 'Xavier Hill', 'XH', 'Database Developer', 'Engineering', 'Backend'),
          createEmployee('27', 'Yuki Tanaka', 'YT', 'Backend Developer', 'Engineering', 'Backend'),
          createEmployee('28', 'Zane Allen', 'ZA', 'Backend Developer', 'Engineering', 'Backend'),
        ]
      },
      {
        id: '3',
        name: 'QA',
        managers: [],
        memberCount: 8,
        members: [
          createEmployee('29', 'Amy Scott', 'AS', 'QA Engineer', 'Engineering', 'QA'),
          createEmployee('30', 'Ben Wright', 'BW', 'QA Engineer', 'Engineering', 'QA'),
          createEmployee('31', 'Chloe King', 'CK', 'Test Automation', 'Engineering', 'QA'),
          createEmployee('32', 'Dan Green', 'DG', 'QA Engineer', 'Engineering', 'QA'),
          createEmployee('33', 'Ella Adams', 'EA', 'QA Engineer', 'Engineering', 'QA'),
          createEmployee('34', 'Felix Baker', 'FB', 'Junior QA Engineer', 'Engineering', 'QA'),
          createEmployee('35', 'Gina Hall', 'GH', 'QA Engineer', 'Engineering', 'QA'),
          createEmployee('36', 'Hugo Rivera', 'HR', 'QA Engineer', 'Engineering', 'QA'),
        ]
      },
      {
        id: '4',
        name: 'DevOps',
        managers: [{ id: '37', name: 'Dave Park', avatar: 'DP' }],
        memberCount: 6,
        members: [
          createEmployee('37', 'Dave Park', 'DP', 'DevOps Lead', 'Engineering', 'DevOps', ['Team Manager: DevOps']),
          createEmployee('38', 'Iris Campbell', 'IC', 'DevOps Engineer', 'Engineering', 'DevOps'),
          createEmployee('39', 'Jake Mitchell', 'JM', 'Cloud Engineer', 'Engineering', 'DevOps'),
          createEmployee('40', 'Kim Torres', 'KT', 'DevOps Engineer', 'Engineering', 'DevOps'),
          createEmployee('41', 'Liam Phillips', 'LP', 'SRE', 'Engineering', 'DevOps'),
          createEmployee('42', 'Mia Evans', 'ME', 'DevOps Engineer', 'Engineering', 'DevOps'),
        ]
      }
    ],
    directEmployees: [
      createEmployee('1', 'John Smith', 'JS', 'VP of Engineering', 'Engineering', null, ['HOD: Engineering']),
      createEmployee('43', 'Nina Collins', 'NC', 'Principal Architect', 'Engineering', null),
      createEmployee('44', 'Oscar Stewart', 'OS', 'Solutions Architect', 'Engineering', null),
      createEmployee('45', 'Paula Morris', 'PM', 'Tech Architect', 'Engineering', null),
    ]
  },
  {
    id: '2',
    name: 'HR',
    isDefault: false,
    hod: { id: '46', name: 'Diana Ross', avatar: 'DR' },
    employeeCount: 12,
    teams: [
      {
        id: '5',
        name: 'Recruiting',
        managers: [{ id: '47', name: 'Sarah Park', avatar: 'SP' }],
        memberCount: 5,
        members: [
          createEmployee('47', 'Sarah Park', 'SP', 'Recruiting Lead', 'HR', 'Recruiting', ['Team Manager: Recruiting']),
          createEmployee('48', 'Ryan Cooper', 'RC', 'Technical Recruiter', 'HR', 'Recruiting'),
          createEmployee('49', 'Sofia Reed', 'SR', 'Recruiter', 'HR', 'Recruiting'),
          createEmployee('50', 'Tyler Barnes', 'TB', 'Recruiting Coordinator', 'HR', 'Recruiting'),
          createEmployee('51', 'Vera Hughes', 'VH', 'Recruiter', 'HR', 'Recruiting'),
        ]
      },
      {
        id: '6',
        name: 'People Ops',
        managers: [{ id: '52', name: 'Lisa Wang', avatar: 'LW' }],
        memberCount: 4,
        members: [
          createEmployee('52', 'Lisa Wang', 'LW', 'People Ops Lead', 'HR', 'People Ops', ['Team Manager: People Ops']),
          createEmployee('53', 'Will Powell', 'WP', 'People Ops Specialist', 'HR', 'People Ops'),
          createEmployee('54', 'Xena Long', 'XL', 'HR Coordinator', 'HR', 'People Ops'),
          createEmployee('55', 'Yara Foster', 'YF', 'People Ops Specialist', 'HR', 'People Ops'),
        ]
      }
    ],
    directEmployees: [
      createEmployee('46', 'Diana Ross', 'DR', 'HR Director', 'HR', null, ['HOD: HR']),
      createEmployee('56', 'Zack Perry', 'ZP', 'HR Generalist', 'HR', null),
      createEmployee('57', 'Anna Bell', 'AB', 'HR Generalist', 'HR', null),
    ]
  },
  {
    id: '3',
    name: 'Marketing',
    isDefault: false,
    hod: null,
    employeeCount: 18,
    teams: [
      {
        id: '7',
        name: 'Content',
        managers: [{ id: '58', name: 'Mark Taylor', avatar: 'MT' }],
        memberCount: 8,
        members: [
          createEmployee('58', 'Mark Taylor', 'MT', 'Content Lead', 'Marketing', 'Content', ['Team Manager: Content']),
          createEmployee('59', 'Beth Gray', 'BG', 'Content Writer', 'Marketing', 'Content'),
          createEmployee('60', 'Carl Ross', 'CR', 'Content Strategist', 'Marketing', 'Content'),
          createEmployee('61', 'Demi Ward', 'DW', 'Content Writer', 'Marketing', 'Content'),
          createEmployee('62', 'Eric Hunt', 'EH', 'SEO Specialist', 'Marketing', 'Content'),
          createEmployee('63', 'Faye Wood', 'FW', 'Content Writer', 'Marketing', 'Content'),
          createEmployee('64', 'Greg Cox', 'GC', 'Content Manager', 'Marketing', 'Content'),
          createEmployee('65', 'Hope Diaz', 'HD', 'Junior Content Writer', 'Marketing', 'Content'),
        ]
      },
      {
        id: '8',
        name: 'Design',
        managers: [],
        memberCount: 6,
        members: [
          createEmployee('66', 'Ivan Cruz', 'IC', 'Senior Designer', 'Marketing', 'Design'),
          createEmployee('67', 'Jane Reyes', 'JR', 'UI Designer', 'Marketing', 'Design'),
          createEmployee('68', 'Kyle Brooks', 'KB', 'Graphic Designer', 'Marketing', 'Design'),
          createEmployee('69', 'Luna Kelly', 'LK', 'UX Designer', 'Marketing', 'Design'),
          createEmployee('70', 'Mike Sanders', 'MS', 'Designer', 'Marketing', 'Design'),
          createEmployee('71', 'Nina Price', 'NP', 'Junior Designer', 'Marketing', 'Design'),
        ]
      }
    ],
    directEmployees: [
      createEmployee('72', 'Owen Butler', 'OB', 'Marketing Manager', 'Marketing', null),
      createEmployee('73', 'Pam Jenkins', 'PJ', 'Brand Manager', 'Marketing', null),
      createEmployee('74', 'Quinn Myers', 'QM', 'Marketing Analyst', 'Marketing', null),
      createEmployee('75', 'Rose Perry', 'RP', 'Social Media Manager', 'Marketing', null),
    ]
  },
  {
    id: '4',
    name: 'Finance',
    isDefault: false,
    hod: { id: '76', name: 'Tom Wilson', avatar: 'TW' },
    employeeCount: 10,
    teams: [
      {
        id: '9',
        name: 'Accounting',
        managers: [{ id: '77', name: 'Emma Brown', avatar: 'EB' }],
        memberCount: 6,
        members: [
          createEmployee('77', 'Emma Brown', 'EB', 'Accounting Lead', 'Finance', 'Accounting', ['Team Manager: Accounting']),
          createEmployee('78', 'Sam Russell', 'SR', 'Senior Accountant', 'Finance', 'Accounting'),
          createEmployee('79', 'Tara Griffin', 'TG', 'Accountant', 'Finance', 'Accounting'),
          createEmployee('80', 'Umar Hayes', 'UH', 'Accountant', 'Finance', 'Accounting'),
          createEmployee('81', 'Vicky Myers', 'VM', 'Junior Accountant', 'Finance', 'Accounting'),
          createEmployee('82', 'Wade Ford', 'WF', 'Accountant', 'Finance', 'Accounting'),
        ]
      }
    ],
    directEmployees: [
      createEmployee('76', 'Tom Wilson', 'TW', 'CFO', 'Finance', null, ['HOD: Finance']),
      createEmployee('83', 'Xander Cole', 'XC', 'Financial Analyst', 'Finance', null),
      createEmployee('84', 'Yasmin Ray', 'YR', 'Financial Analyst', 'Finance', null),
      createEmployee('85', 'Zoe Webb', 'ZW', 'Finance Manager', 'Finance', null),
    ]
  },
  {
    id: '5',
    name: 'General',
    isDefault: true,
    hod: null,
    employeeCount: 15,
    teams: [],
    directEmployees: [
      createEmployee('86', 'Alex Stone', 'AS', 'Intern', 'General', null),
      createEmployee('87', 'Blake Fox', 'BF', 'Contractor', 'General', null),
      createEmployee('88', 'Casey Lane', 'CL', 'New Hire', 'General', null),
      createEmployee('89', 'Drew Hart', 'DH', 'Intern', 'General', null),
      createEmployee('90', 'Eden West', 'EW', 'Contractor', 'General', null),
      createEmployee('91', 'Finn Page', 'FP', 'New Hire', 'General', null),
      createEmployee('92', 'Gia Moon', 'GM', 'Intern', 'General', null),
      createEmployee('93', 'Heath Shaw', 'HS', 'Contractor', 'General', null),
      createEmployee('94', 'Iris Dean', 'ID', 'New Hire', 'General', null),
      createEmployee('95', 'Joel Kane', 'JK', 'Intern', 'General', null),
      createEmployee('96', 'Kara Boyd', 'KB', 'Contractor', 'General', null),
      createEmployee('97', 'Levi Wade', 'LW', 'New Hire', 'General', null),
      createEmployee('98', 'Mona Bell', 'MB', 'Intern', 'General', null),
      createEmployee('99', 'Nate Cole', 'NC', 'Contractor', 'General', null),
      createEmployee('100', 'Opal Reid', 'OR', 'New Hire', 'General', null),
    ]
  },
];
