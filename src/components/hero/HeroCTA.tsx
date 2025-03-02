
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { useState } from "react";
import { GuideForm } from "./GuideForm";

export const HeroCTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="flex flex-col items-center mt-4 sm:mt-6 mb-2 w-full">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl 
              transition-all text-base sm:text-lg md:text-xl px-4 sm:px-8 py-4 sm:py-6 h-auto 
              rounded-full w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <span className="xs:hidden">Get Free Guide</span>
            <span className="hidden xs:inline">Get Your Free Guide</span>
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">Get Your Free Student Loan Guide</DialogTitle>
            <DialogDescription className="text-gray-600 text-sm sm:text-base">
              We'll send a comprehensive student loan guide tailored to your needs directly to your inbox.
            </DialogDescription>
          </DialogHeader>
          <GuideForm onClose={() => setDialogOpen(false)} />
        </DialogContent>
      </Dialog>
      <p className="text-xs sm:text-sm text-amber-600 mt-2 font-medium">Free for a limited time - No credit card required</p>
      
      <div className="flex items-center justify-center gap-2 text-gray-600 mt-2">
        <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
        <span className="font-medium text-xs sm:text-sm">Trusted by 10,000+ students and parents</span>
      </div>
    </div>
  );
};
