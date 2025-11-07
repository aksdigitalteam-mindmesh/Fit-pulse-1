import React from 'react';
import CalorieRing from './CalorieRing';

const Dashboard = () => {
  // Mock data for calorie intake and burned calories
  const calorieIntake = 1500;
  const burnedCalorie = 300;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center py-8">Fit-Pulse</h1>
      <div className="flex justify-center mb-8">
        <CalorieRing calorieIntake={calorieIntake} burnedCalorie={burnedCalorie} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Breakfast</h2>
          <button className="text-4xl text-blue-500 hover:text-blue-400">+</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Lunch</h2>
          <button className="text-4xl text-blue-500 hover:text-blue-400">+</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Snacks</h2>
          <button className="text-4xl text-blue-500 hover:text-blue-400">+</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold">Dinner</h2>
          <button className="text-4xl text-blue-500 hover:text-blue-400">+</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
