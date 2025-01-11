import { EstimatorInput, AidBreakdown } from "./types";

export const calculateEstimatedAid = (input: EstimatorInput): AidBreakdown => {
  // Convert string inputs to numbers
  const householdIncome = parseFloat(input.householdIncome) || 0;
  const studentIncome = parseFloat(input.studentIncome) || 0;
  const studentAssets = parseFloat(input.studentAssets) || 0;
  const parentAssets = parseFloat(input.parentAssets || "0");
  const householdSize = parseInt(input.householdSize) || 1;

  // Calculate EFC using Federal Methodology
  const totalIncome = householdIncome + studentIncome;
  const incomeProtectionAllowance = calculateIncomeProtectionAllowance(householdSize);
  const availableIncome = Math.max(0, totalIncome - incomeProtectionAllowance);
  
  // Asset contribution calculations
  const studentAssetContribution = calculateStudentAssetContribution(studentAssets);
  const parentAssetContribution = input.dependentStatus === "dependent" ? 
    calculateParentAssetContribution(parentAssets) : 0;
  
  // Calculate total EFC
  const efc = calculateEFC(availableIncome, studentAssetContribution, parentAssetContribution);

  // Calculate Pell Grant (2024-2025 maximum: $7,395)
  let pellGrant = calculatePellGrant(efc, input.enrollmentStatus);

  // Calculate FSEOG (Federal Supplemental Educational Opportunity Grant)
  let federalSEOG = calculateFSEOG(efc);

  // Calculate Federal Work-Study
  let workStudy = calculateWorkStudy(efc, input.educationLevel);

  // Determine loan limits based on dependency status and education level
  const { subsidizedLoanLimit, unsubsidizedLoanLimit } = calculateLoanLimits(
    input.dependentStatus,
    input.educationLevel,
    input.academicProgram
  );

  // Generate suggestions based on circumstances
  const suggestions = generateSuggestions(input, efc);

  // Calculate total estimated aid
  const totalAid = pellGrant + federalSEOG + workStudy + subsidizedLoanLimit + unsubsidizedLoanLimit;

  return {
    totalAid: Math.round(totalAid),
    pellGrant: Math.round(pellGrant),
    federalSEOG: Math.round(federalSEOG),
    workStudy: Math.round(workStudy),
    subsidizedLoanLimit,
    unsubsidizedLoanLimit,
    suggestions
  };
};

const calculateIncomeProtectionAllowance = (householdSize: number): number => {
  // 2024-2025 Income Protection Allowance amounts
  const baseAllowance = {
    1: 10590,
    2: 27900,
    3: 34710,
    4: 42890,
    5: 50640,
    6: 59190
  }[Math.min(householdSize, 6)] || 59190 + ((householdSize - 6) * 6690);
  
  return baseAllowance;
};

const calculateStudentAssetContribution = (assets: number): number => {
  return assets * 0.2; // Students expected to contribute 20% of their assets
};

const calculateParentAssetContribution = (assets: number): number => {
  return assets * 0.12; // Parents expected to contribute 12% of their assets
};

const calculateEFC = (
  availableIncome: number,
  studentAssetContribution: number,
  parentAssetContribution: number
): number => {
  return availableIncome * 0.5 + studentAssetContribution + parentAssetContribution;
};

const calculatePellGrant = (efc: number, enrollmentStatus: string): number => {
  const maxPell = 7395; // 2024-2025 maximum Pell Grant
  let pellAmount = Math.max(0, maxPell - efc);
  
  if (enrollmentStatus === "part-time") {
    pellAmount *= 0.5;
  }
  
  return Math.min(maxPell, pellAmount);
};

const calculateFSEOG = (efc: number): number => {
  if (efc <= 250) return 4000;
  if (efc <= 1000) return 2000;
  if (efc <= 2000) return 1000;
  return 0;
};

const calculateWorkStudy = (efc: number, educationLevel: string): number => {
  if (efc <= 5000) {
    return educationLevel === "undergraduate" ? 3000 : 5000;
  }
  return 0;
};

const calculateLoanLimits = (
  dependentStatus: string,
  educationLevel: string,
  academicProgram: string
): { subsidizedLoanLimit: number; unsubsidizedLoanLimit: number } => {
  let subsidized = 0;
  let unsubsidized = 0;

  if (educationLevel === "undergraduate") {
    subsidized = 5500;
    unsubsidized = dependentStatus === "dependent" ? 2000 : 6000;
  } else if (educationLevel === "graduate") {
    subsidized = 0; // Graduate students can't receive subsidized loans
    unsubsidized = 20500;
  } else if (educationLevel === "professional") {
    subsidized = 0;
    unsubsidized = academicProgram === "medical" ? 47167 : 33000;
  }

  return { subsidizedLoanLimit: subsidized, unsubsidizedLoanLimit: unsubsidized };
};

const generateSuggestions = (input: EstimatorInput, efc: number): string[] => {
  const suggestions: string[] = [];
  
  if (efc === 0) {
    suggestions.push("You may be eligible for maximum federal student aid.");
  }
  
  if (input.educationLevel === "undergraduate" && input.dependentStatus === "dependent") {
    suggestions.push("Consider having a parent apply for a Parent PLUS loan if additional funding is needed.");
  }
  
  if (input.educationLevel === "graduate" || input.educationLevel === "professional") {
    suggestions.push("Look into Graduate PLUS loans for additional funding options.");
  }
  
  suggestions.push("File your FAFSA as early as possible to maximize aid opportunities.");
  suggestions.push("These estimates are for one academic year only. You'll need to reapply for FAFSA annually.");
  
  return suggestions;
};