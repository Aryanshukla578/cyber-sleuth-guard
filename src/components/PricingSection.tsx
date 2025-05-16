
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "For personal projects and small websites",
      price: annual ? 29 : 39,
      features: [
        "Unlimited scans for 1 project",
        "XSS & injection detection",
        "Weekly automated scans",
        "Basic vulnerability reporting",
        "Email notifications",
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      description: "For growing teams with multiple projects",
      price: annual ? 79 : 99,
      features: [
        "Everything in Starter",
        "Up to 5 projects",
        "API security monitoring",
        "CI/CD integration",
        "AI-guided remediation",
        "Slack & Discord notifications",
        "30-day scan history"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For organizations with advanced security needs",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Unlimited projects",
        "Custom security rules",
        "SSO authentication",
        "Advanced API protection",
        "Dedicated security expert",
        "Compliance reporting (SOC2, GDPR)",
        "1-year scan history"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-slate-800 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block text-cyan-400">Simple, Transparent Pricing</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Choose the plan that fits your security needs and budget.
          </p>
          
          {/* Toggle switch */}
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 text-sm ${!annual ? 'text-white font-medium' : 'text-gray-400'}`}>Monthly</span>
            <button
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${annual ? 'bg-cyan-500' : 'bg-slate-700'}`}
              onClick={() => setAnnual(!annual)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${annual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`ml-3 text-sm ${annual ? 'text-white font-medium' : 'text-gray-400'}`}>
              Annual <span className="text-cyan-400 font-medium">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${
                plan.popular 
                  ? 'border-2 border-cyan-400 bg-slate-800/70' 
                  : 'border border-slate-700 bg-slate-800/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-semibold text-white py-1 px-4 bg-cyan-500 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                      <span className="ml-1 text-xl text-gray-400">/month</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-extrabold text-white">{plan.price}</div>
                  )}
                  {annual && typeof plan.price === 'number' && (
                    <p className="text-sm text-cyan-400 mt-1">Billed annually (${plan.price * 12}/year)</p>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full py-6 ${
                    plan.popular 
                      ? 'bg-cyan-500 hover:bg-cyan-600' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Need a custom security solution?</h3>
              <p className="mt-2 text-gray-300">
                Our team can build a custom security plan tailored to your specific requirements.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="bg-transparent border-cyan-500 text-cyan-400 hover:bg-slate-700">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-gray-400 text-sm">
          All plans include a 14-day free trial. No credit card required.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
