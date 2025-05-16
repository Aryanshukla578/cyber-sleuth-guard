
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Zap, Lock, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SleuthBot from "@/components/SleuthBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [url, setUrl] = useState("");
  
  const handleStartScan = () => {
    navigate('/scan');
  };
  
  const handleQuickScan = () => {
    if (url.trim()) {
      navigate('/scan', { state: { url } });
    } else {
      navigate('/scan');
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Cyber Sleuth Guard
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Your personal AI agent for zero-noise website vulnerability scanning
        </p>
        
        <div className="max-w-xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row gap-3 bg-slate-800/50 p-2 rounded-lg border border-slate-700">
            <Input
              className="flex-grow bg-slate-900/80 border-slate-700 text-white"
              placeholder="Enter URL to begin intelligent scanning"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleQuickScan()}
            />
            <Button
              onClick={handleQuickScan}
              className="bg-cyan-600 hover:bg-cyan-700 text-white whitespace-nowrap"
            >
              <Search size={18} className="mr-2" /> 
              Quick Scan
            </Button>
          </div>
        </div>
        
        <Button 
          onClick={handleStartScan}
          className="bg-slate-800 hover:bg-slate-700 text-white border border-cyan-800/50 py-6 px-8 rounded-md text-lg shadow-lg shadow-cyan-900/20"
        >
          <Shield size={20} className="mr-2 text-cyan-400" /> 
          Advanced Scanner
        </Button>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Advanced Security Features
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield />}
              title="Zero False Positives"
              description="Our intelligent AI filters out the noise, ensuring you only receive accurate, actionable vulnerability reports."
            />
            <FeatureCard 
              icon={<Zap />}
              title="Real-time Analysis"
              description="Watch as SleuthBot scans your site in real-time, providing immediate feedback and recommendations."
            />
            <FeatureCard 
              icon={<Lock />}
              title="Comprehensive Testing"
              description="Tests for XSS, SQL injection, CSRF, insecure headers, and dozens of other common vulnerabilities."
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepCard 
              number={1}
              title="Enter Your URL"
              description="Simply provide the website or web application URL you want to scan."
            />
            <StepCard 
              number={2}
              title="AI-Powered Scan"
              description="SleuthBot begins analyzing your site using advanced security heuristics."
            />
            <StepCard 
              number={3}
              title="Real-time Results"
              description="Watch as vulnerabilities are discovered and explained in real-time."
            />
            <StepCard 
              number={4}
              title="Download Report"
              description="Get a comprehensive security report with actionable fix recommendations."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-xl border border-slate-700 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to secure your website?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Start scanning now and discover vulnerabilities before hackers do.
            </p>
            <Button 
              onClick={handleStartScan}
              className="bg-cyan-600 hover:bg-cyan-700 text-white py-6 px-8 rounded-md text-lg"
            >
              <Shield className="mr-2" /> Start Scanning
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Floating chat button */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-4 shadow-lg transition-all z-50"
      >
        {chatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-code"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="m10 8-2 2 2 2"/><path d="m14 8 2 2-2 2"/></svg>
        )}
      </button>
      
      {/* Chatbot component */}
      {chatOpen && <SleuthBot onClose={() => setChatOpen(false)} />}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <Card className="bg-slate-800/30 border border-slate-700 hover:border-cyan-700 transition-all">
      <CardContent className="p-8">
        <div className="bg-cyan-500/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
          <div className="text-cyan-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

const StepCard = ({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-cyan-900/30 border border-cyan-800/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-cyan-400">{number}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Index;
