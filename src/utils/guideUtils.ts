
import { toast } from "@/hooks/use-toast";

// Types for guide information
export interface GuideInfo {
  fileName: string;
  displayName: string;
  description: string;
}

// Available guides in the system
export const availableGuides: Record<string, GuideInfo> = {
  studentLoanGuide: {
    fileName: "student-loan-guide.pdf", // This file should be placed in public/guides/
    displayName: "Comprehensive Student Loan Guide",
    description: "A complete guide to understanding and managing student loans."
  },
  fafsaGuide: {
    fileName: "fafsa-application-guide.pdf", // This file should be placed in public/guides/
    displayName: "FAFSA Application Guide",
    description: "Step-by-step instructions for completing your FAFSA application."
  }
};

// Save user information for future use
export const saveUserInfo = (name: string, email: string) => {
  const userInfo = {
    name,
    email,
    submittedAt: new Date().toISOString()
  };
  
  // Save to localStorage
  try {
    // Get existing users or initialize empty array
    const existingUsers = JSON.parse(localStorage.getItem("subscribedUsers") || "[]");
    
    // Check if email already exists
    const emailExists = existingUsers.some((user: any) => user.email === email);
    
    // Only add if email doesn't exist
    if (!emailExists) {
      existingUsers.push(userInfo);
      localStorage.setItem("subscribedUsers", JSON.stringify(existingUsers));
    }
  } catch (error) {
    console.error("Error saving user info:", error);
  }
};

// Handle guide download
export const downloadGuide = (guideKey: keyof typeof availableGuides) => {
  const guide = availableGuides[guideKey];
  
  if (!guide) {
    toast({
      title: "Guide Not Found",
      description: "We couldn't find the requested guide. Please try again later.",
      variant: "destructive"
    });
    return;
  }
  
  // Create path to guide in public folder
  const guidePath = `/guides/${guide.fileName}`;
  
  // Create a link and trigger download
  const link = document.createElement("a");
  link.href = guidePath;
  link.download = guide.fileName;
  link.target = "_blank";
  
  // Add to DOM, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  toast({
    title: "Guide Downloaded",
    description: `Your ${guide.displayName} has been downloaded.`,
  });
};
