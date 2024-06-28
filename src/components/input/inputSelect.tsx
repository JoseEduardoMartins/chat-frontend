"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export type OptionType = {
  label: string;
  value: string;
};

export type InputSelectType = {
  name: string;
  options: OptionType[];
  required?: boolean;
  size?: "small" | "average" | "big";
};

const sizeClass = {
  small: " pl-4 pr-8 h-10",
  average: " pl-4 pr-8 max-h-14",
  big: " pl-4 pr-8 max-h-18",
};

export const InputSelect = ({
  name,
  options,
  required = false,
  size = "average",
}: InputSelectType) => {
  const { register } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center relative  w-full">
      <select
        className={
          "block appearance-none w-full bg-white rounded-lg border border-gray-500/[.32] hover:border-gray-800 hover:border-1 text-body1 text-regular text-ellipsis outline-0.5 shadow-outline outline-primary-700 focus:text-gray-800 overflow-hidden disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:text-font-color-disabled" +
          sizeClass[size]
        }
        {...register(name, {
          required,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        <option value="0">Selecione...</option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute right-0 flex items-center  px-2">
        {isOpen ? (
          <IoIosArrowUp className="text-gray-500" />
        ) : (
          <IoIosArrowDown className="text-gray-500" />
        )}
      </div>
    </div>
  );
};
