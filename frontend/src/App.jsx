import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusDetails from './pages/BusDetails';
import AddBus from './pages/AddBus';
import Intro from './pages/Intro';

function App() {
  return (
    <div>
      <h1>Bus Timing App</h1>
      <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
        <Route path='/bus/:id' element={<BusDetails />} />
        <Route path='/add-bus' element={<AddBus />} />
      </Routes>
    </div>
  );
}

export default App;