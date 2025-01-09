import { EstimatorInput } from "./types";

export const calculateEstimatedAid = (input: EstimatorInput): number => {
  // Convert string inputs to numbers
  const householdIncome = parseFloat(input.householdIncome) || 0;
  const studentIncome = parseFloat(input.studentIncome) || 0;
  const studentAssets = parseFloat(input.studentAssets) || 0;
  const parentAssets = parseFloat(input.parentAssets || "0");
  const householdSize = parseInt(input.householdSize) || 1;

  // Basic calculation logic based on federal methodology
  let estimatedFamilyContribution = 0;
  
  // Calculate income contribution
  const totalIncome = householdIncome + studentIncome;
  const incomeAllowance = householdSize * 12000; // Basic allowance per person
  const availableIncome = Math.max(0, totalIncome - incomeAllowance);
  
  // Calculate asset contribution
  const totalAssets = studentAssets + (input.dependentStatus === "dependent" ? parentAssets : 0);
  const assetContribution = totalAssets * 0.2; // 20% of assets
  
  // Calculate total family contribution
  estimatedFamilyContribution = (availableIncome * 0.5) + assetContribution;

  // Base aid amounts by college type
  const baseAidAmounts = {
    public: 20000,
    private: 35000,
    community: 12000,
  };

  // Calculate total estimated aid
  let estimatedAid = baseAidAmounts[input.collegeType];
  
  // Adjust based on EFC
  estimatedAid = Math.max(0, estimatedAid - estimatedFamilyContribution);

  // Round to nearest hundred
  return Math.round(estimatedAid / 100) * 100;
};