
import React from 'react';
import { Home, Building, Trash, Broom, Car, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const ServiceCard = ({ icon, title, description, delay = "0s" }: ServiceCardProps) => (
  <div 
    className="service-card flex flex-col items-center text-center animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className="bg-clean-blue-50 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-clean-blue-500">Services</span></h2>
        <p className="section-subtitle">
          We offer a range of professional cleaning services tailored to meet your specific needs
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard 
            icon={<Home className="service-icon" />}
            title="Residential Cleaning"
            description="Comprehensive cleaning for homes of all sizes. We ensure every corner of your living space is spotless."
          />
          
          <ServiceCard 
            icon={<Building className="service-icon" />}
            title="Commercial Cleaning"
            description="Keep your workplace clean and professional with our specialized commercial cleaning services."
            delay="0.2s"
          />
          
          <ServiceCard 
            icon={<Broom className="service-icon" />}
            title="Deep Cleaning"
            description="Intensive cleaning reaching areas that regular cleaning doesn't cover. Perfect for spring cleaning or move-in/out."
            delay="0.4s"
          />
          
          <ServiceCard 
            icon={<Hotel className="service-icon" />}
            title="Vacation Rental Cleaning"
            description="Quick turnaround cleaning services for Airbnb hosts and vacation rental owners."
            delay="0.1s"
          />
          
          <ServiceCard 
            icon={<Trash className="service-icon" />}
            title="Post-Construction"
            description="Detailed cleanup after renovations or construction work to make your space pristine."
            delay="0.3s"
          />
          
          <ServiceCard 
            icon={<Car className="service-icon" />}
            title="Moving Services"
            description="Cleaning services when you're moving in or out to ensure your old or new space is immaculate."
            delay="0.5s"
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Cleaning Plan?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            We understand that every space is unique. Contact us to create a personalized cleaning plan that meets your specific requirements.
          </p>
          <Button className="btn-primary">Get Custom Quote</Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
