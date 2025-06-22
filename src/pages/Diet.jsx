import React, { useState } from 'react';
import { Check, User, Calendar, Apple, Clock, Utensils, ChevronDown, ChevronRight } from 'lucide-react';

const DietPlanDashboard = () => {
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (dayIndex) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };
  const dietPlans = [
    {
      day: "Monday",
      meals: {
        breakfast: {
          items: ["1 cup 2% greek yogurt", "1/4 cup low-sugar granola", "1/2 cup blueberries"],
          macros: "337 calories, 25g protein, 35g carbs, 11g fat"
        },
        snacks: {
          items: ["1-ounce cheddar cheese", "10 whole grain crackers", "1 cup red seedless grapes"],
          macros: "423 calories, 10g protein, 52g carbs, 20g fat"
        },
        lunch: {
          items: ["3 ounces of tuna mixed with 1 tbsp mayonnaise on 8-inch whole wheat wrap", "1 red bell pepper, sliced"],
          macros: "478 calories, 24g protein, 73g carbs, 13g fat"
        },
        dinner: {
          items: ["5 ounces chicken breast coated in 1 tbsp pesto, baked", "1 cup whole wheat pasta mixed with 1 tbsp pesto", "6 asparagus spears mixed with 1 tbsp olive oil, grilled"],
          macros: "497 calories, 31g protein, 39g carbs, 24g fat"
        }
      }
    },
    {
      day: "Tuesday",
      meals: {
        breakfast: {
          items: ["One slice 100% whole wheat bread", "1/2 avocado", "2 fried eggs"],
          macros: "505 calories, 18g protein, 49g carbs, 28g fat"
        },
        snacks: {
          items: ["15 cherries", "1/4 cup almonds"],
          macros: "284 calories, 9g protein, 27g carbs, 18g fat"
        },
        lunch: {
          items: ["Black bean and corn quesadilla with 1/2 cup black beans, 1/3 cup corn kernels, and 1/4 cup shredded cheddar cheese on 8-inch whole wheat tortilla", "1/4 cup salsa and 1/4 cup guacamole"],
          macros: "513 calories, 22g protein, 60g carbs, 23g fat"
        },
        dinner: {
          items: ["Turkey burger on 100% whole wheat bun with lettuce, tomato, and 2 tsp ketchup", "1 zucchini sliced into spears, roasted with 1 tbsp olive oil", "1/2 regular potato, sliced into french fries and baked with 1 tbsp olive oil"],
          macros: "525 calories, 39g protein, 40g carbs, 23g fat"
        }
      }
    },
    {
      day: "Wednesday",
      meals: {
        breakfast: {
          items: ["1 cup oatmeal cooked in water", "2 tbsp peanut butter", "1/2 cup blueberries"],
          macros: "452 calories, 17g protein, 47g carbs, 25g fat"
        },
        snacks: {
          items: ["4 slices of dried mango", "Protein shake: 1 scoop vanilla whey protein powder mixed with 1 cup unsweetened vanilla almond milk"],
          macros: "452 calories, 17g protein, 47g carbs, 25g fat"
        },
        lunch: {
          items: ["Tuna melt with 4 ounces of canned tuna mixed with 1/4 avocado, 1 slice of cheese, and slice of tomato on two slices of 100% whole wheat bread"],
          macros: "507 calories, 43g protein, 34g carbs, 22g fat"
        },
        dinner: {
          items: ["3 ounces shredded chicken, 1 ounce shredded cheddar cheese quesadilla in 8-inch whole wheat tortilla"],
          macros: "450 calories, 32g protein, 25g carbs, 25g fat"
        }
      }
    },
    {
      day: "Thursday",
      meals: {
        breakfast: {
          items: ["One slice 100% whole wheat bread", "1/4 cup low-sugar granola", "1/2 cup blueberries"],
          macros: "337 calories, 25g protein, 35g carbs, 11g fat"
        },
        snacks: {
          items: ["1 cup 2% Greek yogurt", "1/2 cup raspberries", "3/4 cup high-fiber cereal"],
          macros: "271 calories, 24g protein, 53g carbs, 5g fat"
        },
        lunch: {
          items: ["Salad with 1/2 cup chickpeas, 1/4 cup olives, 1/4 cup feta cheese, tomatoes, cucumbers, and 2 tbsp balsamic vinaigrette dressing", "One 6-inch 100% whole wheat pita bread"],
          macros: "554 calories, 21g protein, 73g carbs, 21g fat"
        },
        dinner: {
          items: ["4 ounces grilled salmon", "1 medium baked sweet potato"],
          macros: "483 calories, 29g protein, 29g carbs, 28g fat"
        }
      }
    },
    {
      day: "Friday",
      meals: {
        breakfast: {
          items: ["One small apple", "1 tbsp peanut butter", "One 7-ounce container 2% Greek yogurt"],
          macros: "318 calories, 24g protein, 32g carbs, 12g fat"
        },
        snacks: {
          items: ["Two slices of 100% whole wheat toast", "1/2 avocado", "2 poached eggs"],
          macros: "465 calories, 23g protein, 37g carbs, 26g fat"
        },
        lunch: {
          items: ["1 1/2 cups lentil pasta with 1/2 cup tomato sauce, 1/2 zucchini chopped and sauteed in 1 tbsp olive oil, and 2 tbsp parmesan cheese", "4 ounces baked chicken breast"],
          macros: "573 calories, 50g protein, 42g carbs, 24g fat"
        },
        dinner: {
          items: ["4 ounces baked chicken breast with vegetables"],
          macros: "400 calories, 35g protein, 25g carbs, 18g fat"
        }
      }
    },
    {
      day: "Saturday",
      meals: {
        breakfast: {
          items: ["1 cup 2% Greek yogurt", "1/4 cup granola", "1/2 cup blueberries"],
          macros: "337 calories, 25g protein, 35g carbs, 11g fat"
        },
        snacks: {
          items: ["100% whole wheat 6-inch pita bread", "1/4 cup hummus"],
          macros: "265 calories, 10g protein, 42g carbs, 6g fat"
        },
        lunch: {
          items: ["1 tbsp whole grain mustard, slice of tomato, and lettuce leaf", "1 ounce slice cheddar cheese"],
          macros: "350 calories, 18g protein, 19g carbs, 24g fat"
        },
        dinner: {
          items: ["1 cup rice noodle", "1/2 cup snow peas", "2 tbsp peanut sauce"],
          macros: "410 calories, 19g protein, 57g carbs, 12g fat"
        }
      }
    }
  ];

  const benefits = [
    {
      title: "Providing Essential Nutrients",
      description: "Proteins for muscle repair, carbohydrates for energy, healthy fats for hormone production, and vital micronutrients for muscle function.",
      icon: <Apple className="w-6 h-6" />
    },
    {
      title: "Energy Supply",
      description: "Building muscle requires significant energy for workouts and recovery. A balanced diet ensures sustained energy levels.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Optimizing Recovery",
      description: "Post-workout nutrition with protein and carbs helps replenish glycogen stores and provides amino acids for muscle repair.",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "Positive Nitrogen Balance",
      description: "Adequate protein intake ensures sufficient nitrogen for muscle protein synthesis and growth.",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Hormonal Support",
      description: "Diet influences hormone levels important for muscle growth, including insulin, testosterone, and growth hormone.",
      icon: <Utensils className="w-6 h-6" />
    }
  ];

  const MealCard = ({ meal, type, icon }) => (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-gray-800 capitalize group-hover:text-blue-600 transition-colors duration-300">{type}</h4>
      </div>
      <ul className="space-y-2 mb-4">
        {meal.items.map((item, index) => (
          <li key={index} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2 group-hover:text-gray-800 transition-colors duration-300">
            <span className="text-blue-500 mt-1 group-hover:text-blue-600 transition-colors duration-300">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
        <p className="text-sm font-semibold text-gray-800">{meal.macros}</p>
      </div>
    </div>
  );

  const mealIcons = {
    breakfast: <Apple className="w-5 h-5 text-orange-500" />,
    snacks: <Clock className="w-5 h-5 text-green-500" />,
    lunch: <Utensils className="w-5 h-5 text-blue-500" />,
    dinner: <User className="w-5 h-5 text-purple-500" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
               Diet Plan for Muscle Building
            </h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl font-semibold text-gray-700">By</span>
              <span className="text-xl font-bold text-blue-600">Flex.Fitness</span>
            </div>
            {/* <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="font-medium">Medically Reviewed by</span>
              <span className="font-bold text-blue-600">DR. Prasant</span>
              <Check className="w-5 h-5 text-green-500" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Why Diet is Critical Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Diet is Critical for Muscle Building?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Diet Plan */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Sample 6-Day Meal Plan for Muscle Gain
          </h2>
        </div>

        <div className="space-y-4">
          {dietPlans.map((plan, planIndex) => (
            <div key={planIndex} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
              {/* Day Header - Clickable */}
              <div 
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
                onClick={() => toggleDay(planIndex)}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {plan.day}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {expandedDay === planIndex ? 'Hide meals' : 'View meals'}
                  </span>
                  <div className="p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-all duration-300">
                    {expandedDay === planIndex ? (
                      <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                expandedDay === planIndex 
                  ? 'max-h-[2000px] opacity-100' 
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {Object.entries(plan.meals).map(([mealType, meal]) => (
                        <MealCard
                          key={mealType}
                          meal={meal}
                          type={mealType}
                          icon={mealIcons[mealType]}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Body?</h3>
          <p className="text-lg opacity-90">
            Follow this comprehensive 6-day meal plan and watch your muscle-building goals become reality!
          </p>
        </div>
      </div>
    </div>
  );
};        

export default DietPlanDashboard;