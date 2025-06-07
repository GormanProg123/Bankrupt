
import logo from "../../../../../../../assets/logo.png";
import { useAuth } from "../../../../../../../context/AuthContext";
import { Icon } from "../../../../../../atoms/Icon";
import { useState } from 'react';
import {
  FaHouse,
  FaCreditCard,
  FaPaperPlane,
  FaPiggyBank,
  FaGear,
  FaUser,
} from "react-icons/fa6";


export const VerticalHeader = () => {
  const { user } = useAuth();
  const userName = user ? `${user.first_name} ${user.last_name}` : "John Doe";
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "/home", icon: FaHouse, label: "Home" },
    { href: "/dashboard", icon: FaCreditCard, label: "Dashboard" },
    { href: "/transfer", icon: FaPaperPlane, label: "Transfers" },
    { href: "/wallet", icon: FaPiggyBank, label: "My wallets" },
    { href: "/settings", icon: FaGear, label: "Settings" },
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-[85%] z-50 p-2 px-3 bg-white border-2 border-black rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <Icon iconClass="fa-xmark" size="small" /> : <Icon iconClass="fa-bars" size="small" />}
      </button>

  
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}

   
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          flex flex-col justify-between
          w-64 sm:w-72 lg:w-64 xl:w-72
          border-r-2 border-black
          bg-white
          p-4 lg:p-6
          min-h-screen
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
      
        <div className="flex items-center mt-12 lg:mt-4">
          <img src={logo} alt="logo" className="w-8 h-8 mr-2 flex-shrink-0" />
          <p className="font-bold text-xl sm:text-2xl truncate">Bankrupt</p>
        </div>

    
        <nav className="flex flex-col gap-3 sm:gap-4 lg:gap-6 mt-8 lg:mt-16 flex-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg cursor-pointer hover:bg-gray-200 p-2 sm:p-3 rounded-lg hover:scale-105 transition-all group"
              >
                <IconComponent className="text-lg sm:text-xl flex-shrink-0" />
                <span className="font-normal truncate group-hover:text-gray-800">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

 
        <a
          href="/profile"
          onClick={closeSidebar}
          className="flex items-center gap-3 sm:gap-4 mt-6 lg:mt-10 cursor-pointer hover:bg-gray-200 p-2 sm:p-3 rounded-lg hover:scale-105 transition-all group"
        >
          <FaUser className="text-lg sm:text-xl flex-shrink-0" />
          <span className="font-normal truncate group-hover:text-gray-800">
            {userName}
          </span>
        </a>
      </div>

    
      <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0" />
    </>
  );
};