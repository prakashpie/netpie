import React, { useState, useEffect } from 'react';
import type { Asset, BankAccountAsset, StockAsset, MutualFundAsset, FixedDepositAsset, OtherAsset } from '@/types/asset';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AssetFormProps {
  initialAsset?: Asset;
  onSubmit: (asset: Asset) => void;
  onCancel: () => void;
}

const AssetForm: React.FC<AssetFormProps> = ({ initialAsset, onSubmit, onCancel }) => {
  const [asset, setAsset] = useState<Partial<Asset>>(initialAsset || { type: 'bank' });

  useEffect(() => {
    setAsset(initialAsset || { type: 'bank' });
  }, [initialAsset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAsset(prev => ({
      ...prev,
      [name]: name === 'value' || name === 'quantity' || name === 'currentPrice' || name === 'nav' || name === 'units' || name === 'principalAmount' || name === 'maturityValue' ? parseFloat(value) : value
    }));
  };

  const handleSelectChange = (value: string) => {
    setAsset(prev => ({
      ...prev,
      type: value as Asset['type'],
      // Reset specific fields when type changes
      quantity: undefined,
      currentPrice: undefined,
      nav: undefined,
      units: undefined,
      principalAmount: undefined,
      maturityValue: undefined,
      manualValue: undefined,
      description: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (asset.name && asset.type && asset.value !== undefined) {
      onSubmit(asset as Asset);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Asset Name</Label>
        <Input id="name" name="name" value={asset.name || ''} onChange={handleChange} required />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="type">Asset Type</Label>
        <Select onValueChange={handleSelectChange} value={asset.type || 'bank'}>
          <SelectTrigger id="type">
            <SelectValue placeholder="Select asset type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bank">Bank Account</SelectItem>
            <SelectItem value="stock">Stock</SelectItem>
            <SelectItem value="mutual_fund">Mutual Fund</SelectItem>
            <SelectItem value="fixed_deposit">Fixed Deposit</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {asset.type === 'bank' && (
        <div className="grid gap-2">
          <Label htmlFor="manualValue">Manual Value</Label>
          <Input id="manualValue" name="value" type="number" value={(asset as BankAccountAsset).value || ''} onChange={handleChange} required />
        </div>
      )}

      {asset.type === 'stock' && (
        <>
          <div className="grid gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" name="quantity" type="number" value={(asset as StockAsset).quantity || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="currentPrice">Current Price per Unit</Label>
            <Input id="currentPrice" name="currentPrice" type="number" value={(asset as StockAsset).currentPrice || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="value">Total Value</Label>
            <Input id="value" name="value" type="number" value={((asset as StockAsset).quantity * (asset as StockAsset).currentPrice) || ''} readOnly />
          </div>
        </>
      )}

      {asset.type === 'mutual_fund' && (
        <>
          <div className="grid gap-2">
            <Label htmlFor="units">Units</Label>
            <Input id="units" name="units" type="number" value={(asset as MutualFundAsset).units || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="nav">NAV (Net Asset Value)</Label>
            <Input id="nav" name="nav" type="number" value={(asset as MutualFundAsset).nav || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="value">Total Value</Label>
            <Input id="value" name="value" type="number" value={((asset as MutualFundAsset).units * (asset as MutualFundAsset).nav) || ''} readOnly />
          </div>
        </>
      )}

      {asset.type === 'fixed_deposit' && (
        <>
          <div className="grid gap-2">
            <Label htmlFor="principalAmount">Principal Amount</Label>
            <Input id="principalAmount" name="principalAmount" type="number" value={(asset as FixedDepositAsset).principalAmount || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="maturityValue">Maturity Value</Label>
            <Input id="maturityValue" name="maturityValue" type="number" value={(asset as FixedDepositAsset).maturityValue || ''} onChange={handleChange} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="value">Current Value (e.g., Principal)</Label>
            <Input id="value" name="value" type="number" value={(asset as FixedDepositAsset).principalAmount || ''} onChange={handleChange} required />
          </div>
        </>
      )}

      {asset.type === 'other' && (
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Input id="description" name="description" value={(asset as OtherAsset).description || ''} onChange={handleChange} />
          <Label htmlFor="value">Value</Label>
          <Input id="value" name="value" type="number" value={asset.value || ''} onChange={handleChange} required />
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Save Asset</Button>
      </div>
    </form>
  );
};

export default AssetForm;
