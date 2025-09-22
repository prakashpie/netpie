import React from 'react';

interface ChartProps {
  title: string;
  children: React.ReactNode;
}

const Chart: React.FC<ChartProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
};

export default Chart;
