"use client";

import React from "react";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

interface Product {
  id: string;
  name: string;
  price: string; // Price is a string in your product data
  image: string;
  category: string;
  inStock?: boolean; // Make inStock optional for now, as not all product data has it
}

interface WishlistButtonProps {
  product: Product;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isProductInWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isProductInWishlist) {
      removeFromWishlist(product.id);
    } else {
      // Convert price to number for WishlistContext if needed, or adjust context to handle string
      // For now, assuming context can handle string price or we convert it here.
      // Let's convert it to a number for consistency with the WishlistContext Product interface.
      const numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g,""));
      addToWishlist({ ...product, price: numericPrice, inStock: true, quantity: 1 }); // Assuming in stock by default and quantity 1
    }
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`absolute top-2 right-2 p-2 rounded-full bg-white shadow-md transition-colors duration-200
        ${isProductInWishlist ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-red-500"}
      `}
      aria-label={isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart size={20} fill={isProductInWishlist ? "currentColor" : "none"} />
    </button>
  );
};

export default WishlistButton;
