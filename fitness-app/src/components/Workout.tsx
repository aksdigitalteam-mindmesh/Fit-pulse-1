import React from 'react';
import Exercise from './Exercise';

const exercises = [
  { name: 'Push-ups', sets: 3, reps: 15 },
  { name: 'Squats', sets: 4, reps: 12 },
  { name: 'Plank', sets: 3, duration: '60s' },
];

const Workout = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Today's Workout</h2>
      <div>
        {exercises.map((exercise, index) => (
          <Exercise
            key={index}
            name={exercise.name}
            sets={exercise.sets}
            reps={exercise.reps}
            duration={exercise.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Workout;
