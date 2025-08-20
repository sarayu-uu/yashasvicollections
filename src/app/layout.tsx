import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Import Navbar
import { WishlistProvider } from "../context/WishlistContext";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashaswi Collections - Celebrate Tradition with Elegance",
  description: "Discover timeless sarees, handcrafted jewellery, and organic essentials designed to bring heritage and simplicity into your everyday life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <WishlistProvider>
          <CartProvider> {/* Wrap children with CartProvider */}
            <Navbar /> {/* Add Navbar here */}
            {children}
          </CartProvider>
        </WishlistProvider>
        <Footer />
      </body>
    </html>
  );
}
