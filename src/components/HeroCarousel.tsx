'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/hero/hero1.jpeg',
      heading: 'Elegant Silk Sarees',
      description: 'Discover our collection of handcrafted silk sarees that embody tradition and grace.',
      cta: 'Shop Sarees'
    },
    {
      id: 2,
      image: '/images/products/womens/dresses/dress1.jpg',
      heading: 'Contemporary Dresses',
      description: 'Modern designs that blend comfort with style for the contemporary woman.',
      cta: 'Shop Dresses'
    },
    {
      id: 3,
      image: '/images/products/jewellery/jwellery1.jpg',
      heading: 'Handcrafted Jewellery',
      description: 'Exquisite jewellery pieces that tell stories of heritage and craftsmanship.',
      cta: 'Shop Jewellery'
    },
    {
      id: 4,
      image: '/images/products/organic-food/organic1.jpg',
      heading: 'Organic Essentials',
      description: 'Pure and natural organic products for a healthier lifestyle.',
      cta: 'Shop Organic'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight font-playfair drop-shadow-lg">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light drop-shadow-md">
                  {slide.description}
                </p>
                <button className="bg-white text-[#001144] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 drop-shadow-sm">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
