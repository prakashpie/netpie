export interface Asset {
  id: string;
  name: string;
  type: 'bank' | 'stock' | 'mutual_fund' | 'fixed_deposit' | 'other';
  value: number; // Current estimated value
}

export interface BankAccountAsset extends Asset {
  type: 'bank';
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
}

export interface OtherAsset extends Asset {
  type: 'other';
  description?: string;
}

export type AnyAsset = BankAccountAsset | StockAsset | MutualFundAsset | FixedDepositAsset | OtherAsset;

export interface Liability {
    id: string;
    name: string;
    type: 'personal_loan' | 'credit_card' | 'other';
    amount: number;
}

export interface PersonalLoanLiability extends Liability {
    type: 'personal_loan';
    principalAmount: number;
}

export interface CreditCardLiability extends Liability {
    type: 'credit_card';
}

export interface OtherLiability extends Liability {
    type: 'other';
}

export type AnyLiability = PersonalLoanLiability | CreditCardLiability | OtherLiability;
