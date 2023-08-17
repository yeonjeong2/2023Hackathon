import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure you have axios installed
import DepartureLocation from "./components/DepartureLocation";
import CheckPath from './components/CheckPath';
import SetArrivalLocation from './components/SetArrivalLocation';
import LoginPage from './components/LoginPage';
import CallingPage from './components/CallingPage';

function App() {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // Make a GET request to fetch user login status
    axios.get('http://server.msinu.net:8080/user.isLogin')
      .then(response => {
        const { isLogin } = response.data; // Assuming the response format is JSON
        setIsUserLoggedIn(isLogin);
      })
      .catch(error => {
        console.error('Error fetching login status:', error);
      });
  }, []);

  return (
    <Routes>
      {/* Use a conditional rendering based on login status */}
      {isUserLoggedIn ? (
        <>
          <Route path={"/departureLocation"} element={<DepartureLocation />} />
          <Route path={"/arrivalLocation"} element={<SetArrivalLocation />} />
          <Route path={"/callingPage"} element={<CallingPage />} />
        </>
      ) : (
        <Route path={"/"} element={<LoginPage />} />
      )}
    </Routes>
  );
}

export default App;
