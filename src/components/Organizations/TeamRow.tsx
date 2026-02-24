import React from 'react';
import { Users } from 'lucide-react';
import { Team } from '../../types';
import { Dropdown } from '../common/Dropdown';

interface TeamRowProps {
  team: Team;
  onEdit: () => void;
  onArchive: () => void;
}

export const TeamRow: React.FC<TeamRowProps> = ({ team, onEdit, onArchive }) => {
  const managerNames = team.managers.length > 0
    ? team.managers.map(m => m.name).join(', ')
    : '—';

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <Users className="w-5 h-5 text-text-muted flex-shrink-0" />
      <div className="flex-1 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-medium text-sm text-text-primary">{team.name}</span>
          <span className="text-sm text-text-secondary">
            TM: {managerNames}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-text-secondary">
            {team.memberCount} member{team.memberCount !== 1 ? 's' : ''}
          </span>
          <Dropdown
            items={[
              { label: 'Edit Team', onClick: onEdit },
              { label: 'Archive Team', onClick: onArchive, destructive: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
