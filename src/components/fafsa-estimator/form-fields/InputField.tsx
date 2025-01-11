import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DollarSign, Info } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "../types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
          <div className="flex items-center gap-2">
            <FormLabel>{label}</FormLabel>
            {tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
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