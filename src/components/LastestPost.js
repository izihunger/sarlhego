import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";

const LatestPosts = () => {
  const [projects, setProjects] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => {
        // Take only the last 3 posts
        setProjects(data.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="latestPosts" className="gallery">
      <h2>Derniers Posts</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card" onClick={() => openModal(`http://localhost:5000/uploads/${project.image}`)}>
            <div className="image-container">
              <img
                src={`http://localhost:5000/uploads/${project.image}`}
                alt={project.title}
              />
              <p className="description-overlay">{project.description}</p>
            </div>
            <h3>{project.title}</h3>
            <p className="description-mobile">{project.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Full size" />
            <button className="close-button" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestPosts;