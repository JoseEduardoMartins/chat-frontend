import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

export type InputNumberType = {
  name: string;
  placeholder?: string;
  required?: boolean;
  size?: "small" | "average" | "big";
  firstIcon?: IconType;
  lastIcon?: IconType;
};

const sizeClass = {
  small: " mt-1 p-4 max-h-10",
  average: " mt-1 p-4 max-h-14",
  big: " mt-1 p-8 max-h-18",
};

export const InputNumber = ({
  name,
  placeholder,
  required = false,
  size = "average",
  ...props
}: InputNumberType) => {
  const { register } = useFormContext();

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
      {props.firstIcon && (
        <div className="flex text-gray-600">
          <props.firstIcon className="cursor-pointer size-6" />
        </div>
      )}
      <input
        className="w-full border-0 bg-transparent outline-0"
        type="number"
        placeholder={placeholder}
        {...register(name, {
          required,
        })}
      />
      {props.lastIcon && (
        <div className="flex text-gray-600">
          <props.lastIcon className="cursor-pointer size-6" />
        </div>
      )}
    </div>
  );
};
