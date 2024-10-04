import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar'; // Si tu as un composant Navbar
import Whoweare from './components/Who-we-are/Whoweare';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      
      <div>
        <Navbar /> {/* Ajoute la barre de navigation si tu l'as */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/whoweare" element={<Whoweare />} />

          <Route path="*" element={<NotFound />} /> {/* Page 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
