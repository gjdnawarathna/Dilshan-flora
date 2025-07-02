import React from 'react';
import { Flower, Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-emerald-400 to-pink-400 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20">
                <Flower className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Dilshan Flora
                </h3>
                <p className="text-sm text-gray-300">Sri Lankan Flower Shop</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Bringing the beauty of Sri Lankan gardens to your doorstep. We specialize in fresh, 
              handcrafted floral arrangements that celebrate life's special moments.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105">
                <Facebook className="w-5 h-5 text-blue-400" />
              </button>
              <button className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105">
                <Instagram className="w-5 h-5 text-pink-400" />
              </button>
              <button className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105">
                <Twitter className="w-5 h-5 text-blue-300" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-pink-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Care Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">+94 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">hello@dilshanflora.lk</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
                <span className="text-gray-300">
                  123 Flower Street<br />
                  Colombo 03, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 Dilshan Flora. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-400 mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>for flower lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;