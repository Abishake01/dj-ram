import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 glow-blue">
          About DJ RAM
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-300">
              With over <span className="text-neon-purple font-bold">10 years</span> of experience in the music industry, 
              DJ RAM has become synonymous with electrifying performances and unforgettable nights. From intimate gatherings 
              to massive stadium events, we bring the perfect blend of energy, professionalism, and musical expertise.
            </p>
            
            <p className="text-gray-300">
              Our passion lies in reading the crowd and adapting to every moment, ensuring that your event becomes a 
              memory that lasts forever. Whether it's a high-energy college fest, an elegant wedding reception, or a 
              pulsating club night, we deliver performances that resonate with every audience.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-black/50 rounded-lg border border-neon-purple/30 hover:border-neon-purple transition-all duration-300">
                <div className="text-4xl font-bold text-neon-purple glow-purple">500+</div>
                <div className="text-sm text-gray-400 mt-2">Events</div>
              </div>
              <div className="text-center p-6 bg-black/50 rounded-lg border border-neon-blue/30 hover:border-neon-blue transition-all duration-300">
                <div className="text-4xl font-bold text-neon-blue glow-blue">10+</div>
                <div className="text-sm text-gray-400 mt-2">Years</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-neon-purple/30 box-glow-purple">
              <img
                src="https://images.unsplash.com/photo-1571266028243-d220c6e87fa2?w=800"
                alt="DJ Ram performing"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-purple-blue rounded-full blur-3xl opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
