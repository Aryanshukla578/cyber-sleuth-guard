
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <CTASection />
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
      {chatOpen && <ChatBot onClose={() => setChatOpen(false)} />}
    </div>
  );
};

export default Index;
