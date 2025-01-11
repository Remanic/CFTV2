import { UseFormReturn } from "react-hook-form";
import { FormData } from "../../types";
import { SelectField } from "../SelectField";

interface AcademicFieldsProps {
  form: UseFormReturn<FormData>;
}

export const AcademicFields = ({ form }: AcademicFieldsProps) => {
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
    <>
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
    </>
  );
};