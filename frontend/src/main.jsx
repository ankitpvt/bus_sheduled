import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Import from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Create a root and use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
