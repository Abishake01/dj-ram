import React from 'react';

interface MusicGenre {
  name: string;
  icon: string;
  description: string;
}

const MusicStyles: React.FC = () => {
  const genres: MusicGenre[] = [
    {
      name: 'EDM',
      icon: '⚡',
      description: 'High-energy electronic beats for festival vibes',
    },
    {
      name: 'Bollywood',
      icon: '🎬',
      description: 'Latest and classic hits that get everyone dancing',
    },
    {
      name: 'Hip-Hop',
      icon: '🎤',
      description: 'Urban beats and rap anthems',
    },
    {
      name: 'Commercial',
      icon: '🎵',
      description: 'Top 40 hits and crowd favorites',
    },
    {
      name: 'Regional',
      icon: '🌍',
      description: 'Punjabi, Tamil, Telugu, and more',
    },
    {
      name: 'House',
      icon: '🏠',
      description: 'Deep house and progressive tracks',
    },
  ];

  return (
    <section id="music" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 glow-blue">
          Music Styles
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Versatile genre mastery with custom playlists tailored to your event's unique vibe
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-black p-8 rounded-2xl border border-gray-800 hover:border-neon-blue transition-all duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {genre.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                {genre.name}
              </h3>
              <p className="text-gray-400">{genre.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border border-neon-purple/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-neon-purple">
            Live Mixing & Custom Curation
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-4xl mb-3">🎧</div>
              <h4 className="text-xl font-semibold text-white mb-2">Read the Crowd</h4>
              <p className="text-gray-400 text-sm">
                Adapt music selection in real-time based on audience energy and response
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔀</div>
              <h4 className="text-xl font-semibold text-white mb-2">Seamless Transitions</h4>
              <p className="text-gray-400 text-sm">
                Professional mixing techniques ensuring smooth flow between tracks
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📋</div>
              <h4 className="text-xl font-semibold text-white mb-2">Custom Playlists</h4>
              <p className="text-gray-400 text-sm">
                Pre-event consultation to include your favorite tracks and special requests
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicStyles;
