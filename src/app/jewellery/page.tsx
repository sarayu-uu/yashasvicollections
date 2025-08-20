'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, Grid, List, Star } from 'lucide-react';

const JewelleryPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const jewellery = [
    {
      id: 1,
      name: 'Traditional Gold Plated Necklace Set',
      price: '₹5,499',
      originalPrice: '₹6,999',
      image: '/images/products/jewellery/jwellery1.jpg',
      rating: 4.6,
      reviews: 156,
      category: 'Necklace',
      material: 'Gold Plated',
      style: 'Traditional',
      isNew: true,
      discount: 21,
    },
    {
      id: 2,
      name: 'Designer Pearl Earrings Collection',
      price: '₹2,999',
      originalPrice: '₹3,999',
      image: '/images/products/jewellery/jwellery2.jpg',
      rating: 4.4,
      reviews: 98,
      category: 'Earrings',
      material: 'Pearl',
      style: 'Modern',
      isNew: false,
      discount: 25,
    },
    {
      id: 3,
      name: 'Gemstone Bracelet Set',
      price: '₹3,499',
      originalPrice: '₹4,499',
      image: '/images/products/jewellery/jwellery1.jpg',
      rating: 4.7,
      reviews: 134,
      category: 'Bracelet',
      material: 'Gemstone',
      style: 'Statement',
      isNew: false,
      discount: 22,
    },
    {
      id: 4,
      name: 'Silver Anklet with Bells',
      price: '₹1,999',
      originalPrice: '₹2,499',
      image: '/images/products/jewellery/jwellery2.jpg',
      rating: 4.3,
      reviews: 67,
      category: 'Anklet',
      material: 'Silver',
      style: 'Traditional',
      isNew: false,
      discount: 20,
    },
    {
      id: 5,
      name: 'Diamond Ring Collection',
      price: '₹8,999',
      originalPrice: '₹11,999',
      image: '/images/products/jewellery/jwellery1.jpg',
      rating: 4.8,
      reviews: 203,
      category: 'Ring',
      material: 'Diamond',
      style: 'Bridal',
      isNew: true,
      discount: 25,
    },
    {
      id: 6,
      name: 'Minimalist Gold Chain',
      price: '₹1,499',
      originalPrice: '₹1,999',
      image: '/images/products/jewellery/jwellery2.jpg',
      rating: 4.2,
      reviews: 89,
      category: 'Necklace',
      material: 'Gold Plated',
      style: 'Minimalist',
      isNew: false,
      discount: 25,
    },
  ];

  const filters = [
    {
      title: 'Price Range',
      options: ['Under ₹500', '₹500 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000'],
    },
    {
      title: 'Category',
      options: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Anklets'],
    },
    {
      title: 'Material',
      options: ['Gold Plated', 'Silver', 'Gemstone', 'Pearl', 'Diamond'],
    },
    {
      title: 'Style',
      options: ['Traditional', 'Modern', 'Minimalist', 'Statement', 'Bridal'],
    },
    {
      title: 'Occasion',
      options: ['Everyday', 'Wedding', 'Party', 'Gift', 'Festival'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 font-playfair">
              Handcrafted Jewellery Collection
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Discover exquisite handcrafted jewellery pieces that add elegance to every occasion. 
              From traditional designs to contemporary styles.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-[#001144]" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {filters.map((filter, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-3 text-sm uppercase tracking-wide">
                    {filter.title}
                  </h3>
                  <div className="space-y-2">
                    {filter.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center space-x-2 cursor-pointer hover:text-[#001144] transition-colors duration-200">
                        <input type="checkbox" className="rounded border-gray-300 text-[#001144] focus:ring-[#001144]" />
                        <span className="text-sm text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <button className="w-full bg-[#001144] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-light text-gray-900 mb-2 font-playfair">
                  All Jewellery ({jewellery.length})
                </h2>
                <p className="text-gray-600">Showing all jewellery in our collection</p>
              </div>
              
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001144]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-[#001144] text-white' : 'bg-white text-gray-600'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-[#001144] text-white' : 'bg-white text-gray-600'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {jewellery.map((item) => (
                <div key={item.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-[3/4]'}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    {item.isNew && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        NEW
                      </div>
                    )}
                    {item.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        -{item.discount}%
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({item.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-semibold text-[#001144]">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{item.material}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{item.style}</span>
                    </div>

                    <button className="w-full bg-[#001144] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelleryPage;
