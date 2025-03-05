
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";
import { downloadGuide } from "@/utils/guideUtils";

const DownloadGuide = () => {
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(3);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const name = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const guide = searchParams.get("guide") || "studentLoanGuide";
  
  // Start countdown and auto-download
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      handleDownload();
    }
  }, [countdown]);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Small delay to show the downloading animation
    setTimeout(() => {
      downloadGuide(guide as any);
      setIsDownloading(false);
    }, 1500);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Student Loan Guide Is Ready!
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Thanks for requesting our comprehensive guide, {name}. Your download will begin automatically in:
              </p>
              
              {countdown > 0 ? (
                <div className="flex justify-center items-center mt-8 mb-6">
                  <div className="text-5xl sm:text-6xl font-bold text-blue-600 animate-pulse">
                    {countdown}
                  </div>
                </div>
              ) : (
                <div className="mt-8 mb-6 flex justify-center items-center">
                  {isDownloading ? (
                    <div className="flex flex-col items-center">
                      <LoaderCircle className="h-12 w-12 text-blue-600 animate-spin" />
                      <p className="mt-4 text-blue-600 font-medium">Downloading your guide...</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <Download className="h-6 w-6" />
                      </div>
                      <p className="mt-4 text-green-600 font-medium">Download complete!</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Didn't get the download?</h2>
              
              <Button 
                onClick={handleDownload}
                className="w-full sm:w-auto rounded-lg py-3 px-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
              >
                Download Again
                <Download className="h-5 w-5" />
              </Button>
              
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 className="font-medium text-blue-900 mb-2">What's next?</h3>
                <p className="text-blue-800 text-sm">
                  We've also sent a copy to your email at <span className="font-medium">{email}</span>. 
                  Check your inbox (and spam folder) if you need to access it later.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DownloadGuide;
