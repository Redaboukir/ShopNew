import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Contact from '../Contact/Contact';
import About from '../About/About';
import './Home.css';
import Principale from '../Principale/Principale';

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('home');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'home':
        return <Principale/>; // ou un autre contenu pour la page d'accueil
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Welcome to the Home Page!</div>; // valeur par défaut
    }
  };

  return (
    <div className="app-container">
      <Sidebar onSelect={setSelectedComponent} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Home;
