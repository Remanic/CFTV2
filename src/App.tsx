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
          <Route path="/mortgage-loan-calculator" element={<MortgageCalculator />} />
          <Route path="/auto-loan-payment-calculator" element={<AutoLoanCalculator />} />
          <Route path="/credit-card-payment-calculator" element={<CreditCardCalculator />} />
          <Route path="/monthly-loan-emi-calculator" element={<EMICalculator />} />
          <Route path="/compound-savings-calculator" element={<SavingsCalculator />} />
          <Route path="/fafsa-application-guide" element={<FafsaGuide />} />
          <Route path="/fafsa-review-guide" element={<FafsaReview />} />
          <Route path="/fafsa-aid-estimator" element={<FafsaEstimator />} />
          <Route path="/fafsa-deadline-2024-2025" element={<FafsaDeadline2024 />} />
          <Route path="/fafsa-deadline-2025-2026" element={<FafsaDeadline2025 />} />
          <Route path="/state-deadline-finder" element={<StateDeadlineFinder />} />
          <Route path="/public-service-loan-forgiveness" element={<PublicServiceLoanForgiveness />} />
          <Route path="/teacher-loan-forgiveness" element={<TeacherLoanForgiveness />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;