"use client";

import { testimonials } from '@/data/testimonials';
import { FaUser } from 'react-icons/fa';

const iconMap = {
  FaUser: <FaUser className="text-4xl mb-4" />
};

export default function Testimonials() {
  return (
    <section className="services-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-dark-flatblue)]">What Our Clients Say</h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="service-card basis-1 md:basis-1/3 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-150 ease-in-out w-full m-2">
              <div className="flex flex-col items-center text-center"> 
                {iconMap[testimonial.icon as keyof typeof iconMap]}
                <p className="mb-4 italic">"{testimonial.quote}"</p>
                <h4 className="font-bold">{testimonial.author}</h4>
                <p className="text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
