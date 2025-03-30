import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/BusDetails.css"; // Import the new CSS file

function BusDetails() {
  const { id } = useParams();
  const [bus, setBus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://bus-sheduled-1.onrender.com/buses/${id}`).then((response) => {
      setBus(response.data);
    });
  }, [id]);

  if (!bus) return <h2 className="loading-message">Loading...</h2>;

  return (
    <div className="bus-details-container">
      <h2 className="bus-route-title">{bus.route}</h2>

      <div className="bus-details-card">
        <p className="bus-detail"><span>🛣️ Distance:</span> {bus.distance} km</p>
        <p className="bus-detail"><span>💰 Full Fare:</span> ₹{bus.fullFare}</p>
        <p className="bus-detail"><span>🎫 Half Fare:</span> ₹{bus.halfFare}</p>
      </div>

      <h3 className="timing-title">🚍 Bus Timings:</h3>
      <ul className="bus-timings-list">
        {bus.timings.map((time, index) => (
          <li key={index} className="bus-timing-item">{time}</li>
        ))}
      </ul>

      <button className="back-button" onClick={() => navigate("/")}>
        🔙 Back
      </button>
    </div>
  );
}

export default BusDetails;
