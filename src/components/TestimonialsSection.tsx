
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    content: "SpotlessVista has completely transformed our office space. Their attention to detail is exceptional, and the team is always professional and punctual.",
    author: "Jennifer Lawrence",
    role: "Office Manager, TechCorp",
    rating: 5,
  },
  {
    content: "I've been using their residential cleaning service for over a year now, and I couldn't be happier. My home always feels fresh and immaculate after they're done.",
    author: "Michael Rodriguez",
    role: "Homeowner",
    rating: 5,
  },
  {
    content: "As a vacation rental host, I need reliable cleaning services with quick turnaround. SpotlessVista never disappoints - they're thorough, efficient, and my guests always comment on how clean the property is.",
    author: "Sarah Johnson",
    role: "Airbnb Superhost",
    rating: 5,
  },
  {
    content: "The deep cleaning service exceeded my expectations. They reached areas I didn't even know needed cleaning! Highly recommend for anyone moving into a new home.",
    author: "David Chen",
    role: "New Homeowner",
    rating: 4,
  },
  {
    content: "After our office renovation, SpotlessVista handled the post-construction cleanup brilliantly. They removed all debris and dust, making the space ready for our employees to return.",
    author: "Amanda Wilson",
    role: "Business Owner",
    rating: 5,
  },
];

const TestimonialCard = ({ content, author, role, rating }: TestimonialProps) => (
  <div className="testimonial-card h-full flex flex-col">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
    <p className="text-gray-600 flex-grow mb-6">"{content}"</p>
    <div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCount, setShowCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowCount(1);
      } else if (window.innerWidth < 1024) {
        setShowCount(2);
      } else {
        setShowCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setActiveIndex(prevIndex => 
      prevIndex + showCount >= testimonials.length 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 
        ? testimonials.length - showCount 
        : prevIndex - 1
    );
  };

  const maxIndex = testimonials.length - showCount;

  return (
    <section id="testimonials" className="section bg-clean-blue-50">
      <div className="container">
        <h2 className="section-title">What Our <span className="text-clean-blue-500">Clients Say</span></h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers
        </p>
        
        <div className="mt-12 relative">
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * (100 / showCount)}%)`,
                width: `${(testimonials.length / showCount) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="px-4"
                  style={{ width: `${100 / testimonials.length * showCount}%` }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-clean-gray-50 transition-colors z-10"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-clean-blue-500" />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-clean-gray-50 transition-colors z-10"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-clean-blue-500" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              className={`h-2 mx-1 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-clean-blue-500' : 'w-2 bg-clean-gray-200'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
