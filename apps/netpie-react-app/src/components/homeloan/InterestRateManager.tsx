import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InterestRateChange {
  id: string;
  date: string;
  rate: number;
}

interface InterestRateManagerProps {
  initialRates?: InterestRateChange[];
  onRatesChange: (rates: InterestRateChange[]) => void;
}

const InterestRateManager: React.FC<InterestRateManagerProps> = ({ initialRates = [], onRatesChange }) => {
  const [rates, setRates] = useState<InterestRateChange[]>(initialRates);
  const [newRateDate, setNewRateDate] = useState('');
  const [newRateValue, setNewRateValue] = useState('');

  const handleAddRate = () => {
    if (newRateDate && newRateValue) {
      const newRate: InterestRateChange = {
        id: Date.now().toString(),
        date: newRateDate,
        rate: parseFloat(newRateValue),
      };
      const updatedRates = [...rates, newRate].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      setRates(updatedRates);
      onRatesChange(updatedRates);
      setNewRateDate('');
      setNewRateValue('');
    } else {
      alert('Please enter both date and rate.');
    }
  };

  const handleDeleteRate = (id: string) => {
    const updatedRates = rates.filter(rate => rate.id !== id);
    setRates(updatedRates);
    onRatesChange(updatedRates);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Manage Interest Rate Changes</h3>
      <div className="flex space-x-2">
        <div className="grid gap-2">
          <Label htmlFor="rateDate">Effective Date</Label>
          <Input id="rateDate" type="date" value={newRateDate} onChange={(e) => setNewRateDate(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="rateValue">Interest Rate (%)</Label>
          <Input id="rateValue" type="number" step="0.01" value={newRateValue} onChange={(e) => setNewRateValue(e.target.value)} />
        </div>
        <Button type="button" onClick={handleAddRate} className="self-end">Add Rate</Button>
      </div>

      {rates.length > 0 && (
        <ul className="divide-y divide-border mt-4">
          {rates.map(rate => (
            <li key={rate.id} className="flex items-center justify-between py-2">
              <span>{rate.date}: {rate.rate}%</span>
              <Button variant="destructive" size="sm" onClick={() => handleDeleteRate(rate.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InterestRateManager;
