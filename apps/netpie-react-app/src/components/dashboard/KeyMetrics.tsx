import React from 'react';

interface KeyMetricProps {
  title: string;
  value: number;
}

const KeyMetric: React.FC<KeyMetricProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl">${value.toFixed(2)}</p>
    </div>
  );
};

interface KeyMetricsProps {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ totalAssets, totalLiabilities, netWorth }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <KeyMetric title="Total Assets" value={totalAssets} />
      <KeyMetric title="Total Liabilities" value={totalLiabilities} />
      <KeyMetric title="Net Worth" value={netWorth} />
    </div>
  );
};

export default KeyMetrics;
