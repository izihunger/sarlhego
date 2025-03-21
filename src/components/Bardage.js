import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import bardage1 from '../assets/bardage/bardage1.jpg';
import bardage2 from '../assets/bardage/bardage2.jpg';
import bardage3 from '../assets/bardage/bardage3.jpg';
import bardage4 from '../assets/bardage/bardage4.jpg';

const Bardage = ({ isNavbarVisible }) => {
  const projects = [
    { id: 2, image: bardage2 },
    { id: 3, image: bardage3 },
    { id: 4, image: bardage4 },
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Bardage</h1>
      <About 
        title="Bardage & Isolation Extérieure" 
        image={bardage1} 
        text={
          <>
            <p>Chez <strong>SARL HEGO</strong>, nous réalisons des travaux de bardage et d'isolation extérieure pour améliorer l’esthétique et la performance thermique de votre habitation ou bâtiment.</p>
            <br />
            <p>Le bardage offre une excellente protection contre les intempéries tout en apportant une touche moderne et élégante à votre façade.</p>
            <br />
            <p><strong>Nos services :</strong></p>
            <ul>
              <li>Pose de bardage en bois, PVC, composite ou métallique</li>
              <li>Isolation thermique par l'extérieur (ITE)</li>
              <li>Traitement et entretien du bardage</li>
              <li>Réparation et rénovation de façades</li>
              <li>Installation de pare-pluie et ventilation</li>
            </ul>
          </>
        }
        imagePosition="right"
      />
      <Gallery title="Découvrez quelques-unes de nos réalisations :" projects={projects} />      
      <Contact />
      <Footer />
    </>
  );
};

export default Bardage;