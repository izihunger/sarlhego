import React from 'react';
import '../styles/Hero.css';
import companyLogo from '../assets/logo.svg'; // Import the logo image

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img src={companyLogo} alt="Company Logo" className="hero-logo" />
        <h1>Aménagement Intérieur, Électricité & Menuiserie</h1>
        <p>Des solutions sur mesure pour tous vos projets</p>
        <button onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}>
            Voir nos prestations
        </button>
      </div>
    </section>
  );
};

export default Hero;