import { EstimatorInput, AidBreakdown } from "./types";

export const calculateEstimatedAid = (input: EstimatorInput): AidBreakdown => {
  // Convert string inputs to numbers
  const householdIncome = parseFloat(input.householdIncome) || 0;
  const studentIncome = parseFloat(input.studentIncome) || 0;
  const studentAssets = parseFloat(input.studentAssets) || 0;
  const parentAssets = parseFloat(input.parentAssets || "0");
  const householdSize = parseInt(input.householdSize) || 1;

  // Calculate EFC (Expected Family Contribution)
  const totalIncome = householdIncome + studentIncome;
  const incomeAllowance = householdSize * 12000;
  const availableIncome = Math.max(0, totalIncome - incomeAllowance);
  const totalAssets = studentAssets + (input.dependentStatus === "dependent" ? parentAssets : 0);
  const assetContribution = totalAssets * 0.2;
  const efc = (availableIncome * 0.5) + assetContribution;

  // Calculate Pell Grant (2024-2025 maximum: $7,395)
  let pellGrant = 0;
  if (totalIncome <= 60000) {
    pellGrant = Math.min(7395, Math.max(0, 7395 - (efc / 2)));
  }

  // Calculate FSEOG Grant (Federal Supplemental Educational Opportunity Grant)
  let fseogGrant = 0;
  if (totalIncome <= 30000) {
    fseogGrant = 1000;
  }

  // Determine loan limits based on dependency status and year in school
  const subsidizedLoanLimit = input.dependentStatus === "dependent" ? 3500 : 5500;
  const unsubsidizedLoanLimit = input.dependentStatus === "dependent" ? 2000 : 6000;

  // Generate suggestions based on circumstances
  const suggestions: string[] = [];
  
  if (totalIncome > 60000) {
    suggestions.push("Consider submitting the FAFSA as early as possible to maximize aid opportunities.");
  }
  if (input.dependentStatus === "dependent" && totalIncome <= 60000) {
    suggestions.push("You may be eligible for maximum Pell Grant funding.");
  }
  if (studentAssets > 10000) {
    suggestions.push("Consider discussing asset management strategies with a financial advisor to optimize aid eligibility.");
  }
  suggestions.push("Remember to check your state's grant programs for additional funding opportunities.");

  // Calculate total estimated aid
  const totalAid = pellGrant + fseogGrant + subsidizedLoanLimit + unsubsidizedLoanLimit;

  return {
    totalAid: Math.round(totalAid / 100) * 100,
    pellGrant: Math.round(pellGrant / 100) * 100,
    fseogGrant: Math.round(fseogGrant / 100) * 100,
    subsidizedLoanLimit,
    unsubsidizedLoanLimit,
    suggestions
  };
};