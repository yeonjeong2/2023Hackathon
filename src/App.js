import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriverMain from './Driver/DriverMain.jsx';
import LoginPage from './Driver/LoginPage';
import DriverCallReceive from './Driver/DriverCallReceive';



function App() {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
      <Route path={"/drivermain"} element={<DriverMain />} />
    </Routes>
  );
}

export default App;
