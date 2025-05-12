"use client";

import { testimonials } from '@/data/testimonials';
import { FaUser } from 'react-icons/fa';

const iconMap = {
  FaUser: <FaUser className="text-4xl mb-4" />
};

export default function Testimonials() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--service-container-bg)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--color-dark-flatblue)' }}>
          What Our Clients Say
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="rounded-lg shadow-lg p-6 transition-transform duration-150 hover:scale-105"
                style={{
                  backgroundColor: 'var(--service-card-bg, white)',
                  color: 'var(--service-card-text, inherit)'
                }}
              >
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
      </div>
    </section>
  );
}
