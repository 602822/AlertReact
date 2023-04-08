interface Props {
  children: string;
  color?: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onClick}
      color="blue"
    >
      {children}
    </button>
  );
};

export default Button;
