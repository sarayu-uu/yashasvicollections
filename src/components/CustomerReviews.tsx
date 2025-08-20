'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronRight } from 'lucide-react';

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Abhinav Singh Raghav',
      location: 'Hyderabad, Telangana',
      image: '/images/products/womens/dresses/dress1.jpg',
      testimonial: 'I find the designs supremely unique and the feel is so comfortable after wearing them. I can vouch that there were plenty of folks reaching out to me in all the events just to ask who am I wearing!',
      product: 'Embroidered Silk Kurta Set'
    },
    {
      id: 2,
      name: 'Shradha Patel',
      location: 'Michigan, USA',
      image: '/images/products/womens/sarees/saree1.jpg',
      testimonial: 'They delivered my outfit on time. Outfit looked great, fitting and everything worked out perfect for me. I would definitely recommend others.',
      product: 'Designer Silk Saree'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      image: '/images/products/jewellery/jwellery1.jpg',
      testimonial: 'The jewellery collection is absolutely stunning! The craftsmanship is exceptional and the pieces are so elegant. I received so many compliments at my sister\'s wedding.',
      product: 'Traditional Gold Necklace Set'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      location: 'Delhi, NCR',
      image: '/images/products/womens/dresses/dress2.jpg',
      testimonial: 'Excellent quality and perfect fit. The customer service was outstanding and they helped me choose the perfect outfit for my daughter\'s engagement ceremony.',
      product: 'Anarkali Gown Collection'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 2));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const startIndex = currentSlide * 2;
    return reviews.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#001144] mb-4 font-playfair">
            Customer Stories
          </h2>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {getVisibleReviews().map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="flex flex-col lg:flex-row">
                  {/* Customer Image */}
                  <div className="lg:w-1/3 relative">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Review Content */}
                  <div className="lg:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4 font-light">
                        "{review.testimonial}"
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-[#001144] text-lg mb-1">
                        {review.name}
                      </h4>
                      <p className="text-gray-500 text-sm mb-4">
                        {review.location}
                      </p>
                      <button className="bg-[#001144] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#001144]/90 transition-colors duration-200">
                        VIEW PRODUCT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {Array.from({ length: Math.ceil(reviews.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-[#001144] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            <ChevronUp size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 shadow-lg"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Floating Action Buttons Removed */}
      </div>
    </section>
  );
};

export default CustomerReviews;
