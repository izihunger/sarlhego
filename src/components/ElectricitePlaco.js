import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import electricite1 from '../assets/electricite_placo/electricite1.jpg';
import electricite2 from '../assets/electricite_placo/electricite2.jpg';
import electricite3 from '../assets/electricite_placo/electricite3.jpg';
import electricite4 from '../assets/electricite_placo/electricite4.jpg';
import electricite5 from '../assets/electricite_placo/electricite5.jpg';
import placo1 from '../assets/electricite_placo/placo1.jpg';
import placo2 from '../assets/electricite_placo/placo2.jpg';
import placo3 from '../assets/electricite_placo/placo3.jpg';
import placo4 from '../assets/electricite_placo/placo4.jpg';
import placo5 from '../assets/electricite_placo/placo5.jpg';
import placo6 from '../assets/electricite_placo/placo6.jpg';
import placo7 from '../assets/electricite_placo/placo7.jpg';
import placo8 from '../assets/electricite_placo/placo8.jpg';
import placo9 from '../assets/electricite_placo/placo9.jpg';

const ElectricitePlaco = ({ isNavbarVisible }) => {
  const projects = [
    { id: 1, image: electricite1},
    { id: 2, image: electricite2},
    { id: 3, image: electricite3},
    { id: 5, image: electricite5},
    { id: 6, image: placo1},
    { id: 7, image: placo2},
    { id: 8, image: placo3},
    { id: 9, image: placo4},
    { id: 10, image: placo5},
    { id: 11, image: placo6},
    { id: 12, image: placo7},
    { id: 13, image: placo8},
    { id: 14, image: placo9},
  ];

  return (
    <>
      <Navbar isVisible={true} />
      <div style={{ marginTop: '70px' }}></div>
      <h1 className="page-title">Electricité / Plâtre</h1>
      <About 
          title="Électricité" 
          image={electricite4} 
          text={
              <>
                  <p>Chez <strong>SARL HEGO</strong>, nous réalisons tous vos travaux d’électricité, que ce soit pour une installation neuve, une rénovation ou une mise en conformité aux normes en vigueur.</p>
                  <br />
                  <p>Nous mettons notre savoir-faire à votre service pour garantir une installation fiable, sécurisée et performante.</p>
                  <br />
                  <p><strong>Nos services :</strong></p>
                  <ul>
                      <li>Installation électrique complète</li>
                      <li>Mise aux normes et sécurité</li>
                      <li>Remplacement de tableaux électriques</li>
                      <li>Éclairage intérieur et extérieur</li>
                      <li>Dépannage et maintenance</li>
                  </ul>
              </>
          }
          imagePosition="right" 
      />
      <About 
          title="Plâtrerie & Cloisons Sèches" 
          image={placo1} 
          text={
              <>
                  <p>Chez <strong>SARL HEGO</strong>, nous vous accompagnons dans tous vos projets de plâtrerie et d’aménagement intérieur. Nous réalisons la pose de cloisons, de faux plafonds et l’isolation pour améliorer le confort de votre habitat.</p>
                  <br />
                  <p>Nous garantissons des finitions impeccables et un travail soigné, adapté à vos besoins.</p>
                  <br />
                  <p><strong>Nos services :</strong></p>
                  <ul>
                      <li>Pose de cloisons en placo</li>
                      <li>Création de faux plafonds</li>
                      <li>Isolation thermique et phonique</li>
                      <li>Enduits et finitions</li>
                  </ul>
              </>
          }
          imagePosition="left" 
      />
      <Gallery title="Découvrez quelques unes de nos réalisations :" projects={projects} />      
      <Contact />
      <Footer />
    </>
  );
};

export default ElectricitePlaco;