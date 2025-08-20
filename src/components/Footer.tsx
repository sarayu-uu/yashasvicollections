import React from 'react';
import { Instagram, Facebook, Youtube, Pin, X, MessageCircle, Video } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001144] text-[#f8f8f8] py-12 px-4 font-playfair">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left">
        {/* Designer Wear */}
        <div>
          <h3 className="font-semibold text-sm mb-4 uppercase">Designer Wear</h3>
          <ul className="text-xs space-y-2">
            <li><a href="#" className="hover:underline">Salwar Kameez</a></li>
            <li><a href="#" className="hover:underline">Sarees</a></li>
            <li><a href="#" className="hover:underline">Lehenga</a></li>
            <li><a href="#" className="hover:underline">Gowns</a></li>
            <li><a href="#" className="hover:underline">Kidswear</a></li>
            <li><a href="#" className="hover:underline">Saree Blouse</a></li>
            <li><a href="#" className="hover:underline">Kurtis</a></li>
            <li><a href="#" className="hover:underline">Indowestern Styles</a></li>
            <li><a href="#" className="hover:underline">Mens</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">KALKI Influencers</a></li>
            <li><a href="#" className="hover:underline">Celebrity Wear</a></li>
            <li><a href="#" className="hover:underline">Bridal Wedding Dresses</a></li>
            <li><a href="#" className="hover:underline">Zayra - LFW</a></li>
            <li><a href="#" className="hover:underline">Inara - LFW II</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-sm mb-4 uppercase">About Us</h3>
          <ul className="text-xs space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Web Stories</a></li>
            <li><a href="#" className="hover:underline">Testimonial</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Lookbook</a></li>
            <li><a href="#" className="hover:underline">Our Stores</a></li>
            <li><a href="#" className="hover:underline">KALKI Fashion Show</a></li>
            <li><a href="#" className="hover:underline">Video Call Appointment</a></li>
            <li><a href="#" className="hover:underline">Buying Guide</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold text-sm mb-4 uppercase">Policies</h3>
          <ul className="text-xs space-y-2">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy For APP</a></li>
            <li><a href="#" className="hover:underline">Payment Policy</a></li>
            <li><a href="#" className="hover:underline">FAQ's</a></li>
            <li><a href="#" className="hover:underline">Customization Charges</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
            <li><a href="#" className="hover:underline">Grievances</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold text-sm mb-4 uppercase">My Account</h3>
          <ul className="text-xs space-y-2">
            <li><a href="#" className="hover:underline">Shopping Bag</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Order History</a></li>
            <li><a href="#" className="hover:underline">Order Tracking</a></li>
            <li><a href="#" className="hover:underline">Buy in bulk</a></li>
          </ul>
        </div>

        {/* Right Section: Payment, App, Social, Contact */}
        <div className="col-span-1 md:col-span-1 md:ml-auto">
          {/* Safe & Secure Payment */}
          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-4 uppercase">Safe & Secure Payment</h3>
            <div className="grid grid-cols-3 gap-2 items-center justify-center md:justify-start">
              {/* Payment icons - using simple text for now */}
              <div className="h-8 w-16 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">Card</div>
              <div className="h-8 w-16 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">Visa</div>
              <div className="h-8 w-16 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">Cash</div>
              <div className="h-8 w-16 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">UPI</div>
              <div className="h-8 w-16 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">RuPay</div>
              <div className="h-8 w-16 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">Amex</div>
            </div>
          </div>

          {/* Experience Kalki App on Mobile */}
          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-4 uppercase">Experience Kalki App on Mobile</h3>
            <div className="flex space-x-2 justify-center md:justify-start">
              {/* Placeholder for app store icons - using simple text for now */}
              <div className="h-10 w-28 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">Google Play</div>
              <div className="h-10 w-28 flex items-center justify-center text-xs border border-[#f8f8f8] rounded">App Store</div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-4 uppercase">Follow Us</h3>
            <div className="flex space-x-4 text-xl text-white justify-center md:justify-start">
              {/* Social media icons */}
              <a href="#" className="hover:opacity-75 transition-opacity duration-200"><Instagram size={20} /></a>
              <a href="#" className="hover:opacity-75 transition-opacity duration-200"><Facebook size={20} /></a>
              <a href="#" className="hover:opacity-75 transition-opacity duration-200"><MessageCircle size={20} /></a> {/* WhatsApp */}
              <a href="#" className="hover:opacity-75 transition-opacity duration-200"><Youtube size={20} /></a>
              <a href="#" className="hover:opacity-75 transition-opacity duration-200"><Pin size={20} /></a>
              <a href="#" className="hover:opacity-75 transition-opacity duration-200"><X size={20} /></a>
            </div>
          </div>

          {/* Get In Touch / Email Us On */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="font-semibold text-sm mb-2 uppercase">Get In Touch</h3>
              <p className="text-xs">1111111111</p>
            </div>
            <div className="mt-4 md:mt-0 md:ml-8">
              <h3 className="font-semibold text-sm mb-2 uppercase">Email Us On</h3>
              <p className="text-xs">fake@email.com</p>
              {/* Removed Live Chat and Live Shopping buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll to top button - assuming it's a fixed element, not part of the footer content flow */}
      {/* <button className="fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      </button> */}
    </footer>
  );
};

export default Footer;
