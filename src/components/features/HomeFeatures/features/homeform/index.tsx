import { useEffect, useState } from "react";
import { VerticalHeader } from "./layout/vertheader";
import WalletCardsBlock from "../../../WalletFeatures/features/WalletHeader/WalletCardsBlock";

export const HomeForm = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (parsedData.first_name && parsedData.last_name) {
          setUserName(`${parsedData.first_name} ${parsedData.last_name}`);
        }
      } catch (error) {
        console.error("Ошибка при парсинге данных из localStorage", error);
      }
    }
  }, []);

  return (
    <div className="flex">
      <VerticalHeader />

      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {userName || "John Doe"}
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your accounts today.
        </p>

        <div className="mt-10 ">
          <WalletCardsBlock />
        </div>
      </div>
    </div>
  );
};
