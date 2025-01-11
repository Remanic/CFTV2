import { UseFormReturn } from "react-hook-form";
import { FormData } from "./types";
import { FinancialInfoFields } from "./form-fields/groups/FinancialInfoFields";
import { HouseholdFields } from "./form-fields/groups/HouseholdFields";
import { AcademicFields } from "./form-fields/groups/AcademicFields";

interface FormFieldsProps {
  form: UseFormReturn<FormData>;
}

export const FormFields = ({ form }: FormFieldsProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinancialInfoFields form={form} />
        <HouseholdFields form={form} />
        <AcademicFields form={form} />
      </div>
    </div>
  );
};