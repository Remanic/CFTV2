import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calculator, DollarSign, GraduationCap } from "lucide-react";
import { calculateEstimatedAid } from "./estimatorUtils";

const formSchema = z.object({
  householdIncome: z.string().min(1, "Required"),
  householdSize: z.string().min(1, "Required"),
  dependentStatus: z.enum(["dependent", "independent"]),
  studentIncome: z.string().min(1, "Required"),
  studentAssets: z.string().min(1, "Required"),
  parentAssets: z.string().min(1, "Required"),  // Made required
  stateOfResidence: z.string().min(1, "Required"),
  collegeType: z.enum(["public", "private", "community"]),
});

export const FafsaEstimatorTool = () => {
  const { toast } = useToast();
  const [estimatedAid, setEstimatedAid] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      householdIncome: "",
      householdSize: "",
      dependentStatus: "dependent",
      studentIncome: "",
      studentAssets: "",
      parentAssets: "",  // Empty string as default value
      stateOfResidence: "",
      collegeType: "public",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const estimate = calculateEstimatedAid(values);
    setEstimatedAid(estimate);
    toast({
      title: "Estimate Calculated",
      description: "Your estimated financial aid has been calculated based on the provided information.",
    });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-purple-600" />
            FAFSA Aid Estimator
          </CardTitle>
          <CardDescription>
            Enter your information to get an estimate of your potential financial aid.
            This is only an estimate and actual aid may vary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

              <Button type="submit" className="w-full">
                Calculate Estimate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {estimatedAid !== null && (
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-purple-600" />
              Estimated Financial Aid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                ${estimatedAid.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This is an estimate based on the information provided. Actual aid amounts may vary.
                Contact your school's financial aid office for more accurate information.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};