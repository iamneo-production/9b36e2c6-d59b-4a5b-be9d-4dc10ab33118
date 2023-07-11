
import React from 'react';
import '../../App.css'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
          <p>To View Content</p>
        </li>
        <li>
          <a href="/about">About</a>
          <p>To Know About Us</p>
        </li>
        <li>
          <a href="/services">Services</a>
          <p>Find Your Service</p>
        </li>
        <li>
          <a href="/contact">Contact</a>
          <p>Kindly Contact For Help</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;