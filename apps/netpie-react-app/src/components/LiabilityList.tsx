import React from 'react';
import type { Liability } from '@/types/asset';

interface LiabilityListProps {
  liabilities: Liability[];
  onEdit: (liability: Liability) => void;
  onDelete: (id: string) => void;
}

const LiabilityList: React.FC<LiabilityListProps> = ({ liabilities, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Liabilities</h2>
      {
        liabilities.length === 0 ? (
          <p className="text-muted-foreground">No liabilities added yet.</p>
        ) : (
          <ul className="divide-y divide-border">
            {liabilities.map((liability) => (
              <li key={liability.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">{liability.name} ({liability.type.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')})</p>
                  <p className="text-sm text-muted-foreground">Amount: ${liability.amount.toFixed(2)}</p>
                </div>
                <div className="space-x-2">
                  <button className="text-primary hover:underline" onClick={() => onEdit(liability)}>Edit</button>
                  <button className="text-destructive hover:underline" onClick={() => onDelete(liability.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default LiabilityList;
