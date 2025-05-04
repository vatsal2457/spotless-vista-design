
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target && target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(target.hash);
        if (section) {
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-6 right-6 bg-clean-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-clean-blue-600 transition-colors z-40"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Index;
