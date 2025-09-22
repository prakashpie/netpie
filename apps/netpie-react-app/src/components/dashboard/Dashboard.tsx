'use client';

import React, { useState, useEffect } from 'react';
import KeyMetrics from './KeyMetrics';
import Chart from './Chart';

import AssetAllocationChart from './AssetAllocationChart';

const Dashboard = () => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [netWorth, setNetWorth] = useState(0);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      // Sample data
      const assets = 150000;
      const liabilities = 50000;
      const net = assets - liabilities;

      setTotalAssets(assets);
      setTotalLiabilities(liabilities);
      setNetWorth(net);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <KeyMetrics totalAssets={totalAssets} totalLiabilities={totalLiabilities} netWorth={netWorth} />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Chart title="Asset Allocation">
          <AssetAllocationChart />
        </Chart>
        <Chart title="Net Worth Over Time">
          {/* Line chart will go here */}
        </Chart>
        <div className="col-span-1 lg:col-span-2">
          <Chart title="Liability Breakdown">
            {/* Bar chart will go here */}
          </Chart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
