import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Timer, Dumbbell, Target, Trophy, Plus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Workout = () => {
  const { isDarkMode } = useTheme();
  const [activeWorkout, setActiveWorkout] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [customWorkouts, setCustomWorkouts] = useState([]);

  const workoutPrograms = [
    {
      id: 1,
      name: 'HIIT Cardio Blast',
      duration: '20 min',
      difficulty: 'High',
      calories: '250-350',
      category: 'Cardio',
      color: 'from-red-500 to-orange-400',
      exercises: [
        { name: 'Jumping Jacks', duration: 45, rest: 15 },
        { name: 'Burpees', duration: 30, rest: 20 },
        { name: 'Mountain Climbers', duration: 45, rest: 15 },
        { name: 'High Knees', duration: 30, rest: 20 },
        { name: 'Squat Jumps', duration: 45, rest: 15 }
      ]
    },
    {
      id: 2,
      name: 'Strength Builder',
      duration: '35 min',
      difficulty: 'Medium',
      calories: '180-280',
      category: 'Strength',
      color: 'from-blue-500 to-cyan-400',
      exercises: [
        { name: 'Push-ups', duration: 60, rest: 30 },
        { name: 'Squats', duration: 60, rest: 30 },
        { name: 'Plank', duration: 45, rest: 15 },
        { name: 'Lunges', duration: 60, rest: 30 },
        { name: 'Deadlifts', duration: 60, rest: 30 }
      ]
    },
    {
      id: 3,
      name: 'Flexibility Flow',
      duration: '25 min',
      difficulty: 'Low',
      calories: '80-120',
      category: 'Flexibility',
      color: 'from-purple-500 to-pink-400',
      exercises: [
        { name: 'Cat-Cow Stretch', duration: 60, rest: 10 },
        { name: 'Downward Dog', duration: 45, rest: 15 },
        { name: 'Pigeon Pose', duration: 60, rest: 10 },
        { name: 'Spinal Twist', duration: 45, rest: 15 },
        { name: 'Child\'s Pose', duration: 60, rest: 10 }
      ]
    },
    {
      id: 4,
      name: 'Core Crusher',
      duration: '15 min',
      difficulty: 'High',
      calories: '150-200',
      category: 'Core',
      color: 'from-green-500 to-teal-400',
      exercises: [
        { name: 'Crunches', duration: 45, rest: 15 },
        { name: 'Russian Twists', duration: 45, rest: 15 },
        { name: 'Leg Raises', duration: 30, rest: 20 },
        { name: 'Bicycle Crunches', duration: 45, rest: 15 },
        { name: 'Dead Bug', duration: 45, rest: 15 }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Low': return 'text-green-500';
      case 'Medium': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const startWorkout = (workout) => {
    setActiveWorkout(workout);
    setCurrentExercise(0);
    setTimer(0);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextExercise = () => {
    if (currentExercise < activeWorkout.exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setTimer(0);
    } else {
      // Workout completed
      setActiveWorkout(null);
      setCurrentExercise(0);
      setIsPlaying(false);
      setTimer(0);
    }
  };

  const resetWorkout = () => {
    setCurrentExercise(0);
    setTimer(0);
    setIsPlaying(false);
  };

  // Timer effect would go here in a real app
  React.useEffect(() => {
    let interval;
    if (isPlaying && activeWorkout) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timer, activeWorkout]);

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
            Workout Programs
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Choose from our expertly designed workout programs for all fitness levels
          </p>
        </div>

        {/* Active Workout */}
        {activeWorkout && (
          <div className={`mb-12 p-6 sm:p-8 rounded-2xl border ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
          }`}>
            <div className="text-center mb-8">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {activeWorkout.name}
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Exercise {currentExercise + 1} of {activeWorkout.exercises.length}
              </p>
            </div>

            {/* Current Exercise */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 bg-gradient-to-r ${activeWorkout.color}`}>
                <Dumbbell className="h-12 w-12 sm:h-16 sm:w-16 text-white" />
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {activeWorkout.exercises[currentExercise].name}
              </h3>
              <div className={`text-4xl sm:text-6xl font-bold mb-4 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </div>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Duration: {activeWorkout.exercises[currentExercise].duration}s | 
                Rest: {activeWorkout.exercises[currentExercise].rest}s
              </p>
            </div>

            {/* Workout Controls */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={togglePlayPause}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                <span>{isPlaying ? 'Pause' : 'Start'}</span>
              </button>
              
              <button
                onClick={nextExercise}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                Next Exercise
              </button>
              
              <button
                onClick={resetWorkout}
                className={`p-3 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                <RotateCcw className="h-5 w-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className={`w-full rounded-full h-2 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}>
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                  style={{ width: `${((currentExercise + 1) / activeWorkout.exercises.length) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Progress
                </span>
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {Math.round(((currentExercise + 1) / activeWorkout.exercises.length) * 100)}%
                </span>
              </div>
            </div>

            {/* Exercise List */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeWorkout.exercises.map((exercise, index) => (
                <div key={index} className={`p-4 rounded-xl border transition-all duration-300 ${
                  index === currentExercise
                    ? 'border-blue-500 bg-blue-500/10'
                    : index < currentExercise
                      ? isDarkMode 
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-green-500 bg-green-50'
                      : isDarkMode 
                        ? 'border-gray-700 bg-gray-800'
                        : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exercise.name}
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {exercise.duration}s work, {exercise.rest}s rest
                      </p>
                    </div>
                    {index < currentExercise && (
                      <div className="text-green-500">
                        <Trophy className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Workout Programs Grid */}
        {!activeWorkout && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {workoutPrograms.map((workout) => (
              <div key={workout.id} className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500'
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg'
              }`}>
                {/* Workout Header */}
                <div className={`p-6 bg-gradient-to-r ${workout.color} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <Target className="h-8 w-8" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">Category</div>
                      <div className="font-semibold">{workout.category}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{workout.name}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center space-x-1">
                      <Timer className="h-4 w-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className={`font-medium ${getDifficultyColor(workout.difficulty)}`}>
                      {workout.difficulty}
                    </div>
                  </div>
                </div>

                {/* Workout Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Estimated Calories
                    </div>
                    <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {workout.calories}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Exercises ({workout.exercises.length})
                    </div>
                    <div className="space-y-1">
                      {workout.exercises.slice(0, 3).map((exercise, index) => (
                        <div key={index} className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          • {exercise.name}
                        </div>
                      ))}
                      {workout.exercises.length > 3 && (
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          +{workout.exercises.length - 3} more exercises
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => startWorkout(workout)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Workout
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Stats */}
        {!activeWorkout && (
          <div className="mt-16 text-center">
            <div className={`p-8 rounded-2xl ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-800'
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'
            }`}>
              <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Ready to Get Started?
              </h2>
              <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Choose a workout program above and start your fitness journey today
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                <div>
                  <div className={`text-2xl font-bold text-blue-500 mb-1`}>
                    {workoutPrograms.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Programs
                  </div>
                </div>
                <div>
                  <div className={`text-2xl font-bold text-cyan-400 mb-1`}>
                    {workoutPrograms.reduce((total, workout) => total + workout.exercises.length, 0)}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Exercises
                  </div>
                </div>
                <div>
                  <div className={`text-2xl font-bold text-indigo-500 mb-1`}>
                    All Levels
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Difficulty
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workout;