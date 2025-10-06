import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pra7/Menu.css';
import '../pra7/Colleges.css';
import { Link } from 'react-router-dom';


export default function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      {/* Hamburger Menu */}
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar open">
          <button className="nav-btn" onClick={() => { navigate('/home'); setIsSidebarOpen(false); }}>Home</button>
          <button className="nav-btn" onClick={() => { navigate('/Colleges'); setIsSidebarOpen(false); }}>Colleges</button>
          <button className="nav-btn" onClick={() => { navigate('/Department'); setIsSidebarOpen(false); }}>Department</button>
        </div>
      )}

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to My Website</h1>
        <p>This is the main content of the webpage.</p>
      </div>
    </div>
  );
}
