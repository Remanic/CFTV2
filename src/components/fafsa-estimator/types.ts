export interface EstimatorInput {
  householdIncome: string;
  householdSize: string;
  dependentStatus: "dependent" | "independent";
  studentIncome: string;
  studentAssets: string;
  parentAssets: string;
  educationLevel: "undergraduate" | "graduate" | "professional";
  enrollmentStatus: "full-time" | "part-time";
  academicProgram: "regular" | "medical" | "law" | "other";
}

export interface AidBreakdown {
  totalAid: number;
  pellGrant: number;
  federalSEOG: number;
  workStudy: number;
  subsidizedLoanLimit: number;
  unsubsidizedLoanLimit: number;
  suggestions: string[];
}

export type FormData = EstimatorInput;