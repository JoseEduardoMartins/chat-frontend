export const formatPhone = (phone: string) => {
  if (!phone) return;

  return phone
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '+$1 $2')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
};

export const formatTaxid = (cpf: string) => {
  if (!cpf) return;
  const cleaned = cpf.replace(/\D+/g, '');
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatZipcode = (cep: string) => {
  if (!cep) return;
  const cleaned = cep.replace(/\D+/g, '');
  return cleaned.replace(/(\d{5})(\d{3})/, '$1-$2');
};

export const formatMoney = (currency: number) => {
  if (!currency) return;
  return `R$ ${currency.toFixed(2)}`;
};
