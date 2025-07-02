import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthRequired = () => {
    setShowAuthModal(true);
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-emerald-50">
          <Header />
          <main>
            <Hero />
            <ProductGrid onAuthRequired={handleAuthRequired} />
          </main>
          <Footer />
          
          {showAuthModal && (
            <AuthModal onClose={() => setShowAuthModal(false)} />
          )}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;