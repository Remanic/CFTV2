import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AllLenders from "./pages/AllLenders";
import MortgageCalculator from "./pages/MortgageCalculator";
import AutoLoanCalculator from "./pages/AutoLoanCalculator";
import CreditCardCalculator from "./pages/CreditCardCalculator";
import EMICalculator from "./pages/EMICalculator";
import SavingsCalculator from "./pages/SavingsCalculator";
import FafsaGuide from "./pages/FafsaGuide";
import FafsaReview from "./pages/FafsaReview";
import FafsaEstimator from "./pages/FafsaEstimator";
import FafsaDeadline2024 from "./pages/FafsaDeadline2024";
import FafsaDeadline2025 from "./pages/FafsaDeadline2025";
import StateDeadlineFinder from "./pages/StateDeadlineFinder";
import PublicServiceLoanForgiveness from "./pages/PublicServiceLoanForgiveness";
import TeacherLoanForgiveness from "./pages/TeacherLoanForgiveness";
import PSLFComprehensiveGuide from "./pages/PSLFComprehensiveGuide";
import LatestLoanForgiveness from "./pages/LatestLoanForgiveness";
import LoanForgivenessEligibility from "./pages/LoanForgivenessEligibility";
import FederalLoansGuide from "./pages/FederalLoansGuide";
import LoanComparisonGuide from "./pages/LoanComparisonGuide";
import ParentPlusGuide from "./pages/ParentPlusGuide";
import StudentLoanEssentials from "./pages/StudentLoanEssentials";
import LoanRepaymentCalculator from "./pages/LoanRepaymentCalculator";
import IncomeBasedRepayment from "./pages/IncomeBasedRepayment";
import StandardRepayment from "./pages/StandardRepayment";
import GraduatedRepayment from "./pages/GraduatedRepayment";
import ExtendedRepayment from "./pages/ExtendedRepayment";
import PrivateLoanRepayment from "./pages/PrivateLoanRepayment";
import PrivateLoansGuide from "./pages/PrivateLoansGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/all-lenders" element={<AllLenders />} />
          <Route path="/student-loan-lenders" element={<AllLenders />} />
          
          {/* Calculators */}
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/mortgage-payment-calculator" element={<MortgageCalculator />} />
          <Route path="/auto-loan-calculator" element={<AutoLoanCalculator />} />
          <Route path="/car-loan-calculator" element={<AutoLoanCalculator />} />
          <Route path="/credit-card-calculator" element={<CreditCardCalculator />} />
          <Route path="/credit-card-payment-calculator" element={<CreditCardCalculator />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/loan-emi-calculator" element={<EMICalculator />} />
          <Route path="/savings-calculator" element={<SavingsCalculator />} />
          <Route path="/compound-interest-calculator" element={<SavingsCalculator />} />
          
          {/* FAFSA Guides */}
          <Route path="/fafsa-application-guide" element={<FafsaGuide />} />
          <Route path="/fafsa-guide" element={<FafsaGuide />} />
          <Route path="/fafsa-review-guide" element={<FafsaReview />} />
          <Route path="/fafsa-aid-calculator" element={<FafsaEstimator />} />
          <Route path="/fafsa-deadlines" element={<FafsaDeadline2024 />} />
          <Route path="/fafsa-deadlines-2025" element={<FafsaDeadline2025 />} />
          <Route path="/fafsa-state-deadlines" element={<StateDeadlineFinder />} />
          
          {/* Loan Forgiveness */}
          <Route path="/pslf" element={<PublicServiceLoanForgiveness />} />
          <Route path="/pslf-guide" element={<PSLFComprehensiveGuide />} />
          <Route path="/public-service-loan-forgiveness" element={<PublicServiceLoanForgiveness />} />
          <Route path="/teacher-loan-forgiveness" element={<TeacherLoanForgiveness />} />
          <Route path="/pslf-comprehensive-guide" element={<PSLFComprehensiveGuide />} />
          <Route path="/latest-loan-forgiveness" element={<LatestLoanForgiveness />} />
          <Route path="/student-loan-forgiveness-updates" element={<LatestLoanForgiveness />} />
          <Route path="/loan-forgiveness-eligibility" element={<LoanForgivenessEligibility />} />
          <Route path="/student-loan-forgiveness-eligibility" element={<LoanForgivenessEligibility />} />
          
          {/* Loan Types */}
          <Route path="/federal-loans-guide" element={<FederalLoansGuide />} />
          <Route path="/federal-student-loans" element={<FederalLoansGuide />} />
          <Route path="/loan-comparison-guide" element={<LoanComparisonGuide />} />
          <Route path="/student-loan-comparison" element={<LoanComparisonGuide />} />
          <Route path="/private-loans-guide" element={<PrivateLoansGuide />} />
          <Route path="/parent-plus-guide" element={<ParentPlusGuide />} />
          <Route path="/parent-plus-loans" element={<ParentPlusGuide />} />
          <Route path="/student-loan-essentials" element={<StudentLoanEssentials />} />
          <Route path="/student-loan-basics" element={<StudentLoanEssentials />} />
          
          {/* Repayment Options */}
          <Route path="/loan-repayment-calculator" element={<LoanRepaymentCalculator />} />
          <Route path="/student-loan-repayment-calculator" element={<LoanRepaymentCalculator />} />
          <Route path="/income-based-repayment" element={<IncomeBasedRepayment />} />
          <Route path="/income-driven-repayment" element={<IncomeBasedRepayment />} />
          <Route path="/standard-repayment" element={<StandardRepayment />} />
          <Route path="/standard-repayment-plan" element={<StandardRepayment />} />
          <Route path="/graduated-repayment" element={<GraduatedRepayment />} />
          <Route path="/graduated-repayment-plan" element={<GraduatedRepayment />} />
          <Route path="/extended-repayment" element={<ExtendedRepayment />} />
          <Route path="/extended-repayment-plan" element={<ExtendedRepayment />} />
          <Route path="/private-loan-repayment" element={<PrivateLoanRepayment />} />
          <Route path="/private-student-loan-repayment" element={<PrivateLoanRepayment />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
