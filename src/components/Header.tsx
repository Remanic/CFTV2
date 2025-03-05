
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";
import { useNavigationLinks } from "./header/NavigationLinks";
import { useEffect } from "react";

export const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { mainCalculators, additionalCalculators, calculatorLinks } = useNavigationLinks();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center gap-3"
          >
            <img src="/cft-logo.svg" alt="CFT Logo" className="w-8 h-8 rounded-md" />
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
