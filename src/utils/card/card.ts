const API_URL = import.meta.env.VITE_API_URL;

export const deleteCard = async (cardNumber: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/card/delete`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ card_number: cardNumber }),
    });

    return response.ok;
  } catch (error) {
    console.error("Delete card error:", error);
    return false;
  }
};
