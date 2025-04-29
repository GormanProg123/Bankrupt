import { useNavigate } from "react-router-dom";
import { Logo } from "../../atoms/Logo/index";

interface HeaderProps {
  username: string;
}

export const LoggedNavBar = ({ username }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <nav className="nav border-b-[2px]">
      <div className="container flex justify-between items-center mx-auto py-5  ">
        <Logo />

        <div className="links flex flex-wrap justify-center md:justify-start gap-4 text-lg ml-10">
          <a href="/home" className="link text-lg  hover:font-bold">
            Home
          </a>
          <a href="/wallet" className="link text-lg  hover:font-bold">
            My Wallet
          </a>
          <a href="#" className="link text-lg  hover:font-bold">
            Dashboard
          </a>
          <a href="#" className="link text-lg  hover:font-bold">
            Transfer
          </a>
        </div>

        <div className="user-entry flex gap-2 flex-wrap justify-center md:justify-end">
          <button
            className="text-black bg-transparent cursor-pointer text-black border-gray-400 border hover:border-gray-600 px-4 py-2 rounded-2xl"
            onClick={() => navigate("/profile")}
          >
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};
