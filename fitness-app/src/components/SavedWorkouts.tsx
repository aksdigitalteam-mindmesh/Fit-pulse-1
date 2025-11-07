import React, { useState, useEffect } from 'react';
import DailyWorkout from './DailyWorkout';

const SavedWorkouts = () => {
  const [savedWorkout, setSavedWorkout] = useState<any>(null);

  useEffect(() => {
    const workout = localStorage.getItem('savedWorkout');
    if (workout) {
      setSavedWorkout(JSON.parse(workout));
    }
  }, []);

  if (!savedWorkout) {
    return <p className="text-center text-lg">You don't have a saved workout yet.</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-center">Your Saved Workout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(savedWorkout).map((day) => (
          <DailyWorkout key={day} day={day} exercises={savedWorkout[day]} />
        ))}
      </div>
    </div>
  );
};

export default SavedWorkouts;
