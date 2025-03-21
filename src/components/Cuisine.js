import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import cuisine1 from '../assets/cuisine/cuisine1.jpg';
import cuisine2 from '../assets/cuisine/cuisine2.jpg';
import cuisine3 from '../assets/cuisine/cuisine3.jpg';
import cuisine4 from '../assets/cuisine/cuisine4.jpg';
import cuisine5 from '../assets/cuisine/cuisine5.jpg';
import cuisine6 from '../assets/cuisine/cuisine6.jpg';

const Cuisine = ({ isNavbarVisible }) => {
  const projects = [
    { id: 1, image: cuisine1 },
    { id: 3, image: cuisine3 },
    { id: 4, image: cuisine4 },
    { id: 5, image: cuisine5 },
    { id: 6, image: cuisine6 },
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Cuisine</h1>
      <About 
        title="Aménagement et Rénovation de Cuisine" 
        image={cuisine2} 
        text={
          <>
            <p>Chez <strong>SARL HEGO</strong>, nous vous accompagnons dans la création et la rénovation de votre cuisine, en alliant esthétique, fonctionnalité et qualité des finitions.</p>
            <br />
            <p>Nous travaillons avec vous pour concevoir une cuisine qui correspond à vos besoins et à votre style, tout en optimisant l’espace disponible.</p>
            <br />
            <p><strong>Nos services :</strong></p>
            <ul>
              <li>Conception et installation de cuisines sur mesure</li>
              <li>Installation de plans de travail et crédences</li>
              <li>Pose de meubles et rangements</li>
              <li>Installation électrique et éclairage</li>
              <li>Plomberie et raccordements</li>
              <li>Revêtements de sol et muraux</li>
            </ul>
          </>
        }
        imagePosition="right"
      />
      <Gallery title="Découvrez quelques unes de nos réalisations :" projects={projects} />      
      <Contact />
      <Footer />
    </>
  );
};

export default Cuisine;