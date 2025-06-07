import { Icon } from "../../../../../atoms/Icon";
import { splitNumber } from "../../../../../../functions/functions";
import { useDispatch } from "react-redux";
import { currentCard } from "../../../../../../app/features/WalletCard/WalletCardSlice";
import { useEffect } from "react";
import { API_URL } from "../../../../../api/baseUrl";

type IconClassType =
  | "fa-credit-card"
  | "fa-chart-column"
  | "fa-piggy-bank"
  | "fa-paper-plane"
  | "fa-globe"
  | "fa-chart-line"
  | "fa-hourglass-half"
  | "fa-bolt"
  | "fa-gift"
  | "fa-download"
  | "fa-star"
  | "fa-plus"
  | "fa-wallet"
  | "fa-arrow-right";

interface WalletCardProps {
  amount: string;
  icon: IconClassType;
  additionalClasses?: string;
  iconWrapper?: boolean;
  number?: string;
  cardId?: number;
}

const WalletCard = ({
  amount,
  icon,
  additionalClasses = "",
  iconWrapper = false,
  number = '',
  cardId = 0,
}: WalletCardProps) => {
  let dispatch = useDispatch();
  

  let num = "";
  if (number) {
    num = splitNumber(number);
  }

  
  

  const getCardTransactions = async () => {
    
    try {
      const res = await fetch(`${API_URL}/card/history`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ card_number: number }),
      });

      if (!res.ok) {  
        console.log(res.ok);
        throw new Error('Network response was not ok');
      } 
      
      const result = await res.json();
      dispatch(currentCard({ 
        currentCardId: cardId, 
        currentCardNumber: number, 
        currentCardHistory: result 
      }));
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };        
        
  useEffect(() => {
    getCardTransactions();
  }, []);
  
  return (
    <div
      className={`card bg-white p-4 md:p-6 rounded-2xl shadow-xl w-full flex flex-col border-gray-300 border-2 cursor-pointer hover:shadow-2xl transition-shadow ${additionalClasses} `} 
      onClick={() => getCardTransactions()}
      data-id={`${cardId}`}
    >
      <div className="flex items-center justify-between pb-4 md:pb-5">
        <div className="text-xl md:text-3xl font-bold text-black">{amount}</div>
        {iconWrapper ? (
          <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-100 border-2 border-black rounded-full flex items-center justify-center">
            <Icon iconClass={icon} size="small" />
          </div>
        ) : (
          <Icon iconClass={icon} size="small" />
        )}
      </div>

      <div className="text-sm md:text-xl flex justify-center text-black">{num}</div>
    </div>
  );
};

export default WalletCard;