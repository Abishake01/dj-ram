import React from 'react';

interface EquipmentItem {
  name: string;
  description: string;
  image: string;
}

const Equipment: React.FC = () => {
  const equipment: EquipmentItem[] = [
    {
      name: 'DJ Controllers & Mixers',
      description: 'Industry-leading Pioneer CDJs and Allen & Heath mixers for flawless live mixing',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800',
    },
    {
      name: 'Sound Systems',
      description: 'Crystal-clear audio with premium JBL and QSC speaker arrays',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800',
    },
    {
      name: 'Stage Lighting',
      description: 'Dynamic LED moving heads, wash lights, and intelligent fixtures',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    },
    {
      name: 'Laser Systems',
      description: 'High-powered RGB lasers creating stunning atmospheric effects',
      image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800',
    },
    {
      name: 'LED Walls & Screens',
      description: 'Massive high-resolution displays for immersive visual experiences',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
    },
    {
      name: 'Effects & Atmosphere',
      description: 'Smoke machines, fog effects, and CO2 cannons for dramatic moments',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
    },
  ];

  return (
    <section id="equipment" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 glow-green">
          Professional Setup
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          State-of-the-art equipment delivering unmatched audio-visual experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-800 hover:border-neon-green transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-neon-green/20 backdrop-blur-sm px-4 py-2 rounded-full text-neon-green text-xs font-semibold border border-neon-green/50">
                Professional Grade
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-black/50 rounded-xl border border-neon-purple/30">
            <div className="text-5xl mb-3">🔊</div>
            <h4 className="text-xl font-bold text-neon-purple mb-2">Premium Audio</h4>
            <p className="text-gray-400 text-sm">Crisp, powerful sound that fills any venue</p>
          </div>
          <div className="p-6 bg-black/50 rounded-xl border border-neon-blue/30">
            <div className="text-5xl mb-3">💡</div>
            <h4 className="text-xl font-bold text-neon-blue mb-2">Dynamic Lighting</h4>
            <p className="text-gray-400 text-sm">Synchronized effects that enhance every beat</p>
          </div>
          <div className="p-6 bg-black/50 rounded-xl border border-neon-green/30">
            <div className="text-5xl mb-3">⚡</div>
            <h4 className="text-xl font-bold text-neon-green mb-2">Reliable Tech</h4>
            <p className="text-gray-400 text-sm">Backup systems ensuring zero downtime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
