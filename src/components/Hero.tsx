import React from 'react';
import { Sparkles, Heart, Gift } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-emerald-50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-emerald-500/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-400/30 backdrop-blur-sm animate-pulse"></div>
      <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-400/30 to-pink-400/30 backdrop-blur-sm animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400/30 to-emerald-400/30 backdrop-blur-sm animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-gray-700">Premium Sri Lankan Flowers</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Beautiful Blooms
            </span>
            <span className="block text-gray-800 mt-2">
              For Every Occasion
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the finest collection of fresh flowers, handcrafted arrangements, and tropical blooms 
            from the heart of Sri Lanka. Each bouquet tells a story of love, celebration, and natural beauty.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a 
            href="#products"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Shop Now</span>
            <Heart className="w-5 h-5" />
          </a>
          
          <button className="px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <Gift className="w-5 h-5" />
            <span>Gift Cards</span>
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fresh Daily</h3>
            <p className="text-gray-600 text-sm">Hand-picked fresh flowers delivered daily from local gardens</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-pink-600/20 flex items-center justify-center mb-4 mx-auto">
              <Gift className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Arrangements</h3>
            <p className="text-gray-600 text-sm">Personalized bouquets crafted for your special moments</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500/20 to-emerald-600/20 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Same Day Delivery</h3>
            <p className="text-gray-600 text-sm">Express delivery across Colombo and surrounding areas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;