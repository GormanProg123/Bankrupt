import { useState, useEffect } from 'react';
import { Transaction, FilterType } from '../../../../../../types/types';
import { RootState } from '../../../../../../app/store';
import { useSelector } from 'react-redux';



  
const TransactionTable = () => {
  


  const transactions = useSelector((state:RootState) => state.walletCardSlice.currentCardHistory)
  const [tran,setTran] = useState<Transaction[]>([])

  useEffect(() => {
    if (Array.isArray(transactions?.history)) {
      setTran([...transactions.history]);
    } else {
      setTran([]);
    }
  }, [transactions]);



  
  // const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  const applyFilter = (filterType: FilterType) => {
    if (!transactions || !Array.isArray(transactions.history)) return;

    let filtered = [...transactions.history];
    
    if (filterType === 'in') {
      filtered = transactions.history.filter(tx => tx.direction === 'in');
    } else if (filterType === 'out') {
      filtered = transactions.history.filter(tx => tx.direction === 'out');
    }
    
    setTran(filtered);
    setCurrentPage(1);
  };

   

  const handleFilterClick = (filterType: FilterType) => {
    setFilter(filterType);
  };

  // const indexOfLastTransaction = currentPage * transactionsPerPage;
  // const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  // const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(tran.length / transactionsPerPage);



  

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
          className={`option w-1/3 rounded-xl py-2 mx-2 ${filter === 'in' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('in')}
        >
          Income
        </button>
        <button 
          className={`option w-1/3 rounded-xl py-2 mx-2 ${filter === 'out' ? 'bg-white' : ''}`}
          onClick={() => handleFilterClick('out')}
        >
          Expense
        </button>
      </div>
      
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 font-medium">
            <tr>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">From</th>
              <th className="px-6 py-4">To</th>
              
              <th className="px-6 py-4">Direction</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Amount</th>
             
            </tr>
          </thead>
          <tbody>
            {tran.map((tx:any, index) => {
              const amountColor = tx.direction === "in" ? 'text-green-600' : 'text-red-600';
              const time = new Date(tx.time)
              return (
                <tr key={index} className="border-t hover:bg-gray-50">
                  
                  <td className="px-6 py-3 whitespace-nowrap">{`${new Intl.DateTimeFormat("en-US",{ month: "long" }).format(time)} ${time.getDate()} `} {time.getHours()}:{time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}</td>
      
                  <td className="px-6 py-3">{tx.from_card_number}</td>
                  <td className="px-6 py-3">{tx.to_card_number}</td>

                  <td className="px-6 py-3">{tx.direction}</td>
                  <td className="px-6 py-3">{tx.transfer_type}</td>
                  <td className={`px-6 py-3 font-medium ${amountColor}`}>{amountColor === "text-green-600" ? "+" : "-"}{tx.amount}</td>
                  
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
          disabled={currentPage === totalPages || tran.length === 0}
        >
          Next
        </button>
      </div>  
    </>
  );
};

export default TransactionTable;
