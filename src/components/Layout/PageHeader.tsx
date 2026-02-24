import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../common/Button';

export const PageHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-semibold text-text-primary">Role & Org Management</h1>
        <Button
          variant="primary"
          disabled
          title="System roles cannot be modified"
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add role
        </Button>
      </div>
      <p className="text-sm text-text-secondary">
        Set up roles and organizational structure across your company.
      </p>
    </div>
  );
};
