"use client";

import { services } from '@/data/services';
import { FaCode, FaTools, FaRocket, FaChartLine, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import { FaPaintbrush } from 'react-icons/fa6';

export default function Services() {
  // Map to convert string icon names to actual React components
  const iconMap = {
    FaPaintbrush: <FaPaintbrush className="text-4xl mb-4" />,
    FaCode: <FaCode className="text-4xl mb-4" />,
    FaTools: <FaTools className="text-4xl mb-4" />,
    FaRocket: <FaRocket className="text-4xl mb-4" />,
    FaChartLine: <FaChartLine className="text-4xl mb-4" />,
    FaShieldAlt: <FaShieldAlt className="text-4xl mb-4" />,
    FaLaptopCode: <FaLaptopCode className="text-4xl mb-4" />
  };

  return (
    <section className="services-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[var(--color-dark-flatblue)]">
          Our Services
        </h2>
        
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="service-card basis-1 md:basis-1/3 rounded-lg shadow-lg p-6 transition-transform hover:scale-105 duration-150 ease-in-out w-full m-2">
              <div className="text-center">
                {iconMap[service.icon as keyof typeof iconMap]}
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
