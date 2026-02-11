import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Client',
      content: 'REMO DJ made our wedding reception absolutely unforgettable! The energy was incredible, and every guest was on the dance floor. Highly professional and adaptable to our song requests.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Corporate Event Manager',
      content: 'We hired REMO DJ for our annual corporate gala, and it was a massive success. Perfect balance of professionalism and entertainment. The setup was flawless!',
      rating: 5,
    },
    {
      name: 'Ananya Desai',
      role: 'College Fest Organizer',
      content: 'The most energetic DJ we\'ve ever had at our college fest! REMO DJ knows how to read the crowd and keep the energy at its peak. Will definitely book again!',
      rating: 5,
    },
  ];

  const brands = [
    'IIT Delhi', 'DLF', 'Taj Hotels', 'Oberoi Group', 'Times Group', 'Red Bull'
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 glow-pink">
          Client Love
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Don't just take our word for it - hear from those who've experienced the magic
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-neon-pink transition-all duration-300 hover:scale-105"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-neon-purple/30 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-neon-blue">
            Trusted By Leading Brands
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-xl font-semibold text-gray-400 hover:text-neon-purple transition-colors duration-300 cursor-default px-6 py-3 bg-black/30 rounded-lg"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-neon-purple/30">
            <div className="text-4xl font-bold text-neon-purple glow-purple mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-neon-blue/30">
            <div className="text-4xl font-bold text-neon-blue glow-blue mb-2">50K+</div>
            <div className="text-gray-400">People Entertained</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-neon-pink/30">
            <div className="text-4xl font-bold text-neon-pink glow-pink mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-neon-green/30">
            <div className="text-4xl font-bold text-neon-green glow-green mb-2">10+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
