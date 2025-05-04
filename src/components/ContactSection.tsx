
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-clean-blue-500">Touch</span></h2>
        <p className="section-subtitle">
          Have questions or ready to book? Reach out to us today!
        </p>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-clean-gray-50 rounded-lg p-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-6">Book a Cleaning</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-blue-500"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  id="service"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="vacation">Vacation Rental Cleaning</option>
                  <option value="post-construction">Post-Construction</option>
                  <option value="moving">Moving Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-clean-blue-500"
                  placeholder="Tell us about your space, specific requests, etc."
                ></textarea>
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Request a Quote
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-clean-blue-500 text-white rounded-lg p-8 mb-8 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p>123 Cleaning Street<br />Spotless City, SC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p>1-800-SPOTLESS<br />Mon-Fri: 8am - 7pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p>info@spotlessvista.com<br />quotes@spotlessvista.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-clean-gray-50 rounded-lg p-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-bold mb-4">Service Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
