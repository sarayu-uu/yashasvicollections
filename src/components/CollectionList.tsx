'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const CollectionList = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = ['Sarees', 'Dresses', 'Jewellery'];

  // Define filter content for each category
  const filterContent: { [key: string]: { title: string; items: string[] }[] } = {
    Sarees: [
      {
        title: 'Price Range',
        items: ['Under ₹1000', '₹1000 - ₹3000', '₹3000 - ₹5000', 'Above ₹5000'],
      },
      {
        title: 'Fabric Type',
        items: ['Silk', 'Cotton', 'Georgette', 'Chiffon', 'Crepe', 'Satin'],
      },
      {
        title: 'Occasion',
        items: ['Wedding', 'Party', 'Casual', 'Festive', 'Office'],
      },
      {
        title: 'Work Type',
        items: ['Embroidered', 'Printed', 'Plain', 'Embellished', 'Handloom'],
      },
      {
        title: 'Color',
        items: ['Red', 'Green', 'Blue', 'Pink', 'Purple', 'Black', 'White'],
      },
    ],
    Dresses: [
      {
        title: 'Price Range',
        items: ['Under ₹1500', '₹1500 - ₹4000', '₹4000 - ₹7000', 'Above ₹7000'],
      },
      {
        title: 'Dress Type',
        items: ['Kurta Sets', 'Anarkali', 'Gowns', 'Lehengas', 'Indo-Western'],
      },
      {
        title: 'Fabric',
        items: ['Cotton', 'Silk', 'Georgette', 'Linen', 'Velvet'],
      },
      {
        title: 'Occasion',
        items: ['Day Wear', 'Evening Wear', 'Formal', 'Summer', 'Wedding'],
      },
      {
        title: 'Size',
        items: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      },
    ],
    Jewellery: [
      {
        title: 'Price Range',
        items: ['Under ₹500', '₹500 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000'],
      },
      {
        title: 'Category',
        items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Anklets'],
      },
      {
        title: 'Material',
        items: ['Gold Plated', 'Silver', 'Gemstone', 'Pearl', 'Diamond'],
      },
      {
        title: 'Style',
        items: ['Traditional', 'Modern', 'Minimalist', 'Statement', 'Bridal'],
      },
      {
        title: 'Occasion',
        items: ['Everyday', 'Wedding', 'Party', 'Gift', 'Festival'],
      },
    ],
    'Organic Food': [
      {
        title: 'Price Range',
        items: ['Under ₹200', '₹200 - ₹500', '₹500 - ₹1000', 'Above ₹1000'],
      },
      {
        title: 'Category',
        items: ['Grains & Pulses', 'Spices & Oils', 'Dry Fruits & Nuts', 'Superfoods'],
      },
      {
        title: 'Dietary',
        items: ['Vegan', 'Gluten-Free', 'Sugar-Free', 'Organic', 'Natural'],
      },
      {
        title: 'Brand',
        items: ['Organic Valley', 'Nature\'s Basket', 'Pure Harvest', 'Green Earth'],
      },
      {
        title: 'Packaging',
        items: ['Bulk', 'Small Pack', 'Gift Pack', 'Eco-Friendly'],
      },
    ],
  };

  // Define dropdown content for each category
  const dropdownContent: { [key: string]: { title: string; items: string[] }[] } = {
    Sarees: [
      {
        title: 'Style',
        items: ['See All Saree', 'Embroidered Saree', 'Ready To Wear Saree', 'Embellished Saree'],
      },
      {
        title: 'Availability',
        items: ['Ready To Ship', 'Instant Saree', 'Plain Saree', 'Handloom Saree'],
      },
      {
        title: 'Occasion',
        items: ['Wedding', 'Party', 'Casual', 'Festive'],
      },
      {
        title: 'Fabric',
        items: ['Silk', 'Cotton', 'Georgette', 'Chiffon'],
      },
    ],
    Dresses: [
      {
        title: 'Type',
        items: ['Casual Dresses', 'Party Wear', 'Ethnic Dresses', 'Maxi Dresses'],
      },
      {
        title: 'Fabric',
        items: ['Cotton', 'Silk', 'Georgette', 'Linen'],
      },
      {
        title: 'Occasion',
        items: ['Day Wear', 'Evening Wear', 'Formal', 'Summer'],
      },
      {
        title: 'Collection',
        items: ['New Arrivals', 'Best Sellers', 'Sale'],
      },
    ],
    Jewellery: [
      {
        title: 'Category',
        items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings'],
      },
      {
        title: 'Material',
        items: ['Gold Plated', 'Silver', 'Gemstone', 'Pearl'],
      },
      {
        title: 'Style',
        items: ['Traditional', 'Modern', 'Minimalist', 'Statement'],
      },
      {
        title: 'Occasion',
        items: ['Everyday', 'Wedding', 'Party', 'Gift'],
      },
    ],
    'Organic Food': [
      {
        title: 'Grains & Pulses',
        items: ['Rice', 'Wheat', 'Lentils', 'Flours'],
      },
      {
        title: 'Spices & Oils',
        items: ['Turmeric', 'Cumin', 'Coconut Oil', 'Ghee'],
      },
      {
        title: 'Dry Fruits & Nuts',
        items: ['Almonds', 'Cashews', 'Raisins', 'Dates'],
      },
      {
        title: 'Superfoods',
        items: ['Quinoa', 'Chia Seeds', 'Moringa', 'Spirulina'],
      },
    ],
  };

  return (
    <div className="sticky top-16 z-40 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-start space-x-8 lg:space-x-12 py-4 overflow-x-auto">
          {categories.map((category) => (
            <div
              key={category}
              className="group relative"
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <a
                href={`/${category.toLowerCase()}`}
                className={`whitespace-nowrap px-4 py-2 transition-all duration-200 font-medium text-sm lg:text-base
                  relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#001144] after:transition-all after:duration-300
                  ${hoveredCategory === category
                     ? 'text-[#001144]' // Active or hovered state: text color only
                     : 'text-gray-700 hover:text-[#001144] group-hover:after:w-full' // Default hover state
                  }
                `}
              >
                {category}
              </a>

              {/* Dropdown Menu */}
              {hoveredCategory === category && dropdownContent[category] && (
                <div
                  className="fixed left-0 right-0 top-32 z-50 bg-white shadow-xl border-t border-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto h-[75vh] overflow-y-auto"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                      {/* Filter Section - Left Side */}
                      <div className="lg:col-span-2">
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">
                          Filters
                        </h3>
                        <div className="space-y-6">
                          {filterContent[category]?.map((filter, filterIndex) => (
                            <div key={filterIndex}>
                              <h4 className="font-medium text-gray-800 mb-3 text-sm uppercase tracking-wide">
                                {filter.title}
                              </h4>
                              <div className="space-y-2">
                                {filter.items.map((item, itemIndex) => (
                                  <label key={itemIndex} className="flex items-center space-x-2 cursor-pointer hover:text-[#001144] transition-colors duration-200">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#001144] focus:ring-[#001144]" />
                                    <span className="text-sm text-gray-700">{item}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <button className="w-full bg-[#001144] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#001144]/90 transition-colors duration-200">
                            Apply Filters
                          </button>
                        </div>
                      </div>

                      {/* Categories Section - Right Side */}
                      <div className="lg:col-span-4">
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg border-b border-gray-200 pb-2">
                          Categories
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                          {dropdownContent[category].map((col, colIndex) => (
                            <div key={colIndex}>
                              <h4 className="font-medium text-gray-800 mb-3 text-sm uppercase tracking-wide">
                                {col.title}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <a href="#" className="block text-gray-700 hover:text-[#001144] hover:underline transition-colors duration-200 text-sm">
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
