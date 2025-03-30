import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Intro.css"; // Separate CSS for animation

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home"); // Redirect to Home after 3 seconds
    }, 3000);
  }, [navigate]);

  return (
    <div className="intro-container">
      <h1 className="intro-text">JALGAON BUS TERMINAL</h1>
    </div>
  );
}

export default Intro;
