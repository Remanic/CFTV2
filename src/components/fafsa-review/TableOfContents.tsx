import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "check-status", title: "1. Check FAFSA Status" },
  { id: "review-correct", title: "2. Review and Correct" },
  { id: "understand-sar", title: "3. Understand SAR" },
  { id: "faqs", title: "4. FAQs" },
];

export const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-50 rounded-lg p-4">
      <div className="flex flex-wrap gap-2 justify-start items-center">
        {sections.map(({ id, title }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={cn(
              "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors",
              "hover:bg-gray-100",
              activeSection === id
                ? "bg-purple-50 text-purple-600 font-medium"
                : "text-gray-600"
            )}
          >
            <ChevronRight className={cn(
              "h-3 w-3 transition-transform",
              activeSection === id ? "transform rotate-90" : ""
            )} />
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
};