import { useState } from "react";
import { Icon } from "../../atoms/Icon";
import { Logo } from "../../atoms/Logo/index";
import { useNavigate } from "react-router-dom";

interface LoggedNavBarProps {
  username: string;
}

const navigationLinks = [
  { href: "/home", label: "Home", icon: "fa-house" },
  { href: "/wallet", label: "My Wallet", icon: "fa-wallet" },
  { href: "/dashboard", label: "Dashboard", icon: "fa-chart-line" },
  { href: "/transfer", label: "Transfer", icon: "fa-arrows-left-right" },
] as const;

export const LoggedNavBar = ({ username }: LoggedNavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav border-b-2 border-gray-200 bg-white sticky top-0 z-50 shadow-sm relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigationLinks.map((link) => {
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => navigate(link.href)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:font-semibold transition-all duration-200 px-3 py-2 rounded-md hover:bg-blue-50"
                >
                  <span className="text-xl">{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex items-center space-x-2 text-gray-700 bg-transparent border border-gray-300 hover:border-gray-500 hover:bg-gray-50 px-4 py-2 rounded-xl transition-all duration-200"
            >
              <Icon iconClass="fa-user" size="small" />
              <span className="font-medium pl-2">{username}</span>
            </button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <Icon iconClass="fa-xmark" size="small" />
              ) : (
                <Icon iconClass="fa-bars" size="small" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[81px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-8 h-full">
            <div className="space-y-6">
              {navigationLinks.map((link) => {
                return (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => navigate(link.href)}
                    className="flex items-center space-x-4 w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-6 rounded-xl transition-all duration-200 text-lg font-medium border border-gray-100 hover:border-blue-200"
                  >
                    <Icon iconClass={link.icon} size="medium" />
                    <span>{link.label}</span>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => navigate("/profile")}
                className="flex items-center space-x-4 w-full text-left text-white bg-blue-600 hover:bg-blue-700 px-4 py-6 rounded-xl transition-all duration-200 text-lg font-medium mt-8"
              >
                <Icon iconClass="fa-user" size="medium" />
                <span>Profile ({username})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
