import { useState } from 'react';
import { TabType } from './types';
import { roles, departments, archivedItems } from './data/mockData';
import { PageHeader } from './components/Layout/PageHeader';
import { TabNavigation } from './components/Tabs/TabNavigation';
import { RolesList } from './components/Roles/RolesList';
import { OrganizationsList } from './components/Organizations/OrganizationsList';
import { ArchiveList } from './components/Archive/ArchiveList';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('roles');

  const tabs = [
    { id: 'roles' as TabType, label: 'Roles', count: roles.length },
    { id: 'organizations' as TabType, label: 'Organizations', count: departments.length },
    { id: 'archive' as TabType, label: 'Archive', count: archivedItems.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <PageHeader />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

        <div className="mt-6">
          {activeTab === 'roles' && <RolesList roles={roles} />}
          {activeTab === 'organizations' && <OrganizationsList departments={departments} />}
          {activeTab === 'archive' && <ArchiveList archivedItems={archivedItems} />}
        </div>
      </div>
    </div>
  );
}

export default App;
