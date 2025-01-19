import { GuideCard } from "./fafsa-guide/GuideCard";
import { GuideHeader } from "./fafsa-guide/GuideHeader";
import { BookOpen, ClipboardCheck, Calculator, Calendar, Search, Award, GraduationCap, School } from "lucide-react";

export const FafsaGuide = () => {
  const guides = [
    {
      title: "Find Your State's FAFSA Deadline",
      description: "Check FAFSA deadlines for your state",
      icon: Search,
      color: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
      textColor: "text-yellow-700",
      path: "/state-deadline-finder"
    },
    {
      title: "Comprehensive Guide to Filling Out the FAFSA Form",
      description: "Step-by-step instructions to complete your FAFSA application successfully",
      icon: BookOpen,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      textColor: "text-blue-700",
      path: "/fafsa-application-guide"
    },
    {
      title: "Review & Understand Your FAFSA Submission",
      description: "Learn how to review and understand your FAFSA submission details",
      icon: ClipboardCheck,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      textColor: "text-green-700",
      path: "/fafsa-review-guide"
    },
    {
      title: "FAFSA Deadlines for 2024",
      description: "Important deadlines and submission timeline for the 2024-2025 academic year",
      icon: Calendar,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      textColor: "text-purple-700",
      path: "/fafsa-deadline-2024-2025"
    },
    {
      title: "FAFSA Deadlines for 2025",
      description: "Key dates and deadlines for the 2025-2026 academic year FAFSA submission",
      icon: Calendar,
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200",
      textColor: "text-orange-700",
      path: "/fafsa-deadline-2025-2026"
    },
    {
      title: "FAFSA Aid Estimator",
      description: "Calculate your estimated financial aid before submitting your application",
      icon: Calculator,
      color: "bg-pink-50 hover:bg-pink-100 border-pink-200",
      textColor: "text-pink-700",
      path: "/fafsa-aid-estimator"
    },
    {
      title: "Public Service Loan Forgiveness (PSLF)",
      description: "Complete guide to PSLF eligibility, requirements, and application process",
      icon: GraduationCap,
      color: "bg-rose-50 hover:bg-rose-100 border-rose-200",
      textColor: "text-rose-700",
      path: "/public-service-loan-forgiveness"
    },
    {
      title: "Teacher Loan Forgiveness Program",
      description: "Comprehensive guide for teachers seeking loan forgiveness",
      icon: School,
      color: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200",
      textColor: "text-cyan-700",
      path: "/teacher-loan-forgiveness"
    },
    {
      title: "Comprehensive Guide: Public Service Loan Forgiveness (PSLF)",
      description: "In-depth analysis of PSLF program benefits and requirements",
      icon: Award,
      color: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
      textColor: "text-emerald-700",
      path: "/pslf-comprehensive-guide"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <GuideHeader 
          title="Master Your FAFSA Application & Loan Forgiveness"
          description="Join millions of students who use FAFSA and explore loan forgiveness opportunities. Let us guide you through every step of the process."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {guides.map((guide, index) => (
            <GuideCard key={index} {...guide} />
          ))}
        </div>
      </div>
    </section>
  );
};