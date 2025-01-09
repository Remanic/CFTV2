export interface EstimatorInput {
  householdIncome: string;
  householdSize: string;
  dependentStatus: "dependent" | "independent";
  studentIncome: string;
  studentAssets: string;
  parentAssets: string;
  stateOfResidence: string;
  collegeType: "public" | "private" | "community";
}

export interface AidBreakdown {
  totalAid: number;
  pellGrant: number;
  fseogGrant: number;
  subsidizedLoanLimit: number;
  unsubsidizedLoanLimit: number;
  suggestions: string[];
}

export type FormData = EstimatorInput;