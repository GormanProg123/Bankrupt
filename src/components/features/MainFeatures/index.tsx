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

export const MainFeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white">
        <NavHeader />
        <div className="py-8 bg-gray-100 text-black">
          <div className="flex flex-wrap justify-evenly items-center max-w-7xl mx-auto px-4">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold mb-4">
                Banking that puts you first
              </h1>
              <p className="mb-6">
                Experience seamless banking with Horizon. Manage your finances,
                make payments, and grow your savings all in one place.
              </p>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => navigate("/registration")}
                  className="px-6 py-3 rounded-full bg-black text-white border border-gray-300 hover:bg-gray-700 transition"
                >
                  Open an account →
                </button>
                <button className="px-6 py-3 rounded-full bg-black text-white border border-gray-300 hover:bg-gray-700 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <img
                src={familypic}
                alt="bank illustration"
                className="max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-white">
        <div className="py-12 px-4 max-w-7xl mx-auto text-black">
          <div className="text-center">
            <div className="inline-block bg-gray-300 text-black px-4 py-2 rounded-full mb-4">
              Features
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Everything you need in one place
            </h2>
            <p className="max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage your
              finances effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
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
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-16 h-16 text-4xl text-black mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <p className="font-bold text-black">Bankrupt</p>
          </div>
          <p className="text-gray-600 text-sm">
            © 2025 Bankrupt Bank. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-black hover:underline">
              Terms
            </a>
            <a href="#" className="text-black hover:underline">
              Privacy
            </a>
            <a href="#" className="text-black hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
