"use client";

import React, { useState, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);
  const [isProductInWishlistClient, setIsProductInWishlistClient] = useState(false); // State for client-side wishlist status

  useEffect(() => {
    setMounted(true);
    // Set initial wishlist status after component mounts on the client
    setIsProductInWishlistClient(isInWishlist(product.id));
  }, [isInWishlist, product.id]);

  const handleWishlistToggle = () => {
    // Use the client-side state for the toggle logic
    if (isProductInWishlistClient) {
      removeFromWishlist(product.id);
    } else {
      const numericPrice = parseFloat(product.price.replace(/[^0-9.-]+/g,""));
      addToWishlist({ ...product, price: numericPrice, inStock: true, quantity: 1 });
    }
    // Update the client-side state immediately after toggle
    setIsProductInWishlistClient(isInWishlist(product.id));
  };

  const baseClassName = "absolute top-2 right-2 p-2 rounded-full bg-white shadow-md transition-colors duration-200";

  // Server-side render will use these default values
  const serverClassName = `${baseClassName} text-gray-400 hover:text-red-500`;
  const serverAriaLabel = "Add to wishlist";
  const serverHeartFill = "none";

  // Client-side render will use these dynamic values based on isProductInWishlistClient
  const clientClassName = `${baseClassName} ${isProductInWishlistClient ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-red-500"}`;
  const clientAriaLabel = isProductInWishlistClient ? "Remove from wishlist" : "Add to wishlist";
  const clientHeartFill = isProductInWishlistClient ? "currentColor" : "none";

  return (
    <button
      onClick={handleWishlistToggle}
      // Use mounted state to switch between server and client attributes
      className={mounted ? clientClassName : serverClassName}
      aria-label={mounted ? clientAriaLabel : serverAriaLabel}
    >
      <Heart size={20} fill={mounted ? clientHeartFill : serverHeartFill} />
    </button>
  );
};

export default WishlistButton;
