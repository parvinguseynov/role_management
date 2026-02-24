import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

interface DepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; hod: string; members: string[] }) => void;
  mode?: 'create' | 'edit';
}

export const DepartmentModal: React.FC<DepartmentModalProps> = ({
  isOpen,
  onClose,
  onSave,
  mode = 'create',
}) => {
  const [name, setName] = useState('');
  const [hod, setHod] = useState('');
  const [members, setMembers] = useState('');

  const handleSubmit = () => {
    onSave({
      name,
      hod,
      members: members ? members.split(',').map(m => m.trim()) : [],
    });
    setName('');
    setHod('');
    setMembers('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'create' ? 'Create Department' : 'Edit Department'}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {mode === 'create' ? 'Create Department' : 'Save Changes'}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Department Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Engineering"
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Head of Department
          </label>
          <div className="relative">
            <input
              type="text"
              value={hod}
              onChange={(e) => setHod(e.target.value)}
              placeholder="Search users..."
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">▼</span>
          </div>
          <p className="mt-2 text-xs text-text-secondary flex items-start gap-1">
            <span>ℹ️</span>
            <span>HOD will be automatically added to this department</span>
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Members
          </label>
          <div className="relative">
            <input
              type="text"
              value={members}
              onChange={(e) => setMembers(e.target.value)}
              placeholder="Search and select members..."
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">▼</span>
          </div>
          {members && (
            <p className="mt-2 text-sm text-text-secondary">
              Selected: {members}
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};
