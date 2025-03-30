import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'; // Import CSS file
function Home() {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/buses`).then((response) => {
      setBuses(response.data);
    });
  }, []);

  return (
    <div className="home-container">
      
      <nav className="navbar">
        <h1 className="terminal-name">
          <span className="color1">J</span>
          <span className="color2">A</span>
          <span className="color3">L</span>
          <span className="color4">G</span>
          <span className="color5">A</span>
          <span className="color6">O</span>
          <span className="color7">N</span>
          <span> </span>
          <span className="color8">B</span>
          <span className="color9">U</span>
          <span className="color10">S</span>
          <span> </span>
          <span className="color11">T</span>
          <span className="color12">E</span>
          <span className="color13">R</span>
          <span className="color14">M</span>
          <span className="color15">I</span>
          <span className="color16">N</span>
          <span className="color17">A</span>
          <span className="color18">L</span>
        </h1>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={() => navigate('/add-bus')}>
            ➕ Add New Bus
          </button>
          <button className="nav-btn contact-btn">📞 Contact: +91 9307240899</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <h2 className="title">Available Buses</h2>

        {/* Scrollable bus list */}
        <div className="bus-list-container">
          <ul className="bus-list">
            {buses.map((bus) => (
              <li
                key={bus._id}
                className="bus-item"
                onClick={() => navigate(`/bus/${bus._id}`)}
              >
                <span className="bus-symbol">🚌</span>
                <div className="bus-info">
                  <span className="bus-route">{bus.route}</span>
                  <span className="bus-fare">₹ {bus.fullFare} (Full) | ₹ {bus.halfFare} (Half)</span>
                  <span className="bus-time">⏳ {bus.travelTime}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
