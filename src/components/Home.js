import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/Home.css';
import electricite from '../assets/electricite_placo/placo8.jpg';
import cuisine from '../assets/cuisine/cuisine2.jpg';
import sdb from '../assets/sdb/sdb4.jpg';
import menuiserie_interieur from '../assets/menuiserie_interieur/menuiserie5.jpg';
import menuiserie_exterieur from '../assets/menuiserie_exterieur/exterieur4.jpg';
import terrasse from '../assets/terrasse/terrasse2.jpg';
import bardage from '../assets/bardage/bardage1.jpg';
import aboutImage from '../assets/cuisine/cuisine6.jpg';

const Home = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(window.scrollY > 100);

  const projects = [
    { id: 1, image: electricite, title: 'Electricité / Plâtre', url: `${process.env.PUBLIC_URL}/electricite-platre` },
    { id: 2, image: cuisine, title: 'Cuisine', url: `${process.env.PUBLIC_URL}/cuisine` },
    { id: 3, image: sdb, title: 'Salle de bain', url: `${process.env.PUBLIC_URL}/salle-de-bain` },
    { id: 4, image: menuiserie_interieur, title: "Menuiserie d'intérieur", url: `${process.env.PUBLIC_URL}/menuiserie-interieur` },
    { id: 6, image: menuiserie_exterieur, title: "Menuiserie d'extérieur", url: `${process.env.PUBLIC_URL}/menuiserie-exterieur` },
    { id: 7, image: terrasse, title: 'Terrasse', url: `${process.env.PUBLIC_URL}/terrasse` },
    { id: 8, image: bardage, title: 'Bardage', url: `${process.env.PUBLIC_URL}/bardage` },
  ];
  

  useEffect(() => {
    const handleVisibility = () => {
      setIsNavbarVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleVisibility);

    handleVisibility(); // Run once on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <>
      <Navbar isVisible={isNavbarVisible} />
      <Hero />
      <About 
          title="À propos de nous" 
          image={aboutImage} 
          text={
              <>
                  <p><strong>SARL HEGO</strong>, c’est une entreprise à taille humaine, dirigée avec passion et engagement. Nous mettons notre expertise et notre savoir-faire au service de vos projets d’aménagement et de rénovation.</p>
                  <br />
                  <p>Spécialisés dans la création et la rénovation de salles de bain, cuisines, dressings, ainsi que dans les travaux de menuiserie, électricité, cloisons sèches, isolation, parquet et terrasses en bois, nous apportons des solutions sur mesure adaptées à vos besoins.</p>
                  <br />
                  <p>Chez <strong>SARL HEGO</strong>, chaque projet est unique. Nous nous engageons à vous garantir un résultat à la hauteur de vos attentes.</p>
              </>
          }
          imagePosition="right" 
      />

      <Gallery title="Nos prestations" projects={projects} />      
      <Contact />
      <Footer />
    </>
  );
};

export default Home;