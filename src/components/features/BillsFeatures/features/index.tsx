import { useState, useEffect } from "react";
import { LoggedNavBar } from "../../../shared/LoggedNavBar";
import Footer from "../../../shared/Footer";
import { FaCalendar, FaPlus } from "react-icons/fa6";
import { createBill, getBills, payBill } from "../../../../utils/bills/bills";

interface Bill {
  id?: number;
  name: string;
  amount: number;
  due_date: string;
  paid?: boolean;
}

interface Card {
  id: number;
  card_number: string;
}

interface CardFromAPI {
  id: number;
  card_number?: string;
  number?: string;
  cardNumber?: string;
}

export const Bills = () => {
  const [showModal, setShowModal] = useState(false);
  const [bills, setBills] = useState<Bill[]>([]);
  const [formData, setFormData] = useState<Bill>({
    name: "",
    amount: 0,
    due_date: "",
  });
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<string>("");
  const [payingBillId, setPayingBillId] = useState<number | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  function formatCardNumber(cardNumber: string): string {
    const digitsOnly = cardNumber.replace(/\D/g, "");
    return digitsOnly.replace(/(.{4})/g, "$1 ").trim();
  }

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const data = await getBills();
        setBills(data);
      } catch (error) {
        console.error("Failed to load bills", error);
      }
    };

    const fetchCards = async () => {
      try {
        const response = await fetch(`${API_URL}/card`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to load cards");
        const data = await response.json();

        const cardsFormatted: Card[] = Array.isArray(data)
          ? data.map((c: CardFromAPI) => ({
              id: c.id,
              card_number:
                c.card_number || c.number || c.cardNumber || "Unknown card",
            }))
          : [];

        setCards(cardsFormatted);

        if (cardsFormatted.length > 0) {
          setSelectedCard(cardsFormatted[0].card_number);
        } else {
          setSelectedCard("");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBills();
    fetchCards();
  }, [API_URL]);

  const handleSubmit = async () => {
    try {
      const newBill = await createBill(formData);
      setBills((prev) => [...prev, newBill]);
      setShowModal(false);
      setFormData({ name: "", amount: 0, due_date: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handlePayBill = async (billId: number) => {
    if (!selectedCard) {
      alert("Please select a card to pay");
      return;
    }
    try {
      setPayingBillId(billId);
      await payBill({ bill_id: billId, card_number: selectedCard });
      setBills((prev) => prev.filter((bill) => bill.id !== billId));
      setPayingBillId(null);
    } catch (error) {
      console.error("Failed to pay bill", error);
      setPayingBillId(null);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <LoggedNavBar />
        <div className="bills container mx-auto py-6 px-4 lg:py-10">
          <h2 className="text-xl sm:text-2xl font-bold text-center">
            Bills and Payments
          </h2>
          <p className="text-lg sm:text-xl text-center">
            Manage your recurring bills and payments
          </p>

          <div className="bill grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 py-5">
            {bills.map((bill, index) => (
              <div
                key={bill.id ?? index}
                className="border border-gray-500 p-3 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl">{bill.name}</h2>
                  <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white text-black border-gray-600">
                    {bill.paid ? "Paid" : "Due"}
                  </p>
                </div>
                <p className="text-gray-400 mt-1">Custom</p>
                <p className="font-bold text-lg sm:text-xl mt-2">
                  ${bill.amount.toFixed(2)}
                </p>
                <p className="text-gray-500 mt-2 flex items-center text-sm sm:text-base">
                  <FaCalendar size={14} className="mr-2" /> Due:{" "}
                  {new Date(bill.due_date).toLocaleDateString()}
                </p>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Payment: Manual
                </p>

                {!bill.paid && (
                  <>
                    <label className="block mt-2">
                      <span className="text-sm font-medium text-gray-700">
                        Select Card:
                      </span>
                      <select
                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3"
                        value={selectedCard}
                        onChange={(e) => setSelectedCard(e.target.value)}
                      >
                        {cards.map((card) => (
                          <option key={card.id} value={card.card_number}>
                            {formatCardNumber(card.card_number)}
                          </option>
                        ))}
                      </select>
                    </label>

                    <button
                      disabled={payingBillId === bill.id}
                      onClick={() => handlePayBill(bill.id!)}
                      className="inline-flex bg-black text-white mt-2 h-9 rounded-md px-3 w-full justify-center items-center"
                      style={{ lineHeight: "normal" }}
                    >
                      {payingBillId === bill.id ? "Paying..." : "Pay now"}
                    </button>
                  </>
                )}
              </div>
            ))}

            <div
              onClick={() => setShowModal(true)}
              className="border border-gray-500 p-3 rounded-lg cursor-pointer text-center items-center flex flex-col justify-center min-h-[200px] sm:min-h-[250px]"
            >
              <FaPlus size={40} className="text-gray-500 sm:size-12" />
              <h2 className="text-lg sm:text-2xl text-gray-500 mt-2">
                Add new Bill
              </h2>
              <p className="text-sm sm:text-xl text-gray-500 mt-1">
                Set up a new recurring payment
              </p>
            </div>
          </div>
        </div>
        <Footer />

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Create New Bill</h2>
              <label className="block mb-2">
                <span>Name</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </label>
              <label className="block mb-2">
                <span>Amount</span>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      amount: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </label>
              <label className="block mb-2">
                <span>Due Date</span>
                <input
                  type="datetime-local"
                  value={formData.due_date}
                  onChange={(e) =>
                    setFormData({ ...formData, due_date: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded mt-1"
                />
              </label>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
