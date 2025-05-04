
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-clean-blue-50 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-clean-blue-100 rounded-l-full opacity-20 z-0"></div>
      <div className="absolute left-0 bottom-1/4 w-1/4 h-1/3 bg-clean-green-500 rounded-r-full opacity-10 z-0"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-clean-blue-500">Professional Cleaning</span> for Your 
              <span className="text-clean-green-500"> Perfect Space</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-lg">
              Experience spotless perfection with our eco-friendly, professional cleaning services for homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg group">
                Book a Cleaning
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg">
                Get Free Quote
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-clean-blue-500">500+</span>
                <span className="text-sm text-gray-600">Happy Clients</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-clean-blue-500">98%</span>
                <span className="text-sm text-gray-600">Satisfaction Rate</span>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-clean-blue-500">10+</span>
                <span className="text-sm text-gray-600">Years Experience</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="w-full h-[500px] bg-clean-gray-50 rounded-lg shadow-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Clean, organized home office space" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <div className="bg-clean-green-500 p-2 rounded-full">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Trustworthy Professionals</h3>
                    <p className="text-sm text-gray-600">Background-checked and trained cleaning experts</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-clean-blue-500 rounded-lg opacity-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-clean-green-500 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
