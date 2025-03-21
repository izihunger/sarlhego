import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import sdb1 from '../assets/sdb/sdb1.jpg';
import sdb2 from '../assets/sdb/sdb2.jpg';
import sdb3 from '../assets/sdb/sdb3.jpg';
import sdb4 from '../assets/sdb/sdb4.jpg';
import sdb5 from '../assets/sdb/sdb5.jpg';
import sdb6 from '../assets/sdb/sdb6.jpg';
import sdb7 from '../assets/sdb/sdb7.jpg';
import sdb8 from '../assets/sdb/sdb8.jpg';
import sdb9 from '../assets/sdb/sdb9.jpg';
import sdb10 from '../assets/sdb/sdb10.jpg';
import sdb11 from '../assets/sdb/sdb11.jpg';
import sdb12 from '../assets/sdb/sdb12.jpg';
import sdb13 from '../assets/sdb/sdb13.jpg';
import sdb14 from '../assets/sdb/sdb14.jpg';
import sdb15 from '../assets/sdb/sdb15.jpg';
import sdb16 from '../assets/sdb/sdb16.jpg';
import sdb17 from '../assets/sdb/sdb17.jpg';
import sdb18 from '../assets/sdb/sdb18.jpg';
import sdb19 from '../assets/sdb/sdb19.jpg';
import sdb20 from '../assets/sdb/sdb20.jpg';
import sdb21 from '../assets/sdb/sdb21.jpg';
import sdb22 from '../assets/sdb/sdb22.jpg';
import sdb23 from '../assets/sdb/sdb23.jpg';
import sdb24 from '../assets/sdb/sdb24.jpg';
import sdb25 from '../assets/sdb/sdb25.jpg';
import sdb26 from '../assets/sdb/sdb26.jpg';
import sdb27 from '../assets/sdb/sdb27.jpg';
import sdb28 from '../assets/sdb/sdb28.jpg';
import sdb29 from '../assets/sdb/sdb29.jpg';
import sdb30 from '../assets/sdb/sdb30.jpg';
import sdb31 from '../assets/sdb/sdb31.jpg';

const Sdb = ({ isNavbarVisible }) => {
  const projects = [
    { id: 1, image: sdb1 },
    { id: 2, image: sdb2 },
    { id: 3, image: sdb3 },
    { id: 4, image: sdb4 },
    { id: 5, image: sdb5 },
    { id: 6, image: sdb6 },
    { id: 7, image: sdb7 },
    { id: 9, image: sdb9 },
    { id: 10, image: sdb10 },
    { id: 11, image: sdb11 },
    { id: 12, image: sdb12 },
    { id: 13, image: sdb13 },
    { id: 14, image: sdb14 },
    { id: 15, image: sdb15 },
    { id: 16, image: sdb16 },
    { id: 17, image: sdb17 },
    { id: 18, image: sdb18 },
    { id: 19, image: sdb19 },
    { id: 20, image: sdb20 },
    { id: 21, image: sdb21 },
    { id: 22, image: sdb22 },
    { id: 23, image: sdb23 },
    { id: 24, image: sdb24 },
    { id: 25, image: sdb25 },
    { id: 26, image: sdb26 },
    { id: 27, image: sdb27 },
    { id: 28, image: sdb28 },
    { id: 29, image: sdb29 },
    { id: 30, image: sdb30 },
    { id: 31, image: sdb31 },
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Salle de bain</h1>
      <About 
        title="Salle de bain" 
        image={sdb8} 
        text={
          <>
            <p>Nous concevons et rénovons vos salles de bains en alliant design et fonctionnalité.</p>
            <br />
            <p>Grâce à notre expertise, nous transformons votre espace en un lieu de confort et de bien-être, adapté à vos besoins.</p>
            <br />
            <p><strong>Nos prestations :</strong></p>
            <ul>
              <li>Création et installation de meubles sur mesure</li>
              <li>Pose de carrelage et faïence</li>
              <li>Installation de douches, baignoires et lavabos</li>
              <li>Optimisation de l’espace et solutions de rangement</li>
              <li>Aménagement pour accessibilité PMR</li>
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

export default Sdb;