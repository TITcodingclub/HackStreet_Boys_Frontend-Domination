import React from 'react';
import { Star, Phone, Mail, MapPin } from 'lucide-react';

const GymTrainerPage = () => {
  const trainers = [
    {
      id: 1,
      name: "Om Soni",
      specialty: "Strength Training & Bodybuilding",
      rating: 4.8,
      reviews: 127,
      description: "Certified personal trainer with 8+ years of experience. Specializes in strength training, muscle building, and competition prep.",
      phone: "+917867564534",
      email: "OmSoni@flexfitness.com",
      location: "Floor 1, Zone A",
      image: "https://img.freepik.com/premium-photo/muscular-beard-man-fitness-trainer-smiling-front-background-gym-healthy-lifestyle-sport_100800-26095.jpg?w=2000",
    },
    {
      id: 2,
      name: "Joginder Singh",
      specialty: "Yoga & Flexibility",
      rating: 4.9,
      reviews: 89,
      description: "Yoga instructor and flexibility coach. Helps clients improve mobility, reduce stress, and achieve mind-body balance.",
      phone: "+917867564534",
      email: "JoginderSingh@flexfitness.com",
      location: "Floor 1, Zone B",
      image: "https://th.bing.com/th/id/OIP.Jp-cbv2Ls83vKbpUFt2CYQHaE8",
    },
    {
      id: 3,
      name: "Pawan Sahu",
      specialty: "HIIT & Cardio",
      rating: 4.7,
      reviews: 156,
      description: "High-intensity interval training specialist. Perfect for weight loss, cardiovascular health, and athletic performance.",
      phone: "+917867564534",
      email: "PawanSahu@flexfitness.com",
      location: "Floor 2, Cardio Zone",
      image: "https://thumbs.dreamstime.com/b/indian-young-body-builder-man-fitness-trainer-man-fit-muscular-body-indian-young-body-builder-man-fitness-trainer-167796265.jpg",
    },
    {
      id: 4,
      name: "Neeraj Goyat",
      specialty: "Functional Training",
      rating: 4.8,
      reviews: 94,
      description: "Functional movement specialist focusing on everyday strength, injury prevention, and rehabilitation exercises.",
      phone: "+917867564534",
      email: "NeerajGoyat@flexfitness.com",
      location: "Floor 1, Zone B",
      image: "https://static.vecteezy.com/system/resources/previews/036/780/244/non_2x/ai-generated-dynamic-male-fitness-trainer-ai-generated-photo.jpg",
    },
    {
      id: 5,
      name: "Neeraj Pepsu",
      specialty: "CrossFit & Athletic Training",
      rating: 4.6,
      reviews: 112,
      description: "CrossFit Level 2 trainer with background in athletic performance. Specializes in Olympic lifting and competitive fitness.",
      phone: "+917867564534",
      email: "NeerajPepsu@flexfitness.com",
      location: "Floor 2, Zone 1",
      image: "https://img.freepik.com/premium-photo/smiling-young-indian-man-wearing-sportswear-posing-gym_512242-7506.jpg",
    },
    {
      id: 6,
      name: "Rajat Dalal",
      specialty: "Pilates & Core Strength",
      rating: 4.9,
      reviews: 78,
      description: "Certified Pilates instructor specializing in core strengthening, posture correction, and low-impact fitness routines.",
      phone: "+917867564534",
      email: "RajatDalal@flexfitness.com",
      location: "Floor 2, Zone 2",
      image: "https://img.freepik.com/premium-photo/front-view-mid-body-shot-extremely-handsome-indian-male-model-dressed-as-gymnast-smiling_1078199-771.jpg?w=2000",
    }
  ];

  const renderStars = (rating) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? 'fill-blue-400 text-blue-400'
              : i < rating
              ? 'fill-blue-200 text-blue-200'
              : 'text-gray-600'
          }`}
        />
      ))}
      <span className="text-sm text-gray-400 ml-1">
        {rating} ({trainers.find(t => t.rating === rating)?.reviews} reviews)
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1f1f1f]">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Our Personal Trainers</h1>
          <p className="text-blue-200">Meet our certified fitness professionals ready to help you achieve your goals</p>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="bg-[#2a2a2a] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Trainer Image */}
              <div className="h-48 bg-gray-700 rounded-t-lg overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{trainer.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{trainer.specialty}</p>

                {/* Rating */}
                <div className="mb-4">
                  {renderStars(trainer.rating)}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{trainer.description}</p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>{trainer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{trainer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>{trainer.location}</span>
                  </div>
                </div>

                {/* Book Session Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymTrainerPage;