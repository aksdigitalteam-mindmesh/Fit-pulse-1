import React, { useState } from 'react';
import { workouts } from '../lib/workouts';
import DailyWorkout from './DailyWorkout';

const WorkoutGenerator = () => {
  const [level, setLevel] = useState('beginner');
  const [equipment, setEquipment] = useState('no-equipment');
  const [generatedWorkout, setGeneratedWorkout] = useState<any>(null);

  const generateWorkout = () => {
    // @ts-ignore
    const workoutPlan = workouts[level][equipment];
    setGeneratedWorkout(workoutPlan);
  };

  const saveWorkout = () => {
    if (generatedWorkout) {
      localStorage.setItem('savedWorkout', JSON.stringify(generatedWorkout));
      alert('Workout Saved!');
    }
  };

  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">Generate Your Workout</h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label htmlFor="level" className="block text-lg font-medium mb-2">
              Fitness Level
            </label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-md"
            >
              <option value="beginner">Beginner</option>
              {/* Add other levels as data becomes available */}
            </select>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label htmlFor="equipment" className="block text-lg font-medium mb-2">
              Equipment
            </label>
            <select
              id="equipment"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-md"
            >
              <option value="no-equipment">No Equipment</option>
              {/* Add other equipment options as data becomes available */}
            </select>
          </div>
          <button
            onClick={generateWorkout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Generate Workout
          </button>
        </div>
      </div>

      {generatedWorkout && (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Your 7-Day Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(generatedWorkout).map((day) => (
              <DailyWorkout key={day} day={day} exercises={generatedWorkout[day]} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={saveWorkout}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg"
            >
              Save Workout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutGenerator;
