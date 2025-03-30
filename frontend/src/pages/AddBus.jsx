import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/AddBus.css';

function AddBus() {
  const [route, setRoute] = useState('');
  const [distance, setDistance] = useState('');
  const [fullFare, setFullFare] = useState('');
  const [halfFare, setHalfFare] = useState('');
  const [timings, setTimings] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const busData = {
      route,
      distance: Number(distance),
      fullFare: Number(fullFare),
      halfFare: Number(halfFare),
      timings: timings.split(',').map(time => time.trim()),
    };
    await axios.post('http://localhost:5000/buses', busData);
    navigate('/');
  };

  return (
    <div className="add-bus-container">
      <h2 className="add-bus-title">Add New Bus</h2>
      <form className="add-bus-form" onSubmit={handleSubmit}>
        <input className="input-field" type="text" placeholder="Route" value={route} onChange={(e) => setRoute(e.target.value)} required />
        <input className="input-field" type="number" placeholder="Distance (km)" value={distance} onChange={(e) => setDistance(e.target.value)} required />
        <input className="input-field" type="number" placeholder="Full Fare" value={fullFare} onChange={(e) => setFullFare(e.target.value)} required />
        <input className="input-field" type="number" placeholder="Half Fare" value={halfFare} onChange={(e) => setHalfFare(e.target.value)} required />
        <input className="input-field" type="text" placeholder="Timings (comma separated)" value={timings} onChange={(e) => setTimings(e.target.value)} required />
        
        <button type="submit" className="add-bus-button">Add Bus</button>
        <button type="button" className="back-button" onClick={() => navigate('/')}>⬅ Back</button>
      </form>
    </div>
  );
}

export default AddBus;
