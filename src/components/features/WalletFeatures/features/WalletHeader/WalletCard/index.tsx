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
  number?:string;
  cardId?:number;
}

const WalletCard =  ({
  amount,
  icon,
  additionalClasses = "",
  iconWrapper = false,
  number ='',
  cardId = 0,
}: WalletCardProps) =>  {
  let dispatch = useDispatch();




  let num = "";
  if(number){
    num = splitNumber(number)
  }


  const getCardTransactions  = async () => {
    try {
            const res = await fetch(`${API_URL}/card/history`, {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
                
              },
              credentials: "include",
              body: JSON.stringify({card_number:number}),
            });
      
            if (!res.ok) {  
              console.log(res.ok)
              throw new Error('Network response was not ok' );
              
            } 
            
            const result = await res.json();
            dispatch(currentCard({currentCardId:cardId,currentCardNumber:number,currentCardHistory:result}))
            console.log(result);
            
    
          } catch (error) {
            console.error('Error:', error);
          }
       
      
        };    
        
        useEffect(() => {
          getCardTransactions()
      },[])

  
  return (
    <div
      className={`card mr-6 bg-white p-4 rounded-2xl shadow-xl  w-100 flex flex-col border-gray-300 border-2 cursor-pointer  ${additionalClasses}`}
      card-number={number}
      card-id={cardId}
      onClick={() => getCardTransactions()}
    >
      <div className="flex items-center justify-between pb-5">
              <div className="text-3xl font-bold text-black pb-3">{amount}</div>
        {iconWrapper ? (
          <div className="w-8 h-8 bg-orange-100 border-2 border-black rounded-full flex items-center justify-center">
            <Icon iconClass={icon} size="small"></Icon>
          </div>
        ) : (
          <Icon iconClass={icon} size="small"></Icon>
        )}
      </div>

      <div className="text-xl flex justify-center text-black pb-3">{num}</div>
    </div>
  );
};

export default WalletCard