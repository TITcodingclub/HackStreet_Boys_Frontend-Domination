import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Dumbbell, ArrowRight, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Signup = () => {
  const { isDarkMode } = useTheme();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    fitnessGoal: 'weight-loss',
    experience: 'beginner'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const features = [
    'Personalized workout plans',
    'Expert trainer guidance',
    'Nutrition tracking',
    'Progress analytics',
    '24/7 support community',
    'Mobile app access'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Dumbbell className="h-8 w-8 text-blue-500" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    FlexFitness
                  </span>
                </div>
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
                }`}>
                  {isLogin ? 'Welcome Back!' : 'Start Your Fitness Journey'}
                </h1>
                <p className={`text-lg sm:text-xl mb-8 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {isLogin 
                    ? 'Sign in to continue your transformation and access your personalized fitness programs.'
                    : 'Join thousands of members who have transformed their lives with our expert-designed programs.'
                  }
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  What you'll get:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">50K+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Active Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">200+</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Expert Trainers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-500 mb-1">98%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-xl'
            }`}>
              {/* Form Header */}
              <div className="text-center mb-8">
                <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {isLogin ? 'Sign In' : 'Create Account'}
                </h2>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {isLogin 
                    ? 'Enter your credentials to access your account'
                    : 'Fill in your details to get started'
                  }
                </p>
              </div>

              {/* Form Toggle */}
              <div className={`flex rounded-lg p-1 mb-6 ${
                isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                    isLogin
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                    !isLogin
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                      : isDarkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field (Sign Up Only) */}
                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="Enter your full name"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Password
                  </label>
                  <div className="relative">
                    <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-12 py-3 rounded-lg border transition-colors ${
                        isDarkMode 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                        isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (Sign Up Only) */}
                {!isLogin && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                        placeholder="Confirm your password"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {/* Fitness Goal (Sign Up Only) */}
                {!isLogin && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Fitness Goal
                      </label>
                      <select
                        name="fitnessGoal"
                        value={formData.fitnessGoal}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      >
                        <option value="weight-loss">Weight Loss</option>
                        <option value="muscle-gain">Muscle Gain</option>
                        <option value="endurance">Endurance</option>
                        <option value="strength">Strength</option>
                        <option value="flexibility">Flexibility</option>
                      </select>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Experience Level
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                            : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Remember Me / Forgot Password */}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-500 border-gray-600 rounded focus:ring-blue-500"
                      />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Remember me
                      </span>
                    </label>
                    <button
                      type="button"
                      className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Terms (Sign Up Only) */}
                {!isLogin && (
                  <p className={`text-xs text-center ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    By creating an account, you agree to our{' '}
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      Terms of Service
                    </button>{' '}
                    and{' '}
                    <button className="text-blue-500 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </button>
                  </p>
                )}
              </form>

              {/* Social Login */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className={`w-full border-t ${
                      isDarkMode ? 'border-gray-700' : 'border-gray-300'
                    }`}></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className={`px-2 ${
                      isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-500'
                    }`}>
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className={`w-full py-2 px-4 border rounded-lg font-medium transition-colors ${
                    isDarkMode 
                      ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}>
                    Google
                  </button>
                  <button className={`w-full py-2 px-4 border rounded-lg font-medium transition-colors ${
                    isDarkMode 
                      ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}>
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;