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
          <Route path="/fafsa-application-guide" element={<Navigate to="/" replace />} />
          <Route path="/fafsa-application-tips" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;