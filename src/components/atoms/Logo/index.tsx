import "./styles/style.css";
import logoIcon from "../../../assets/logo.png";
interface LogoProps {
  size?: "small" | "medium" | "large";
}

export const Logo = ({ size = "small" }: LogoProps) => {
  const sizeClass =
    size === "small"
      ? "logo--small"
      : size === "medium"
      ? "logo--medium"
      : "logo--large";

  return (
    <div className="logo-atom">
      <img src={logoIcon} alt="logo" className={`logo-atom-img ${sizeClass}`} />
      <p className="font-bold text-2xl">Bankrupt</p>
    </div>
  );
};
