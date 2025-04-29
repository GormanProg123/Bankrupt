import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo.png";

export const NavHeader = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-between items-center flex-wrap p-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 mr-2" />
          <p className="font-bold text-2xl text-black">Bankrupt</p>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-black hover:text-yellow-400 transition-colors px-2 py-1"
          >
            Personal
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-400 transition-colors px-2 py-1"
          >
            Business
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-400 transition-colors px-2 py-1"
          >
            Wealth
          </a>
          <a
            href="#"
            className="text-black hover:text-yellow-400 transition-colors px-2 py-1"
          >
            About Us
          </a>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-full border border-gray-400 text-black hover:bg-gray-100 transition"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate("/registration")}
            className="px-4 py-2 rounded-full border border-gray-400 text-white bg-black hover:bg-gray-700 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
