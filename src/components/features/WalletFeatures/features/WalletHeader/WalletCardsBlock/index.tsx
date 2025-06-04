import WalletCard from "../WalletCard";
import { API_URL } from "../../../../../api/baseUrl";
import { useEffect, useState } from "react";
import { CardData } from "../../../../../../types/types";

const WalletCardsBlock = () => {
  const [cards,setCards] = useState<CardData[]>([]);
  
  const getCardsData = async () => {
  
      try {
        const res = await fetch(`${API_URL}/card`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            
          },
          credentials: "include",
        });
  
        if (!res.ok) {  
          console.log(res.ok)
          throw new Error('Network response was not ok');
          
        } 
        
        const result = await res.json();
        setCards(result)
        console.log(result);
        

      } catch (error) {
        console.error('Error:', error);
      }
   
  
    };    
    
useEffect(() => {
  const handleRefresh = () => {
    console.log("refreshing...");
    getCardsData();
  };

  window.addEventListener('refreshCards', handleRefresh);

  return () => {
    window.removeEventListener('refreshCards', handleRefresh);
  };
}, []);



  return (
        <div className="container mx-auto flex overflow-x-auto gap-2 pb-2">
          {cards.map((card, id) => (
            <div  key={id} className={`flex-shrink-0 `}>
              <WalletCard 
                number={card.number}  
                amount={`$${card.balance}`} 
                icon="fa-wallet" 
                cardId={card.card_id}
              />
            </div>  
          ))}
      </div>
  );
};

export default WalletCardsBlock;

    {/* <WalletCard  amount="$8,380.00" icon="fa-credit-card" />
      <WalletCard  amount="$4,200.00" icon="fa-piggy-bank" />
      <WalletCard 
        
        amount="3,250 pts"
        icon="fa-star"
        additionalClasses="bg-stone-300"
        iconWrapper={true}
      /> */}