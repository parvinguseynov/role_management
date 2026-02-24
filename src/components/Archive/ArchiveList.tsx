import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { ArchivedItem } from '../../types';
import { SearchInput } from '../common/SearchInput';
import { Button } from '../common/Button';

interface ArchiveListProps {
  archivedItems: ArchivedItem[];
}

export const ArchiveList: React.FC<ArchiveListProps> = ({ archivedItems }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = archivedItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRestore = (itemId: string) => {
    console.log('Restore item', itemId);
    alert(`Restoring ${archivedItems.find(i => i.id === itemId)?.name}...`);
  };

  return (
    <div>
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search archived items..."
        className="mb-6"
      />

      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-border p-4 flex items-center gap-4"
          >
            <Building2 className="w-5 h-5 text-text-muted flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-base text-text-primary">{item.name}</h3>
                <span className="text-sm text-text-muted">
                  ({item.type === 'department' ? 'Department' : 'Team'})
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                Archived on {item.archivedAt}
              </p>
              <p className="text-sm text-text-muted">
                Was: {item.details}
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => handleRestore(item.id)}
            >
              Restore
            </Button>
          </div>
        ))}

        {filteredItems.length === 0 && archivedItems.length > 0 && (
          <p className="text-center text-text-muted py-8">
            No archived items match your search
          </p>
        )}

        {filteredItems.length > 0 && (
          <p className="text-center text-text-muted py-8">
            No more archived items
          </p>
        )}

        {archivedItems.length === 0 && (
          <p className="text-center text-text-muted py-8">
            No archived items
          </p>
        )}
      </div>
    </div>
  );
};
