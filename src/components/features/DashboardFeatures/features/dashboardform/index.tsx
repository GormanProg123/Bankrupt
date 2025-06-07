import { useEffect, useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { VerticalHeader } from "../../../HomeFeatures/features/homeform/layout/vertheader";
import { deleteCard } from "../../../../../utils/card/card";
import { FinancialOverview } from "../../../../atoms/FinancialOverview";
import { API_URL } from "../../../../api/baseUrl";
import { useNavigate } from "react-router-dom";
import { LoggedNavBar } from "../../../../shared/LoggedNavBar";

type CardData = {
  number: string;
  cardholder_name: string;
  cardholder_surname: string;
  expiration_date: string;
  cvv: string;
  balance: number;
  design: string;
};


export const DashboardForm = () => {
  const [cardData, setCardData] = useState<CardData[] | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<number>(0)
  const navigate = useNavigate();

  const screenResize = () => {
    setScreenSize(window.screen.width)
    console.log(window.screen.width)
  }



  const fetchCards = () => {
    fetch(`${API_URL}/card`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (Array.isArray(data)) {
          setCardData(data);
        } else {
          console.warn("Unexpected card data format:", data);
        }
      })
      .catch((err) => console.error("Card fetch error:", err));
  };

  useEffect(() => {
    screenResize()
    fetchCards();
  }, []);

  const handleDelete = async () => {
    if (!selectedCard) return;

    const success = await deleteCard(selectedCard.number);

    if (success) {
      setIsDeleteModalOpen(false);
      setSelectedCard(null);
      fetchCards();
    } else {
      console.error("Failed to delete card");
    }
  };

  return (
    <div className={`${Number(screenSize) > 768 ? 'flex w-full' : '' }`} onResize={screenResize}>
      <div >
         <VerticalHeader /> 
      </div>
      

      <div className="container mx-auto">
        <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Overview of your financial accounts and activity
        </p>
      
        <FinancialOverview />
        
        <div className="flex justify-between items-center pt-8 pb-3">
              <h3 className="text-2xl font-bold">Your Cards</h3>
               <button
                  className="bg-black text-white px-5 py-2.5 rounded-lg border border-black text-sm hover:bg-gray-800"
                  onClick={() => navigate("/card-create")}
                >
                  + Create new
                </button>
          </div>
        <div className="flex ">
          
          <div className="flex overflow-x-auto">
            <div className="flex gap-6 pr-5 w-max">
              {cardData && cardData.length > 0 && 
                cardData.map((card, index) => (
                  <div
                    key={index}
                    className="w-90  p-5 border border-gray-300 rounded-xl shadow bg-white cursor-pointer"
                    onClick={() => {
                      setSelectedCard(card);
                      setIsDeleteModalOpen(true);
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <h2 className="text-lg font-semibold">Card #{index + 1}</h2>
                      <span className="text-sm text-green-600 font-medium">Active</span>  
                    </div>
                    <div
                      className={`rounded-xl h-48 p-4 text-white relative overflow-hidden ${
                        card.design === "black"
                          ? "bg-black"
                          : card.design === "blue-purple"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600"
                          : "bg-gradient-to-r from-green-400 to-teal-500"
                      }`}
                    >
                      <FiCreditCard className="absolute top-3 right-3 text-2xl" />
                      {card.number &&
                      card.cardholder_name &&
                      card.cardholder_surname &&
                      card.expiration_date ? (
                        <div className="absolute bottom-4 left-4">
                          <div className="mb-1 text-lg tracking-widest">
                            **** **** **** {card.number.slice(-4)}
                          </div>
                          <div className="text-sm">
                            {card.cardholder_name} {card.cardholder_surname}
                          </div>
                          <div className="text-sm mt-1">
                            Expires {card.expiration_date}
                          </div>
                          <div className="text-sm">CVV ***</div>
                          <div className="text-sm mt-1 font-semibold">
                            Balance: ${card.balance.toFixed(2)}
                          </div>
                        </div>
                      ) : (
                        <div className="absolute bottom-4 left-4 text-sm text-red-500">
                          Invalid card data
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      

       



        {isDeleteModalOpen && selectedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-xl font-semibold text-center mb-4">
                Are you sure you want to delete this card?
              </h3>
              <p className="text-center text-gray-600 mb-6">
                **** **** **** {selectedCard.number.slice(-4)}
              </p>
              <div className="flex justify-between">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={handleDelete}
                >
                  Yes, delete
                </button>
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => {
                    setIsDeleteModalOpen(false);
                    setSelectedCard(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
