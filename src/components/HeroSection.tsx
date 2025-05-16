
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-20"></div>
      
      {/* Glowing orb effect */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block text-white">Your Personal</span>
              <span className="block text-cyan-400">Cybersecurity Copilot</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0">
              CyberSleuth AI detects, reports, and helps fix vulnerabilities in your applications before hackers even find them. Built for developers, by developers who hate 3AM breach calls.
            </p>
            
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Button className="px-8 py-6 text-lg font-medium bg-cyan-500 hover:bg-cyan-600">
                  Try The Demo
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" className="px-8 py-6 text-lg font-medium text-cyan-400 bg-transparent border-cyan-500 hover:bg-cyan-950">
                  View Documentation
                </Button>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="inline-flex items-center">
                <div className="flex -space-x-1 overflow-hidden">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-6 w-6 rounded-full ring-2 ring-slate-900"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt=""
                    />
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-400">Trusted by 5,000+ developers</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:ml-8 bg-slate-800/50 backdrop-blur-sm p-5 sm:p-8 rounded-xl border border-slate-700 shadow-lg max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400">CyberSleuth Scan</div>
            </div>
            
            <div className="font-mono text-sm text-green-400 bg-slate-900 rounded p-4 h-64 overflow-auto">
              <p>$ cybersleuth scan --url https://example.com</p>
              <p className="text-gray-500">Initializing scan...</p>
              <p className="text-gray-500">Running reconnaissance...</p>
              <p className="text-yellow-500 mt-2">[WARNING] Detected weak Content-Security-Policy</p>
              <p className="text-red-500">[CRITICAL] XSS vulnerability in contact form</p>
              <p className="text-yellow-500">[WARNING] API key exposed in JavaScript source</p>
              <p className="text-gray-400 mt-2">Generating report...</p>
              <p className="text-white mt-2">Recommended fixes:</p>
              <p className="text-cyan-400">1. Implement proper input validation</p>
              <p className="text-cyan-400">2. Update CSP headers</p>
              <p className="text-cyan-400">3. Move API keys to environment variables</p>
              <p className="text-gray-400 mt-2">Run 'cybersleuth fix --auto' for guided remediation</p>
            </div>
            
            <form className="mt-5 sm:flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3 placeholder-gray-500 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
