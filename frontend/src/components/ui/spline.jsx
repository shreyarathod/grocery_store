import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShoppingCart, Leaf, Clock, Shield, ChevronRight,ShoppingBasket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Splinecomp() {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <ShoppingBasket className="w-6 h-6 " />
            <span className="text-2xl font-bold">FreshMart</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <ShoppingCart className="h-6 w-6 hover:text-green-200 cursor-pointer" />
            <div className="flex space-x-2">
              <button className="bg-white text-green-600 px-4 py-1 rounded-md hover:bg-green-100 transition duration-300 " onClick={()=>navigate('/')}>
                Login
              </button>
             
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Spline - RESPONSIVE LAYOUT */}
      <section className="bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 mb-4">
              Fresh Groceries Delivered to Your Door
            </h1>
            <p className="text-base sm:text-lg mb-6 text-gray-600 max-w-md">
              Shop organic produce, everyday essentials, and more with convenient delivery options.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium flex items-center transition duration-300" onClick={()=>navigate('/')}>
                Shop Now <ChevronRight className="ml-1 h-5 w-5" />
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 order-1 md:order-2 mb-6 md:mb-0">
            {/* Enhanced responsive Spline wrapper */}
            <div className="w-full h-full relative">
              <div className="absolute inset-0">
                <Spline scene="https://prod.spline.design/llV4h0qkHPXBUSpW/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">Why Choose Freshmart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">100% Organic</h3>
              <p className="text-gray-600">We provide fresh, organic produce sourced from local farmers.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your groceries delivered within hours of placing your order.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Contactless delivery and secure payment options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-2">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12">Explore our bestselling organic products</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Fresh Apples", price: "Rs.20", img: "public/item-apple.jpg" },
              { name: "Organic Spinach", price: "Rs.40", img: "public/item-spinach.webp" },
              { name: "Farm Eggs", price: "Rs.30", img: "public/download.jpeg" },
              { name: "Whole Wheat Bread", price: "Rs.45", img: "/public/item-bread.jpg" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-green-700">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">{product.price}</span>
                    <button className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition duration-300">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-green-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for weekly deals and updates</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-100 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBasket className="h-6 w-6" />
                <span className="text-xl font-bold">FRESHMART</span>
              </div>
              <p className="text-green-200">Your one-stop shop for fresh, organic groceries.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">Home</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Products</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">FAQs</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Returns</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Track Order</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-green-200">
                <p>123 Green Street</p>
                <p>Fresh City, Mumbai</p>
                <p className="mt-2">support@freshmart.com</p>
                <p>(123) 456-7890</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} Freshmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}