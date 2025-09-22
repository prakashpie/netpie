import React, { useState, useEffect } from 'react';
import type { Liability, PersonalLoanLiability, CreditCardLiability, OtherLiability } from '@/types/asset';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LiabilityFormProps {
  initialLiability?: Liability;
  onSubmit: (liability: Liability) => void;
  onCancel: () => void;
}

const LiabilityForm: React.FC<LiabilityFormProps> = ({ initialLiability, onSubmit, onCancel }) => {
  const [liability, setLiability] = useState<Partial<Liability>>(initialLiability || { type: 'personal_loan' });

  useEffect(() => {
    setLiability(initialLiability || { type: 'personal_loan' });
  }, [initialLiability]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLiability(prev => ({ ...prev, [name]: name === 'amount' || name === 'principalAmount' || name === 'currentOutstanding' ? parseFloat(value) : value }));
  };

  const handleSelectChange = (value: string) => {
    setLiability(prev => ({ ...prev, type: value as Liability['type'] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (liability.name && liability.type && liability.amount !== undefined) {
      onSubmit(liability as Liability);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Liability Name</Label>
        <Input id="name" name="name" value={liability.name || ''} onChange={handleChange} required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="type">Liability Type</Label>
        <Select onValueChange={handleSelectChange} value={liability.type || 'personal_loan'}>
          <SelectTrigger id="type">
            <SelectValue placeholder="Select liability type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal_loan">Personal Loan</SelectItem>
            <SelectItem value="credit_card">Credit Card</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {liability.type === 'personal_loan' && (
        <>
          <div className="grid gap-2">
            <Label htmlFor="principalAmount">Principal Amount</Label>
            <Input id="principalAmount" name="principalAmount" type="number" value={(liability as PersonalLoanLiability).principalAmount || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="currentOutstanding">Current Outstanding</Label>
            <Input id="currentOutstanding" name="amount" type="number" value={(liability as PersonalLoanLiability).amount || ''} onChange={handleChange} required />
          </div>
        </>
      )}

      {liability.type === 'credit_card' && (
        <div className="grid gap-2">
          <Label htmlFor="currentOutstanding">Current Outstanding</Label>
          <Input id="currentOutstanding" name="amount" type="number" value={(liability as CreditCardLiability).amount || ''} onChange={handleChange} required />
        </div>
      )}

      {liability.type === 'other' && (
        <div className="grid gap-2">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" name="amount" type="number" value={(liability as OtherLiability).amount || ''} onChange={handleChange} required />
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save Liability</Button>
      </div>
    </form>
  );
};

export default LiabilityForm;
