import React, { useState } from 'react';
import './Header.css';
import { FaHouse, FaScaleBalanced, FaPhone } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  // State to manage whether the mobile menu is shown or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(); // Access the translation function

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src="csa-logo.svg" className="logo-image" alt={t('header.logoAlt')} />
      </a>
      {/* Toggle class based on the state */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} id="navbar">        
        <a href="#hero"><FaHouse className='icon' aria-label="Home" />{t('header.home')}</a>
        <a href="#law-services"><FaScaleBalanced className='icon' aria-label="Law Services" />{t('header.lawServices')}</a>
        <a href="#about"><IoInformationCircle className='icon' aria-label="About Us" />{t('header.aboutUs')}</a>
        <a href="#contactUs" className='last-nav'><FaPhone className='icon' aria-label="Contact" />{t('header.contact')}</a>
      </nav>
      {/* Button to toggle the menu */}
      <button className="menu-button" id="menuButton" onClick={toggleMenu} aria-label="Toggle Menu">
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <div className="header-right">
        <LanguageSelector /> {/* LanguageSelector component added here */}
      </div>
    </header>
  );
};

export default Header;
