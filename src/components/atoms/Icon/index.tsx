import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faChartColumn,
  faPiggyBank,
  faPaperPlane,
  faGlobe,
  faChartLine,
  faHourglassHalf,
  faBolt,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/style.css";

interface IconProps {
  iconClass:
    | "fa-credit-card"
    | "fa-chart-column"
    | "fa-piggy-bank"
    | "fa-paper-plane"
    | "fa-globe"
    | "fa-chart-line"
    | "fa-hourglass-half"
    | "fa-bolt"
    | "fa-gift";
  size?: "small" | "medium" | "large";
}

const iconMap = {
  "fa-credit-card": faCreditCard,
  "fa-chart-column": faChartColumn,
  "fa-piggy-bank": faPiggyBank,
  "fa-paper-plane": faPaperPlane,
  "fa-globe": faGlobe,
  "fa-chart-line": faChartLine,
  "fa-hourglass-half": faHourglassHalf,
  "fa-bolt": faBolt,
  "fa-gift": faGift,
};

export const Icon = ({ iconClass, size = "large" }: IconProps) => {
  const sizeClass =
    size === "small"
      ? "icon--small"
      : size === "medium"
      ? "icon--medium"
      : "icon--large";

  const icon = iconMap[iconClass];

  return <FontAwesomeIcon icon={icon} className={`icon ${sizeClass}`} />;
};
