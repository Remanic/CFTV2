
export interface EligibilityResult {
  eligible: boolean;
  programs: Array<{
    name: string;
    description: string;
    nextSteps: string[];
    eligibilityScore: number;
    requirements: string[];
  }>;
  commonRejectionReasons?: string[];
}

export interface FormData {
  loanType: string;
  employment: string;
  employmentYears: string;
  loanBalance: string;
  income: string;
  degree: string;
  paymentsMade: string;
}
