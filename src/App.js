import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriverCallWaiting from './DriverCallWaiting';
import DriverMain from './DriverMain.jsx';
import LoginPage from "./LoginPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<LoginPage />}/>
            <Route path={"/drivermain"} element={<DriverMain/>}/>
        </Routes>
    );
}

export default App;