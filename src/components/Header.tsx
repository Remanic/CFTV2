import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const isMobile = useIsMobile();

  const NavItems = () => (
    <>
      <a href="#" className="text-gray-600 hover:text-primary transition-colors">Features</a>
      <a href="#" className="text-gray-600 hover:text-primary transition-colors">Resources</a>
      <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
      <Button>Get Started</Button>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">CashFlowTime</span>
          </div>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col items-start gap-4 mt-8">
                  <NavItems />
                </nav>
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