import { FormField, FormItem, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../types";
import { FormFieldLabel } from "./FormFieldLabel";

interface SelectFieldProps {
  form: UseFormReturn<FormData>;
  name: keyof FormData;
  label: string;
  placeholder: string;
  options: { value: string; label: string; }[];
  helperText?: string;
  tooltip?: string;
}

export const SelectField = ({ 
  form, 
  name, 
  label, 
  placeholder, 
  options,
  helperText,
  tooltip
}: SelectFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormFieldLabel label={label} tooltip={tooltip} />
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};