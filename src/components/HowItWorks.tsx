
import React from "react";

const steps = [
  {
    id: 1,
    title: "Input Your URL or API",
    description: "Just provide your website URL, API endpoint, or GitHub repository to get started. No complex setup required.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/></svg>
    )
  },
  {
    id: 2,
    title: "Full Reconnaissance Mode",
    description: "CyberSleuth analyzes headers, endpoints, scripts, forms, and more - just like a professional security audit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    )
  },
  {
    id: 3,
    title: "Discover Vulnerabilities",
    description: "Receive detailed reports highlighting security issues like XSS, SQL injection, and exposed APIs before hackers find them.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
    )
  },
  {
    id: 4,
    title: "AI-Guided Remediation",
    description: "Get specific recommendations and code snippets to fix detected vulnerabilities, with explanations you can understand.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block text-cyan-400">How CyberSleuth Works</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            A simple four-step process to keep your applications safe from security threats.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line connecting the steps */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-600"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative mb-12 md:mb-24">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Step number for mobile */}
                <div className="md:hidden flex items-center mb-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-cyan-500 text-white font-bold text-xl">
                    {step.id}
                  </div>
                  <div className="ml-4 text-2xl font-bold text-white">{step.title}</div>
                </div>
                
                {/* Content container */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  {/* Step title - desktop */}
                  <h3 className="hidden md:block text-2xl font-bold text-white mb-4">{step.title}</h3>
                  
                  {/* Step description */}
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>
                
                {/* Center dot with icon */}
                <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 z-10">
                  {step.icon}
                </div>
                
                {/* Right empty container for proper spacing on desktop */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            Try It Now
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
