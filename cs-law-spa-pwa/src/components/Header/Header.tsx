import React, { useState } from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  // State to manage whether the mobile menu is shown or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="CSlogo.svg" className="logo-image" alt="logo" />
      </a>
      {/* Toggle class based on the state */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} id="navbar">
        <a href="#hero">Home</a>
        <a href="#services">Our Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* Button to toggle the menu */}
      <button className="menu-button" id="menuButton" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
    </header>
  );
};

export default Header;
