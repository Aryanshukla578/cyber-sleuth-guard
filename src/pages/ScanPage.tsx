
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Shield, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SleuthBot from "@/components/SleuthBot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const ScanPage = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  
  const handleScan = () => {
    setScanning(true);
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {!scanning ? (
          <section className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Website Vulnerability Scanner
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Detect security issues in real-time with our AI-powered scanning technology
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card className="bg-slate-800 border-slate-700 shadow-lg shadow-cyan-900/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <ShieldAlert className="mr-2 text-cyan-500" />
                    URL Scanner
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Enter a website URL to begin scanning for security vulnerabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      className="flex-grow bg-slate-900 border-slate-700 text-white" 
                      placeholder="Enter website URL (e.g., example.com)"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                    />
                    <Button 
                      onClick={handleScan}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white gap-2 whitespace-nowrap"
                    >
                      <Search size={18} />
                      Scan Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Shield className="h-10 w-10 text-cyan-500" />}
                title="Intelligent Detection"
                description="Our AI analyzes web applications using advanced heuristics to find vulnerabilities other scanners miss."
              />
              <FeatureCard 
                icon={<ShieldAlert className="h-10 w-10 text-cyan-500" />}
                title="Real-Time Analysis"
                description="Get immediate feedback as our scanner works through your site, with progress updates and findings."
              />
              <FeatureCard 
                icon={<Search className="h-10 w-10 text-cyan-500" />}
                title="Comprehensive Reporting"
                description="Download detailed reports with actionable recommendations for fixing discovered vulnerabilities."
              />
            </div>
          </section>
        ) : (
          <section className="container mx-auto px-4 py-6 flex-grow flex flex-col">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Scanning {url}</h1>
              <p className="text-gray-400">
                Our AI agent is analyzing your website for security vulnerabilities
              </p>
            </div>
            
            <div className="flex-grow flex">
              <SleuthBot initialUrl={url} fullScreen={true} />
            </div>
          </section>
        )}
      </main>
      
      {!scanning && <Footer />}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-800 transition-colors">
      <CardContent className="pt-6">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ScanPage;
