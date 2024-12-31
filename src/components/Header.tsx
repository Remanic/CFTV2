import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calculator, GraduationCap, PiggyBank, CreditCard, ChartBar, Home, Car } from "lucide-react";

export const Header = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const calculatorLinks = [
    { icon: Home, label: "Mortgage Calculator", path: "/mortgage-loan-calculator", color: "text-blue-500" },
    { icon: Car, label: "Auto Loan Calculator", path: "/auto-loan-payment-calculator", color: "text-green-500" },
    { icon: CreditCard, label: "Credit Card Calculator", path: "/credit-card-payment-calculator", color: "text-purple-500" },
    { icon: Calculator, label: "EMI Calculator", path: "/monthly-loan-emi-calculator", color: "text-orange-500" },
    { icon: PiggyBank, label: "Savings Calculator", path: "/compound-savings-calculator", color: "text-pink-500" },
  ];

  const mainCalculators = calculatorLinks.slice(0, 3);
  const additionalCalculators = calculatorLinks.slice(3);

  const NavItems = () => (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium">
            Calculators
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {calculatorLinks.map(({ icon: Icon, label, path, color }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  >
                    <Icon className={`h-5 w-5 ${color}`} />
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary transition-colors duration-200 text-base font-medium">
            FAFSA
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px] p-4 space-y-2">
              <li>
                <Link
                  to="/fafsa-application-guide"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                >
                  <GraduationCap className="h-5 w-5 text-indigo-500" />
                  <span className="text-sm font-medium text-gray-700">FAFSA Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/fafsa-application-tips"
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                >
                  <ChartBar className="h-5 w-5 text-violet-500" />
                  <span className="text-sm font-medium text-gray-700">Application Tips</span>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Button 
            size={isMobile ? "lg" : "default"} 
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Get Started
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  const MobileMenu = () => (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <div className="font-medium text-sm text-gray-500 px-3">Main Calculators</div>
        {mainCalculators.map(({ icon: Icon, label, path, color }) => (
          <Link
            key={path}
            to={path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Icon className={`h-5 w-5 ${color}`} />
            <span className="text-sm font-medium text-gray-700">{label}</span>
          </Link>
        ))}
      </div>

      <div className="border-t pt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-500"
        >
          More Calculators
          {isExpanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-2 space-y-2">
            {additionalCalculators.map(({ icon: Icon, label, path, color }) => (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="border-t pt-4">
        <div className="font-medium text-sm text-gray-500 px-3 mb-2">FAFSA</div>
        <Link
          to="/fafsa-application-guide"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <GraduationCap className="h-5 w-5 text-indigo-500" />
          <span className="text-sm font-medium text-gray-700">FAFSA Guide</span>
        </Link>
        <Link
          to="/fafsa-application-tips"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ChartBar className="h-5 w-5 text-violet-500" />
          <span className="text-sm font-medium text-gray-700">Application Tips</span>
        </Link>
      </div>

      <div className="border-t pt-4 px-3">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Get Started
        </Button>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
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
                <MobileMenu />
              </SheetContent>
            </Sheet>
          ) : (
            <nav className="hidden md:flex items-center gap-8">
              <NavItems />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};