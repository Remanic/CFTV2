
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
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
import { useTheme } from "next-themes";

export const Header = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { mainCalculators, additionalCalculators, calculatorLinks } = useNavigationLinks();
  const { theme, setTheme } = useTheme();

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="hover:bg-accent transition-colors duration-200"
            >
              <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            {isMobile ? (
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-accent transition-colors duration-200"
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
      </div>
    </header>
  );
};
