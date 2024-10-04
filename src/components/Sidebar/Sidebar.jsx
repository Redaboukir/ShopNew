import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li onClick={() => onSelect('home')}>Accueil</li>
        <li onClick={() => onSelect('about')}>À propos</li>
        <li onClick={() => onSelect('services')}>Services</li>
        <li onClick={() => onSelect('contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
