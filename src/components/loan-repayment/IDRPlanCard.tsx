
interface IDRPlanCardProps {
  title: string;
  bestFor: string;
  calculation: string;
  uniqueFeature: string;
  forgiveness: string;
  note?: string;
  example?: string;
}

export const IDRPlanCard = ({ 
  title, 
  bestFor, 
  calculation, 
  uniqueFeature, 
  forgiveness, 
  note, 
  example 
}: IDRPlanCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <span className="font-semibold">Best For:</span>
          <span>{bestFor}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-semibold">Payment Calculation:</span>
          <span>{calculation}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-semibold">Unique Feature:</span>
          <span>{uniqueFeature}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="font-semibold">Forgiveness:</span>
          <span>{forgiveness}</span>
        </div>
        {note && (
          <div className="flex items-start gap-2">
            <span className="font-semibold">Note:</span>
            <span>{note}</span>
          </div>
        )}
        {example && (
          <div className="flex items-start gap-2">
            <span className="font-semibold">Example/Insight:</span>
            <span>{example}</span>
          </div>
        )}
      </div>
    </div>
  );
};
