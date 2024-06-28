import { ReactNode } from "react";

export type ButtonType = {
  type?: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({ type = "submit", onClick, children }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        flex
        justify-center
        items-center
        gap-2
        px-5
        py-3
        max-h-12
        border
        border-transparent
        rounded-lg
        bg-emerald-500
        hover:bg-emerald-400
        font-bold
        text-white
        text-button-lg
      "
    >
      {children}
    </button>
  );
};
