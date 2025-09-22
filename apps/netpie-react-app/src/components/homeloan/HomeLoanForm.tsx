import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface HomeLoanFormProps {
  onSubmit: (details: any) => void;
}

const HomeLoanForm: React.FC<HomeLoanFormProps> = ({ onSubmit }) => {
  const [details, setDetails] = useState({
    principal: '',
    interestRate: '',
    tenure: '',
    startDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (details.principal && details.interestRate && details.tenure && details.startDate) {
      onSubmit(details);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="principal">Principal Amount</Label>
        <Input id="principal" name="principal" type="number" value={details.principal} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="interestRate">Interest Rate (%)</Label>
        <Input id="interestRate" name="interestRate" type="number" step="0.01" value={details.interestRate} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="tenure">Loan Tenure (Years)</Label>
        <Input id="tenure" name="tenure" type="number" value={details.tenure} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="startDate">EMI Start Date</Label>
        <Input id="startDate" name="startDate" type="date" value={details.startDate} onChange={handleChange} required />
      </div>
      <Button type="submit">Calculate</Button>
    </form>
  );
};

export default HomeLoanForm;
