import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('si-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert('Please login to checkout');
      return;
    }
    
    // Simple checkout simulation
    alert('Thank you for your order! Your flowers will be delivered soon.');
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-hidden">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-pink-600" />
              <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto max-h-96 p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 text-sm">Add some beautiful flowers to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                      <p className="text-gray-600 text-xs">{item.category}</p>
                      <p className="font-bold text-pink-600 text-sm">{formatPrice(item.price)}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      
                      <span className="w-8 text-center font-medium text-gray-800">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 rounded-lg bg-red-100/50 hover:bg-red-200/50 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-800">Total:</span>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  {isAuthenticated ? 'Checkout' : 'Login to Checkout'}
                </button>
                
                <button
                  onClick={() => clearCart()}
                  className="w-full py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 font-medium hover:bg-white/30 transition-all duration-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;