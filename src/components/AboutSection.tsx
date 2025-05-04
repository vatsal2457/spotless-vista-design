
import React from 'react';
import { CheckCircle, Shield, Leaf } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-clean-gray-50">
      <div className="container">
        <h2 className="section-title">About <span className="text-clean-blue-500">SpotlessVista</span></h2>
        <p className="section-subtitle">
          We deliver pristine cleanliness through eco-friendly practices and unmatched attention to detail
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg flex flex-col items-center text-center animate-fade-in">
            <div className="bg-clean-blue-50 p-4 rounded-full mb-6">
              <Shield className="h-10 w-10 text-clean-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trusted & Reliable</h3>
            <p className="text-gray-600">
              All our cleaning professionals undergo thorough background checks and extensive training to ensure your home is in safe, capable hands.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-clean-blue-50 p-4 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-clean-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Quality Guaranteed</h3>
            <p className="text-gray-600">
              We stand behind our service with a 100% satisfaction guarantee. If you're not happy with any area we've cleaned, we'll return to reclean it for free.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-clean-blue-50 p-4 rounded-full mb-6">
              <Leaf className="h-10 w-10 text-clean-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Eco-Friendly Cleaning</h3>
            <p className="text-gray-600">
              We use environmentally responsible cleaning products and methods that are safe for your family, pets, and the planet.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                  alt="Professional cleaning results" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-clean-blue-100 rounded-lg z-0"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-6">We're More Than Just a <span className="text-clean-blue-500">Cleaning Service</span></h3>
            <p className="text-lg text-gray-600 mb-6">
              At SpotlessVista, we believe that a clean home is the foundation for a happy, healthy life. Our mission is to create immaculate spaces that bring joy and peace of mind to our clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-clean-green-500 p-1 rounded-full mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Professional, background-checked cleaners</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clean-green-500 p-1 rounded-full mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Customizable cleaning plans to fit your needs</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clean-green-500 p-1 rounded-full mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">Eco-friendly, non-toxic cleaning products</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-clean-green-500 p-1 rounded-full mt-1">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600">100% satisfaction guarantee on all services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
