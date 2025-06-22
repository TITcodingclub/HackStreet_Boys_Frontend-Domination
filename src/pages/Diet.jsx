import React, { useState } from 'react';
import { Apple, Clock, ChefHat, Target, Plus, Trash2, Heart, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Diet = () => {
  const { isDarkMode } = useTheme();
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  const [customMeals, setCustomMeals] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMeal, setNewMeal] = useState({ name: '', calories: '', protein: '', carbs: '', fats: '' });

  const mealPlans = [
    {
      id: 1,
      name: 'Weight Loss',
      calories: '1500-1800',
      description: 'Balanced nutrition for sustainable weight loss',
      color: 'from-green-500 to-emerald-400',
      icon: Target,
      meals: [
        { name: 'Breakfast', food: 'Greek yogurt with berries', calories: 300, time: '7:00 AM' },
        { name: 'Lunch', food: 'Grilled chicken salad', calories: 450, time: '12:00 PM' },
        { name: 'Dinner', food: 'Baked salmon with vegetables', calories: 400, time: '7:00 PM' },
        { name: 'Snacks', food: 'Apple with almonds', calories: 200, time: '3:00 PM' }
      ]
    },
    {
      id: 2,
      name: 'Muscle Building',
      calories: '2500-3000',
      description: 'High protein intake for muscle growth',
      color: 'from-blue-500 to-cyan-400',
      icon: Zap,
      meals: [
        { name: 'Breakfast', food: 'Protein smoothie with oats', calories: 500, time: '7:00 AM' },
        { name: 'Lunch', food: 'Lean beef with quinoa', calories: 600, time: '12:00 PM' },
        { name: 'Dinner', food: 'Chicken breast with sweet potato', calories: 550, time: '7:00 PM' },
        { name: 'Snacks', food: 'Protein bars and nuts', calories: 400, time: 'Multiple' }
      ]
    },
    {
      id: 3,
      name: 'Maintenance',
      calories: '2000-2200',
      description: 'Balanced nutrition for maintaining current weight',
      color: 'from-purple-500 to-pink-400',
      icon: Heart,
      meals: [
        { name: 'Breakfast', food: 'Whole grain toast with avocado', calories: 350, time: '7:00 AM' },
        { name: 'Lunch', food: 'Turkey wrap with vegetables', calories: 500, time: '12:00 PM' },
        { name: 'Dinner', food: 'Grilled fish with brown rice', calories: 450, time: '7:00 PM' },
        { name: 'Snacks', food: 'Mixed nuts and fruit', calories: 250, time: '3:00 PM' }
      ]
    }
  ];

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (newMeal.name && newMeal.calories) {
      setCustomMeals([...customMeals, { ...newMeal, id: Date.now() }]);
      setNewMeal({ name: '', calories: '', protein: '', carbs: '', fats: '' });
      setShowAddForm(false);
    }
  };

  const removeMeal = (id) => {
    setCustomMeals(customMeals.filter(meal => meal.id !== id));
  };

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
            Nutrition & Diet Plans
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Fuel your body with scientifically designed meal plans for optimal results
          </p>
        </div>

        {/* Meal Plans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mealPlans.map((plan) => (
            <div key={plan.id} className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              isDarkMode 
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-blue-500'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg'
            } ${selectedMealPlan?.id === plan.id ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedMealPlan(plan)}>
              {/* Plan Header */}
              <div className={`p-6 bg-gradient-to-r ${plan.color} text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <plan.icon className="h-8 w-8" />
                  <div className="text-right">
                    <div className="text-2xl font-bold">{plan.calories}</div>
                    <div className="text-sm opacity-90">calories/day</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90">{plan.description}</p>
              </div>

              {/* Plan Details */}
              <div className="p-6">
                <div className="space-y-3">
                  {plan.meals.map((meal, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {meal.name}
                        </div>
                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {meal.food}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {meal.calories} cal
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {meal.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Select Button */}
              <div className="p-6 pt-0">
                <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedMealPlan?.id === plan.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                    : isDarkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  {selectedMealPlan?.id === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Plan Details */}
        {selectedMealPlan && (
          <div className={`p-6 sm:p-8 rounded-2xl border mb-12 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
          }`}>
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Your Selected Plan: {selectedMealPlan.name}
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {selectedMealPlan.meals.map((meal, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200 shadow-sm'
                }`}>
                  <div className="flex items-center space-x-2 mb-3">
                    <ChefHat className="h-5 w-5 text-blue-500" />
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {meal.name}
                    </h3>
                  </div>
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {meal.food}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {meal.calories} cal
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {meal.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Start This Plan
              </button>
            </div>
          </div>
        )}

        {/* Custom Meal Tracker */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className={`text-2xl font-bold mb-4 sm:mb-0 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Custom Meal Tracker
            </h2>
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="h-4 w-4" />
              <span>Add Meal</span>
            </button>
          </div>

          {/* Add Meal Form */}
          {showAddForm && (
            <div className={`mb-6 p-4 sm:p-6 rounded-xl border ${
              isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-300'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Add Custom Meal
              </h3>
              <form onSubmit={handleAddMeal} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Meal name"
                    value={newMeal.name}
                    onChange={(e) => setNewMeal({ ...newMeal, name: e.target.value })}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    required
                  />
                  <input
                    type="number"
                    placeholder="Calories"
                    value={newMeal.calories}
                    onChange={(e) => setNewMeal({ ...newMeal, calories: e.target.value })}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <input
                    type="number"
                    placeholder="Protein (g)"
                    value={newMeal.protein}
                    onChange={(e) => setNewMeal({ ...newMeal, protein: e.target.value })}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                  <input
                    type="number"
                    placeholder="Carbs (g)"
                    value={newMeal.carbs}
                    onChange={(e) => setNewMeal({ ...newMeal, carbs: e.target.value })}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                  <input
                    type="number"
                    placeholder="Fats (g)"
                    value={newMeal.fats}
                    onChange={(e) => setNewMeal({ ...newMeal, fats: e.target.value })}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-lg font-semibold transition-all duration-300"
                  >
                    Add Meal
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Custom Meals List */}
          {customMeals.length > 0 ? (
            <div className="space-y-4">
              {customMeals.map((meal) => (
                <div key={meal.id} className={`p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                    : 'bg-white border-gray-200 hover:border-blue-500 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {meal.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                          {meal.calories} cal
                        </span>
                        {meal.protein && (
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            {meal.protein}g protein
                          </span>
                        )}
                        {meal.carbs && (
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            {meal.carbs}g carbs
                          </span>
                        )}
                        {meal.fats && (
                          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            {meal.fats}g fats
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => removeMeal(meal.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'text-red-400 hover:bg-red-500/20'
                          : 'text-red-500 hover:bg-red-50'
                      }`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Apple className={`h-16 w-16 mx-auto mb-4 ${
                isDarkMode ? 'text-gray-600' : 'text-gray-400'
              }`} />
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No custom meals added yet. Click "Add Meal" to start tracking!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diet;