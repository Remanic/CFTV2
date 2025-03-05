
import { toast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Types for guide information
export interface GuideInfo {
  fileName: string;
  displayName: string;
  description: string;
}

// Available guides in the system
export const availableGuides: Record<string, GuideInfo> = {
  studentLoanGuide: {
    fileName: "Navigating_Student_Loans_A_Complete_Guide_CashFlowTime.pdf",
    displayName: "Comprehensive Student Loan Guide",
    description: "A complete guide to understanding and managing student loans."
  }
  // Add more guides as needed
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
  
  try {
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
  } catch (error) {
    console.error("Error downloading guide:", error);
    toast({
      title: "Download Failed",
      description: "We couldn't download your guide. Please try again later.",
      variant: "destructive"
    });
  }
};

// Send guide to user's email
export const sendGuideToEmail = async (
  name: string, 
  email: string, 
  guideKey: keyof typeof availableGuides
): Promise<boolean> => {
  const guide = availableGuides[guideKey];
  
  if (!guide) {
    toast({
      title: "Guide Not Found",
      description: "We couldn't find the requested guide to send. Please try again later.",
      variant: "destructive"
    });
    return false;
  }
  
  const templateParams = {
    to_name: name,
    to_email: email,
    guide_name: guide.displayName,
    guide_link: `${window.location.origin}/guides/${guide.fileName}`,
    from_name: "Student Loan Guide Team"
  };

  try {
    // Replace these IDs with your actual EmailJS service, template and user IDs
    // You'll need to sign up at https://www.emailjs.com/ and create a template
    const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID"; // Replace with your service ID
    const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID"; // Replace with your template ID
    const USER_ID = "YOUR_EMAILJS_USER_ID"; // Replace with your user ID

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    
    toast({
      title: "Guide Sent!",
      description: `Your ${guide.displayName} has been sent to ${email}.`,
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    
    toast({
      title: "Email Sending Failed",
      description: "We couldn't send the guide to your email. Please try downloading it directly.",
      variant: "destructive"
    });
    
    return false;
  }
};
