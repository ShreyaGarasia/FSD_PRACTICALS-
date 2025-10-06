import React, { useState } from 'react';
import './Menu.css';
import './Colleges.css';
import './Department.css';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="nav-btn">Home</button>
        <button className="nav-btn">Colleges</button>
        <button className="nav-btn">Department</button>
      </div>

      <div className="main-content">
        <p>This is The Home Page.</p>
      </div>
    </div>
  );
}
