# Role Management Prototype — Claude Code Prompt

## Задача
Создай React прототип для страницы Role & Org Management на основе существующего UI StaffCo.

## Tech Stack
- React + TypeScript
- Tailwind CSS
- Lucide React для иконок
- Никаких дополнительных UI библиотек

## Дизайн система (на основе скриншотов StaffCo)

### Цвета
- Primary Blue: #3B82F6 (кнопки, активные табы)
- Background: #F9FAFB (страница)
- Card Background: #FFFFFF
- Border: #E5E7EB
- Text Primary: #111827
- Text Secondary: #6B7280
- Text Muted: #9CA3AF
- Success Green: #10B981
- Badge colors:
  - Owner: #8B5CF6 (purple)
  - Admin: #3B82F6 (blue)
  - HR Admin: #EC4899 (pink)
  - Finance: #F59E0B (amber)
  - Member: #6B7280 (gray)

### Типографика
- Font: Inter или system-ui
- Page title: 24px semibold
- Subtitle: 14px regular, text-secondary
- Card title: 16px semibold
- Body: 14px regular
- Small/Caption: 12px

### Компоненты
- Border radius: 8px (cards), 6px (buttons), 4px (inputs)
- Shadow: shadow-sm для cards
- Spacing: 16px padding в cards, 24px между секциями

---

## Структура страницы

### Header
```
┌─────────────────────────────────────────────────────────────────┐
│ Role & Org Management                          [+ Add role] ← disabled, tooltip: "System roles cannot be added" │
│ Set up roles and organizational structure across your company.  │
└─────────────────────────────────────────────────────────────────┘
```
- Кнопка "+ Add role" показывается но disabled с серым фоном
- При hover показывать tooltip: "System roles cannot be modified"

### Tabs
```
[Roles (5)]  [Organizations (2)]  [Archive (1)]
```
- Активный таб: синий текст + синий underline
- Неактивный: серый текст
- Counter в скобках показывает количество

---

## Tab 1: Roles

### Роли — карточки в grid

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ 🔍 Search roles...                                                                   │
├──────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ 👑 Crown icon   │  │ ⚙️ Cog icon     │  │ 👤 User icon    │  │ 💰 Banknote     │ │
│  │                 │  │                 │  │                 │  │                 │ │
│  │ Owner           │  │ Admin           │  │ HR Admin        │  │ Finance         │ │
│  │ 🟣🟣            │  │ 🔵              │  │ 🟢🟢🟢🟢🟢+5    │  │ 🟠🟠🟠          │ │
│  │ 2 members       │  │ 1 member        │  │ 10 members      │  │ 3 members       │ │
│  │                 │  │                 │  │                 │  │                 │ │
│  │ [View members]  │  │ [View members]  │  │ [View members]  │  │ [View members]  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                                      │
│  ┌─────────────────┐                                                                │
│  │ 👥 Users icon   │                                                                │
│  │                 │                                                                │
│  │ Member          │  ← Info box справа:                                            │
│  │ +               │  ┌──────────────────────────────────────────────────────────┐  │
│  │ No member       │  │ ℹ️ Scoped roles (HOD, Team Manager) are assigned        │  │
│  │                 │  │    in the Organizations tab when you create             │  │
│  │ [View members]  │  │    departments and teams.                               │  │
│  └─────────────────┘  └──────────────────────────────────────────────────────────┘  │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Структура карточки роли

```tsx
interface RoleCard {
  id: string;
  name: string;           // "Owner", "Admin", etc.
  icon: string;           // lucide icon name
  iconBgColor: string;    // background color for icon
  memberCount: number;
  members: Member[];      // first 5 for avatars preview
  description: string;    // показывается в modal
  permissions: Permission[];
}
```

### Аватары членов
- Показывать до 5 круглых аватаров (32x32px)
- Если больше 5: показать +N counter
- Если 0: показать "+" иконку с текстом "No member"
- Аватары = цветные круги с инициалами (как в скриншоте)

### При клике на карточку — открывается Drawer справа

```
┌───────────────────────────────────────────────────────────────┐
│ HR Admin                                               [✕]   │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ DESCRIPTION                                                   │
│ Human Resources administrator with access to employee         │
│ data, PTO management, and user administration.                │
│ No access to financial data.                                  │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ PERMISSIONS                                                   │
│                                                               │
│ User Management                                               │
│   ✓ View all users                                            │
│   ✓ Invite users                                              │
│   ✓ Edit user profiles                                        │
│   ✓ Deactivate users                                          │
│   ✗ Delete users                                              │
│                                                               │
│ Time & PTO                                                    │
│   ✓ View all timesheets                                       │
│   ✓ Approve timesheets                                        │
│   ✓ View all PTO requests                                     │
│   ✓ Approve PTO                                               │
│   ✓ Edit PTO balances                                         │
│   ✓ Create PTO policies                                       │
│                                                               │
│ Finance                                                       │
│   ✗ View salary data                                          │
│   ✗ Edit pay rates                                            │
│   ✗ Process payroll                                           │
│                                                               │
│ Settings                                                      │
│   ✓ View company settings                                     │
│   ✗ Edit company settings                                     │
│   ✗ Manage billing                                            │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ MEMBERS (10)                                    [View all →]  │
│                                                               │
│ ┌─────────────────────────────────────────────────────────┐   │
│ │ 🟢 Diana Ross          diana@company.com                │   │
│ │    HOD: HR Department                                   │   │
│ ├─────────────────────────────────────────────────────────┤   │
│ │ 🟢 Mike Chen           mike@company.com                 │   │
│ ├─────────────────────────────────────────────────────────┤   │
│ │ 🟢 Sarah Park          sarah@company.com                │   │
│ │    Team Manager: Recruiting                             │   │
│ └─────────────────────────────────────────────────────────┘   │
│                                                               │
│ ℹ️ To change a user's role, go to their profile              │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

## Tab 2: Organizations

### Структура
```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ 🔍 Search departments or teams...                              [+ Add Department]    │
├──────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│ ▼ 🏢 Engineering                                                              [⋮]   │
│   ├─ HOD: John Smith                                                                │
│   ├─ 32 members                                                                     │
│   │                                                                                 │
│   │  Teams:                                                                         │
│   │  ┌────────────────────────────────────────────────────────────────────────────┐ │
│   │  │ 👥 Frontend          TM: Alice Wong, Bob Lee           12 members    [⋮]   │ │
│   │  │ 👥 Backend           TM: Carol Jin                      8 members    [⋮]   │ │
│   │  │ 👥 QA                TM: —                              6 members    [⋮]   │ │
│   │  └────────────────────────────────────────────────────────────────────────────┘ │
│   │                                                                                 │
│   │  Without team:                                                                  │
│   │  ┌────────────────────────────────────────────────────────────────────────────┐ │
│   │  │ 6 members not assigned to any team              [View] [Assign to team ▼]  │ │
│   │  └────────────────────────────────────────────────────────────────────────────┘ │
│   │                                                                                 │
│   │  [+ Add Team]                                                                   │
│   │                                                                                 │
│                                                                                      │
│ ▶ 🏢 Marketing                                                                [⋮]   │
│   HOD: Jane Doe · 15 members · 2 teams                                              │
│                                                                                      │
│ ▶ 🏢 HR                                                                       [⋮]   │
│   HOD: Diana Ross · 5 members · 1 team                                              │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Department Expanded State
- Показывает: HOD, total members, список teams
- Каждый team показывает: name, Team Manager(s), member count
- "Without team" секция если есть members без команды
- "+ Add Team" кнопка внутри department

### Department Menu (⋮)
- Edit Department
- Add Team
- Archive Department

### Team Menu (⋮)
- Edit Team
- Archive Team

### Add/Edit Department Modal

```
┌───────────────────────────────────────────────────────────────┐
│ Create Department                                      [✕]   │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ Department Name *                                             │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ Engineering                                               │ │
│ └───────────────────────────────────────────────────────────┘ │
│                                                               │
│ Head of Department                                            │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search users...                                    ▼   │ │
│ └───────────────────────────────────────────────────────────┘ │
│ ℹ️ HOD will be automatically added to this department        │
│                                                               │
│ Members                                                       │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search and select members...                       ▼   │ │
│ └───────────────────────────────────────────────────────────┘ │
│ Selected: John Smith, Alice Wong, Bob Lee (+12 more)         │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│                              [Cancel]  [Create Department]    │
└───────────────────────────────────────────────────────────────┘
```

### Add/Edit Team Modal

```
┌───────────────────────────────────────────────────────────────┐
│ Create Team                                            [✕]   │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│ Team Name *                                                   │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ Frontend                                                  │ │
│ └───────────────────────────────────────────────────────────┘ │
│                                                               │
│ Department *                                                  │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ Engineering                                           ▼   │ │
│ └───────────────────────────────────────────────────────────┘ │
│                                                               │
│ Team Manager(s)                                               │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search users...                                    ▼   │ │
│ └───────────────────────────────────────────────────────────┘ │
│ Selected: Alice Wong, Bob Lee                                │
│ ℹ️ Team Managers will be automatically added to this team    │
│                                                               │
│ Members                                                       │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search and select members...                       ▼   │ │
│ └───────────────────────────────────────────────────────────┘ │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│                                    [Cancel]  [Create Team]    │
└───────────────────────────────────────────────────────────────┘
```

---

## Tab 3: Archive

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ 🔍 Search archived items...                                                          │
├──────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐  │
│ │ 🏢 Operations (Department)     Archived on Jan 15, 2026              [Restore] │  │
│ │    Was: 8 members, 2 teams                                                     │  │
│ └────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                      │
│ No more archived items                                                              │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Mock Data

```typescript
// Roles
const roles = [
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
      userManagement: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users', 'Delete users'],
      timePto: ['View all timesheets', 'Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
      finance: ['View salary data', 'Edit pay rates', 'Process payroll'],
      settings: ['View company settings', 'Edit company settings', 'Manage billing', 'Delete account'],
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
      userManagement: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users'],
      userManagementDenied: ['Delete users'],
      timePto: ['View all timesheets', 'Edit any timesheet', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
      finance: ['View salary data', 'Edit pay rates', 'Process payroll'],
      settings: ['View company settings', 'Edit company settings', 'Manage integrations'],
      settingsDenied: ['Manage billing', 'Delete account'],
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
      userManagement: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users'],
      userManagementDenied: ['Delete users'],
      timePto: ['View all timesheets', 'Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances', 'Create PTO policies'],
      finance: [],
      financeDenied: ['View salary data', 'Edit pay rates', 'Process payroll'],
      settings: ['View company settings'],
      settingsDenied: ['Edit company settings', 'Manage billing'],
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
      userManagement: [],
      userManagementDenied: ['View all users', 'Invite users', 'Edit user profiles', 'Deactivate users', 'Delete users'],
      timePto: ['View all timesheets'],
      timePtoDenied: ['Approve timesheets', 'View all PTO', 'Approve PTO', 'Edit PTO balances'],
      finance: ['View salary data', 'Edit pay rates', 'Process payroll'],
      settings: ['View company settings'],
      settingsDenied: ['Edit company settings', 'Manage billing'],
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
      userManagement: ['View own profile', 'Edit own profile'],
      timePto: ['Track own time', 'View own timesheets', 'Request PTO', 'View own PTO balance'],
      finance: ['View own salary'],
      settings: [],
    }
  },
];

// Departments
const departments = [
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

// Archive
const archivedItems = [
  {
    id: '1',
    type: 'department',
    name: 'Operations',
    archivedAt: 'Jan 15, 2026',
    details: '8 members, 2 teams',
  },
];
```

---

## Файловая структура

```
role_management/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Layout/
│   │   │   └── PageHeader.tsx
│   │   ├── Tabs/
│   │   │   └── TabNavigation.tsx
│   │   ├── Roles/
│   │   │   ├── RoleCard.tsx
│   │   │   ├── RoleDrawer.tsx
│   │   │   └── RolesList.tsx
│   │   ├── Organizations/
│   │   │   ├── DepartmentCard.tsx
│   │   │   ├── TeamRow.tsx
│   │   │   ├── DepartmentModal.tsx
│   │   │   ├── TeamModal.tsx
│   │   │   └── OrganizationsList.tsx
│   │   ├── Archive/
│   │   │   └── ArchiveList.tsx
│   │   └── common/
│   │       ├── Avatar.tsx
│   │       ├── AvatarGroup.tsx
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Modal.tsx
│   │       ├── Drawer.tsx
│   │       ├── SearchInput.tsx
│   │       └── Dropdown.tsx
│   ├── data/
│   │   └── mockData.ts
│   └── types/
│       └── index.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Ключевые интерактивности

1. **Tabs** — переключение между Roles, Organizations, Archive
2. **Role Cards** — клик открывает Drawer справа
3. **Role Drawer** — показывает description, permissions, members list
4. **Department expand/collapse** — клик на заголовок раскрывает/сворачивает
5. **Department Menu** — Edit, Add Team, Archive
6. **Team Menu** — Edit, Archive
7. **Add Department Modal** — форма создания
8. **Add Team Modal** — форма создания
9. **Search** — фильтрация по названию
10. **Archive Restore** — кнопка Restore (mock action)

---

## Запуск

```bash
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
npm run dev
```

---

## Важные детали

1. **Disabled "+ Add role" кнопка** — tooltip "System roles cannot be modified"
2. **Info box** про Scoped Roles на странице Roles
3. **"Without team" секция** в развёрнутом department
4. **Scoped roles badges** у members (HOD: X, Team Manager: Y)
5. **Permission groups** в Drawer: ✓ для granted, ✗ для denied
6. **Member avatars** — цветные круги с инициалами, не картинки
