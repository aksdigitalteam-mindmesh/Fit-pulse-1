import React from 'react';

interface Meal {
  name: string;
  calories: number;
}

interface DailyDietProps {
  day: string;
  meals: Record<string, Meal>;
}

const DailyDiet: React.FC<DailyDietProps> = ({ day, meals }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-semibold mb-4">{day}</h3>
      <ul>
        {Object.keys(meals).map((mealType) => (
          <li key={mealType} className="mb-2 p-2 bg-gray-700 rounded-md">
            <p className="text-lg font-medium capitalize">{mealType}</p>
            <p>{meals[mealType].name} - {meals[mealType].calories} calories</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyDiet;
