"use client";

import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext"; // Import useCart

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart(); // Use addToCart from CartContext

  const handleAddToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id); // Remove from wishlist after adding to cart
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach((product) => addToCart(product));
    // Optionally clear wishlist after moving all to cart
    // clearWishlist(); // Assuming you add a clearWishlist function to WishlistContext
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 pt-20"> {/* Added pt-20 for spacing from fixed navbar */}
          <h1 className="text-3xl md:text-4xl font-light text-[#001144] mb-2 font-playfair">
            My Wishlist
          </h1>
          <p className="text-md text-gray-600 max-w-xl">
            Save the products you love, buy them anytime.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            <Heart size={64} className="mx-auto mb-6 text-gray-300" />
            <p className="text-2xl font-semibold mb-4">Your wishlist is empty.</p>
            <p className="text-lg mb-8">Start adding products you love!</p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-[#001144] text-white rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-6">
              <button
                onClick={handleMoveAllToCart}
                className="inline-flex items-center px-6 py-3 bg-[#001144] text-white rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200 shadow-md"
              >
                <ShoppingCart size={20} className="mr-2" />
                Move All to Cart
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {wishlist.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                    className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-white/80 text-gray-400 hover:text-red-500 transition-colors duration-200 z-10"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 size={20} />
                    </button>
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                          {product.name}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <p className="text-xl font-bold text-[#001144] mb-3">
                          ${product.price.toFixed(2)}
                        </p>
                        {product.inStock !== undefined && (
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              product.inStock
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="p-4 border-t border-gray-100">
                      <motion.button
                        onClick={() => handleAddToCart(product)}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-[#001144] text-white py-3 rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
