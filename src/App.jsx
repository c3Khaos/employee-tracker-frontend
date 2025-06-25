import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import LoginScreen from './components/LoginScreen';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  const handleLogin = (employeeId) => {
    if (employeeId) {
      setCurrentEmployeeId(employeeId);
      setIsLoggedIn(true);
    } else {
      alert('Please enter your Employee ID.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentEmployeeId(null);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
         
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <LoginScreen onLogin={handleLogin} />
              ) : (
                <EmployeeDashboard
                  employeeId={currentEmployeeId}
                  onLogout={handleLogout}
                />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


