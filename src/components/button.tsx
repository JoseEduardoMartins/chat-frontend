import { ReactNode } from "react";

export type ButtonType = { children: ReactNode };

export const Button = ({ children }: ButtonType) => {
  return (
    <button
      type="submit"
      className="
        flex
        justify-center
        items-center
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
      <span>{children}</span>
    </button>
  );
};
