import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Departments from './components/Departments'; 
import './index.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Departments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
