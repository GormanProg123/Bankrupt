import { useState } from "react";
import { CardData } from "../../../../../types/types";

type Props = {
  type: "topUp" | "decrease";
  onClose: () => void;
  onSubmit: (cardId: string, amount: number) => void;
  cards: CardData[];
};

export const SavingsMoneyModal = ({ type, onClose, onSubmit, cards }: Props) => {
  const [selectedCard, setSelectedCard] = useState(cards[0]?.card_id || "");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    const amt = parseFloat(amount);
    if (!selectedCard || isNaN(amt) || amt <= 0) return;
    onSubmit(selectedCard.toString(), amt);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm">
        <h2 className="text-lg font-bold text-center mb-4">
          {type === "topUp" ? "Deposit" : "Withdraw"} Money
        </h2>

        <label className="block mb-2 font-medium">Select Card</label>
        <select
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        >
          {cards.map((card) => (
            <option key={card.card_id} value={card.card_id}>
              {card.number}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded mb-6"
          placeholder="Enter amount"
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
