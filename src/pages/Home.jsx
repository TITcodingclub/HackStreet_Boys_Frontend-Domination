import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, ArrowRight, Zap, Target, Users, Award, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-black via-gray-900 to-black opacity-80'
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-90'
        }`}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-indigo-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-slate-500 rounded-full animate-ping opacity-50" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className={`text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 animate-pulse ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white via-blue-500 to-cyan-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent'
          }`}>
            TRANSFORM
            <br />
            <span className="text-3xl sm:text-5xl md:text-7xl">YOUR BODY</span>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Unleash your potential with cutting-edge workouts, expert trainers, and revolutionary fitness technology
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/signup"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
            >
              <span className="flex items-center space-x-2">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>START YOUR JOURNEY</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            {/* <button className={`group flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-full font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'border-gray-600 hover:border-blue-500 hover:bg-blue-500/10'
                : 'border-gray-400 hover:border-blue-500 hover:bg-blue-500/10'
            }`}>
              <Play className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
              <span>WATCH TRAILER</span>
            </button> */}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center max-w-md mx-auto">
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 group-hover:scale-110 transition-transform">50K+</div>
              <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Members</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform">200+</div>
              <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Trainers</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl sm:text-3xl font-bold text-indigo-500 group-hover:scale-110 transition-transform">24/7</div>
              <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Access</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-gray-400' : 'border-gray-600'
          }`}>
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'
            }`}>
              Why Choose FlexFitness?
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Experience the future of fitness with our revolutionary approach to health and wellness
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Precision Training", desc: "AI-powered workouts tailored to your unique body and goals", link: "/workout" },
              { icon: Users, title: "Expert Community", desc: "Connect with world-class trainers and motivated members", link: "/trainer" },
              { icon: Award, title: "Proven Results", desc: "Track your transformation with advanced analytics and metrics", link: "/tracker" }
            ].map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500'
                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg'
                }`}
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'
                    : 'bg-gradient-to-br from-blue-500/5 to-cyan-400/5'
                }`}></div>
                <div className="relative z-10">
                  <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                  <p className={`leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{feature.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-slate-900 to-gray-900'
          : 'bg-gradient-to-r from-gray-100 to-gray-200'
      }`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Members", color: "text-blue-500" },
              { number: "200+", label: "Expert Trainers", color: "text-cyan-400" },
              { number: "1M+", label: "Workouts Completed", color: "text-indigo-500" },
              { number: "98%", label: "Success Rate", color: "text-slate-400" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className={`text-sm sm:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'
            }`}>
              Success Stories
            </h2>
            <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Real transformations from real people
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", result: "Lost 30 lbs in 3 months", quote: "FlexFitness changed my life completely!" },
              { name: "Mike R.", result: "Gained 15 lbs muscle", quote: "The trainers here are absolutely amazing." },
              { name: "Lisa K.", result: "Ran first marathon", quote: "Achieved goals I never thought possible." }
            ].map((testimonial, index) => (
              <div key={index} className={`group p-6 rounded-xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500'
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg'
              }`}>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className={`mb-4 italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>"{testimonial.quote}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-blue-500 text-sm">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 relative">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-400/20'
            : 'bg-gradient-to-r from-blue-500/10 to-cyan-400/10'
        }`}></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'
          }`}>
            Ready to Transform?
          </h2>
          <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join thousands who have already transformed their lives. Your journey starts now.
          </p>
          
          <Link 
            to="/signup"
            className="group relative inline-flex items-center space-x-3 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50"
          >
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
            <span>JOIN FLEXFITNESS TODAY</span>
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform" />
          </Link>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Rated 4.9/5 by 10,000+ members
            </span>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;