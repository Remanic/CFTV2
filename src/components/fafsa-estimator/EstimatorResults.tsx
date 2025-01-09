import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EstimatorResultsProps {
  estimatedAid: number | null;
}

export const EstimatorResults = ({ estimatedAid }: EstimatorResultsProps) => {
  if (estimatedAid === null) return null;

  return (
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
  );
};