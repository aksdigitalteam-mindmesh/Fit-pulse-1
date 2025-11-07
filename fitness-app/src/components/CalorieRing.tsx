import React from 'react';

interface CalorieRingProps {
  calorieIntake: number;
  burnedCalorie: number;
}

const CalorieRing: React.FC<CalorieRingProps> = ({ calorieIntake, burnedCalorie }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const intakeOffset = circumference - (calorieIntake / 2000) * circumference;
  const burnedOffset = circumference - (burnedCalorie / 500) * circumference;

  return (
    <div className="relative">
      <svg className="transform -rotate-90 w-48 h-48">
        <circle
          className="text-gray-700"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="96"
          cy="96"
        />
        <circle
          className="text-blue-500"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={intakeOffset}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="96"
          cy="96"
        />
        <circle
          className="text-green-500"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={burnedOffset}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="96"
          cy="96"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">{calorieIntake}</div>
        <div className="text-sm">kcal intake</div>
        <div className="text-2xl font-bold">{burnedCalorie}</div>
        <div className="text-sm">kcal burned</div>
      </div>
    </div>
  );
};

export default CalorieRing;
