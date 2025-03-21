import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg'; // Import your logo image
import { FiPhone } from "react-icons/fi";

const Navbar = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <a href={`${process.env.PUBLIC_URL}/`} className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" /> {/* Add your logo */}
        <div className="logo-text">SARL HEGO</div> {/* Add the text */}
      </a>
      <div className={`burger ${isOpen ? 'burger--open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
        <li><a href={`${process.env.PUBLIC_URL}/`} onClick={closeMenu}>Accueil</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/electricite-platre`} onClick={closeMenu}>Electricité / Plâtre</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/cuisine`} onClick={closeMenu}>Cuisine</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/salle-de-bain`} onClick={closeMenu}>Salle de bain</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/menuiserie-interieur`} onClick={closeMenu}>Menuiserie intérieure</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/menuiserie-exterieur`} onClick={closeMenu}>Menuiserie extérieure</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/terrasse`} onClick={closeMenu}>Terrasse</a></li>
        <li><a href={`${process.env.PUBLIC_URL}/bardage`} onClick={closeMenu}>Bardage</a></li>
        {/* Phone chip inside the mobile menu */}
        <li className="phone-chip-mobile">
          <a href="tel:0240249363" className="phone-chip">
            <FiPhone className="phone-icon" /> {/* Use React Icons phone icon */}
            <span className="phone-number">02 40 24 93 63</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;