import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import exterieur1 from '../assets/menuiserie_exterieur/exterieur1.jpg';
import exterieur2 from '../assets/menuiserie_exterieur/exterieur2.jpg';
import exterieur3 from '../assets/menuiserie_exterieur/exterieur3.jpg';
import exterieur4 from '../assets/menuiserie_exterieur/exterieur4.jpg';
import exterieur5 from '../assets/menuiserie_exterieur/exterieur5.jpg';
import exterieur6 from '../assets/menuiserie_exterieur/exterieur6.jpg';
import exterieur7 from '../assets/menuiserie_exterieur/exterieur7.jpg';
import exterieur8 from '../assets/menuiserie_exterieur/exterieur8.jpg';

const MenuiserieExterieur = ({ isNavbarVisible }) => {
  const projects = [
    { id: 1, image: exterieur1 },
    { id: 2, image: exterieur2 },
    { id: 3, image: exterieur3 },
    { id: 5, image: exterieur5 },
    { id: 6, image: exterieur6 },
    { id: 7, image: exterieur7 },
    { id: 8, image: exterieur8 },
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Menuiserie d'extérieur</h1>
      <About 
        title="Menuiserie d'extérieur" 
        image={exterieur4} 
        text={
          <>
            <p>Chez <strong>SARL HEGO</strong>, nous réalisons tous vos travaux de menuiserie extérieure en bois, aluminium et composite.</p>
            <br />
            <p>Que ce soit pour embellir votre jardin, aménager votre terrasse ou sécuriser vos espaces, nous vous proposons des solutions sur mesure, adaptées à vos besoins et à votre environnement.</p>
            <br />
            <p><strong>Nos services :</strong></p>
            <ul>
              <li>Fabrication et pose de terrasses en bois</li>
              <li>Installation de pergolas et abris</li>
              <li>Pose de clôtures et palissades</li>
              <li>Création de portails et portillons</li>
              <li>Menuiseries sur mesure pour l'extérieur</li>
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

export default MenuiserieExterieur;