'use client';

import Image from 'next/image';

const CuratedCollections = () => {
  const collections = [
    {
      id: 1,
      name: 'Boho Chic',
      image: '/images/products/womens/dresses/dress1.jpg',
      description: 'Free-spirited ethnic wear with contemporary flair',
      buttonText: 'SHOP NOW'
    },
    {
      id: 2,
      name: 'Sequin Soirée',
      image: '/images/products/womens/dresses/dress2.jpg',
      description: 'Glamorous party wear for special occasions',
      buttonText: 'SHOP NOW'
    },
    {
      id: 3,
      name: 'Cape Styles',
      image: '/images/products/womens/sarees/saree1.jpg',
      description: 'Elegant cape designs for modern women',
      buttonText: 'SHOP NOW'
    },
    {
      id: 4,
      name: 'Printed Pret',
      image: '/images/products/womens/sarees/saree2.jpg',
      description: 'Contemporary prints for everyday elegance',
      buttonText: 'SHOP NOW'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center text-[#001144] mb-12 font-playfair">
          Curated Collections
        </h2>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Collection Card */}
              <div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                {/* Background Image */}
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-light mb-2 font-playfair">
                    {collection.name}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <button className="bg-white text-[#001144] px-6 py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    {collection.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedCollections;
