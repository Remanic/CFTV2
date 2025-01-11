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

  const educationLevelOptions = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
    { value: "professional", label: "Professional" }
  ];

  const enrollmentStatusOptions = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" }
  ];

  const academicProgramOptions = [
    { value: "regular", label: "Regular Academic Program" },
    { value: "medical", label: "Medical School" },
    { value: "law", label: "Law School" },
    { value: "other", label: "Other Professional Program" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <SelectField
          form={form}
          name="educationLevel"
          label="Education Level"
          placeholder="Select education level"
          options={educationLevelOptions}
          helperText="Your current or intended level of study"
          tooltip="Different aid amounts are available based on your education level"
        />

        <SelectField
          form={form}
          name="enrollmentStatus"
          label="Enrollment Status"
          placeholder="Select enrollment status"
          options={enrollmentStatusOptions}
          helperText="Your planned enrollment status"
          tooltip="Full-time typically means 12+ credit hours per semester for undergraduates"
        />

        <SelectField
          form={form}
          name="academicProgram"
          label="Academic Program"
          placeholder="Select program type"
          options={academicProgramOptions}
          helperText="Select your specific program type"
          tooltip="Different programs may have different aid limits and eligibility requirements"
        />
      </div>
    </div>
  );
};