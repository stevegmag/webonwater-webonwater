import Link from 'next/link';

const services = [
  {
    title: 'Web Design',
    description: 'Strategic, user-centered designs that combine aesthetic appeal with conversion-focused functionality. We create responsive experiences that engage your audience across all devices.',
    icon: '🎨',
    link: '/services#design'
  },
  {
    title: 'Web Development',
    description: 'Custom websites and applications engineered with modern frameworks like React, Vue, and Node.js. We build scalable, maintainable solutions that deliver exceptional performance.',
    icon: '💻',
    link: '/services#development'
  },
  {
    title: 'Web Repair',
    description: 'Comprehensive troubleshooting and remediation for broken websites and abandoned projects. We solve complex technical issues, refactor problematic code, and revitalize stalled developments.',
    icon: '🔧',
    link: '/services#repair'
  },
  {
    title: 'Performance & Accessibility Audits',
    description: 'Technical analysis of Core Web Vitals, server response times, and WCAG compliance. We transform sluggish, inaccessible websites into fast, inclusive experiences that reach all users.',
    icon: '📊',
    link: '/services#performance'
  },
  {
    title: 'SEO & Marketing Campaigns',
    description: 'Data-driven interventions to repair underperforming SEO and rescue failing marketing campaigns. We implement technical optimizations and strategic adjustments to drive measurable traffic increases.',
    icon: '📈',
    link: '/services#seo'
  }
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto">
            We offer a range of services to help your business succeed online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary hover:underline">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}