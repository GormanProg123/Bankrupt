import React from 'react';
import TransactionTable from '../TransactionTable/index';
import { Transaction } from '../../../types/wallet.ts';

interface WalletActivityProps {
  transactions: Transaction[];
}

const WalletActivity: React.FC<WalletActivityProps> = ({ transactions }) => {
  return (
    <div className="wallet-activity w-2/3 rounded-lg p-5 border-gray-300 border-2">
      <h2 className="text-2xl pb-2">Wallet Activity</h2>
      <p className="text-gray-400 pb-3">Your recent transactions across all wallets</p>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default WalletActivity;