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
        
        <a href="#hero"><FaHouse className='icon' aria-label="Home" />Home</a>
        <a href="#law-services"><FaScaleBalanced className='icon' aria-label="Law Services" />Law Services</a>
        <a href="#about"><IoInformationCircle className='icon' aria-label="About Us" />About Us</a>
        <a href="#contactUs"><FaPhone className='icon' aria-label="Contact" />Contact</a>
      </nav>
      {/* Button to toggle the menu */}
      <button className="menu-button" id="menuButton" onClick={toggleMenu} aria-label="Toggle Menu">
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
    </header>
  );
};

export default Header;
