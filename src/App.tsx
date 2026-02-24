import { useState } from 'react';
import { RolesPage } from './components/RolesPage';
import { OrgChartPageV2 } from './components/orgchart/OrgChartPageV2';
import { roles } from './data/mockData';
import { company, departments } from './data/orgChartDataExpanded';

type Page = 'roles' | 'orgchart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('roles');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center gap-6">
          <h2 className="text-lg font-semibold text-slate-900">Organization</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('roles')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'roles'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Roles
            </button>
            <button
              onClick={() => setCurrentPage('orgchart')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'orgchart'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Organization Chart
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'roles' && <RolesPage roles={roles} />}
      {currentPage === 'orgchart' && (
        <OrgChartPageV2 company={company} departments={departments} />
      )}
    </div>
  );
}

export default App;
