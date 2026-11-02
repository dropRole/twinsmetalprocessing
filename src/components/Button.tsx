import type { FC, MouseEvent } from "react";
import "./button.css";

type ButtonProps = {
  variant: "underlined" | "fill";
  text: string;
  action?: () => void;
};

const Button: FC<ButtonProps> = ({ variant, text, action }) => {
  return (
    <button
      type="button"
      className={variant}
      onClick={(e: MouseEvent) => {
        e.preventDefault();

        action && action();
      }}
    >
      {text}
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10h13M11 5l5 5-5 5"
          stroke={variant === "underlined" ? "currentColor" : "white"}
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};

export default Button;
