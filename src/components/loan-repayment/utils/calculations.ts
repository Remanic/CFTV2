
export interface LoanDetails {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  income: string;
  familySize: string;
  occupation: string;
}

export interface RepaymentPlan {
  name: string;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  timeToRepay: number;
  description: string;
  popularity: number;
  benefits: string[];
  pslf_eligible: boolean;
  optimizationTips: string[];
}

export const calculateRepaymentPlans = (loanDetails: LoanDetails): RepaymentPlan[] => {
  const amount = parseFloat(loanDetails.loanAmount.replace(/,/g, ''));
  const rate = parseFloat(loanDetails.interestRate.replace(/,/g, ''));
  const months = parseInt(loanDetails.loanTerm);
  const yearlyIncome = parseFloat(loanDetails.income.replace(/,/g, '')) || 0;
  const isPublicService = loanDetails.occupation?.toLowerCase().includes('public') || 
                         loanDetails.occupation?.toLowerCase().includes('government') ||
                         loanDetails.occupation?.toLowerCase().includes('non-profit');

  // Convert annual rate to monthly rate
  const monthlyRate = (rate / 100) / 12;
  
  // Standard payment calculation
  const standardPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                        (Math.pow(1 + monthlyRate, months) - 1);
  const standardTotalPayment = standardPayment * months;
  const standardTotalInterest = standardTotalPayment - amount;
  
  // Graduated payment calculation
  let graduatedTotalPayment = 0;
  let graduatedInitialPayment = standardPayment * 0.6;
  let remainingMonths = months;
  let graduatedBalance = amount;
  
  for (let i = 0; i < months; i++) {
    const currentPayment = graduatedInitialPayment * (1 + Math.floor(i / 24) * 0.1);
    const interestPortion = graduatedBalance * monthlyRate;
    const principalPortion = currentPayment - interestPortion;
    graduatedBalance = Math.max(0, graduatedBalance - principalPortion);
    graduatedTotalPayment += currentPayment;
  }
  
  // Extended payment (25 years = 300 months)
  const extendedMonths = 300;
  const extendedPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, extendedMonths)) / 
                         (Math.pow(1 + monthlyRate, extendedMonths) - 1);
  const extendedTotalPayment = extendedPayment * extendedMonths;
  
  // Income-based payment (10% of discretionary income)
  const povertyLine = 13590 + (4720 * (parseInt(loanDetails.familySize) - 1));
  const discretionaryIncome = Math.max(0, yearlyIncome - (povertyLine * 1.5));
  const incomeBasedPayment = Math.max((discretionaryIncome * 0.1) / 12, 10);
  const incomeBasedTotalPayment = incomeBasedPayment * 240; // 20 years

  return [
    {
      name: "Standard",
      monthlyPayment: standardPayment,
      totalInterest: standardTotalInterest,
      totalPayment: standardTotalPayment,
      timeToRepay: months,
      description: "Fixed monthly payments over 10 years",
      popularity: 45,
      pslf_eligible: true,
      benefits: [
        "Predictable monthly payments",
        "Pay less interest over time",
        "Finish repayment faster"
      ],
      optimizationTips: [
        "Make bi-weekly payments to reduce interest",
        "Round up payments to pay off faster",
        "Set up autopay for 0.25% interest rate reduction"
      ]
    },
    {
      name: "Graduated",
      monthlyPayment: graduatedInitialPayment,
      totalInterest: graduatedTotalPayment - amount,
      totalPayment: graduatedTotalPayment,
      timeToRepay: months,
      description: "Payments start low and increase every 2 years",
      popularity: 25,
      pslf_eligible: true,
      benefits: [
        "Lower initial payments",
        "Payments increase with expected income growth",
        "Good for careers with growing income"
      ],
      optimizationTips: [
        "Make extra payments during income increases",
        "Consider refinancing after salary increases",
        "Save money during lower payment periods"
      ]
    },
    {
      name: "Extended",
      monthlyPayment: extendedPayment,
      totalInterest: extendedTotalPayment - amount,
      totalPayment: extendedTotalPayment,
      timeToRepay: extendedMonths,
      description: "Lower monthly payments over 25 years",
      popularity: 15,
      pslf_eligible: false,
      benefits: [
        "Lowest monthly payments",
        "More manageable for tight budgets",
        "Longer repayment period"
      ],
      optimizationTips: [
        "Consider refinancing if interest rates drop",
        "Make extra payments when possible",
        "Evaluate income-driven plans as alternatives"
      ]
    },
    {
      name: "Income-Based",
      monthlyPayment: incomeBasedPayment,
      totalInterest: Math.max(0, incomeBasedTotalPayment - amount),
      totalPayment: incomeBasedTotalPayment,
      timeToRepay: 240,
      description: "Payments based on your discretionary income",
      popularity: 35,
      pslf_eligible: true,
      benefits: [
        "Payments adjust with income changes",
        "Potential loan forgiveness after 20-25 years",
        "Protection during financial hardship"
      ],
      optimizationTips: [
        "Recertify income annually",
        "Document public service employment",
        "Track qualifying payments for forgiveness"
      ]
    }
  ];
};
