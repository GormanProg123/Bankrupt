import { useEffect, useState } from "react";
import { FiCreditCard, FiEye, FiEyeOff } from "react-icons/fi";
import { VerticalHeader } from "../../../HomeFeatures/features/homeform/layout/vertheader";
import { deleteCard } from "../../../../../utils/card/card";
import { FinancialOverview } from "../../../../atoms/FinancialOverview";
import { API_URL } from "../../../../api/baseUrl";
import { useNavigate } from "react-router-dom";

type CardData = {
  card_id: number;
  number: string;
  cardholder_name: string;
  cardholder_surname: string;
  expiration_date: string;
  cvv: string;
  balance: number;
  design: string;
};

type Saving = {
  id: number;
  name: string;
  balance: number;
  goal: number;
  remain: number;
};

export const DashboardForm = () => {
  const [cardData, setCardData] = useState<CardData[] | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<number>(0);
  const [selectedSection, setSelectedSection] = useState<"cards" | "savings">(
    "cards"
  );
  const [savings, setSavings] = useState<Saving[]>([]);
  const [selectedSavingId, setSelectedSavingId] = useState<number | null>(null);
  const [isDeleteSavingModalOpen, setIsDeleteSavingModalOpen] = useState(false);
  const [visibleCardId, setVisibleCardId] = useState<number | null>(null);

  const navigate = useNavigate();

  const screenResize = () => {
    setScreenSize(window.screen.width);
  };

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

  const fetchSavings = () => {
    fetch(`${API_URL}/savings`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          setSavings(data);
        } else {
          console.warn("Unexpected savings format:", data);
        }
      })
      .catch((err) => console.error("Savings fetch error:", err));
  };

  useEffect(() => {
    screenResize();
    fetchCards();
    fetchSavings();
    window.addEventListener("resize", screenResize);
    return () => window.removeEventListener("resize", screenResize);
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

  const handleDeleteSaving = async () => {
    if (selectedSavingId === null) return;

    try {
      const res = await fetch(`${API_URL}/savings/delete`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ saving_account_id: selectedSavingId }),
      });

      if (res.ok) {
        setIsDeleteSavingModalOpen(false);
        setSelectedSavingId(null);
        await fetchSavings();
      } else {
        console.error("Failed to delete saving account");
      }
    } catch (error) {
      console.error("Delete saving error:", error);
    }
  };

  const topUpSaving = async (
    amount: number,
    saving_account_id: number,
    card_id: number
  ) => {
    try {
      const res = await fetch(`${API_URL}/savings/topUp`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, saving_account_id, card_id }),
      });
      if (res.ok) {
        await fetchSavings();
      } else {
        console.error("Failed to top up saving");
      }
    } catch (error) {
      console.error("Top up error:", error);
    }
  };

  const decreaseSaving = async (
    amount: number,
    saving_account_id: number,
    card_id: number
  ) => {
    try {
      const res = await fetch(`${API_URL}/savings/decrease`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, saving_account_id, card_id }),
      });
      if (res.ok) {
        await fetchSavings();
      } else {
        console.error("Failed to decrease saving");
      }
    } catch (error) {
      console.error("Decrease error:", error);
    }
  };

  const formatCardNumber = (number: string, showFull: boolean) => {
    if (showFull) return number;
    return "**** **** **** " + number.slice(-4);
  };

  return (
    <div className={`${screenSize > 768 ? "flex w-full" : ""}`}>
      <div>
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
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedSection("cards")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  selectedSection === "cards"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setSelectedSection("savings")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  selectedSection === "savings"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                Savings
              </button>
            </div>

            <button
              className="bg-black text-white px-5 py-2.5 rounded-lg border border-black text-sm hover:bg-gray-800"
              onClick={() =>
                selectedSection === "cards"
                  ? navigate("/card-create")
                  : navigate("/saving-account")
              }
            >
              + Create new
            </button>
          </div>

          {selectedSection === "cards" ? (
            <div className="flex overflow-x-auto">
              <div className="flex gap-6 pr-5 w-max">
                {cardData && cardData.length > 0 ? (
                  cardData.map((card, index) => (
                    <div
                      key={index}
                      className="w-90 p-5 border border-gray-300 rounded-xl shadow bg-white cursor-pointer"
                      onClick={() => {
                        setSelectedCard(card);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                          Card #{index + 1}
                        </h2>
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
                            <div className="mb-1 text-lg tracking-widest font-mono">
                              {formatCardNumber(
                                card.number,
                                visibleCardId === card.card_id
                              )}
                            </div>
                            <div className="text-sm">
                              {card.cardholder_name} {card.cardholder_surname}
                            </div>
                            <div className="text-sm mt-1">
                              Expires {card.expiration_date}
                            </div>
                            <div className="flex items-center text-sm mt-1">
                              CVV&nbsp;
                              <span className="mr-2 font-mono">
                                {visibleCardId === card.card_id
                                  ? card.cvv
                                  : "***"}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setVisibleCardId(
                                    visibleCardId === card.card_id
                                      ? null
                                      : card.card_id
                                  );
                                }}
                                aria-label={
                                  visibleCardId === card.card_id
                                    ? "Hide CVV and card number"
                                    : "Show CVV and card number"
                                }
                                className="focus:outline-none"
                              >
                                {visibleCardId === card.card_id ? (
                                  <FiEyeOff />
                                ) : (
                                  <FiEye />
                                )}
                              </button>
                            </div>
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
                  ))
                ) : (
                  <div className="text-gray-500">No cards available</div>
                )}
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {savings.length > 0 ? (
                <>
                  <table className="w-full text-left border mb-6">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savings.map((saving) => (
                        <tr
                          key={saving.id}
                          className={
                            selectedSavingId === saving.id
                              ? "bg-gray-200 cursor-pointer"
                              : "cursor-pointer"
                          }
                          onClick={() => setSelectedSavingId(saving.id)}
                        >
                          <td className="px-4 py-2 border">{saving.name}</td>
                          <td className="px-4 py-2 border">
                            ${saving.balance.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {selectedSavingId !== null && (
                    <>
                      <button
                        className="mb-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={() => setIsDeleteSavingModalOpen(true)}
                      >
                        Delete Saving
                      </button>

                      {cardData && cardData.length > 0 && (
                        <div className="flex gap-4 items-center">
                          <select
                            className="border p-2 rounded"
                            defaultValue=""
                            onChange={(e) => {
                              const cardId = Number(e.target.value);
                              const card = cardData.find(
                                (c) => c.card_id === cardId
                              );
                              setSelectedCard(card || null);
                            }}
                          >
                            <option value="" disabled>
                              Select Card
                            </option>
                            {cardData.map((card) => (
                              <option key={card.card_id} value={card.card_id}>
                                {formatCardNumber(card.number, false)}
                              </option>
                            ))}
                          </select>

                          <input
                            type="number"
                            min={0}
                            placeholder="Amount"
                            id="amountInput"
                            className="border p-2 rounded w-32"
                          />

                          <button
                            onClick={() => {
                              const input = document.getElementById(
                                "amountInput"
                              ) as HTMLInputElement | null;
                              const amount = input ? Number(input.value) : 0;
                              if (amount <= 0) return;

                              if (selectedSavingId && selectedCard) {
                                topUpSaving(
                                  amount,
                                  selectedSavingId,
                                  selectedCard.card_id
                                );
                              }
                            }}
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                          >
                            Top Up
                          </button>

                          <button
                            onClick={() => {
                              const input = document.getElementById(
                                "amountInput"
                              ) as HTMLInputElement | null;
                              const amount = input ? Number(input.value) : 0;
                              if (amount <= 0) return;

                              if (selectedSavingId && selectedCard) {
                                decreaseSaving(
                                  amount,
                                  selectedSavingId,
                                  selectedCard.card_id
                                );
                              }
                            }}
                            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
                          >
                            Withdraw
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </>
              ) : (
                <div className="text-gray-500">
                  No savings accounts available
                </div>
              )}
            </div>
          )}

          {isDeleteModalOpen && selectedCard && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 max-w-full">
                <h3 className="text-lg font-semibold mb-4">
                  Delete Card Confirmation
                </h3>
                <p className="mb-6">
                  Are you sure you want to delete the card ending with{" "}
                  {selectedCard.number.slice(-4)}?
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

          {isDeleteSavingModalOpen && selectedSavingId !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96 max-w-full">
                <h3 className="text-lg font-semibold mb-4">
                  Delete Saving Confirmation
                </h3>
                <p className="mb-6">
                  Are you sure you want to delete this saving account?
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                    onClick={() => setIsDeleteSavingModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                    onClick={handleDeleteSaving}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
