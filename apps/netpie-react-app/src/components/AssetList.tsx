import React from 'react';
import type { Asset } from '@/types/asset';

interface AssetListProps {
  assets: Asset[];
  onEdit: (asset: Asset) => void;
  onDelete: (id: string) => void;
}

const AssetList: React.FC<AssetListProps> = ({ assets, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Your Assets</h2>
      {
        assets.length === 0 ? (
          <p className="text-muted-foreground">No assets added yet.</p>
        ) : (
          <ul className="divide-y divide-border">
            {assets.map((asset) => (
              <li key={asset.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">{asset.name} ({asset.type.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')})</p>
                  <p className="text-sm text-muted-foreground">Value: ${asset.value.toFixed(2)}</p>
                </div>
                <div className="space-x-2">
                  <button className="text-primary hover:underline" onClick={() => onEdit(asset)}>Edit</button>
                  <button className="text-destructive hover:underline" onClick={() => onDelete(asset.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default AssetList;
