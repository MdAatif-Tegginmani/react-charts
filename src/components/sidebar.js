import React from 'react';
import './sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
      <li className="sidebar-menu-item">
          <a href="/dashboard">Dashboard</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/products">Products</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/orders">Orders</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/messages">Messages</a>
        </li>
        <li className="sidebar-menu-item">
          <a href="/report">Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
