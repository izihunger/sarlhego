import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import terrasse1 from '../assets/terrasse/terrasse1.jpg';
import terrasse2 from '../assets/terrasse/terrasse2.jpg';
import terrasse3 from '../assets/terrasse/terrasse3.jpg';
import terrasse4 from '../assets/terrasse/terrasse4.jpg';
import terrasse5 from '../assets/terrasse/terrasse5.jpg';
import terrasse6 from '../assets/terrasse/terrasse6.jpg';
import terrasse7 from '../assets/terrasse/terrasse7.jpg';
import terrasse8 from '../assets/terrasse/terrasse8.jpg';
import terrasse9 from '../assets/terrasse/terrasse9.jpg';
import terrasse10 from '../assets/terrasse/terrasse10.jpg';
import terrasse11 from '../assets/terrasse/terrasse11.jpg';
import terrasse12 from '../assets/terrasse/terrasse12.jpg';
import terrasse13 from '../assets/terrasse/terrasse13.jpg';
import terrasse14 from '../assets/terrasse/terrasse14.jpg';
import terrasse15 from '../assets/terrasse/terrasse15.jpg';
import terrasse16 from '../assets/terrasse/terrasse16.jpg';
import terrasse17 from '../assets/terrasse/terrasse17.jpg';
import terrasse18 from '../assets/terrasse/terrasse18.jpg';
import terrasse19 from '../assets/terrasse/terrasse19.jpg';

const Terrasse = ({ isNavbarVisible }) => {
  const projects = [
    { id: 1, image: terrasse1 },
    { id: 3, image: terrasse3 },
    { id: 4, image: terrasse4 },
    { id: 5, image: terrasse5 },
    { id: 6, image: terrasse6 },
    { id: 7, image: terrasse7 },
    { id: 8, image: terrasse8 },
    { id: 9, image: terrasse9 },
    { id: 10, image: terrasse10 },
    { id: 11, image: terrasse11 },
    { id: 12, image: terrasse12 },
    { id: 13, image: terrasse13 },
    { id: 14, image: terrasse14 },
    { id: 15, image: terrasse15 },
    { id: 16, image: terrasse16 },
    { id: 17, image: terrasse17 },
    { id: 18, image: terrasse18 },
    { id: 19, image: terrasse19 },
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Terrasse</h1>
      <About 
        title="Terrasse" 
        image={terrasse2} 
        text={
          <>
            <p>Profitez d’un espace extérieur chaleureux et convivial grâce à nos solutions de terrasses sur mesure.</p>
            <br />
            <p>Nous concevons et réalisons des terrasses en bois, en composite ou en carrelage, adaptées à votre style et vos envies.</p>
            <br />
            <p><strong>Nos prestations :</strong></p>
            <ul>
              <li>Construction de terrasses en bois et composite</li>
              <li>Pose de revêtements en carrelage et pierre naturelle</li>
              <li>Installation de pergolas et d’abris</li>
              <li>Création de garde-corps et rambardes</li>
              <li>Rénovation et entretien de terrasses existantes</li>
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

export default Terrasse;