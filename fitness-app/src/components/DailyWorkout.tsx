import React, { useState, useEffect } from 'react';

interface Exercise {
  name: string;
  type: string;
  value: number | null;
}

interface DailyWorkoutProps {
  day: string;
  exercises: Exercise[];
}

const DailyWorkout: React.FC<DailyWorkoutProps> = ({ day, exercises }) => {
  const [timers, setTimers] = useState<Record<string, number>>({});
  const [activeTimers, setActiveTimers] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const newTimers: Record<string, number> = {};
    exercises.forEach((exercise, index) => {
      if (exercise.type === 'time') {
        newTimers[`${day}-${index}`] = exercise.value || 0;
      }
    });
    setTimers(newTimers);
  }, [day, exercises]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    for (const timerId in activeTimers) {
      if (activeTimers[timerId] && timers[timerId] > 0) {
        interval = setInterval(() => {
          setTimers((prevTimers) => ({ ...prevTimers, [timerId]: prevTimers[timerId] - 1 }));
        }, 1000);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeTimers, timers]);

  const toggleTimer = (timerId: string) => {
    setActiveTimers((prev) => ({ ...prev, [timerId]: !prev[timerId] }));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
      <h3 className="text-2xl font-semibold mb-4">{day}</h3>
      <ul>
        {exercises.map((exercise, index) => {
          const timerId = `${day}-${index}`;
          return (
            <li key={index} className="mb-4 p-4 bg-gray-700 rounded-md">
              <p className="text-xl font-medium">{exercise.name}</p>
              {exercise.type === 'reps' && <p className="text-lg">{exercise.value} reps</p>}
              {exercise.type === 'time' && (
                <div className="flex items-center space-x-4 mt-2">
                  <p className="text-lg">{timers[timerId]} seconds</p>
                  <button 
                    onClick={() => toggleTimer(timerId)}
                    className={`py-2 px-4 rounded-md ${activeTimers[timerId] ? 'bg-red-500' : 'bg-green-500'}`}>
                    {activeTimers[timerId] ? 'Pause' : 'Start'}
                  </button>
                </div>
              )}
               {exercise.type === 'rest' && <p className="text-lg">Rest Day</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DailyWorkout;
