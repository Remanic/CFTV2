export interface CreditCardBreakdown {
  monthlyPayment: number;
  monthsToPayoff: number;
  totalInterest: number;
  totalPaid: number;
  minimumPaymentMonths: number;
}

export const calculateCreditCard = (
  balance: number,
  annualInterestRate: number,
  minimumPayment: number,
  additionalPayment: number
): CreditCardBreakdown => {
  const monthlyRate = annualInterestRate / 100 / 12;
  const totalMonthlyPayment = minimumPayment + additionalPayment;
  
  let remainingBalance = balance;
  let months = 0;
  let totalInterest = 0;
  
  // Calculate with additional payment
  while (remainingBalance > 0 && months < 360) {
    const interestCharge = remainingBalance * monthlyRate;
    totalInterest += interestCharge;
    
    const principalPayment = Math.min(totalMonthlyPayment, remainingBalance + interestCharge);
    remainingBalance = remainingBalance + interestCharge - principalPayment;
    
    months++;
  }
  
  // Calculate months with minimum payment only
  let minPaymentBalance = balance;
  let minPaymentMonths = 0;
  
  while (minPaymentBalance > 0 && minPaymentMonths < 360) {
    const interestCharge = minPaymentBalance * monthlyRate;
    const principalPayment = Math.min(minimumPayment, minPaymentBalance + interestCharge);
    minPaymentBalance = minPaymentBalance + interestCharge - principalPayment;
    minPaymentMonths++;
  }
  
  return {
    monthlyPayment: totalMonthlyPayment,
    monthsToPayoff: months,
    totalInterest: totalInterest,
    totalPaid: balance + totalInterest,
    minimumPaymentMonths: minPaymentMonths
  };
};