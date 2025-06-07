import { useEffect, useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { VerticalHeader } from "../../../HomeFeatures/features/homeform/layout/vertheader";
import { FinancialOverview } from "../../../../atoms/FinancialOverview";
import { API_URL } from "../../../../api/baseUrl";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  return (
    <div className="flex">
      <VerticalHeader />

      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Overview of your financial accounts and activity
        </p>

        <FinancialOverview />

        {cardData && cardData.length > 0 && (
          <div className="flex gap-6 mt-10 flex-wrap">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-80 p-5 border border-gray-300 rounded-xl shadow bg-white"
              >
                <div className="flex justify-between mb-2">
                  <h2 className="text-lg font-semibold">Card #{index + 1}</h2>
                  <span className="text-sm text-green-600 font-medium">
                    Active
                  </span>
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
        )}

        <div className="flex justify-center mt-10">
          <div className="border border-gray-300 rounded-xl p-8 w-full max-w-md bg-white shadow-sm">
            <div className="flex justify-center mb-5 text-gray-700 text-5xl">
              <FiCreditCard />
            </div>
            <h2 className="text-xl font-semibold text-black text-center mb-2">
              Apply for a New Card
            </h2>
            <p className="text-gray-600 text-center mb-5">
              Get a new debit or credit card for your account
            </p>
            <div className="flex justify-center">
              <button
                className="bg-black text-white px-5 py-2.5 rounded-lg border border-black text-sm hover:bg-gray-800"
                onClick={() => navigate("/card-create")}
              >
                + Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
