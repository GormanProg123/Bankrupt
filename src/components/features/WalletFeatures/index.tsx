import { useState } from 'react';
import WalletNavBar from './features/WalletHeader/WalletNavBar';
import WalletHeader from '../../features/WalletFeatures/features/WalletHeader/index';
import { Transaction } from '../../../types/wallet';        
import Footer from '../../atoms/Footer';
import WalletMain from './features/WalletMain/index';

export const Wallet = () => {
  const [transactions] = useState<Transaction[]>([
    { date: 'Apr 30, 2025', description: 'Salary Deposit', category: 'Income', amount: '+$3,500.00' },
    { date: 'Apr 29, 2025', description: 'Grocery Store', category: 'Groceries', amount: '-$85.25' },
    { date: 'Apr 28, 2025', description: 'Electric Bill', category: 'Utilities', amount: '-$124.50' },
    { date: 'Apr 27, 2025', description: 'Restaurant', category: 'Dining', amount: '-$67.80' },
    { date: 'Apr 26, 2025', description: 'Online Shopping', category: 'Shopping', amount: '-$129.99' },
    { date: 'Apr 25, 2025', description: 'Interest Payment', category: 'Income', amount: '+$15.50' },
    { date: 'Apr 24, 2025', description: 'Interest Payment', category: 'Income', amount: '-$170.50' },
    { date: 'Apr 14, 2025', description: 'Interest Payment', category: 'Income', amount: '+$101.50' },
    { date: 'Apr 13, 2025', description: 'Interest Payment', category: 'Income', amount: '-$108.50' },
    { date: 'Apr 15, 2025', description: 'Interest Payment', category: 'Income', amount: '+$160.50' },
    { date: 'Apr 56, 2025', description: 'Interest Payment', category: 'Income', amount: '-$110.50' },
    { date: 'Apr 612, 2025', description: 'Interest Payment', category: 'Income', amount: '+$330.50' },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <WalletNavBar username="John Doe" />
      <WalletHeader />
      

      <WalletMain transactions={transactions} />
      
      <Footer />
      
    </div>
  );
};


