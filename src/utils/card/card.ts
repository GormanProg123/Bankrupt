const API_URL = import.meta.env.VITE_API_URL;

export interface CardCreatePayload {
  design: { id: string } | null;
  name_on_card: string;
  daily_limit: string;
  features: {
    contactless: boolean;
    international: boolean;
    online: boolean;
    atm: boolean;
  };
}

export const createCard = async (
  payload: CardCreatePayload
): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/card/create`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Card creation failed");
    }

    return true;
  } catch (error) {
    console.error("Create card error:", error);
    return false;
  }
};

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
