const testimonials = [
  {
    quote: "Working with WebOnWater transformed our online presence. Their team delivered a website that exceeded our expectations.",
    author: "Jane Smith",
    company: "Acme Inc."
  },
  {
    quote: "The team at WebOnWater understood our vision perfectly and brought it to life with their exceptional design and development skills.",
    author: "John Doe",
    company: "XYZ Corp"
  },
  {
    quote: "Our e-commerce sales increased by 40% after launching our new website. I can't recommend WebOnWater enough!",
    author: "Sarah Johnson",
    company: "Retail Solutions"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}