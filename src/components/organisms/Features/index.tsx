import "./styles/style.css";
import { FeatureBlock } from "../../molecules/FeatureBlock";

type IconType =
  | "fa-credit-card"
  | "fa-chart-column"
  | "fa-piggy-bank"
  | "fa-paper-plane"
  | "fa-globe"
  | "fa-chart-line"
  | "fa-hourglass-half"
  | "fa-bolt"
  | "fa-gift";

const features: { icon: IconType; title: string; description: string }[] = [
  {
    icon: "fa-credit-card",
    title: "Smart Cards",
    description:
      "Control your cards, set limits, and get real-time notifications for all transactions.",
  },
  {
    icon: "fa-chart-column",
    title: "Financial Insights",
    description:
      "Track your spending patterns and get personalized recommendations to improve your finances.",
  },
  {
    icon: "fa-piggy-bank",
    title: "Savings Goals",
    description:
      "Set savings goals and watch your money grow with competitive interest rates.",
  },
  {
    icon: "fa-paper-plane",
    title: "Instant Transfers",
    description:
      "Send money instantly to friends, family, or businesses—anytime, anywhere.",
  },
  {
    icon: "fa-globe",
    title: "Multi-Currency",
    description:
      "Hold, convert, and spend in multiple currencies with zero hidden fees.",
  },
  {
    icon: "fa-chart-line",
    title: "Investment Hub",
    description:
      "Start investing in stocks and ETFs with zero commissions and live data.",
  },
  {
    icon: "fa-hourglass-half",
    title: "24/7 Support",
    description:
      "Talk to a real person any time through live chat or phone—day or night, holidays included.",
  },
  {
    icon: "fa-bolt",
    title: "Instant Loans",
    description:
      "Apply and receive small personal loans instantly—no paperwork, no delays.",
  },
  {
    icon: "fa-gift",
    title: "Reward System",
    description:
      "Earn cashback and perks for purchases, referrals, or hitting savings goals.",
  },
];

export const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-top">
          <div className="inline-flex">Features</div>
          <h2>Everything you need in one place</h2>
          <p>
            Our platform provides all the tools you need to manage your finances
            effectively.
          </p>
        </div>

        <div className="blocks">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
