import React from 'react';
import { Icon } from '../../atoms/Icon';
import WalletCard from '../../molecules/WalletCard/index';

const WalletHeader: React.FC = () => {
  return (
    <div className="wallet-top py-10">
      <div className="container flex justify-between items-center mx-auto">
        <h3 className="text-4xl font-bold">My Wallets</h3>
        <div className="flex">
          <button className="export cursor-pointer mr-5 text-xl text-black bg-transparent border-gray-400 border hover:border-gray-600 px-4 py-2 rounded-lg">
            <Icon iconClass='fa-download' size='small' ></Icon> Export
          </button>
          <button className="add-wallet  cursor-pointer text-xl flex items-center text-white bg-black border-gray-400 border hover:border-gray-900 px-4 py-2 rounded-lg">
            <Icon iconClass='fa-plus' size='small'></Icon> Add account
          </button>
        </div>
      </div>
      
      <div className="cards py-5">
        <div className="container mx-auto flex justify-center">
          <WalletCard title="Total Balance" amount="$12,580.00" icon="fa-wallet" />
          <WalletCard title="Checking" amount="$8,380.00" icon="fa-credit-card" />
          <WalletCard title="Savings" amount="$4,200.00" icon="fa-piggy-bank" />
          <WalletCard 
            title="Rewards Points" 
            amount="3,250 pts" 
            icon="fa-star" 
            additionalClasses="bg-stone-300" 
            iconWrapper={true} 
          />
        </div>
      </div>
    </div>
  );
};

export default WalletHeader;