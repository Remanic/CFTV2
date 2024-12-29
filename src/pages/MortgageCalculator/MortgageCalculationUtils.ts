export interface MortgageBreakdown {
  principal: number;
  interest: number;
  tax: number;
  insurance: number;
  total: number;
}

export const calculateMortgage = (
  homePrice: number, 
  downPayment: number, 
  interestRate: number, 
  loanTerm: number, 
  propertyTax: number, 
  insurance: number
): { monthlyPayment: number; breakdown: MortgageBreakdown } => {
  const principal = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const months = loanTerm * 12;
  const monthlyTax = propertyTax / 12;
  const monthlyInsurance = insurance / 12;

  const monthlyPrincipalAndInterest = 
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalMonthly = monthlyPrincipalAndInterest + monthlyTax + monthlyInsurance;

  return {
    monthlyPayment: totalMonthly,
    breakdown: {
      principal: monthlyPrincipalAndInterest - (principal * monthlyRate),
      interest: principal * monthlyRate,
      tax: monthlyTax,
      insurance: monthlyInsurance,
      total: totalMonthly
    }
  };
};