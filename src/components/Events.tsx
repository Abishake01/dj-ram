import React from 'react';

interface EventType {
  title: string;
  description: string;
  image: string;
}

const Events: React.FC = () => {
  const eventTypes: EventType[] = [
    {
      title: 'Weddings',
      description: 'From vows to last call, creating magical moments with romantic ambiance and crowd-pleasing tracks that keep guests dancing all night.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=500&fit=crop',
    },
    {
      title: 'Corporate Events',
      description: 'Professional yet engaging entertainment for brand launches, galas, and team celebrations that leave lasting impressions.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=500&fit=crop',
    },
    {
      title: 'Birthday Parties',
      description: 'High-energy celebrations tailored to every age group and vibe, making special moments unforgettable.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=500&fit=crop',
    },
    {
      title: 'College Fests',
      description: 'Explosive performances that turn campuses into massive dance floors with energy that electrifies the entire venue.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=500&fit=crop',
    },
    {
      title: 'Private Parties',
      description: 'Exclusive intimate gatherings with personalized music curation and professional-grade sound for unforgettable nights.',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=500&fit=crop',
    },
    {
      title: 'Clubs & Shows',
      description: 'Electrifying nightclub sets and large-scale concert performances that keep the energy pumping all night long.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=500&fit=crop',
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border-2 border-gray-800 hover:border-neon-purple transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay - Hidden by default, shown on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {event.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {event.description}
                </p>
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-neon-purple to-neon-pink mt-4 transition-all duration-500"></div>
              </div>

              {/* Title visible on mobile/default state */}
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider">
                  {event.title}
                </h3>
              </div>
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
