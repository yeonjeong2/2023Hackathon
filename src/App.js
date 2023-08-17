import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriverCallWaiting from './DriverCallWaiting';
import DriverMain from './DriverMain.jsx';

function App() {
    return (
        <Routes>
            <Route path={"/drivermain"} element={<DriverMain />} />
            <Route path={"/"} element={<DriverCallWaiting />} />
        </Routes>
    );
}

export default App;