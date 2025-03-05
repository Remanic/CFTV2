
import { ChevronRight } from "lucide-react";
import { Resource } from "./types";

interface ResourceCardProps {
  resource: Resource;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetLink: string) => void;
}

export const ResourceCard = ({ resource, handleLinkClick }: ResourceCardProps) => {
  return (
    <a 
      href={resource.link} 
      onClick={(e) => handleLinkClick(e, resource.link)}
      className="block"
    >
      <div className={`p-4 rounded-lg border ${resource.color} hover:shadow-md transition-shadow flex flex-col h-full`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-white">{resource.icon}</div>
          <h4 className="font-semibold">{resource.title}</h4>
        </div>
        <p className="text-sm text-gray-600 mt-1 mb-3 flex-grow">{resource.description}</p>
        <div className="flex items-center justify-end mt-auto text-sm font-medium">
          View resource <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </a>
  );
};
