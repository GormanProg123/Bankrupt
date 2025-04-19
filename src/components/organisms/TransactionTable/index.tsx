import React, { useState, useEffect } from 'react';
import { Transaction, FilterType } from '../../../types/wallet';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  useEffect(() => {
    applyFilter(filter);
  }, [filter, transactions]);

  const applyFilter = (filterType: FilterType) => {
    let filtered = [...transactions];
    
    if (filterType === 'income') {
      filtered = transactions.filter(tx => tx.amount.startsWith('+'));
    } else if (filterType === 'expense') {
      filtered = transactions.filter(tx => tx.amount.startsWith('-'));
    }
    
    setFilteredTransactions(filtered);
    setCurrentPage(1);
  };

  const handleFilterClick = (filterType: FilterType) => {
    setFilter(filterType);
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  return (
    <>
      <div className="display-options flex bg-stone-300 w-full text-center py-3 rounded-2xl mb-2">
        <button 
          className={`option w-1/3 rounded-xl py-2 mx-2 ${filter === 'all' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button 
          className={`option w-1/3 rounded-xl py-2 mx-2 ${filter === 'income' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('income')}
        >
          Income
        </button>
        <button 
          className={`option w-1/3 rounded-xl py-2 mx-2 ${filter === 'expense' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('expense')}
        >
          Expense
        </button>
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 font-medium">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((tx, index) => {
              const amountColor = tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-600';
              
              return (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-3 whitespace-nowrap">{tx.date}</td>
                  <td className="px-6 py-3">{tx.description}</td>
                  <td className="px-6 py-3">{tx.category}</td>
                  <td className={`px-6 py-3 font-medium ${amountColor}`}>{tx.amount}</td>
                  <td className="px-6 py-3 text-gray-400 text-lg">⋯</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="pagination flex justify-between pt-5 items-center">
        <button 
          className="pagination-prev bg-transparent text-black py-2 px-5 rounded font-semibold border-gray-300 border hover:border-gray-900"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p className="pagination-number">
          Page {currentPage} of {totalPages || 1}
        </p>
        <button 
          className="pagination-next bg-black text-white py-2 px-5 rounded font-semibold border-gray-900 border hover:border-gray-200"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages || filteredTransactions.length === 0}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TransactionTable;
