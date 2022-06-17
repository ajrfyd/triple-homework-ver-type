import { RefreshButton } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <RefreshButton onClick={onClick}>{children}</RefreshButton>;
};

export default Button;
