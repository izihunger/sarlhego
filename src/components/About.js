import React from 'react';
import '../styles/About.css';

const About = ({ title, image, text, imagePosition = 'right' }) => {
  const isImageRight = imagePosition === 'right';

  return (
    <section id="about" className="about">
      {/* Conditionally render the section-title only if title is not null */}
      {title && (
        <div className="section-title">
          <h2>{title}</h2>
          <div className="title-line"></div> {/* Grey line */}
        </div>
      )}

      <div className={`about-content ${isImageRight ? 'right' : 'left'}`}>
        <div className="about-text">
          {text} {/* This will render JSX elements directly */}
        </div>
        <div className="about-image">
          <img src={image} alt={title || 'About'} /> {/* Fallback alt text if title is null */}
        </div>
      </div>
    </section>
  );
};

export default About;