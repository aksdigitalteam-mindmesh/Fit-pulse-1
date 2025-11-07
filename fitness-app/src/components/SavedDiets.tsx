import React, { useState, useEffect } from 'react';
import DailyDiet from './DailyDiet';

const SavedDiets = () => {
  const [savedDiet, setSavedDiet] = useState<any>(null);

  useEffect(() => {
    const diet = localStorage.getItem('savedDiet');
    if (diet) {
      setSavedDiet(JSON.parse(diet));
    }
  }, []);

  if (!savedDiet) {
    return <p className="text-center text-lg mt-8">You don't have a saved diet yet.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Your Saved Diet Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(savedDiet).map((day) => (
          <DailyDiet key={day} day={day} meals={savedDiet[day]} />
        ))}
      </div>
    </div>
  );
};

export default SavedDiets;
