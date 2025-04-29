import { useEffect, useState } from "react";
import {
  FaHouse,
  FaCreditCard,
  FaPaperPlane,
  FaPiggyBank,
  FaGear,
  FaUser,
} from "react-icons/fa6";
import logo from "../../../../../../../assets/logo.png";

export const VerticalHeader = () => {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    // Проверка, что данные в localStorage не пустые и могут быть распарсены
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
    <div className="flex flex-col justify-between h-screen w-64 border-r-2 border-black relative p-4">
      <div className="flex items-center absolute top-4 left-4">
        <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
        <p className="font-bold text-2xl">Bankrupt</p>
      </div>

      <div className="flex flex-col gap-6 mt-24">
        <a
          href="/home"
          className="flex items-center gap-4 text-lg cursor-pointer hover:bg-gray-200 p-2 rounded-lg hover:scale-105 transition-all"
        >
          <FaHouse />
          <span className="font-normal">Home</span>
        </a>
        <a
          href="/dashboard"
          className="flex items-center gap-4 text-lg cursor-pointer hover:bg-gray-200 p-2 rounded-lg hover:scale-105 transition-all"
        >
          <FaCreditCard />
          <span className="font-normal">Dashboard</span>
        </a>
        <a
          href="/transfers"
          className="flex items-center gap-4 text-lg cursor-pointer hover:bg-gray-200 p-2 rounded-lg hover:scale-105 transition-all"
        >
          <FaPaperPlane />
          <span className="font-normal">Transfers</span>
        </a>
        <a
          href="/wallet"
          className="flex items-center gap-4 text-lg cursor-pointer hover:bg-gray-200 p-2 rounded-lg hover:scale-105 transition-all"
        >
          <FaPiggyBank />
          <span className="font-normal">My wallets</span>
        </a>
        <a
          href="/settings"
          className="flex items-center gap-4 text-lg cursor-pointer hover:bg-gray-200 p-2 rounded-lg hover:scale-105 transition-all"
        >
          <FaGear />
          <span className="font-normal">Settings</span>
        </a>
      </div>

      <a
        href="/profile"
        className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-200 p-2 rounded-lg hover:scale-105 transition-all"
      >
        <FaUser />
        <span className="font-normal">{userName || "John Doe"}</span>
      </a>
    </div>
  );
};
