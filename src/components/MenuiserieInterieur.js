import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import menuiserie1 from '../assets/menuiserie_interieur/menuiserie1.jpg';
import menuiserie2 from '../assets/menuiserie_interieur/menuiserie2.jpg';
import menuiserie3 from '../assets/menuiserie_interieur/menuiserie3.jpg';
import menuiserie4 from '../assets/menuiserie_interieur/menuiserie4.jpg';
import menuiserie5 from '../assets/menuiserie_interieur/menuiserie5.jpg';
import menuiserie6 from '../assets/menuiserie_interieur/menuiserie6.jpg';
import menuiserie7 from '../assets/menuiserie_interieur/menuiserie7.jpg';
import menuiserie8 from '../assets/menuiserie_interieur/menuiserie8.jpg';
import menuiserie9 from '../assets/menuiserie_interieur/menuiserie9.jpg';
import menuiserie10 from '../assets/menuiserie_interieur/menuiserie10.jpg';
import menuiserie11 from '../assets/menuiserie_interieur/menuiserie11.jpg';
import menuiserie12 from '../assets/menuiserie_interieur/menuiserie12.jpg';
import menuiserie13 from '../assets/menuiserie_interieur/menuiserie13.jpg';
import menuiserie14 from '../assets/menuiserie_interieur/menuiserie14.jpg';
import menuiserie15 from '../assets/menuiserie_interieur/menuiserie15.jpg';

const MenuiserieInterieur = ({ isNavbarVisible }) => {
  const projects = [
    { id: 1, image: menuiserie1 },
    { id: 2, image: menuiserie2 },
    { id: 3, image: menuiserie3 },
    { id: 4, image: menuiserie4 },
    { id: 6, image: menuiserie6 },
    { id: 7, image: menuiserie7 },
    { id: 8, image: menuiserie8 },
    { id: 9, image: menuiserie9 },
    { id: 10, image: menuiserie10 },
    { id: 11, image: menuiserie11 },
    { id: 12, image: menuiserie12 },
    { id: 13, image: menuiserie13 },
    { id: 14, image: menuiserie14 },
    { id: 15, image: menuiserie15 },
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Menuiserie d'intérieur</h1>
      <About 
        title="Menuiserie d'intérieur" 
        image={menuiserie5} 
        text={
          <>
            <p>Chez <strong>SARL HEGO</strong>, nous concevons et réalisons des aménagements intérieurs sur mesure en bois, adaptés à vos envies et besoins.</p>
            <br />
            <p>Nos réalisations allient esthétique, fonctionnalité et qualité pour sublimer vos espaces intérieurs.</p>
            <br />
            <p><strong>Nos services :</strong></p>
            <ul>
              <li>Fabrication et pose de meubles sur mesure</li>
              <li>Installation de portes intérieures</li>
              <li>Création de dressings et rangements optimisés</li>
              <li>Pose d'escaliers en bois</li>
              <li>Agencement intérieur pour cuisines et salles de bains</li>
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

export default MenuiserieInterieur;