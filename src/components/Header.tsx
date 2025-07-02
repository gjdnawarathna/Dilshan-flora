import React, { useState } from 'react';
import { Flower, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import AuthModal from './AuthModal';
import CartModal from './CartModal';

const Header: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { totalItems } = useCart();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm border border-white/20">
                <Flower className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Dilshan Flora
                </h1>
                <p className="text-xs text-gray-600">Sri Lankan Flower Shop</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart */}
              <button
                onClick={() => setShowCartModal(true)}
                className="relative p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* User */}
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700 font-medium">
                    Hi, {user?.firstName}
                  </span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200 hover:scale-105"
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">Login</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/10 border-t border-white/20">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Products
              </a>
              <a href="#about" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">
                Contact
              </a>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <button
                  onClick={() => setShowCartModal(true)}
                  className="flex items-center space-x-2 p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                >
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  <span>Cart ({totalItems})</span>
                </button>

                {isAuthenticated ? (
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
      
      {showCartModal && (
        <CartModal onClose={() => setShowCartModal(false)} />
      )}
    </>
  );
};

export default Header;