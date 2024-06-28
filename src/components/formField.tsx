import { IconType } from "react-icons";
import { FormFieldError } from "./formFieldError";
import {
  InputDate,
  InputMask,
  InputNumber,
  InputPassword,
  InputSelect,
  InputText,
} from "./input";
import { Label } from "./label";

export type OptionType = {
  label: string;
  value: string;
};

export type FormFieldType = {
  label: string;
  name: string;
  type: "date" | "email" | "number" | "password" | "select" | "text" | "tel";
  mask?: string;
  placeholder?: string;
  options?: OptionType[];
  required?: boolean;
  size?: "small" | "average" | "big";
  inputFirstIcon?: IconType;
  inputLastIcon?: IconType;
};

export const FormField = ({
  label,
  name,
  type,
  mask,
  placeholder,
  options,
  required = false,
  size = "average",
  inputFirstIcon,
  inputLastIcon,
}: FormFieldType) => (
  <div className="w-full relative">
    <div className="w-full flex flex-col">
      <Label value={label} required={required} />
      {type === "date" && (
        <InputDate name={name} required={required} size={size} />
      )}
      {type === "password" && (
        <InputPassword name={name} required={required} size={size} />
      )}
      {type === "email" && (
        <InputText
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          size={size}
          firstIcon={inputFirstIcon}
          lastIcon={inputLastIcon}
        />
      )}
      {type === "tel" && (
        <InputMask
          name={name}
          type={type}
          mask="+## (##) #####-####"
          placeholder={placeholder}
          required={required}
          size={size}
          firstIcon={inputFirstIcon}
          lastIcon={inputLastIcon}
        />
      )}
      {!!mask && (
        <InputMask
          name={name}
          type={type}
          mask={mask}
          placeholder={placeholder}
          required={required}
          size={size}
          firstIcon={inputFirstIcon}
          lastIcon={inputLastIcon}
        />
      )}
      {type === "text" && !mask && (
        <InputText
          name={name}
          placeholder={placeholder}
          required={required}
          size={size}
          firstIcon={inputFirstIcon}
          lastIcon={inputLastIcon}
        />
      )}
      {type === "number" && (
        <InputNumber
          name={name}
          placeholder={placeholder}
          required={required}
          size={size}
          firstIcon={inputFirstIcon}
          lastIcon={inputLastIcon}
        />
      )}
      {type === "select" && options?.length && (
        <InputSelect
          name={name}
          required={required}
          size={size}
          options={options}
        />
      )}
    </div>
    <div>
      <FormFieldError name={name} />
    </div>
  </div>
);
