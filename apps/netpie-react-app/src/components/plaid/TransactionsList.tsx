import React from 'react';

interface Transaction {
  transaction_id: string;
  date: string;
  name: string;
  amount: number;
}

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Recent Transactions</h2>
      {
        transactions.length === 0 ? (
          <p className="text-muted-foreground">No transactions to display.</p>
        ) : (
          <ul className="divide-y divide-border">
            {transactions.map((transaction) => (
              <li key={transaction.transaction_id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <p className={`font-medium ${transaction.amount > 0 ? 'text-red-500' : 'text-green-500'}`}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default TransactionsList;
