import React from "react";

export const metadata = {
  title: "Shopping Cart",
  description: "Your shopping cart items",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
