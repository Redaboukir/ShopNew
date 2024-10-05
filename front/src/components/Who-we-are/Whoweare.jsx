import React from 'react';
import './Who-we-are.css'; // Assurez-vous d'importer le fichier CSS

const WhoWeAre = () => {
  return (
    <div className="container">
      <h1>Qui Nous Sommes</h1>
      
      <div className="card">
        <i className="fas fa-users icon"></i>
        <h2>Notre Équipe</h2>
        <p>
          Nous sommes une équipe de passionnés de développement web, dédiée à créer des solutions innovantes et fonctionnelles. Notre expertise couvre divers domaines, allant du design à la programmation.
        </p>
      </div>

      <div className="card">
        <i className="fas fa-briefcase icon"></i>
        <h2>Notre Mission</h2>
        <p>
          Notre mission est de transformer les idées de nos clients en réalités tangibles, en fournissant des services de qualité supérieure qui répondent à leurs besoins spécifiques.
        </p>
      </div>

      <div className="card">
        <i className="fas fa-trophy icon"></i>
        <h2>Nos Valeurs</h2>
        <p>
          Nous croyons en l'intégrité, la transparence et l'innovation. Chaque projet est une opportunité d'apprendre et de grandir, tant pour nous que pour nos clients.
        </p>
      </div>

      <a className="go-back" href="/">⬅️ Retour à l'accueil</a>
    </div>
  );
};

export default WhoWeAre;
