import React from 'react';
import profileImg from "../assets/profile.png";


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 glow-blue">
          About REMO DJ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-gray-300">
              <span className="text-neon-purple font-bold">REMO DJ SOUND & EVENTS</span> is your premier destination 
              for professional DJ services, sound systems, lighting, and complete event management. From intimate gatherings 
              to massive celebrations, we bring the perfect blend of energy, professionalism, and musical expertise to make 
              your event unforgettable.
            </p>
            
            <p className="text-gray-300">
              Our passion lies in creating magical moments that last forever. Whether it's a high-energy college fest, 
              an elegant wedding reception, a corporate event, or a pulsating party, we deliver performances and services 
              that resonate with every audience. We specialize in DJ services, professional sound systems, dynamic lighting, 
              LED walls, dance floors, truss setups, and special effects including cold pyro and dry ice entries.
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
                src={profileImg}
                alt="REMO DJ performing"
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
