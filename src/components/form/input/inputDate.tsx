import { useFormContext } from "react-hook-form";

export type InputDateType = {
  name: string;
  required?: boolean;
  size?: "small" | "average" | "big";
};

const sizeClass = {
  small: " space-x-3 mt-1 p-4 max-h-10",
  average: " space-x-3 mt-1 p-4 max-h-14",
  big: " space-x-3 mt-1 p-8 max-h-18",
};

export const InputDate = ({
  name,
  required = false,
  size = "average",
}: InputDateType) => {
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
      <input
        className="w-full border-0 bg-transparent outline-0"
        type="date"
        {...register(name, {
          required,
        })}
      />
    </div>
  );
};
