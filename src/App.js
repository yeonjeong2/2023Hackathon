import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DriverCallWaiting from './DriverCallWaiting';
import DriverMain from './DriverMain.jsx';

function App() {
    return (
        <DriverMain />
    );
}

export default App;