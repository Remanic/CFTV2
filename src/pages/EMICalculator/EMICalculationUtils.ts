export interface EMIBreakdown {
  monthlyEMI: number;
  totalInterest: number;
  totalAmount: number;
  principal: number;
  interestRate: number;
  loanTerm: number;
  processingFee: number;
}

export const calculateEMI = (
  principal: number,
  annualInterestRate: number,
  loanTermMonths: number,
  processingFee: number
): EMIBreakdown => {
  const monthlyRate = annualInterestRate / 100 / 12;
  
  const monthlyEMI = principal * monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths) / 
    (Math.pow(1 + monthlyRate, loanTermMonths) - 1);
  
  const totalAmount = monthlyEMI * loanTermMonths;
  const totalInterest = totalAmount - principal;

  return {
    monthlyEMI,
    totalInterest,
    totalAmount: totalAmount + processingFee,
    principal,
    interestRate: annualInterestRate,
    loanTerm: loanTermMonths,
    processingFee
  };
};