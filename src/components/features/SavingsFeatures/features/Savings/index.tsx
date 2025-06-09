import { useEffect, useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { SavingsMoneyModal } from "../SavingsMoneyModal"; 
import { API_URL } from "../../../../api/baseUrl";
import { CardData } from "../../../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { savingsDepTopUp } from "../../../../../app/features/TriggerUpdate/TriggerUpdateSlice";
import { RootState } from "../../../../../app/store";

interface GoalCardProps {
  id:number,
  title: string;
  current: number;
  target: number;
  progress: number;
  completed?: boolean;
}



export const SavingCard = ({id, title, current, target, progress, completed = false }: GoalCardProps) => {
  const [modalType, setModalType] = useState<"topUp" | "decrease" | null>(null);
  const [cardsData, setCardsData] = useState<CardData[]>([])
  
  const update = useSelector((state:RootState) => state.triggerUpdateSlice)
  const dispatch = useDispatch();
  
   const getCards = async () => {
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
         setCardsData(result);
         console.log(result);

           
       } catch (error) {
         console.error('Error:', error);
       }
     };    

  const handleTransfer = async (card_id: string, amount: number) => {
    try {
      const res = await fetch(`${API_URL}/savings/${modalType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          "amount":amount,
          "saving_account_id": id,
          "card_id":card_id,
        }),
      });

      if (!res.ok) {
        console.error("Failed to process transfer");
      } 
      dispatch(savingsDepTopUp({savingsUpdate:!update.savingsUpdate,cardsUpdate:update.cardsUpdate,savingsDepTopUp:!update.savingsDepTopUp}))
      console.log("Transfer successful");
      
    } catch (err) {
      console.error("Error during transfer:", err);
    }
  };

  const remaining = target - current;

  useEffect(() => {
    getCards();
  },[])
  return (
    <>
      <div className={`border rounded-xl p-4 ${completed ? "bg-purple-50" : ""}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{progress}%</span>
        </div>

        <div className="flex justify-between text-sm mb-1">
          <div>
            <div className="text-muted-foreground text-xs">Current:</div>
            <div className="font-medium">${current.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs">Target:</div>
            <div className="font-medium">${target.toLocaleString()}</div>
          </div>
        </div>

        <div className="h-2 sm:h-3 bg-gray-200 rounded-xl mt-1 sm:mt-2">
          <div
            className="h-2 sm:h-3 bg-black rounded-xl"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          ></div>
        </div>

        {progress === 100 ? (
          <div className="flex items-center justify-center text-xs text-green-600 font-medium mb-2 mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
            Goal Achieved!
          </div>
        ) : (
          <div className="text-xs text-muted-foreground mb-2">
            Remaining: ${remaining.toLocaleString()}
          </div>
        )}

        <div className="flex justify-center gap-2">
          <button
            onClick={() => setModalType("decrease")}
            className="border flex items-center rounded-md px-2 cursor-pointer"
          >
            <LuMinus className="h-4 w-4 mr-1" />
            Withdraw
          </button>
          <button
            onClick={() => setModalType("topUp")}
            className="border flex items-center rounded-md px-2 cursor-pointer"
          >
            <LuPlus className="h-4 w-4 mr-1" />
            Deposit
          </button>
        </div>
      </div>

      {modalType && (
        <SavingsMoneyModal
          type={modalType}
          onClose={() => setModalType(null)}
          onSubmit={handleTransfer}
          cards={cardsData}
        />
      )}
    </>
  );
};
