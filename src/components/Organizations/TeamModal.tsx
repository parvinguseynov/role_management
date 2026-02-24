import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; department: string; managers: string[]; members: string[] }) => void;
  mode?: 'create' | 'edit';
  departments: { id: string; name: string }[];
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  onSave,
  mode = 'create',
  departments,
}) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [managers, setManagers] = useState('');
  const [members, setMembers] = useState('');

  const handleSubmit = () => {
    onSave({
      name,
      department,
      managers: managers ? managers.split(',').map(m => m.trim()) : [],
      members: members ? members.split(',').map(m => m.trim()) : [],
    });
    setName('');
    setDepartment('');
    setManagers('');
    setMembers('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'create' ? 'Create Team' : 'Edit Team'}
      footer={
        <>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {mode === 'create' ? 'Create Team' : 'Save Changes'}
          </Button>
        </>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Team Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Frontend"
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Department <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              <option value="">Select department...</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">▼</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Team Manager(s)
          </label>
          <div className="relative">
            <input
              type="text"
              value={managers}
              onChange={(e) => setManagers(e.target.value)}
              placeholder="Search users..."
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted">▼</span>
          </div>
          {managers && (
            <p className="mt-2 text-sm text-text-secondary">
              Selected: {managers}
            </p>
          )}
          <p className="mt-2 text-xs text-text-secondary flex items-start gap-1">
            <span>ℹ️</span>
            <span>Team Managers will be automatically added to this team</span>
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
        </div>
      </div>
    </Modal>
  );
};
