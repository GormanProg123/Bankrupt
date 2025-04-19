import { useNavigate } from "react-router-dom";
import headerImage from "../../../assets/image 1.png";
import { Navbar } from "../../molecules/Navbar";
import { Button } from "../../atoms/Button";
import "./styles/style.css";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Navbar />

      <div className="header-banner">
        <div className="container">
          <div className="text-side">
            <h1>Banking that puts you first</h1>
            <p>
              Experience seamless banking with Bankrupt. Manage your finances,
              make payments, and grow your savings all in one place.
            </p>
            <div className="btns">
              <Button
                text="Open an account"
                variant="primary"
                onClick={() => navigate("/registration")} // navigate to /registration
              />
              <Button
                text="Learn More"
                variant="secondary"
                onClick={() => navigate("/learn-more")} // navigate to /learn-more
              />
            </div>
          </div>

          <div className="img-side">
            <img src={headerImage} alt="Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};
