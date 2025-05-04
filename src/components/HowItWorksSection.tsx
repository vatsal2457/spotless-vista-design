
import React from 'react';
import { CalendarCheck, ClipboardCheck, Home } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="section-title">How It <span className="text-clean-blue-500">Works</span></h2>
        <p className="section-subtitle">
          Getting started with SpotlessVista is quick and easy
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="step-card animate-fade-in">
            <div className="relative mb-8">
              <div className="bg-clean-blue-100 w-20 h-20 rounded-full flex items-center justify-center">
                <CalendarCheck className="h-10 w-10 text-clean-blue-500" />
              </div>
              <div className="step-number">1</div>
            </div>
            <h3 className="text-xl font-bold mb-4">Book Your Service</h3>
            <p className="text-gray-600">
              Select your service type, provide details about your space, and choose a convenient date and time.
            </p>
          </div>
          
          <div className="step-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative mb-8">
              <div className="bg-clean-blue-100 w-20 h-20 rounded-full flex items-center justify-center">
                <ClipboardCheck className="h-10 w-10 text-clean-blue-500" />
              </div>
              <div className="step-number">2</div>
            </div>
            <h3 className="text-xl font-bold mb-4">We Clean Your Space</h3>
            <p className="text-gray-600">
              Our professional cleaners arrive on time and transform your space using our proven cleaning methods.
            </p>
          </div>
          
          <div className="step-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative mb-8">
              <div className="bg-clean-blue-100 w-20 h-20 rounded-full flex items-center justify-center">
                <Home className="h-10 w-10 text-clean-blue-500" />
              </div>
              <div className="step-number">3</div>
            </div>
            <h3 className="text-xl font-bold mb-4">Enjoy Your Clean Space</h3>
            <p className="text-gray-600">
              Return to a spotless, fresh environment. If you're not 100% satisfied, we'll come back and reclean for free.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-clean-blue-500 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the SpotlessVista Difference?</h3>
              <p className="text-blue-50 text-lg mb-8">
                Join hundreds of satisfied customers who have discovered the joy of coming home to a perfectly clean space.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="h-4 w-4 text-clean-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white">Simple online booking system</p>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="h-4 w-4 text-clean-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white">Transparent pricing, no hidden fees</p>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="h-4 w-4 text-clean-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-white">Recurring service options available</p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Clean, organized workspace" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-clean-blue-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
