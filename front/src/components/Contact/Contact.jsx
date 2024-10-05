import React from 'react';
import './Contact.css'; // Assure-toi d'importer le CSS

const Contact = () => {
  return (
    <div className="container">
      <h2>Trouvez-Moi</h2>
      <div className="social-links">
        <a href="https://www.instagram.com/redaboukirr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img className="social" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
        </a>
        <a href="mailto:redaboukir45@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
          <img className="social" src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/reda-boukir-929463330/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img className="social" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
        </a>
        <a href="https://web.facebook.com/profile.php?id=61550781021779" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img className="social" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook" />
        </a>
      </div>
      <p>Téléphone : +212 616224336</p>
      <a className="go-back" href="/">⬅️ Retour à l'accueil</a>
    </div>
  );
};

export default Contact;
