"use client";

import React from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 pt-20">
          <h1 className="text-3xl md:text-4xl font-light text-[#001144] mb-2 font-playfair">
            My Shopping Cart
          </h1>
          <p className="text-md text-gray-600 max-w-xl">
            Review your selected items before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            <ShoppingCart size={64} className="mx-auto mb-6 text-gray-300" />
            <p className="text-2xl font-semibold mb-4">Your cart is empty.</p>
            <p className="text-lg mb-8">Start adding products to your cart!</p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-[#001144] text-white rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AnimatePresence>
                  {cart.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
                      className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-6 flex"
                    >
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="absolute top-2 right-2 p-2 rounded-full bg-white/80 text-gray-400 hover:text-red-500 transition-colors duration-200 z-10"
                        aria-label="Remove from cart"
                      >
                        <Trash2 size={20} />
                      </button>
                      <Link href={`/products/${product.id}`} className="block w-48 h-48 flex-shrink-0">
                        <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      <div className="p-4 flex-1">
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
                        <div className="flex items-center mt-4">
                          <label htmlFor={`quantity-${product.id}`} className="mr-2 text-gray-700">Quantity:</label>
                          <input
                            type="number"
                            id={`quantity-${product.id}`}
                            min="1"
                            value={product.quantity}
                            onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                            className="w-16 border border-gray-300 rounded-md text-center py-1"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Subtotal ({cart.reduce((total, item) => total + item.quantity, 0)} items)</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-700 mb-4">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-[#001144] border-t pt-4 mt-4">
                    <span>Total</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#001144] text-white py-3 rounded-lg font-medium hover:bg-[#001144]/90 transition-colors duration-200 mt-6">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
