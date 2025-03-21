import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = ({ title, projects }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleProjectClick = (project) => {
    if (project.url) {
      window.location.href = project.url;
    } else {
      openModal(project.image);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="section-title">
        <h2>{title}</h2>
        <div className="title-line"></div> {/* Grey line */}
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <div className="image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full size" />
            {/* <button className="close-button" onClick={closeModal}>×</button> */}
            </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;