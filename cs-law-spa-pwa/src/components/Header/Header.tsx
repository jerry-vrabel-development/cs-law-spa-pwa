import React, { useState } from 'react';
import './Header.css';
import { FaHouse, FaScaleBalanced, FaPhone } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";

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
        <img src="csa-logo.svg" className="logo-image" alt="The Law Firm of CONRAD SZEWCZYK & ASSOCIATES" />
      </a>
      {/* Toggle class based on the state */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} id="navbar">
        
        <a href="#hero"><FaHouse className='icon' />Home</a>
        <a href="#services"><FaScaleBalanced className='icon' />Law Services</a>
        <a href="#about"><IoInformationCircle className='icon' />About Us</a>
        <a href="#contactUs"><FaPhone className='icon' />Contact</a>
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
