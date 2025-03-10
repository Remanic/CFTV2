import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections?: Section[];
}

const defaultSections = [
  { id: "what-is-fafsa", title: "1. What Is the FAFSA?" },
  { id: "how-to-fill", title: "2. How to Fill Out the FAFSA" },
  { id: "after-submit", title: "3. After You Submit" },
  { id: "tips", title: "4. Helpful Tips" },
  { id: "faqs", title: "5. FAQs" },
];

export const TableOfContents = ({ sections = defaultSections }: TableOfContentsProps) => {
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
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-wrap gap-2 justify-start items-center">
      {sections.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={cn(
            "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors",
            "hover:bg-gray-100",
            activeSection === id
              ? "bg-blue-50 text-blue-600 font-medium"
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
    </nav>
  );
};