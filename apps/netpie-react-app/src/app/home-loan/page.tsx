'use client';

import React, { useState } from 'react';
import HomeLoanForm from '@/components/homeloan/HomeLoanForm';
import InterestRateManager from '@/components/homeloan/InterestRateManager';

interface LoanDetails {
  principal: number;
  interestRate: number;
  tenure: number;
  startDate: string;
}

interface InterestRateChange {
  id: string;
  date: string;
  rate: number;
}

const HomeLoanPage: React.FC = () => {
  const [loanDetails, setLoanDetails] = useState<LoanDetails | undefined>(undefined);
  const [interestRateChanges, setInterestRateChanges] = useState<InterestRateChange[]>([]);

  const handleFormSubmit = (details: any) => {
    setLoanDetails({
      principal: parseFloat(details.principal),
      interestRate: parseFloat(details.interestRate),
      tenure: parseFloat(details.tenure),
      startDate: details.startDate,
    });
    setInterestRateChanges([
      { id: 'initial', date: details.startDate, rate: parseFloat(details.interestRate) },
    ]);
  };

  const handleRatesChange = (rates: InterestRateChange[]) => {
    setInterestRateChanges(rates);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Loan Calculator</h1>
      <div className="max-w-md mx-auto">
        <HomeLoanForm onSubmit={handleFormSubmit} />
      </div>

      {loanDetails && (
        <div className="mt-8 max-w-md mx-auto p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Loan Summary</h2>
          <p>Principal: ${loanDetails.principal.toFixed(2)}</p>
          <p>Initial Interest Rate: {loanDetails.interestRate}%</p>
          <p>Tenure: {loanDetails.tenure} years</p>
          <p>Start Date: {loanDetails.startDate}</p>
          <div className="mt-4">
            <InterestRateManager
              initialRates={interestRateChanges}
              onRatesChange={handleRatesChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLoanPage;
