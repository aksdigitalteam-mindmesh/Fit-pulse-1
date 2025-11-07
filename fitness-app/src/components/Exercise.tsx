import React from 'react';

interface ExerciseProps {
  name: string;
  sets: number;
  reps?: number;
  duration?: string;
}

const Exercise: React.FC<ExerciseProps> = ({ name, sets, reps, duration }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-semibold mb-2">{name}</h3>
      <div className="text-lg">
        <p>Sets: {sets}</p>
        {reps && <p>Reps: {reps}</p>}
        {duration && <p>Duration: {duration}</p>}
      </div>
    </div>
  );
};

export default Exercise;
