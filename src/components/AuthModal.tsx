import React, { useState } from 'react';
import { X, Eye, EyeOff, Flower } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });

  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let success = false;
      
      if (isLogin) {
        success = await login(formData.email, formData.password);
        if (!success) {
          setError('Invalid email or password');
        }
      } else {
        if (!formData.firstName || !formData.lastName) {
          setError('Please fill in all required fields');
          setLoading(false);
          return;
        }
        success = await register(formData);
        if (!success) {
          setError('Email already exists or registration failed');
        }
      }

      if (success) {
        onClose();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                <Flower className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {isLogin ? 'Welcome Back' : 'Join Dilshan Flora'}
                </h2>
                <p className="text-sm text-gray-600">
                  {isLogin ? 'Sign in to your account' : 'Create your account'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-200"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required={!isLogin}
                  className="px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-200"
                />
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-200"
            />

            {!isLogin && (
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-200"
              />
            )}

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 outline-none transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-white/20 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 text-gray-600" />
                ) : (
                  <Eye className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-100/50 border border-red-200/50 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setFormData({
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                  });
                }}
                className="ml-1 text-pink-600 font-medium hover:text-pink-700 transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;