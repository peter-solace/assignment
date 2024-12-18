export const formatPhoneNumber = (number: number) => {
  const digits = number.toString().replace(/\D/g, ""); // This will remove non-digit characters

  if (digits.length < 10) {
    return '-'
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}