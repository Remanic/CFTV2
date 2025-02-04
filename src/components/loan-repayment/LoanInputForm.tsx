
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DollarSign, Info, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LoanDetails {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  income: string;
  familySize: string;
  occupation: string;
}

interface LoanInputFormProps {
  loanDetails: LoanDetails;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoanInputForm = ({
  loanDetails,
  handleInputChange,
}: LoanInputFormProps) => {
  return (
    <Card className="p-6">
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter the total amount you need to repay</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="loanAmount"
                name="loanAmount"
                type="text"
                placeholder="Enter amount"
                className="pl-10"
                value={loanDetails.loanAmount}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter the annual interest rate (e.g., 5.5 for 5.5%)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <Percent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="interestRate"
                name="interestRate"
                type="text"
                placeholder="Enter rate"
                className="pl-10"
                value={loanDetails.interestRate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="income">Annual Income</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter your actual or estimated annual income before taxes</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="income"
                name="income"
                type="text"
                placeholder="Enter income"
                className="pl-10"
                value={loanDetails.income}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};
