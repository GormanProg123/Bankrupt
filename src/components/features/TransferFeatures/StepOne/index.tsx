import { useState, useEffect } from "react";
import { Icon } from "../../../atoms/Icon";
import { useDispatch } from "react-redux";
import { selectPage } from "../../../../app/features/TransferPages/TransferPagesSlice";
import { transferDataUpdate } from "../../../../app/features/TransferData/TransferDataSlice";
import { TransferData } from "../../../../types/types";

export const TransferStepOne = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  const [cardData, setCardData] = useState<{ number: string }[]>([]);
  const [formData, setFormData] = useState<TransferData>({
    from_card_number: "",
    to_card_number: "",
    amount: 0,
    // note:""
  });

  const fetchCards = () => {
    fetch(`${API_URL}/card`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (
          Array.isArray(data) &&
          data.every((card) => typeof card.number === "string")
        ) {
          setCardData(data);
        } else {
          console.warn("Unexpected card data format:", data);
        }
      })
      .catch((err) => console.error("Card fetch error:", err));
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleNext = () => {
    if (
      Object.values(formData).every((field) => field !== "") &&
      formData.from_card_number.length === 16 &&
      formData.to_card_number.length === 16 &&
      formData.from_card_number !== formData.to_card_number &&
      formData.amount > 0
    ) {
      dispatch(transferDataUpdate(formData));
      dispatch(selectPage(2));
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "amount" ? Number(value) : value,
    }));
  };

  return (
    <>
      <div className="wrap flex justify-center px-4">
        <form
          className="border border-gray-300 border-2 rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-2xl lg:max-w-4xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-header pb-4 sm:pb-6 flex flex-col lg:flex-row lg:justify-between lg:items-start w-full space-y-4 lg:space-y-0">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold">Make a Transfer</h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-500 mt-1">
                Select accounts and enter transfer details
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                      1
                    </div>
                    <div className="w-4 sm:w-8 h-0.5 bg-gray-800 mx-1" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                      2
                    </div>
                    <div className="w-4 sm:w-8 h-0.5 bg-gray-300 mx-1" />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold text-xs sm:text-sm z-10">
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col pb-4">
            <label
              htmlFor="from_card_number"
              className="text-sm font-medium mb-2 sm:mb-3 text-black"
            >
              From
            </label>
            <span className="relative flex items-center">
              <span className="absolute left-2 sm:left-3">
                <Icon iconClass="fa-credit-card" size="small" />
              </span>

              <select
                id="from_card_number"
                value={formData.from_card_number}
                onChange={handleChange}
                required
                className="p-2 pl-12 border border-gray-300 rounded-lg bg-white text-black w-full sm:w-3/4 lg:w-1/2 text-sm sm:text-base"
              >
                <option value="">Select your card</option>
                {cardData.map((card, idx) => {
                  const cardNum = String(card.number || "");
                  const last4 =
                    cardNum.length >= 4 ? cardNum.slice(-4) : "----";
                  return (
                    <option key={cardNum || idx} value={cardNum}>
                      **** **** **** {last4}
                    </option>
                  );
                })}
              </select>
            </span>
          </div>

          <div className="flex flex-col pb-4">
            <label
              htmlFor="to_card_number"
              className="text-sm font-medium mb-2 sm:mb-3 text-black"
            >
              To
            </label>
            <span className="relative flex items-center">
              <span className="absolute left-2 sm:left-3">
                <Icon iconClass="fa-credit-card" size="small" />
              </span>

              <input
                id="to_card_number"
                value={formData.to_card_number}
                onChange={handleChange}
                placeholder="Card different person"
                required
                className="p-2 pl-12  border border-gray-300 rounded-lg bg-white text-black w-full sm:w-3/4 lg:w-1/2 text-sm sm:text-base"
              />
            </span>
          </div>

          <div className="flex flex-col pb-4">
            <label
              htmlFor="amount"
              className="text-sm font-medium mb-2 sm:mb-3 text-black"
            >
              Amount
            </label>

            <span className="relative flex items-center">
              <span className="absolute left-2 sm:left-3">
                <Icon iconClass="fa-dollar" size="small" />
              </span>

              <input
                id="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
                required
                className="p-2 pl-12 sm:pl-10 border border-gray-300 rounded-lg bg-white text-black w-full sm:w-3/4 lg:w-1/2 text-sm sm:text-base"
              />
            </span>
          </div>

          <div className="flex flex-col pb-4">
            <label
              htmlFor="note"
              className="text-sm font-medium mb-2 sm:mb-3 text-black"
            >
              Note(Optional)
            </label>
            <textarea
              id="note"
              placeholder="Add a note for this transfer"
              className="p-2 sm:p-3 border border-gray-300 rounded-lg bg-white text-black w-full sm:w-5/6 lg:w-3/4 h-20 sm:h-24 resize-none text-sm sm:text-base"
            />
          </div>

          <div className="flex justify-center sm:justify-end mt-6">
            <button
              type="button"
              onClick={handleNext}
              className="w-full sm:w-48 py-2 sm:py-3 cursor-pointer bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black border hover:border-gray-600 transition-all text-sm sm:text-base"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
