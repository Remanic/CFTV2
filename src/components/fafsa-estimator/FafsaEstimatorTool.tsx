import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calculator } from "lucide-react";
import { calculateEstimatedAid } from "./estimatorUtils";
import { FormFields } from "./FormFields";
import { EstimatorResults } from "./EstimatorResults";
import { FormData, AidBreakdown } from "./types";

const formSchema = z.object({
  householdIncome: z.string().min(1, "Required"),
  householdSize: z.string().min(1, "Required"),
  dependentStatus: z.enum(["dependent", "independent"]),
  studentIncome: z.string().min(1, "Required"),
  studentAssets: z.string().min(1, "Required"),
  parentAssets: z.string().min(1, "Required"),
  stateOfResidence: z.string().min(1, "Required"),
  collegeType: z.enum(["public", "private", "community"]),
});

export const FafsaEstimatorTool = () => {
  const { toast } = useToast();
  const [estimatedAid, setEstimatedAid] = useState<AidBreakdown | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      householdIncome: "",
      householdSize: "",
      dependentStatus: "dependent",
      studentIncome: "",
      studentAssets: "",
      parentAssets: "",
      stateOfResidence: "",
      collegeType: "public",
    },
  });

  const onSubmit = (values: FormData) => {
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
              <FormFields form={form} />
              <Button type="submit" className="w-full">
                Calculate Estimate
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <EstimatorResults estimatedAid={estimatedAid} />
    </div>
  );
};