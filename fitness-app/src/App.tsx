import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import WorkoutGenerator from './components/WorkoutGenerator';
import DietGenerator from './components/DietGenerator';
import Activity from './components/Activity';
import Dashboard from './components/Dashboard';

function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Nav onNavigate={setPage} />
      <div className="container mx-auto px-4">
        {page === 'dashboard' && <Dashboard />}
        {page === 'generator' && <WorkoutGenerator />}
        {page === 'diet' && <DietGenerator />}
        {page === 'activity' && <Activity />}
      </div>
    </div>
  );
}

export default App;
