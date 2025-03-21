import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/NotFound.css'; // Optional: Add styles for the 404 page

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Non Trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/" className="home-link">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;