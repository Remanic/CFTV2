import { FormLabel } from "@/components/ui/form";
import { FormFieldTooltip } from "./FormFieldTooltip";

interface FormFieldLabelProps {
  label: string;
  tooltip?: string;
}

export const FormFieldLabel = ({ label, tooltip }: FormFieldLabelProps) => {
  return (
    <div className="flex items-center gap-2">
      <FormLabel>{label}</FormLabel>
      {tooltip && <FormFieldTooltip tooltip={tooltip} />}
    </div>
  );
};