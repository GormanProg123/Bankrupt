import WalletCard from "../WalletCard";
import { API_URL } from "../../../../../api/baseUrl";
import { useEffect, useState } from "react";
import { CardData } from "../../../../../../types/types";
import { useDispatch,useSelector } from "react-redux";
import { firstCard } from "../../../../../../app/features/WalletCard/FirstCardSlice";
import { RootState } from "../../../../../../app/store";

const WalletCardsBlock = () => {
  const [cards, setCards] = useState<CardData []>([]);
  const updateCards= useSelector((state:RootState) => state.triggerUpdateSlice.cardsUpdate)
  const dispatch = useDispatch();

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
      setCards(result);
      console.log(result[0]);
          
      dispatch(firstCard({ firstCardNumber: result[0].number }));


        
    } catch (error) {
      console.error('Error:', error);
    }
  };    

  useEffect(() => {
    getCardsData();
  }, [updateCards]);

  return (
    <div className="container mx-auto">
      <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
        {cards.map((card, id) => (
          <div key={id} className="flex-shrink-0 w-64 sm:w-72">
            <WalletCard 
              number={card.number}  
              amount={`$${card.balance}`} 
              icon="fa-wallet" 
              cardId={card.card_id}
            />
          </div>  
        ))}
      </div>
    </div>
  );
};

export default WalletCardsBlock;