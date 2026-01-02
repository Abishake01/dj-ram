import React, { useState } from 'react';

interface GalleryImage {
  url: string;
  title: string;
  category: 'event' | 'crowd' | 'setup' | 'night';
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    {
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200',
      title: 'College Fest Performance',
      category: 'event',
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
      title: 'Energetic Crowd',
      category: 'crowd',
    },
    {
      url: 'https://images.unsplash.com/photo-1571266028243-d220c6e87fa2?w=1200',
      title: 'Live Mixing Session',
      category: 'setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200',
      title: 'Night Party Vibes',
      category: 'night',
    },
    {
      url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200',
      title: 'Wedding Reception',
      category: 'event',
    },
    {
      url: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=1200',
      title: 'Massive Crowd Energy',
      category: 'crowd',
    },
    {
      url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200',
      title: 'Professional DJ Setup',
      category: 'setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=1200',
      title: 'Club Night Lighting',
      category: 'night',
    },
    {
      url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200',
      title: 'Private Event',
      category: 'event',
    },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'event', label: 'Events' },
    { id: 'crowd', label: 'Crowd' },
    { id: 'setup', label: 'Setup' },
    { id: 'night', label: 'Night Party' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 glow-purple">
          Event Gallery
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Experience the energy through our lens - capturing unforgettable moments
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-purple-blue text-white box-glow-purple'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer border-2 border-gray-800 hover:border-neon-purple transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-neon-purple text-sm mt-1 capitalize">{image.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-neon-blue">
            Event Highlights
          </h3>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden border-4 border-neon-blue/30 box-glow-blue">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Event Highlight Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-neon-purple transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-neon-purple capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
