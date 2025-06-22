import React, { useState } from 'react';
import { Activity, Target, TrendingUp, Calendar, Clock, Zap, Award, Plus, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Tracker = () => {
  const { isDarkMode } = useTheme();
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Morning Cardio', duration: '30 min', calories: 250, date: '2025-01-01' },
    { id: 2, name: 'Strength Training', duration: '45 min', calories: 180, date: '2025-01-01' },
    { id: 3, name: 'Yoga Session', duration: '60 min', calories: 120, date: '2024-12-31' }
  ]);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [newWorkout, setNewWorkout] = useState({ name: '', duration: '', calories: '' });

  const handleAddWorkout = (e) => {
    e.preventDefault();
    if (newWorkout.name && newWorkout.duration && newWorkout.calories) {
      setWorkouts([
        ...workouts,
        {
          id: Date.now(),
          ...newWorkout,
          calories: parseInt(newWorkout.calories),
          date: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewWorkout({ name: '', duration: '', calories: '' });
      setShowAddForm(false);
    }
  };

  const totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
  const totalWorkouts = workouts.length;
  const avgCalories = Math.round(totalCalories / totalWorkouts);

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
            Fitness Tracker
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Monitor your progress and achieve your fitness goals
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Activity, label: 'Total Workouts', value: totalWorkouts, color: 'blue' },
            { icon: Zap, label: 'Total Calories', value: totalCalories, color: 'cyan' },
            { icon: Target, label: 'Avg Calories', value: avgCalories, color: 'indigo' },
            { icon: Award, label: 'Streak Days', value: '7', color: 'yellow' }
          ].map((stat, index) => (
            <div key={index} className={`group p-6 rounded-2xl border transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 text-${stat.color}-500 group-hover:scale-110 transition-transform`} />
                <TrendingUp className={`h-5 w-5 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Chart */}
        <div className={`p-6 sm:p-8 rounded-2xl border mb-12 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Weekly Progress
          </h2>
          <div className="grid grid-cols-7 gap-2 sm:gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
              const height = Math.random() * 100 + 20;
              return (
                <div key={day} className="text-center">
                  <div className={`mb-2 rounded-t-lg bg-gradient-to-t from-blue-500 to-cyan-400 transition-all duration-300 hover:from-blue-600 hover:to-cyan-500`} 
                       style={{ height: `${height}px` }}></div>
                  <div className={`text-xs sm:text-sm font-medium ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {day}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Workouts */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className={`text-2xl font-bold mb-4 sm:mb-0 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Recent Workouts
            </h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="h-4 w-4" />
              <span>Add Workout</span>
            </button>
          </div>

          {/* Add Workout Form */}
          {showAddForm && (
            <div className={`mb-6 p-4 sm:p-6 rounded-xl border ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Add New Workout
                </h3>
                <button
                  onClick={() => setShowAddForm(false)}
                  className={`p-1 rounded-full hover:bg-gray-700 transition-colors ${
                    isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleAddWorkout} className="grid sm:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Workout name"
                  value={newWorkout.name}
                  onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  required
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., 30 min)"
                  value={newWorkout.duration}
                  onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Calories"
                    value={newWorkout.calories}
                    onChange={(e) => setNewWorkout({ ...newWorkout, calories: e.target.value })}
                    className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Workout List */}
          <div className="space-y-4">
            {workouts.map((workout) => (
              <div key={workout.id} className={`p-4 sm:p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                  : 'bg-white border-gray-200 hover:border-blue-500 shadow-sm'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {workout.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-blue-500" />
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {workout.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="h-4 w-4 text-cyan-400" />
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {workout.calories} cal
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-indigo-500" />
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {workout.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;