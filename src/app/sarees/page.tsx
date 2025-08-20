'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, Grid, List, Star } from 'lucide-react';
import WishlistButton from '../../components/WishlistButton';

const SareesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const sarees = [
    {
      id: 1,
      name: 'Rani Pink Saree With Bandhani Jaal',
      price: '₹11,995',
      originalPrice: '₹14,995',
      image: '/images/products/womens/sarees/saree1.jpg',
      rating: 4.5,
      reviews: 128,
      fabric: 'Silk',
      occasion: 'Wedding',
      isNew: true,
      discount: 20,
    },
    {
      id: 2,
      name: 'Purple Shaded Georgette Saree With Gold Work',
      price: '₹7,995',
      originalPrice: '₹9,995',
      image: '/images/products/womens/sarees/saree2.jpg',
      rating: 4.3,
      reviews: 89,
      fabric: 'Georgette',
      occasion: 'Party',
      isNew: false,
      discount: 20,
    },
    {
      id: 3,
      name: 'Embroidered Silk Saree Collection',
      price: '₹8,995',
      originalPrice: '₹11,995',
      image: '/images/products/womens/sarees/saree3.jpg',
      rating: 4.7,
      reviews: 156,
      fabric: 'Silk',
      occasion: 'Festive',
      isNew: false,
      discount: 25,
    },
    {
      id: 4,
      name: 'Traditional Cotton Handloom Saree',
      price: '₹3,995',
      originalPrice: '₹4,995',
      image: '/images/products/womens/sarees/saree1.jpg',
      rating: 4.2,
      reviews: 67,
      fabric: 'Cotton',
      occasion: 'Casual',
      isNew: false,
      discount: 20,
    },
    {
      id: 5,
      name: 'Designer Chiffon Saree with Zari Work',
      price: '₹12,995',
      originalPrice: '₹15,995',
      image: '/images/products/womens/sarees/saree2.jpg',
      rating: 4.8,
      reviews: 203,
      fabric: 'Chiffon',
      occasion: 'Wedding',
      isNew: true,
      discount: 19,
    },
    {
      id: 6,
      name: 'Printed Georgette Saree for Daily Wear',
      price: '₹4,995',
      originalPrice: '₹5,995',
      image: '/images/products/womens/sarees/saree3.jpg',
      rating: 4.1,
      reviews: 45,
      fabric: 'Georgette',
      occasion: 'Office',
      isNew: false,
      discount: 17,
    },
  ].map(saree => ({
    ...saree,
    id: saree.id.toString(), // Ensure ID is string for consistency with context
    category: 'Sarees' // Add category property
  }));

  const filters = [
    {
      title: 'Price Range',
      options: ['Under ₹1000', '₹1000 - ₹3000', '₹3000 - ₹5000', 'Above ₹5000'],
    },
    {
      title: 'Fabric Type',
      options: ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Crepe', 'Satin'],
    },
    {
      title: 'Occasion',
      options: ['Wedding', 'Party', 'Casual', 'Festive', 'Office'],
    },
    {
      title: 'Work Type',
      options: ['Embroidered', 'Printed', 'Plain', 'Embellished', 'Handloom'],
    },
    {
      title: 'Color',
      options: ['Red', 'Green', 'Blue', 'Pink', 'Purple', 'Black', 'White'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 font-playfair">
              Elegant Sarees Collection
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Discover timeless sarees that celebrate tradition with modern elegance. 
              From handloom to designer pieces, find your perfect saree.
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
                  All Sarees ({sarees.length})
                </h2>
                <p className="text-gray-600">Showing all sarees in our collection</p>
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
              {sarees.map((saree) => (
                <div key={saree.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-[3/4]'}`}>
                    <Image
                      src={saree.image}
                      alt={saree.name}
                      fill
                      className="object-cover"
                    />
                    {saree.isNew && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        NEW
                      </div>
                    )}
                    {saree.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        -{saree.discount}%
                      </div>
                    )}
                    <WishlistButton product={saree} />
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{saree.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{saree.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({saree.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-semibold text-[#001144]">{saree.price}</span>
                      {saree.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{saree.originalPrice}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">{saree.fabric}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{saree.occasion}</span>
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

export default SareesPage;
