'use client';

import React, { useState, useEffect } from 'react';
import KeyMetrics from './KeyMetrics';
import Chart from './Chart';
import AssetAllocationChart from './AssetAllocationChart';
import NetWorthChart from './NetWorthChart';
import LiabilityChart from './LiabilityChart';
import AssetList from '../AssetList';
import AssetForm from '../AssetForm';
import LiabilityList from '../LiabilityList';
import LiabilityForm from '../LiabilityForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Asset, Liability } from '@/types/asset';

const Dashboard = () => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [netWorth, setNetWorth] = useState(0);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [isAssetFormOpen, setIsAssetFormOpen] = useState(false);
  const [isLiabilityFormOpen, setIsLiabilityFormOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | undefined>(undefined);
  const [selectedLiability, setSelectedLiability] = useState<Liability | undefined>(undefined);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      // Sample data
      const initialAssets: Asset[] = [
        { id: '1', name: 'Bank Account', type: 'bank', value: 50000 },
        { id: '2', name: 'Tesla Stocks', type: 'stock', quantity: 10, currentPrice: 250, value: 2500 },
        { id: '3', name: 'Vanguard S&P 500', type: 'mutual_fund', units: 100, nav: 150, value: 15000 },
      ];
      const initialLiabilities: Liability[] = [
        { id: '1', name: 'Personal Loan', type: 'personal_loan', amount: 20000, principalAmount: 25000 },
        { id: '2', name: 'Credit Card', type: 'credit_card', amount: 5000 },
      ];

      const totalAssets = initialAssets.reduce((acc, asset) => acc + asset.value, 0);
      const totalLiabilities = initialLiabilities.reduce((acc, liability) => acc + liability.amount, 0);
      const netWorth = totalAssets - totalLiabilities;

      setAssets(initialAssets);
      setLiabilities(initialLiabilities);
      setTotalAssets(totalAssets);
      setTotalLiabilities(totalLiabilities);
      setNetWorth(netWorth);
    };

    fetchData();
  }, []);

  const handleAddAsset = () => {
    setSelectedAsset(undefined);
    setIsAssetFormOpen(true);
  };

  const handleEditAsset = (asset: Asset) => {
    setSelectedAsset(asset);
    setIsAssetFormOpen(true);
  };

  const handleDeleteAsset = (id: string) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const handleAssetFormSubmit = (asset: Asset) => {
    if (selectedAsset) {
      setAssets(assets.map(a => (a.id === asset.id ? asset : a)));
    } else {
      setAssets([...assets, { ...asset, id: Date.now().toString() }]);
    }
    setIsAssetFormOpen(false);
  };

  const handleAddLiability = () => {
    setSelectedLiability(undefined);
    setIsLiabilityFormOpen(true);
  };

  const handleEditLiability = (liability: Liability) => {
    setSelectedLiability(liability);
    setIsLiabilityFormOpen(true);
  };

  const handleDeleteLiability = (id: string) => {
    setLiabilities(liabilities.filter(liability => liability.id !== id));
  };

  const handleLiabilityFormSubmit = (liability: Liability) => {
    if (selectedLiability) {
      setLiabilities(liabilities.map(l => (l.id === liability.id ? liability : l)));
    } else {
      setLiabilities([...liabilities, { ...liability, id: Date.now().toString() }]);
    }
    setIsLiabilityFormOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <KeyMetrics totalAssets={totalAssets} totalLiabilities={totalLiabilities} netWorth={netWorth} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Assets</h2>
            <Button onClick={handleAddAsset}>Add Asset</Button>
          </div>
          <AssetList assets={assets} onEdit={handleEditAsset} onDelete={handleDeleteAsset} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Liabilities</h2>
            <Button onClick={handleAddLiability}>Add Liability</Button>
          </div>
          <LiabilityList liabilities={liabilities} onEdit={handleEditLiability} onDelete={handleDeleteLiability} />
        </div>
      </div>

      <Dialog open={isAssetFormOpen} onOpenChange={setIsAssetFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedAsset ? 'Edit Asset' : 'Add Asset'}</DialogTitle>
          </DialogHeader>
          <AssetForm
            initialAsset={selectedAsset}
            onSubmit={handleAssetFormSubmit}
            onCancel={() => setIsAssetFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={isLiabilityFormOpen} onOpenChange={setIsLiabilityFormOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedLiability ? 'Edit Liability' : 'Add Liability'}</DialogTitle>
          </DialogHeader>
          <LiabilityForm
            initialLiability={selectedLiability}
            onSubmit={handleLiabilityFormSubmit}
            onCancel={() => setIsLiabilityFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <Chart title="Asset Allocation">
          <AssetAllocationChart />
        </Chart>
        <Chart title="Net Worth Over Time">
          <NetWorthChart />
        </Chart>
        <div className="col-span-1 lg:col-span-2">
          <Chart title="Liability Breakdown">
            <LiabilityChart />
          </Chart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
