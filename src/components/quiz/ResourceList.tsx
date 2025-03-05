
import { Resource } from "./types";
import { ResourceCard } from "./ResourceCard";
import { Button } from "@/components/ui/button";

interface ResourceListProps {
  resources: Resource[];
  hasMoreResources: boolean;
  setExpanded: (expanded: boolean) => void;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetLink: string) => void;
}

export const ResourceList = ({ 
  resources, 
  hasMoreResources, 
  setExpanded, 
  handleLinkClick 
}: ResourceListProps) => {
  return (
    <div className="mt-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.map((resource, index) => (
          <ResourceCard 
            key={index} 
            resource={resource} 
            handleLinkClick={handleLinkClick} 
          />
        ))}
      </div>
      
      {hasMoreResources && (
        <div className="text-center mt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setExpanded(true)}
            className="text-blue-600 border-blue-200"
          >
            Show more recommendations
          </Button>
        </div>
      )}
    </div>
  );
};
