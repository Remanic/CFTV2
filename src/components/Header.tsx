import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calculator, Home, Car, CreditCard, PiggyBank } from "lucide-react";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";

export const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const calculatorLinks = [
    { 
      icon: Home, 
      label: "Mortgage Calculator", 
      path: "/mortgage-loan-calculator", 
      color: "text-blue-500" 
    },
    { 
      icon: Car, 
      label: "Auto Loan Calculator", 
      path: "/auto-loan-payment-calculator", 
      color: "text-green-500" 
    },
    { 
      icon: CreditCard, 
      label: "Credit Card Calculator", 
      path: "/credit-card-payment-calculator", 
      color: "text-purple-500" 
    },
    { 
      icon: Calculator, 
      label: "EMI Calculator", 
      path: "/monthly-loan-emi-calculator", 
      color: "text-orange-500" 
    },
    { 
      icon: PiggyBank, 
      label: "Savings Calculator", 
      path: "/compound-savings-calculator", 
      color: "text-pink-500" 
    },
  ].map(link => ({
    ...link,
    state: { from: location.pathname }
  }));

  const mainCalculators = calculatorLinks.slice(0, 3);
  const additionalCalculators = calculatorLinks.slice(3);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight hover:text-primary/90 transition-colors">
              CashFlowTime
            </span>
          </Link>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right"
                className="w-[300px] sm:w-[380px] overflow-y-auto"
              >
                <MobileNavigation 
                  mainCalculators={mainCalculators}
                  additionalCalculators={additionalCalculators}
                />
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center gap-8">
              <DesktopNavigation calculatorLinks={calculatorLinks} />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};