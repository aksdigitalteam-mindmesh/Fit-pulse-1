import React, { useState } from 'react';
import { diets } from '../lib/diets';
import DailyDiet from './DailyDiet';

const DietGenerator = () => {
  const [dietType, setDietType] = useState('balanced');
  const [generatedDiet, setGeneratedDiet] = useState<any>(null);

  const generateDiet = () => {
    // @ts-ignore
    const dietPlan = diets[dietType];
    setGeneratedDiet(dietPlan);
  };

  const saveDiet = () => {
    if (generatedDiet) {
      localStorage.setItem('savedDiet', JSON.stringify(generatedDiet));
      alert('Diet Saved!');
    }
  };

  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4">Generate Your Diet Plan</h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label htmlFor="dietType" className="block text-lg font-medium mb-2">
              Diet Type
            </label>
            <select
              id="dietType"
              value={dietType}
              onChange={(e) => setDietType(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded-md"
            >
              <option value="balanced">Balanced</option>
              {/* Add other diet types as data becomes available */}
            </select>
          </div>
          <button
            onClick={generateDiet}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Generate Diet
          </button>
        </div>
      </div>

      {generatedDiet && (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">Your 7-Day Diet Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(generatedDiet).map((day) => (
              <DailyDiet key={day} day={day} meals={generatedDiet[day]} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={saveDiet}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg"
            >
              Save Diet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DietGenerator;
