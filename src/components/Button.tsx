interface IPropBtn {
  text: string;
  onClick?: (event: any) => void;
  className?: string;
  type?: "submit" | "button";
}

const Button = (props: IPropBtn) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
