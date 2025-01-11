import { UseFormReturn } from "react-hook-form";
import { FormData } from "../../types";
import { InputField } from "../InputField";

interface FinancialInfoFieldsProps {
  form: UseFormReturn<FormData>;
}

export const FinancialInfoFields = ({ form }: FinancialInfoFieldsProps) => {
  return (
    <>
      <InputField
        form={form}
        name="householdIncome"
        label="Annual Household Income"
        placeholder="50000"
        showDollarSign
        helperText="Enter total yearly income before taxes"
        tooltip="Total income earned by all members of your household in the last tax year"
      />
      
      <InputField
        form={form}
        name="studentIncome"
        label="Student's Annual Income"
        placeholder="5000"
        showDollarSign
        helperText="Your yearly income before taxes"
        tooltip="Income earned by the student in the last tax year, including wages and other earnings"
      />
      
      <InputField
        form={form}
        name="studentAssets"
        label="Student's Assets"
        placeholder="1000"
        showDollarSign
        helperText="Include savings and checking accounts"
        tooltip="Current value of student's cash, savings, and checking accounts"
      />
      
      <InputField
        form={form}
        name="parentAssets"
        label="Parent Assets (if dependent)"
        placeholder="10000"
        showDollarSign
        helperText="Include savings, investments, and real estate (not primary home)"
        tooltip="Current value of parents' assets including investments, but excluding primary residence and retirement accounts"
      />
    </>
  );
};