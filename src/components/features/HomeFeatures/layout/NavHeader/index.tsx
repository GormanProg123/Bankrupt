import { useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import "./styles/navhead.css";

export const NavHeader = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav-main">
      <div className="container-main">
        <div className="logo-main">
          <img src={logo} alt="logo" className="logo-img" />
          <p className="site-name">Bankrupt</p>
        </div>
        <div className="linksmain">
          <a href="#">Personal</a>
          <a href="#">Business</a>
          <a href="#">Wealth</a>
          <a href="#">About Us</a>
        </div>
        <div className="user-entry">
          <button onClick={() => navigate("/login")}>Sign in</button>
          <button onClick={() => navigate("/registration")}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};
