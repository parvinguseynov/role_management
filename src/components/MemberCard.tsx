import React from 'react';
import { Member } from '../types';
import { Avatar } from './Avatar';
import { MapPin, ChevronRight } from 'lucide-react';
import { Badge } from './Badge';

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
      <div className="flex items-start gap-3">
        <Avatar initials={member.avatar} size="md" />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 mb-1">{member.name}</h4>
          <p className="text-sm text-slate-600 mb-1">{member.title}</p>
          <p className="text-sm text-slate-500 mb-2">{member.email}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {member.location}
              </span>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
          {member.scopedRoles && member.scopedRoles.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {member.scopedRoles.map((role, index) => (
                <span
                  key={index}
                  className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                >
                  + {role}
                </span>
              ))}
            </div>
          )}
          <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            View full profile
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
