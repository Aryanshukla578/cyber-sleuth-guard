
import React from "react";

const testimonials = [
  {
    content: "CyberSleuth AI caught a critical XSS vulnerability in our checkout flow that three other scanners missed. It probably saved us from a major breach.",
    author: "Sarah Johnson",
    position: "CTO at TechStart",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    content: "As a solo developer, I can't afford expensive security consultants. CyberSleuth gives me enterprise-level security protection at a fraction of the cost.",
    author: "Michael Chen",
    position: "Indie Developer",
    image: "https://i.pravatar.cc/100?img=3"
  },
  {
    content: "The AI-guided remediation is what sets this apart. It doesn't just tell me what's wrong - it shows me exactly how to fix it. Brilliant tool!",
    author: "Emma Rodriguez",
    position: "Security Lead at DataFlow",
    image: "https://i.pravatar.cc/100?img=5"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block text-cyan-400">What People Are Saying</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Don't just take our word for it - here's what our users have to say about CyberSleuth AI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-xl border border-slate-700 shadow-lg relative"
            >
              {/* Quote icon */}
              <svg 
                className="absolute top-6 left-6 w-10 h-10 text-slate-700 opacity-20"
                fill="currentColor" 
                viewBox="0 0 32 32" 
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <p className="text-gray-300 mb-6 relative z-10">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img 
                  className="h-10 w-10 rounded-full" 
                  src={testimonial.image} 
                  alt={testimonial.author}
                />
                <div className="ml-3">
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-cyan-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-slate-900/80 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
          <div className="md:flex md:items-center">
            <div className="md:flex-1">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="h-5 w-5 text-yellow-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <p className="ml-2 text-white">4.9/5 from 230+ reviews</p>
              </div>
              
              <blockquote className="mt-4">
                <p className="text-xl font-medium text-white">
                  "CyberSleuth AI has become an essential part of our development workflow. It's like having a security expert on the team, but at a fraction of the cost."
                </p>
              </blockquote>
              
              <p className="mt-4 text-gray-300">
                John Smith, Lead Developer at Acme Corp
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 md:ml-8 flex flex-shrink-0 justify-center">
              <a 
                href="#pricing" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600"
              >
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
