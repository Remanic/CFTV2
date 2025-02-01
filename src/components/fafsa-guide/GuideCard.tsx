import { LucideIcon } from "lucide-react";

interface GuideCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  highlight?: boolean;
}

export const GuideCard = ({
  title,
  description,
  icon: Icon,
  color,
  textColor,
  highlight
}: GuideCardProps) => {
  return (
    <div
      className={`
        p-6 rounded-lg border transition-all
        ${color}
        ${highlight ? 'scale-105' : ''}
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-2 rounded-lg ${textColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className={`font-semibold ${textColor}`}>{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};