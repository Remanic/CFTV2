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

export type FormData = EstimatorInput;