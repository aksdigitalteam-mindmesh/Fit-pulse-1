import React from 'react';

interface NavProps {
  onNavigate: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ onNavigate }) => {
  return (
    <nav className="bg-gray-800 p-4 mb-8">
      <div className="container mx-auto flex justify-center space-x-8">
        <button
          onClick={() => onNavigate('dashboard')}
          className="text-white text-lg font-semibold hover:text-blue-400"
        >
          Dashboard
        </button>
        <button
          onClick={() => onNavigate('generator')}
          className="text-white text-lg font-semibold hover:text-blue-400"
        >
          Workout Generator
        </button>
        <button
          onClick={() => onNavigate('diet')}
          className="text-white text-lg font-semibold hover:text-blue-400"
        >
          Diet Planner
        </button>
        <button
          onClick={() => onNavigate('activity')}
          className="text-white text-lg font-semibold hover:text-blue-400"
        >
          Activity
        </button>
      </div>
    </nav>
  );
};

export default Nav;
