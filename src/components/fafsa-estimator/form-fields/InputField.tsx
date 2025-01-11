import { FormField, FormItem, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DollarSign } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../types";
import { FormFieldLabel } from "./FormFieldLabel";

interface InputFieldProps {
  form: UseFormReturn<FormData>;
  name: keyof FormData;
  label: string;
  placeholder: string;
  showDollarSign?: boolean;
  helperText?: string;
  tooltip?: string;
}

export const InputField = ({ 
  form, 
  name, 
  label, 
  placeholder, 
  showDollarSign = false,
  helperText,
  tooltip
}: InputFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormFieldLabel label={label} tooltip={tooltip} />
          <FormControl>
            <div className="relative">
              {showDollarSign && (
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              )}
              <Input 
                className={showDollarSign ? "pl-10" : ""} 
                placeholder={placeholder} 
                {...field} 
              />
            </div>
          </FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};