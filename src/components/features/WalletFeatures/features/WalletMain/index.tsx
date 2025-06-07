import TransactionTable from './TransactionTable/index';
import { SidePanel } from './SidePanel/index.tsx';

const WalletMain = () => {
  return (
    <main className='main flex-1 pb-10 px-4'>
      <div className="container mx-auto w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="wallet-activity flex-1 lg:w-2/3 rounded-lg p-4 md:p-6 border-gray-300 border-2">
            <h2 className="text-xl md:text-2xl pb-2 font-semibold">Wallet Activity</h2>
            <p className="text-gray-400 pb-3 text-sm md:text-base">Your recent transactions across all wallets</p>
            <TransactionTable />
          </div>
          
        
          <div className="lg:w-1/3">
            <SidePanel />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WalletMain;