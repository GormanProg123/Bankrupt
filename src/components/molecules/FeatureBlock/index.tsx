import { Icon } from "../../atoms/Icon";
import "./styles/style.css";

interface FeatureBlockProps {
  icon:
    | "fa-credit-card"
    | "fa-chart-column"
    | "fa-piggy-bank"
    | "fa-paper-plane"
    | "fa-globe"
    | "fa-chart-line"
    | "fa-hourglass-half"
    | "fa-bolt"
    | "fa-gift";
  title: string;
  description: string;
}

export const FeatureBlock = ({
  icon,
  title,
  description,
}: FeatureBlockProps) => {
  return (
    <div className="block">
      <div className="icon">
        <Icon iconClass={icon} size="large" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
