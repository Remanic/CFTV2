export const calculateAutoLoan = (
  carPrice: string,
  downPayment: string,
  interestRate: string,
  loanTerm: string,
  salesTax: string
) => {
  const tax = (parseFloat(carPrice) * parseFloat(salesTax)) / 100;
  const principal = parseFloat(carPrice) + tax - parseFloat(downPayment);
  const rate = parseFloat(interestRate) / 100 / 12;
  const months = parseFloat(loanTerm) * 12;

  const monthlyPmt = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);

  return {
    principal: monthlyPmt - (principal * rate),
    interest: principal * rate,
    tax: tax / months,
    total: monthlyPmt,
    carPrice: parseFloat(carPrice),
    salesTax: tax,
    downPayment: parseFloat(downPayment)
  };
};