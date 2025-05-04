
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-clean-blue-100">Spotless</span>
              <span className="text-clean-green-500">Vista</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Professional cleaning services for homes and businesses. Experience spotless perfection with our eco-friendly, professional cleaning services.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-gray-700 p-2 rounded-full hover:bg-clean-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-700 p-2 rounded-full hover:bg-clean-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-700 p-2 rounded-full hover:bg-clean-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-700 p-2 rounded-full hover:bg-clean-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Vacation Rental Cleaning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Post-Construction</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Moving Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">123 Cleaning Street</p>
              <p className="mb-4">Spotless City, SC 12345</p>
              <p className="mb-2">Phone: 1-800-SPOTLESS</p>
              <p>Email: info@spotlessvista.com</p>
            </address>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} SpotlessVista. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
