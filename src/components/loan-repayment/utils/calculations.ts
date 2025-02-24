import { formatCurrency } from "./formatters";

export interface LoanDetails {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  income: string;
  familySize: string;
  occupation: string;
}

export interface RepaymentBreakdown {
  principal: number;
  interest: number;
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
  monthlyBreakdown: RepaymentBreakdown;
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
  const standardMonthlyInterest = amount * monthlyRate;

  // Graduated payment calculation - starts at 75% of standard payment, increases every 2 years by 10%
  let graduatedBalance = amount;
  let graduatedTotalInterest = 0;
  let graduatedInitialPayment = standardPayment * 0.75;
  let graduatedPayments = [];
  
  for (let year = 0; year < months/12; year++) {
    const yearlyIncrease = Math.floor(year/2) * 0.1; // 10% increase every 2 years
    const currentPayment = graduatedInitialPayment * (1 + yearlyIncrease);
    
    for (let month = 0; month < 12 && year * 12 + month < months; month++) {
      const monthlyInterest = graduatedBalance * monthlyRate;
      graduatedTotalInterest += monthlyInterest;
      const principalPayment = Math.min(currentPayment - monthlyInterest, graduatedBalance);
      graduatedBalance = Math.max(0, graduatedBalance - principalPayment);
      graduatedPayments.push(currentPayment);
    }
  }
  
  const graduatedAveragePayment = graduatedPayments.reduce((a, b) => a + b, 0) / graduatedPayments.length;
  
  // Extended payment (25 years = 300 months)
  const extendedMonths = 300;
  const extendedPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, extendedMonths)) / 
                         (Math.pow(1 + monthlyRate, extendedMonths) - 1);
  const extendedTotalPayment = extendedPayment * extendedMonths;
  const extendedMonthlyInterest = amount * monthlyRate;

  // Income-based payment calculation (following studentaid.gov guidelines)
  // 2024 Poverty Guidelines for 48 States and DC
  const basePovertyLine2024 = 15060;
  const additionalPersonAmount = 5380;
  const familySize = parseInt(loanDetails.familySize);
  const povertyLine = basePovertyLine2024 + (additionalPersonAmount * (familySize - 1));
  
  // Calculate discretionary income (amount over 150% of poverty line)
  const discretionaryIncome = Math.max(0, yearlyIncome - (povertyLine * 1.5));
  
  // Calculate monthly payment (10% of discretionary income for new borrowers after July 1, 2014)
  // 15% for earlier borrowers, we'll use 10% as default
  const monthlyDiscretionaryPercentage = 0.10;
  const calculatedMonthlyPayment = (discretionaryIncome * monthlyDiscretionaryPercentage) / 12;
  
  // Payment cannot be less than $0 but can be $0 if income is low enough
  const incomeBasedPayment = Math.max(0, calculatedMonthlyPayment);
  
  // For income-based total calculations:
  // 1. Maximum repayment period is 20 years (240 months) for new borrowers
  // 2. Remaining balance is forgiven after this period
  // 3. Calculate interest accrual accurately
  const ibr_months = 240; // 20 years
  let ibrTotalPaid = 0;
  let ibrTotalInterest = 0;
  let remainingBalance = amount;
  
  // Simulate payments over time to calculate total interest and payment
  for (let i = 0; i < ibr_months && remainingBalance > 0; i++) {
    const monthlyInterest = remainingBalance * monthlyRate;
    const principalPayment = Math.min(remainingBalance, Math.max(0, incomeBasedPayment - monthlyInterest));
    
    ibrTotalInterest += monthlyInterest;
    ibrTotalPaid += incomeBasedPayment;
    remainingBalance = Math.max(0, remainingBalance - principalPayment);
  }
  
  // If there's remaining balance after 20 years, it's forgiven
  // Track forgiven amount but don't include in total payment
  const forgivenAmount = remainingBalance;
  
  // Calculate monthly breakdown
  const ibrMonthlyInterest = Math.min(incomeBasedPayment, amount * monthlyRate);
  const ibrMonthlyPrincipal = Math.max(0, incomeBasedPayment - ibrMonthlyInterest);

  return [
    {
      name: "Standard",
      monthlyPayment: standardPayment,
      totalInterest: standardTotalInterest,
      totalPayment: standardTotalPayment,
      timeToRepay: months,
      description: "Fixed monthly payments over 10 years - straightforward and predictable",
      popularity: 45,
      pslf_eligible: true,
      monthlyBreakdown: {
        principal: standardPayment - standardMonthlyInterest,
        interest: standardMonthlyInterest
      },
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
      totalInterest: graduatedTotalInterest,
      totalPayment: graduatedTotalInterest + amount,
      timeToRepay: months,
      description: "Payments start low and increase every 2 years",
      popularity: 25,
      pslf_eligible: true,
      monthlyBreakdown: {
        principal: graduatedInitialPayment - (amount * monthlyRate),
        interest: amount * monthlyRate
      },
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
      description: "Lower monthly payments over 25 years - more affordable monthly cost",
      popularity: 15,
      pslf_eligible: false,
      monthlyBreakdown: {
        principal: extendedPayment - extendedMonthlyInterest,
        interest: extendedMonthlyInterest
      },
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
      totalInterest: ibrTotalInterest,
      totalPayment: ibrTotalPaid,
      timeToRepay: ibr_months,
      description: "Payments based on your discretionary income",
      popularity: 35,
      pslf_eligible: true,
      monthlyBreakdown: {
        principal: ibrMonthlyPrincipal,
        interest: ibrMonthlyInterest
      },
      benefits: [
        `Monthly payment: ${formatCurrency(incomeBasedPayment)} (${Math.round((incomeBasedPayment * 12 / yearlyIncome) * 100 || 0)}% of annual income)`,
        `Based on discretionary income: ${formatCurrency(discretionaryIncome)} annually`,
        forgivenAmount > 0 ? `Estimated forgiveness: ${formatCurrency(forgivenAmount)}` : "May qualify for loan forgiveness after 20-25 years"
      ],
      optimizationTips: [
        "Recertify income annually to maintain eligibility",
        "Document all qualifying payments",
        isPublicService ? "Track PSLF eligibility - could qualify in 10 years" : "Consider public service for accelerated forgiveness"
      ]
    }
  ];
};

export const expertTips = [
  {
    title: "Create a Budget",
    description: "Track your expenses and create a realistic budget that prioritizes loan payments while maintaining essential expenses.",
    icon: "Calculator"
  },
  {
    title: "Pay More Than Minimum",
    description: "Whenever possible, pay more than the minimum payment. Even small additional amounts can significantly reduce the total interest paid.",
    icon: "Wallet"
  },
  {
    title: "Use Windfalls Wisely",
    description: "Apply tax refunds, bonuses, or other unexpected income to your loan principal to reduce the overall balance faster.",
    icon: "Gift"
  },
  {
    title: "Consider Refinancing",
    description: "If you have good credit and stable income, refinancing could potentially lower your interest rate and monthly payment.",
    icon: "RefreshCw"
  },
  {
    title: "Set Up Auto-Pay",
    description: "Most lenders offer a 0.25% interest rate reduction for setting up automatic payments, which can save you money over time.",
    icon: "Clock"
  }
];
