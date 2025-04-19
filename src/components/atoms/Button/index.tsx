import "./styles/style.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
}

export const Button = ({ text, onClick, variant }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button ${
        variant === "primary" ? "button--primary" : "button--secondary"
      }`}
    >
      {text}
    </button>
  );
};
