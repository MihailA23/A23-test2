
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-800 to-green-900 text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 text-black z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src="/A23_black.png" alt="Logo" className="h-8" />
          <nav className="space-x-6 font-medium">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Elevate Your Everyday Carry</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Premium gear for the modern man — classy leather or rugged tactical.
        </p>
        <Button className="bg-black text-white hover:bg-gray-900">Browse Collection</Button>
      </section>

      {/* Product Section */}
      <section id="shop" className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-white text-black">
              <CardContent className="p-4">
                <div className="h-48 bg-gray-200 mb-4"></div>
                <h3 className="font-semibold text-xl mb-2">Product {item}</h3>
                <p className="text-gray-700 mb-2">A classy or tactical item description goes here.</p>
                <span className="block font-bold mb-4">$49.99</span>
                <Button className="w-full bg-green-700 text-white hover:bg-green-800">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-12 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          At A23, we craft high-quality everyday gear for men who value both form and function. Whether you're heading into the boardroom or the backwoods, we've got a piece that fits your lifestyle.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white text-black" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white text-black" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-white text-black h-32"></textarea>
          <Button className="bg-black text-white hover:bg-gray-900">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} A23 Gear. All rights reserved.
      </footer>
    </div>
  );
}
