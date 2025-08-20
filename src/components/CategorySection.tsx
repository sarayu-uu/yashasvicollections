'use client';

import Image from 'next/image';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Sarees',
      image: '/images/products/womens/sarees/saree1.jpg',
      description: 'Timeless elegance in every drape',
      productCount: '500+ Products',
      href: '/sarees'
    },
    {
      id: 2,
      name: 'Dresses',
      image: '/images/products/womens/dresses/dress1.jpg',
      description: 'Contemporary ethnic wear',
      productCount: '300+ Products',
      href: '/dresses'
    },
    {
      id: 3,
      name: 'Jewellery',
      image: '/images/products/jewellery/jwellery1.jpg',
      description: 'Handcrafted elegance',
      productCount: '200+ Products',
      href: '/jewellery'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#001144] mb-4 font-playfair">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed to bring tradition and elegance into your everyday life
          </p>
        </div>

        {/* Category Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
            >
              <a href={category.href} className="block">
                {/* Category Card */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Background Image */}
                  <div className="relative h-64">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-[#001144]">
                        {category.productCount}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-light text-[#001144] mb-2 font-playfair">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-[#001144] font-medium group-hover:underline transition-all duration-200">
                        Shop Now
                      </span>
                      <div className="w-8 h-8 bg-[#001144] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Explore our complete collection
          </p>
          <a 
            href="/sarees" 
            className="inline-flex items-center px-8 py-4 bg-[#001144] text-white rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View All Collections
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
