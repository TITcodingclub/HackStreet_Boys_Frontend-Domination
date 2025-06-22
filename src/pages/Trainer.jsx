import React, { useState } from 'react';
import { Star, Users, Award, Clock, MessageCircle, Calendar, Filter, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Trainer = () => {
  const { isDarkMode } = useTheme();
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const trainers = [
    {
      id: 1,
      name: 'Alex Johnson',
      specialty: 'Strength Training',
      rating: 4.9,
      experience: '8 years',
      clients: 120,
      price: '$80/hour',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Certified personal trainer specializing in strength training and muscle building.',
      certifications: ['NASM-CPT', 'ACSM-CPT', 'Nutrition Specialist']
    },
    {
      id: 2,
      name: 'Sarah Williams',
      specialty: 'Yoga & Flexibility',
      rating: 4.8,
      experience: '6 years',
      clients: 95,
      price: '$60/hour',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Yoga instructor with expertise in flexibility training and mindfulness.',
      certifications: ['RYT-500', 'Yin Yoga', 'Meditation Teacher']
    },
    {
      id: 3,
      name: 'Mike Chen',
      specialty: 'Cardio & HIIT',
      rating: 4.9,
      experience: '5 years',
      clients: 150,
      price: '$75/hour',
      image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'High-intensity interval training specialist focused on cardiovascular fitness.',
      certifications: ['HIIT Specialist', 'Cardio Trainer', 'Sports Nutrition']
    },
    {
      id: 4,
      name: 'Emma Davis',
      specialty: 'Weight Loss',
      rating: 4.7,
      experience: '7 years',
      clients: 180,
      price: '$70/hour',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Weight loss coach with a holistic approach to fitness and nutrition.',
      certifications: ['Weight Management', 'Nutritionist', 'Lifestyle Coach']
    },
    {
      id: 5,
      name: 'David Rodriguez',
      specialty: 'Bodybuilding',
      rating: 4.8,
      experience: '10 years',
      clients: 85,
      price: '$90/hour',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Competitive bodybuilder and trainer with extensive muscle building expertise.',
      certifications: ['IFBB Pro', 'Advanced Nutrition', 'Contest Prep']
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      specialty: 'Pilates',
      rating: 4.9,
      experience: '9 years',
      clients: 110,
      price: '$65/hour',
      image: 'https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Pilates instructor focusing on core strength and body alignment.',
      certifications: ['Pilates Instructor', 'Reformer Specialist', 'Injury Prevention']
    }
  ];

  const specialties = ['All', 'Strength Training', 'Yoga & Flexibility', 'Cardio & HIIT', 'Weight Loss', 'Bodybuilding', 'Pilates'];

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSpecialty = selectedSpecialty === 'All' || trainer.specialty === selectedSpecialty;
    const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trainer.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'
          }`}>
            Expert Trainers
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Connect with certified fitness professionals who will guide you to success
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Search trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white transform scale-105'
                    : isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300 shadow-sm'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrainers.map((trainer) => (
            <div key={trainer.id} className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg'
            }`}>
              {/* Trainer Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{trainer.rating}</span>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {trainer.name}
                  </h3>
                  <p className="text-blue-500 font-medium mb-2">{trainer.specialty}</p>
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {trainer.bio}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {trainer.experience}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Experience
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {trainer.clients}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Clients
                    </div>
                  </div>
                  <div>
                    <div className={`text-lg font-bold text-green-500`}>
                      {trainer.price}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Rate
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {trainer.certifications.slice(0, 2).map((cert, index) => (
                      <span key={index} className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {cert}
                      </span>
                    ))}
                    {trainer.certifications.length > 2 && (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-400'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        +{trainer.certifications.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Book Session
                  </button>
                  <button className={`p-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'border-gray-700 hover:bg-gray-800 text-gray-400 hover:text-white'
                      : 'border-gray-300 hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                  }`}>
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTrainers.length === 0 && (
          <div className="text-center py-12">
            <div className={`text-6xl mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
              🔍
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              No trainers found
            </h3>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className={`p-8 rounded-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-800'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Start Your Journey?
            </h2>
            <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Connect with a certified trainer today and transform your fitness goals into reality
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Find Your Perfect Trainer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;