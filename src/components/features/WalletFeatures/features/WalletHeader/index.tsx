import { useEffect, useState } from "react";
import { Icon } from "../../../../atoms/Icon";
import WalletCardsBlock from "./WalletCardsBlock";
import { API_URL } from "../../../../api/baseUrl";

const WalletHeader = () => {
  
  const createNewCard = async () => {
    
        try {
          
          const res = await fetch(`${API_URL}/card/create`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          if (res.ok) {
             window.dispatchEvent(new Event('refreshCards'));
          } else {
            throw new Error('Network response was not ok');
          }

      
          const result = await res.json();
    
          console.log(result);
          
  
        } catch (error) {
          console.error('Error:', error);
        }
     
    
      };    
   


  return (
    <div className="wallet-top py-10">
      <div className="container flex justify-between items-center mx-auto">
        <h3 className="text-4xl font-bold">My Wallets</h3>
        <div className="flex">
          <button className="export cursor-pointer mr-5 text-xl text-black bg-transparent border-gray-400 border hover:border-gray-600 px-4 py-2 rounded-lg">
            <Icon iconClass="fa-download" size="small" />
            Export
          </button>
          <button onClick={() => createNewCard()} className="add-wallet cursor-pointer text-xl flex items-center text-white bg-black border-gray-400 border hover:border-gray-900 px-4 py-2 rounded-lg">
            <Icon iconClass="fa-plus" size="small" />
            Add account
          </button>
        </div>
      </div>

      <div className="cards py-5">
        <WalletCardsBlock />
      </div>
    </div>
  );
};

export default WalletHeader;
