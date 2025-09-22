export interface Asset {
  id: string;
  name: string;
  type: 'bank' | 'stock' | 'mutual_fund' | 'fixed_deposit' | 'other';
  value: number; // Current estimated value
}

export interface BankAccountAsset extends Asset {
  type: 'bank';
  manualValue: number; // Manually entered value for bank accounts
}

export interface StockAsset extends Asset {
  type: 'stock';
  quantity: number;
  currentPrice: number; // Manually entered current price per unit
}

export interface MutualFundAsset extends Asset {
  type: 'mutual_fund';
  nav: number; // Net Asset Value
  units: number;
}

export interface FixedDepositAsset extends Asset {
  type: 'fixed_deposit';
  principalAmount: number;
  maturityValue: number;
  // maturityDate: Date; // Optional: could add more details
}

export interface OtherAsset extends Asset {
  type: 'other';
  description?: string;
}
