import { UseFormReturn } from "react-hook-form";
import { FormData } from "./types";
import { InputField } from "./form-fields/InputField";
import { SelectField } from "./form-fields/SelectField";

interface FormFieldsProps {
  form: UseFormReturn<FormData>;
}

export const FormFields = ({ form }: FormFieldsProps) => {
  const dependencyOptions = [
    { value: "dependent", label: "Dependent" },
    { value: "independent", label: "Independent" }
  ];

  const collegeTypeOptions = [
    { value: "public", label: "Public 4-Year" },
    { value: "private", label: "Private 4-Year" },
    { value: "community", label: "Community College" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        form={form}
        name="householdIncome"
        label="Annual Household Income"
        placeholder="50000"
        showDollarSign
      />
      
      <InputField
        form={form}
        name="householdSize"
        label="Household Size"
        placeholder="4"
      />
      
      <SelectField
        form={form}
        name="dependentStatus"
        label="Dependency Status"
        placeholder="Select status"
        options={dependencyOptions}
      />
      
      <InputField
        form={form}
        name="studentIncome"
        label="Student Income"
        placeholder="5000"
        showDollarSign
      />
      
      <InputField
        form={form}
        name="studentAssets"
        label="Student Assets"
        placeholder="1000"
        showDollarSign
      />
      
      <InputField
        form={form}
        name="parentAssets"
        label="Parent Assets (if dependent)"
        placeholder="10000"
        showDollarSign
      />
      
      <InputField
        form={form}
        name="stateOfResidence"
        label="State of Residence"
        placeholder="CA"
      />
      
      <SelectField
        form={form}
        name="collegeType"
        label="College Type"
        placeholder="Select college type"
        options={collegeTypeOptions}
      />
    </div>
  );
};