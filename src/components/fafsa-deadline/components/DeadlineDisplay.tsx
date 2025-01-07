import { Card, CardContent } from "@/components/ui/card";
import { StateDeadline } from "../data/2025/types";

interface DeadlineDisplayProps {
  selectedDeadline: StateDeadline | null;
}

export const DeadlineDisplay = ({ selectedDeadline }: DeadlineDisplayProps) => {
  if (!selectedDeadline) {
    return (
      <div className="bg-blue-50 p-6 rounded-lg">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-700 mb-2">Search Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Type or select your state to see specific deadlines</li>
              <li>Pay attention to priority deadlines if available</li>
              <li>Some states have multiple deadlines for different programs</li>
              <li>Always verify deadlines with your school's financial aid office</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">
        {selectedDeadline.state}
      </h3>
      <div className="space-y-4">
        <div>
          <p className="font-medium text-blue-800">Deadline:</p>
          <p className="text-blue-700 whitespace-pre-line">{selectedDeadline.deadline}</p>
        </div>
        <div>
          <p className="font-medium text-blue-800">Details:</p>
          <p className="text-blue-700 whitespace-pre-line">
            {selectedDeadline.details}
          </p>
        </div>
      </div>
    </div>
  );
};