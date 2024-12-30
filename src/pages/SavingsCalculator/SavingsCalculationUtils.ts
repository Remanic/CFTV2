export interface SavingsBreakdown {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
  afterTaxFutureValue: number;
  initialDeposit: number;
  monthlyContribution: number;
  annualReturn: number;
  years: number;
}

export const calculateSavings = (
  initialDeposit: number,
  monthlyContribution: number,
  annualReturn: number,
  years: number,
  taxRate: number
): SavingsBreakdown => {
  const monthlyRate = annualReturn / 100 / 12;
  const totalMonths = years * 12;
  
  // Calculate future value using compound interest formula with regular contributions
  const futureValue = initialDeposit * Math.pow(1 + monthlyRate, totalMonths) +
    monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  
  const totalContributions = initialDeposit + (monthlyContribution * totalMonths);
  const totalInterest = futureValue - totalContributions;
  
  // Calculate after-tax future value
  const taxableGains = totalInterest;
  const taxAmount = taxableGains * (taxRate / 100);
  const afterTaxFutureValue = futureValue - taxAmount;

  return {
    futureValue,
    totalContributions,
    totalInterest,
    afterTaxFutureValue,
    initialDeposit,
    monthlyContribution,
    annualReturn,
    years
  };
};