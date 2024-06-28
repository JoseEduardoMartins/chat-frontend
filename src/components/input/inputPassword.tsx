"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export type InputPasswordType = {
  name: string;
  required?: boolean;
  size?: "small" | "average" | "big";
};

const sizeClass = {
  small: " mt-1 p-4 max-h-10",
  average: " mt-1 p-4 max-h-14",
  big: " mt-1 p-8 max-h-18",
};

export const InputPassword = ({
  name,
  required = false,
  size = "average",
}: InputPasswordType) => {
  const { register } = useFormContext();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleInputType = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <div
      className={`
        flex
        justify-between
        items-center
        rounded-lg
        border
        border-zinc-600
        text-white
        ${sizeClass[size]}  
      `}
    >
      <input
        className="w-full border-0 bg-transparent outline-0"
        type={isVisiblePassword ? "text" : "password"}
        {...register(name, {
          required,
        })}
      />
      {isVisiblePassword ? (
        <div className="flex text-gray-600">
          <FaEye
            className="cursor-pointer size-6"
            onClick={() => handleInputType()}
          />
        </div>
      ) : (
        <div className="flex text-gray-600">
          <FaEyeSlash
            className="cursor-pointer size-6"
            onClick={() => handleInputType()}
          />
        </div>
      )}
    </div>
  );
};
