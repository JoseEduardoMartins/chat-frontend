import { applyMask } from "@/utils/formatters/string-formatter";
import { useFormContext } from "react-hook-form";
import { IconType } from "react-icons";

export type InputMaskType = {
  name: string;
  type: string;
  mask: string; //ex: ####-## || +## (##) #####-#### || ###.###.###-##
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

export const InputMask = ({
  name,
  type,
  mask,
  placeholder,
  required = false,
  size = "average",
  ...props
}: InputMaskType) => {
  const { register, setValue } = useFormContext();

  const handleInputChange = (value: string) => {
    const maskedValue = applyMask({ value, mask });
    setValue(name, maskedValue);
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
      {props.firstIcon && (
        <div className="flex text-gray-600">
          <props.firstIcon className="cursor-pointer size-6" />
        </div>
      )}
      <input
        className="w-full border-0 bg-transparent outline-0"
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required,
          onChange: (e) => handleInputChange(e.target.value),
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
