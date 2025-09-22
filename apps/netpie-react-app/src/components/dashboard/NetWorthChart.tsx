import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', netWorth: 4000 },
  { name: 'Feb', netWorth: 3000 },
  { name: 'Mar', netWorth: 2000 },
  { name: 'Apr', netWorth: 2780 },
  { name: 'May', netWorth: 1890 },
  { name: 'Jun', netWorth: 2390 },
  { name: 'Jul', netWorth: 3490 },
];

const NetWorthChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="netWorth" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NetWorthChart;
