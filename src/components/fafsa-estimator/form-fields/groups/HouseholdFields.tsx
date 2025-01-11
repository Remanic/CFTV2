import { UseFormReturn } from "react-hook-form";
import { FormData } from "../../types";
import { InputField } from "../InputField";
import { SelectField } from "../SelectField";

interface HouseholdFieldsProps {
  form: UseFormReturn<FormData>;
}

export const HouseholdFields = ({ form }: HouseholdFieldsProps) => {
  const dependencyOptions = [
    { value: "dependent", label: "Dependent" },
    { value: "independent", label: "Independent" }
  ];

  return (
    <>
      <InputField
        form={form}
        name="householdSize"
        label="Household Size"
        placeholder="4"
        helperText="Include yourself, parents (if dependent), and other dependents"
        tooltip="Number of people in your household who are supported by the reported income"
      />
      
      <SelectField
        form={form}
        name="dependentStatus"
        label="Dependency Status"
        placeholder="Select status"
        options={dependencyOptions}
        helperText="Most undergraduate students under 24 are dependent"
        tooltip="Dependent students must report parent information. Independent students typically are 24 or older, married, or have dependents"
      />
    </>
  );
};