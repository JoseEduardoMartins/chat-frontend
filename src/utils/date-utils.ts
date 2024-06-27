function calculateAge(birthDate: Date): number {
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export { calculateAge };
