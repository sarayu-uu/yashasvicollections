'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, Grid, List, Star } from 'lucide-react';

const DressesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const dresses = [
    {
      id: 1,
      name: 'Pink Silk Kurta Set With Resham Embroidery',
      price: '₹12,599',
      originalPrice: '₹15,999',
      image: '/images/products/womens/dresses/dress1.jpg',
      rating: 4.6,
      reviews: 142,
      fabric: 'Silk',
      occasion: 'Wedding',
      size: 'M',
      isNew: true,
      discount: 21,
    },
    {
      id: 2,
      name: 'Black Chanderi Printed Kurta Set',
      price: '₹7,999',
      originalPrice: '₹9,999',
      image: '/images/products/womens/dresses/dress2.jpg',
      rating: 4.4,
      reviews: 98,
      fabric: 'Chanderi',
      occasion: 'Party',
      size: 'L',
      isNew: false,
      discount: 20,
    },
    {
      id: 3,
      name: 'Peach Silk Kurta Sharara Set',
      price: '₹9,939',
      originalPrice: '₹12,999',
      image: '/images/products/womens/dresses/dress1.jpg',
      rating: 4.7,
      reviews: 167,
      fabric: 'Silk',
      occasion: 'Festive',
      size: 'S',
      isNew: false,
      discount: 24,
    },
    {
      id: 4,
      name: 'Designer Ethnic Dress Set',
      price: '₹6,799',
      originalPrice: '₹8,499',
      image: '/images/products/womens/dresses/dress2.jpg',
      rating: 4.3,
      reviews: 76,
      fabric: 'Cotton',
      occasion: 'Casual',
      size: 'M',
      isNew: false,
      discount: 20,
    },
    {
      id: 5,
      name: 'Embroidered Anarkali Gown',
      price: '₹14,999',
      originalPrice: '₹18,999',
      image: '/images/products/womens/dresses/dress1.jpg',
      rating: 4.8,
      reviews: 234,
      fabric: 'Georgette',
      occasion: 'Wedding',
      size: 'L',
      isNew: true,
      discount: 21,
    },
    {
      id: 6,
      name: 'Indo-Western Fusion Dress',
      price: '₹5,499',
      originalPrice: '₹6,999',
      image: '/images/products/womens/dresses/dress2.jpg',
      rating: 4.2,
      reviews: 89,
      fabric: 'Linen',
      occasion: 'Office',
      size: 'S',
      isNew: false,
      discount: 21,
    },
  ];

  const filters = [
    {
      title: 'Price Range',
      options: ['Under ₹1500', '₹1500 - ₹4000', '₹4000 - ₹7000', 'Above ₹7000'],
    },
    {
      title: 'Dress Type',
      options: ['Kurta Sets', 'Anarkali', 'Gowns', 'Lehengas', 'Indo-Western'],
    },
    {
      title: 'Fabric',
      options: ['Cotton', 'Silk', 'Georgette', 'Linen', 'Velvet'],
    },
    {
      title: 'Occasion',
      options: ['Day Wear', 'Evening Wear', 'Formal', 'Summer', 'Wedding'],
    },
    {
      title: 'Size',
      options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 font-playfair">
              Contemporary Dresses Collection
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Explore our stunning collection of ethnic and fusion dresses. 
              From traditional kurta sets to modern indo-western designs.
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
                  All Dresses ({dresses.length})
                </h2>
                <p className="text-gray-600">Showing all dresses in our collection</p>
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
              {dresses.map((dress) => (
                <div key={dress.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-[3/4]'}`}>
                    <Image
                      src={dress.image}
                      alt={dress.name}
                      fill
                      className="object-cover"
                    />
                    {dress.isNew && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        NEW
                      </div>
                    )}
                    {dress.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        -{dress.discount}%
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{dress.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{dress.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({dress.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-semibold text-[#001144]">{dress.price}</span>
                      {dress.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{dress.originalPrice}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">{dress.fabric}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{dress.occasion}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">Size {dress.size}</span>
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

export default DressesPage;
