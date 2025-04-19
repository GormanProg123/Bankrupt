import { useNavigate } from "react-router-dom";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import "./styles/style.css";
export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="container">
        <Logo />

        <div className="links">
          <a href="#" className="link">
            Personal
          </a>
          <a href="#" className="link">
            Business
          </a>
          <a href="#" className="link">
            Wealth
          </a>
          <a href="#" className="link">
            About Us
          </a>
        </div>

        <div className="user-entry">
          <Button
            text="Sign in"
            variant="primary"
            onClick={() => navigate("/login")}
          />
          <Button
            text="Get Started"
            variant="secondary"
            onClick={() => navigate("/registration")}
          />
        </div>
      </div>
    </nav>
  );
};
