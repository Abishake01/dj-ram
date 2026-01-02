import React from 'react';

interface EventType {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const Events: React.FC = () => {
  const eventTypes: EventType[] = [
    {
      title: 'Weddings',
      description: 'Creating magical moments with romantic ambiance and crowd-pleasing tracks',
      icon: '💍',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Birthday Parties',
      description: 'High-energy celebrations tailored to every age group and vibe',
      icon: '🎂',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'College Fests',
      description: 'Explosive performances that turn campuses into massive dance floors',
      icon: '🎓',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Corporate Events',
      description: 'Professional yet engaging entertainment for brand launches and galas',
      icon: '💼',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Private Parties',
      description: 'Exclusive intimate gatherings with personalized music curation',
      icon: '🎉',
      gradient: 'from-teal-500 to-green-500',
    },
    {
      title: 'Clubs & Shows',
      description: 'Electrifying nightclub sets and large-scale concert performances',
      icon: '🎵',
      gradient: 'from-green-500 to-pink-500',
    },
  ];

  return (
    <section id="events" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 glow-pink">
          Events & Experience
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          From intimate celebrations to massive festivals, we bring versatility and expertise to every event type
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-neon-purple transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-6xl mb-4 filter drop-shadow-lg`}>
                {event.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-purple transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {event.description}
              </p>
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${event.gradient} transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-neon-purple/50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-neon-blue mb-4">
              Trusted by Top Brands & Institutions
            </h3>
            <p className="text-gray-300 max-w-2xl">
              Performed at premier venues across the country, collaborating with leading event organizers, 
              colleges, and corporate brands to deliver world-class entertainment experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
