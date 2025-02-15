import { GuideCard } from "./fafsa-guide/GuideCard";
import { GuideHeader } from "./fafsa-guide/GuideHeader";
import { GraduationCap, School, Award, CheckCircle2, Info } from "lucide-react";

export const LoanForgivenessPrograms = () => {
  const guides = [
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
    },
    {
      title: "Free Eligibility Check Tool",
      description: "Find out instantly if you qualify for student loan forgiveness programs with our interactive tool",
      icon: CheckCircle2,
      color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200",
      textColor: "text-indigo-700",
      path: "/loan-forgiveness-eligibility"
    },
    {
      title: "Latest Loan Forgiveness Updates",
      description: "Stay informed with the newest student loan forgiveness opportunities and program changes",
      icon: Info,
      color: "bg-violet-50 hover:bg-violet-100 border-violet-200",
      textColor: "text-violet-700",
      path: "/latest-loan-forgiveness"
    }
  ];

  return (
    <section id="loan-forgiveness" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <GuideHeader 
          title="Student Loan Forgiveness Programs"
          description="Discover your path to financial freedom. Check your eligibility for federal student loan forgiveness programs and get personalized guidance on your journey to debt relief."
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
