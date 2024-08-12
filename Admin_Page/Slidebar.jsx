import React from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css';

const Slidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/ad">Admissions</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Slidebar;
