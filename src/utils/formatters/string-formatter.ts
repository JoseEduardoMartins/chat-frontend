export type ApplyMaskType = {
  value: string;
  mask: string;
};

export const applyMask = ({ value, mask }: ApplyMaskType): string => {
  if (!value || !mask) return value;

  const arrayValue = value.replace(/\D+/g, '').split('');
  const arrayMask = mask.split('');

  const valueLength = arrayValue.length;
  let valueIndex = 0;
  let response = '';

  arrayMask.forEach((caracter) => {
    if (valueIndex < valueLength) {
      if (caracter === '#') {
        response += arrayValue[valueIndex];
        valueIndex++;
      } else {
        response += caracter;
      }
    }
  });

  return response;
};
