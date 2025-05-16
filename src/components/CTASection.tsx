
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
      
      {/* Animated dots */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:max-w-2xl md:flex-shrink-0">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to secure your application?
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Start your 14-day free trial today. No credit card required.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="bg-transparent border-slate-500 text-white hover:bg-slate-700 px-8 py-6 text-lg">
                    Schedule Demo
                  </Button>
                </div>
                
                {/* Security badges */}
                <div className="mt-8 flex items-center gap-6 flex-wrap">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
                    <span className="text-gray-400 text-sm">SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <span className="text-gray-400 text-sm">GDPR Ready</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-2"><path d="M9 12H4.5a2.5 2.5 0 0 1 0-5H9"/><path d="M16 19h4.5a2.5 2.5 0 0 0 0-5H16"/><path d="M12 5v14"/><path d="M7 7h0"/><path d="M17 17h0"/></svg>
                    <span className="text-gray-400 text-sm">256-bit Encryption</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 md:mt-0">
                <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700 shadow-lg max-w-md">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mr-2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span className="font-medium text-white">Live Protection Status</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">XSS Protection</span>
                        <span className="text-sm text-gray-400">100%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">SQL Injection</span>
                        <span className="text-sm text-gray-400">98%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">API Security</span>
                        <span className="text-sm text-gray-400">94%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{ width: "94%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center text-sm text-gray-300">
                    CyberSleuth protected 5,328 applications last month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
