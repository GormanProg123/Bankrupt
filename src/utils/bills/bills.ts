const API_URL = import.meta.env.VITE_API_URL;

export const createBill = async (bill: {
  name: string;
  amount: number;
  due_date: string;
}) => {
  const response = await fetch(`${API_URL}/bills/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(bill),
  });

  if (!response.ok) {
    throw new Error("Failed to create bill");
  }

  return response.json();
};

export const getBills = async () => {
  const response = await fetch(`${API_URL}/bills`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch bills");
  }

  return response.json() as Promise<
    Array<{
      id: number;
      name: string;
      amount: number;
      due_date: string;
      paid: boolean;
    }>
  >;
};

export const payBill = async (params: {
  bill_id: number;
  card_number: string;
}) => {
  const response = await fetch(`${API_URL}/bills/pay`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Failed to pay bill");
  }

  return response.json();
};
