export type LabelType = { value: string; required?: boolean };

export const Label = ({ value, required }: LabelType) => {
  return (
    <label className="text-white">
      {value}
      {required && "*"}
    </label>
  );
};
