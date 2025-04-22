import { useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaChartColumn,
  FaPiggyBank,
  FaPaperPlane,
  FaGlobe,
  FaChartLine,
  FaHourglassHalf,
  FaBolt,
  FaGift,
} from "react-icons/fa6";
import { NavHeader } from "./layout/NavHeader";
import logo from "../../../assets/logo.png";
import familypic from "../../../assets/image 1.png";
import "./styles/homefeatures.css";

export const HomeFeatures = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="header">
        <NavHeader />
        <div className="header-banner-23">
          <div className="banner-content-23">
            <div className="text-side">
              <h1>Banking that puts you first</h1>
              <p>
                Experience seamless banking with Horizon. Manage your finances,
                make payments, and grow your savings all in one place.
              </p>
              <div className="btns-23">
                <button onClick={() => navigate("/registration")}>
                  Open an account →
                </button>
                <button>Learn More</button>
              </div>
            </div>
            <div className="img-side">
              <img src={familypic} alt="bank illustration" />
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="features-main">
          <div className="features-main-top">
            <div className="label">Features</div>
            <h2>Everything you need in one place</h2>
            <p>
              Our platform provides all the tools you need to manage your
              finances effectively.
            </p>
          </div>

          <div className="blocks">
            {[
              {
                icon: <FaCreditCard />,
                title: "Smart Cards",
                desc: "Control your cards, set limits, and get real-time notifications for all transactions.",
              },
              {
                icon: <FaChartColumn />,
                title: "Financial Insights",
                desc: "Track your spending patterns and get personalized recommendations.",
              },
              {
                icon: <FaPiggyBank />,
                title: "Savings Goals",
                desc: "Set savings goals and grow with competitive interest rates.",
              },
              {
                icon: <FaPaperPlane />,
                title: "Instant Transfers",
                desc: "Send money instantly—anytime, anywhere.",
              },
              {
                icon: <FaGlobe />,
                title: "Multi-Currency",
                desc: "Hold, convert, and spend in multiple currencies with no hidden fees.",
              },
              {
                icon: <FaChartLine />,
                title: "Investment Hub",
                desc: "Invest in stocks and ETFs with zero commissions.",
              },
              {
                icon: <FaHourglassHalf />,
                title: "24/7 Support",
                desc: "Talk to a real person any time via live chat or phone.",
              },
              {
                icon: <FaBolt />,
                title: "Instant Loans",
                desc: "Apply and receive personal loans instantly.",
              },
              {
                icon: <FaGift />,
                title: "Reward System",
                desc: "Earn cashback and perks for purchases, referrals, and savings goals.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div className="block" key={i}>
                <div className="icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer-main">
        <div className="footer-main-container">
          <div className="logo-main">
            <img src={logo} alt="logo" className="logo-img" />
            <p className="site-name">Bankrupt</p>
          </div>
          <p>© 2025 Bankrupt Bank. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
