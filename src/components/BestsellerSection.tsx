'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BestsellerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Rani Pink Saree With Bandhani Jaal',
      price: '₹11,995',
      image: '/images/products/womens/sarees/saree1.jpg',
      category: 'Sarees'
    },
    {
      id: 2,
      name: 'Purple Shaded Georgette Saree With Gold Work',
      price: '₹7,995',
      image: '/images/products/womens/sarees/saree2.jpg',
      category: 'Sarees'
    },
    {
      id: 3,
      name: 'Pink Silk Kurta Set With Resham Embroidery',
      price: '₹12,599',
      image: '/images/products/womens/dresses/dress1.jpg',
      category: 'Dresses'
    },
    {
      id: 4,
      name: 'Black Chanderi Printed Kurta Set',
      price: '₹7,999',
      image: '/images/products/womens/dresses/dress2.jpg',
      category: 'Dresses'
    },
    {
      id: 5,
      name: 'Peach Silk Kurta Sharara Set',
      price: '₹9,939',
      image: '/images/products/jewellery/jwellery1.jpg',
      category: 'Jewellery'
    },
    {
      id: 6,
      name: 'Traditional Gold Plated Necklace Set',
      price: '₹5,499',
      image: '/images/products/jewellery/jwellery2.jpg',
      category: 'Jewellery'
    },
    {
      id: 7,
      name: 'Embroidered Silk Saree Collection',
      price: '₹8,995',
      image: '/images/products/womens/sarees/saree3.jpg',
      category: 'Sarees'
    },
    {
      id: 8,
      name: 'Designer Ethnic Dress Set',
      price: '₹6,799',
      image: '/images/products/womens/dresses/dress1.jpg',
      category: 'Dresses'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 5));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 5)) % Math.ceil(products.length / 5));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleProducts = () => {
    const startIndex = currentSlide * 5;
    return products.slice(startIndex, startIndex + 5);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-light text-center text-[#001144] mb-12 font-playfair">
          Bestseller Trends
        </h2>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-600 hover:text-[#001144] p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-600 hover:text-[#001144] p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {getVisibleProducts().map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-[#001144] text-white px-2 py-1 rounded text-xs font-medium">
                    {product.category}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#001144]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(products.length / 5) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-[#001144] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestsellerSection;
