import { useState, useEffect } from 'react';
import { Transaction, FilterType } from '../../../../../../types/types';
import { RootState } from '../../../../../../app/store';
import { useSelector } from 'react-redux';
import { API_URL } from '../../../../../api/baseUrl';

const TransactionTable = () => {
  const transactions = useSelector((state: RootState) => state.walletCardSlice.currentCardHistory)
  const [tran, setTran] = useState<Transaction[]>([])
  const [filter, setFilter] = useState<FilterType>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;
  const firstCardNumber = useSelector((state:RootState) => state.firstCardSlice.firstCardNumber)

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = tran.slice(indexOfFirstTransaction, indexOfLastTransaction);


  const getFirstCardTransactions = async () => {
      try {
        const res = await fetch(`${API_URL}/card/history`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ card_number: firstCardNumber }),
        });
  
        if (!res.ok) {  
          console.log(!res.ok);
          throw new Error('Network response was not ok');
        } 
        
        const result = await res.json();
        setTran(result.history  )
      
      } catch (error) {
        console.error('Error:', error);
      }
    };        
  

  


const applyFilter = () => {
  const source = Array.isArray(transactions?.history) ? transactions.history : tran;
  if (!Array.isArray(source)) return;

  let filtered = source;
  if (filter === 'in') {
    filtered = source.filter(tx => tx.direction === 'in');
  } else if (filter === 'out') {
    filtered = source.filter(tx => tx.direction === 'out');
  }

  setTran(filtered);
  setCurrentPage(1);
};

  const handleFilterClick = (filterType: FilterType) => {
    setFilter(filterType);
  };

  const totalPages = Math.ceil(tran.length / transactionsPerPage);


console.log(transactions.history.length)
  useEffect(() => {
    
    if (Array.isArray(transactions?.history)) {

      if (transactions.history.length > 0) {
        setTran(transactions.history);
      }else {
      getFirstCardTransactions();
    }
    } 
  }, [transactions]);



    useEffect(() => { 
      applyFilter();
  }, [filter, transactions]);
  return (
    <>

      <div className="display-options flex bg-stone-300 w-full text-center py-2 md:py-3 rounded-2xl mb-2">
        <button 
          className={`option flex-1 rounded-xl py-2 mx-1 md:mx-2 text-sm md:text-base cursor-pointer ${filter === 'all' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </button>
        <button 
          className={`option flex-1 rounded-xl py-2 mx-1 md:mx-2 text-sm md:text-base cursor-pointer ${filter === 'in' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('in')}
        >
          Income
        </button>
        <button 
          className={`option flex-1 rounded-xl py-2 mx-1 md:mx-2 text-sm md:text-base cursor-pointer ${filter === 'out' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('out')}
        >
          Expense
        </button>
      </div>
      
  
      <div className="block md:hidden space-y-3">
        {currentTransactions.map((tx: any, index) => {
          const amountColor = tx.direction === "in" ? 'text-green-600' : 'text-red-600';
          const time = new Date(tx.time);
          
          return (
            <div key={index} className={`bg-white border rounded-lg p-4 shadow-sm `}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">
                    {`${new Intl.DateTimeFormat("en-US", { month: "long" }).format(time)} ${time.getDate()}`} {time.getHours()}:{time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">From:</span> {tx.from_card_number}
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">To:</span> {tx.to_card_number}
                  </div>
                </div>
                <div className={`text-lg font-semibold ${amountColor}`}>
                  {amountColor === "text-green-600" ? "+" : "-"}{tx.amount}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span className="capitalize">{tx.direction}</span>
                <span>{tx.transfer_type}</span>
              </div>
            </div>
          );
        })}
      </div>


      <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 font-medium">
            <tr>
              <th className="px-4 lg:px-6 py-4">Date</th>
              <th className="px-4 lg:px-6 py-4">From</th>
              <th className="px-4 lg:px-6 py-4">To</th>
              <th className="px-4 lg:px-6 py-4">Direction</th>
              <th className="px-4 lg:px-6 py-4">Category</th>
              <th className="px-4 lg:px-6 py-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((tx: any, index) => {
              const amountColor = tx.direction === "in" ? 'text-green-600' : 'text-red-600';
              const time = new Date(tx.time);
              
              return (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 lg:px-6 py-3 whitespace-nowrap text-xs lg:text-sm">
                    {`${new Intl.DateTimeFormat("en-US", { month: "long" }).format(time)} ${time.getDate()}`} {time.getHours()}:{time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
                  </td>
                  <td className="px-4 lg:px-6 py-3 text-xs lg:text-sm">{tx.from_card_number}</td>
                  <td className="px-4 lg:px-6 py-3 text-xs lg:text-sm">{tx.to_card_number}</td>
                  <td className="px-4 lg:px-6 py-3 text-xs lg:text-sm capitalize">{tx.direction}</td>
                  <td className="px-4 lg:px-6 py-3 text-xs lg:text-sm">{tx.transfer_type}</td>
                  <td className={`px-4 lg:px-6 py-3 font-medium text-xs lg:text-sm ${amountColor}`}>
                    {amountColor === "text-green-600" ? "+" : "-"}{tx.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
 
      <div className="pagination flex flex-col sm:flex-row justify-between pt-5 items-center gap-3">
        <button 
          className="pagination-prev bg-transparent text-black py-2 px-4 md:px-5 rounded font-semibold border-gray-300 border hover:border-gray-900 text-sm md:text-base w-full sm:w-auto cursor-pointer"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p className="pagination-number text-sm md:text-base">
          Page {currentPage} of {totalPages || 1}
        </p>
        <button 
          className="pagination-next bg-black text-white py-2 px-4 md:px-5 rounded font-semibold border-gray-900 border hover:border-gray-200 text-sm md:text-base w-full sm:w-auto cursor-pointer"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages || tran.length === 0}
        >
          Next
        </button>
      </div>  
    </>
  );
};

export default TransactionTable;