
import { FormData } from "./types";
import { FormFieldTooltip } from "@/components/fafsa-estimator/form-fields/FormFieldTooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EligibilityFormProps {
  formData: FormData;
  loading: boolean;
  progress: number;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: string, value: string) => void;
}

export const EligibilityForm = ({
  formData,
  loading,
  progress,
  onSubmit,
  onInputChange,
}: EligibilityFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="loanType">Loan Type</Label>
            <FormFieldTooltip tooltip="Only federal Direct Loans are eligible for most forgiveness programs. Private loans are not eligible for federal forgiveness." />
          </div>
          <Select onValueChange={(value) => onInputChange("loanType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="direct">Direct Loans (Eligible for most programs)</SelectItem>
              <SelectItem value="ffel">FFEL Loans (Limited eligibility)</SelectItem>
              <SelectItem value="perkins">Perkins Loans (Limited eligibility)</SelectItem>
              <SelectItem value="private">Private Loans (Not eligible)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="employment">Employment Type</Label>
            <FormFieldTooltip tooltip="Your employer type affects eligibility for specific forgiveness programs like PSLF" />
          </div>
          <Select onValueChange={(value) => onInputChange("employment", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select employment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="government">Government</SelectItem>
              <SelectItem value="nonprofit">Non-Profit 501(c)(3)</SelectItem>
              <SelectItem value="education">Education (Teaching)</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="private">Private Sector</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="employmentYears">Years at Current Employment</Label>
            <FormFieldTooltip tooltip="Enter the number of full years you've worked at your qualifying employer" />
          </div>
          <Input 
            type="number" 
            id="employmentYears" 
            placeholder="Enter years"
            onChange={(e) => onInputChange("employmentYears", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="paymentsMade">Qualifying Payments Made</Label>
            <FormFieldTooltip tooltip="Number of qualifying monthly payments made while working for an eligible employer" />
          </div>
          <Input 
            type="number" 
            id="paymentsMade" 
            placeholder="Enter number of payments"
            onChange={(e) => onInputChange("paymentsMade", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="loanBalance">Current Loan Balance</Label>
            <FormFieldTooltip tooltip="Enter your total federal student loan balance in dollars" />
          </div>
          <Input 
            type="number" 
            id="loanBalance" 
            placeholder="Enter amount in dollars"
            onChange={(e) => onInputChange("loanBalance", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="income">Annual Income</Label>
            <FormFieldTooltip tooltip="Enter your gross annual income (before taxes) in dollars" />
          </div>
          <Input 
            type="number" 
            id="income" 
            placeholder="Enter yearly income in dollars"
            onChange={(e) => onInputChange("income", e.target.value)}
          />
        </div>
      </div>

      {loading && (
        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-500 text-center">Analyzing your information...</p>
        </div>
      )}

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Checking eligibility..." : "Check My Eligibility"}
      </Button>
    </form>
  );
};
