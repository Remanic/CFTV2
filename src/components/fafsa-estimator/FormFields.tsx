import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormData } from "./types";

interface FormFieldsProps {
  form: UseFormReturn<FormData>;
}

export const FormFields = ({ form }: FormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="householdIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Annual Household Income</FormLabel>
            <FormControl>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="50000" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="householdSize"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Household Size</FormLabel>
            <FormControl>
              <Input type="number" placeholder="4" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="dependentStatus"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dependency Status</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="dependent">Dependent</SelectItem>
                <SelectItem value="independent">Independent</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="studentIncome"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Student Income</FormLabel>
            <FormControl>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="5000" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="studentAssets"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Student Assets</FormLabel>
            <FormControl>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="1000" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="parentAssets"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Parent Assets (if dependent)</FormLabel>
            <FormControl>
              <div className="relative">
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="10000" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="stateOfResidence"
        render={({ field }) => (
          <FormItem>
            <FormLabel>State of Residence</FormLabel>
            <FormControl>
              <Input placeholder="CA" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="collegeType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>College Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select college type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="public">Public 4-Year</SelectItem>
                <SelectItem value="private">Private 4-Year</SelectItem>
                <SelectItem value="community">Community College</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};