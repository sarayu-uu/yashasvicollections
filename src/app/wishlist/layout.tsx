import React from "react";

export const metadata = {
  title: "Wishlist",
  description: "Your wishlisted items",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
