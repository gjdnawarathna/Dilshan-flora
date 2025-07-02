import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

interface ProductCardProps {
  product: Product;
  onAuthRequired: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAuthRequired }) => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      onAuthRequired();
      return;
    }
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('si-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Favorite Button */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/40 transition-all duration-200 opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-pink-600" />
        </button>

        {/* Stock Status */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            product.inStock 
              ? 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30' 
              : 'bg-red-500/20 text-red-700 border border-red-500/30'
          } backdrop-blur-sm`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-purple-600 bg-purple-100/50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {formatPrice(product.price)}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              product.inStock
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;