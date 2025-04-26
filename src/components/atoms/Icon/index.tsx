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
  faDownload,
  faStar,
  faPlus,
  faWallet,
  faArrowRight,
  faPhone,  
  faEnvelope,
  faKey,
  faLock,
  faBell,
  faMobile,
  faDesktop,
  faUser,
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
    | "fa-gift"
    | "fa-download"
    | "fa-star"
    | "fa-plus"
    | "fa-wallet"
    | "fa-arrow-right"
    | "fa-phone"
    | "fa-envelope"
    | "fa-key"
    | "fa-lock"
    | "fa-bell"
    | "fa-mobile"
    | "fa-desktop"
    | "fa-user";
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
  "fa-download": faDownload,
  "fa-star": faStar,
  "fa-plus": faPlus,
  "fa-wallet":faWallet,
  "fa-arrow-right":faArrowRight,
  "fa-phone":faPhone,
  "fa-envelope":faEnvelope,
  "fa-key":faKey,
  "fa-lock":faLock,
  "fa-bell":faBell,
  "fa-mobile":faMobile,
  "fa-desktop":faDesktop,
  "fa-user":faUser,
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
