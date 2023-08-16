import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DepartureLocation from "./components/DepartureLocation";
import CheckPath from './components/CheckPath';
import SetArrivalLocation from './components/SetArrivalLocation';
import LoginPage from './components/LoginPage';

function App() {
  
  return (
      <Routes>
        <Route path={"/"} element={<DepartureLocation />}></Route>
        <Route path={"/arrivalLocation"} element={<SetArrivalLocation />}></Route>
        <Route path={"/checkPath"} element={<CheckPath />}></Route>
      </Routes>
  );
}

export default App;