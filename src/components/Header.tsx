
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-clean-blue-500">Spotless</span>
            <span className="text-clean-green-500">Vista</span>
          </h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="hover:text-clean-blue-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-clean-blue-500 transition-colors">About</a>
          <a href="#services" className="hover:text-clean-blue-500 transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-clean-blue-500 transition-colors">Testimonials</a>
          <a href="#how-it-works" className="hover:text-clean-blue-500 transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-clean-blue-500 transition-colors">Contact</a>
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="h-5 w-5 text-clean-blue-500 mr-2" />
            <span className="font-semibold">1-800-SPOTLESS</span>
          </div>
          <Button className="btn-primary">Book Now</Button>
        </div>
        
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20">
          <div className="container flex flex-col space-y-4 py-4">
            <a 
              href="#home" 
              className="text-xl py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-xl py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-xl py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-xl py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#how-it-works" 
              className="text-xl py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className="text-xl py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="pt-4 flex flex-col space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-clean-blue-500 mr-2" />
                <span className="font-semibold">1-800-SPOTLESS</span>
              </div>
              <Button className="btn-primary w-full">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
