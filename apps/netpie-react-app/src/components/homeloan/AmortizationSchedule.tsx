import React, { useEffect, useState } from 'react';

interface LoanDetails {
  principal: number;
  interestRate: number; // Initial interest rate
  tenure: number; // in years
  startDate: string;
}

interface InterestRateChange {
  id: string;
  date: string;
  rate: number;
}

interface AmortizationEntry {
  month: number;
  paymentDate: string;
  startingBalance: number;
  monthlyPayment: number;
  interestPaid: number;
  principalPaid: number;
  endingBalance: number;
}

interface AmortizationScheduleProps {
  loanDetails: LoanDetails;
  interestRateChanges: InterestRateChange[];
}

const AmortizationSchedule: React.FC<AmortizationScheduleProps> = ({ loanDetails, interestRateChanges }) => {
  const [schedule, setSchedule] = useState<AmortizationEntry[]>([]);

  useEffect(() => {
    if (loanDetails) {
      calculateAmortizationSchedule();
    }
  }, [loanDetails, interestRateChanges]);

  const calculateAmortizationSchedule = () => {
    let currentPrincipal = loanDetails.principal;
    let currentInterestRate = loanDetails.interestRate / 100 / 12; // Monthly interest rate
    let remainingMonths = loanDetails.tenure * 12;
    const monthlySchedule: AmortizationEntry[] = [];

    let paymentDate = new Date(loanDetails.startDate);

    // Sort interest rate changes by date
    const sortedRateChanges = [...interestRateChanges].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    for (let month = 1; month <= remainingMonths; month++) {
      // Check for interest rate changes
      const rateChange = sortedRateChanges.find(change => {
        const changeDate = new Date(change.date);
        return paymentDate.getFullYear() === changeDate.getFullYear() && paymentDate.getMonth() === changeDate.getMonth();
      });

      if (rateChange) {
        currentInterestRate = rateChange.rate / 100 / 12;
      }

      const monthlyPayment = calculateEMI(currentPrincipal, currentInterestRate, remainingMonths);
      const interestPaid = currentPrincipal * currentInterestRate;
      const principalPaid = monthlyPayment - interestPaid;
      const endingBalance = currentPrincipal - principalPaid;

      monthlySchedule.push({
        month,
        paymentDate: paymentDate.toISOString().slice(0, 10),
        startingBalance: currentPrincipal,
        monthlyPayment,
        interestPaid,
        principalPaid,
        endingBalance,
      });

      currentPrincipal = endingBalance;
      remainingMonths--;

      // Move to next month
      paymentDate.setMonth(paymentDate.getMonth() + 1);

      if (currentPrincipal <= 0) {
        break;
      }
    }
    setSchedule(monthlySchedule);
  };

  const calculateEMI = (principal: number, monthlyInterestRate: number, numberOfMonths: number): number => {
    if (monthlyInterestRate === 0) {
      return principal / numberOfMonths;
    }
    const emi = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return emi;
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Amortization Schedule</h2>
      {
        schedule.length === 0 ? (
          <p>Enter loan details to see the amortization schedule.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Starting Balance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Paid</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal Paid</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ending Balance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {schedule.map((entry) => (
                  <tr key={entry.month}>
                    <td className="px-6 py-4 whitespace-nowrap">{entry.month}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{entry.paymentDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${entry.startingBalance.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${entry.monthlyPayment.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${entry.interestPaid.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${entry.principalPaid.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${entry.endingBalance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  );
};

export default AmortizationSchedule;
