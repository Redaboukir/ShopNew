import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oups ! La page que vous recherchez n'existe pas.</p>
      <a href="/" className="not-found-home-button">Retour à l'accueil</a>
    </div>
  );
};

export default NotFound;
