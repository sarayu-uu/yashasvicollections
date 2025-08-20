'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const shopMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShopMenu = () => {
    setIsShopMenuOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shopMenuRef.current && !shopMenuRef.current.contains(event.target as Node)) {
        setIsShopMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#001144] text-[#f8f8f8] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#f8f8f8] hover:text-white focus:outline-none focus:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Left navigation links - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-[#f8f8f8] hover:text-white transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-[#f8f8f8] hover:text-white transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* Shop Dropdown */}
            <div className="relative" ref={shopMenuRef}>
              <button
                onClick={toggleShopMenu}
                className="text-[#f8f8f8] hover:text-white transition-colors duration-200 relative group flex items-center"
              >
                Shop <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isShopMenuOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${isShopMenuOpen ? 'w-full' : 'w-0'}`}></span>
              </button>
              {isShopMenuOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-[#001144] rounded-md shadow-lg py-1 z-20">
                  <a href="/sarees" className="block px-4 py-2 text-sm text-[#f8f8f8] hover:bg-[#001144]/80">Sarees</a>
                  <a href="/dresses" className="block px-4 py-2 text-sm text-[#f8f8f8] hover:bg-[#001144]/80">Dresses</a>
                  <a href="/jewellery" className="block px-4 py-2 text-sm text-[#f8f8f8] hover:bg-[#001144]/80">Jewellery</a>
                </div>
              )}
            </div>
            <a href="#" className="text-[#f8f8f8] hover:text-white transition-colors duration-200 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Logo - centered */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <a href="/" className="relative w-32 h-12 cursor-pointer hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/images/logo/Yashashvi Logo.jpg"
                alt="Yashaswi Collections Logo"
                fill
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Right icons - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-[#f8f8f8] hover:text-white transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-[#f8f8f8] hover:text-white transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="text-[#f8f8f8] hover:text-white transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile icons */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button className="text-[#f8f8f8] hover:text-white transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="text-[#f8f8f8] hover:text-white transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="text-[#f8f8f8] hover:text-white transition-colors duration-200 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#001144] border-t border-[#f8f8f8]/20">
              <a href="#" className="text-[#f8f8f8] hover:text-white block px-3 py-2 transition-colors duration-200 relative group">
                Home
                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </a>
              <a href="#about" className="text-[#f8f8f8] hover:text-white block px-3 py-2 transition-colors duration-200 relative group">
                About
                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </a>
              {/* Mobile Shop Dropdown */}
              <button
                onClick={toggleShopMenu}
                className="text-[#f8f8f8] hover:text-white block px-3 py-2 transition-colors duration-200 relative group flex items-center w-full text-left"
              >
                Shop <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isShopMenuOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-3 w-full h-0.5 bg-white transition-all duration-300 ${isShopMenuOpen ? 'w-[calc(100%-1.5rem)]' : 'w-0'}`}></span>
              </button>
              {isShopMenuOpen && (
                <div className="pl-6 pb-2 space-y-1">
                  <a href="/sarees" className="block px-3 py-2 text-sm text-[#f8f8f8] hover:bg-[#001144]/80">Sarees</a>
                  <a href="/dresses" className="block px-3 py-2 text-sm text-[#f8f8f8] hover:bg-[#001144]/80">Dresses</a>
                  <a href="/jewellery" className="block px-3 py-2 text-sm text-[#f8f8f8] hover:bg-[#001144]/80">Jewellery</a>
                </div>
              )}
              <a href="#" className="text-[#f8f8f8] hover:text-white block px-3 py-2 transition-colors duration-200 relative group">
                Contact Us
                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
