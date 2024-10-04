import React from 'react';
import './Home.css'; // Ensure this path is correct

const Home = () => {
  return (
    <main className="main">
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li className="active"><a href="/">Welcome</a></li>
            <li><a href="/who-we-are">Who Am I</a></li>
            <li><a href="#">What I Do</a></li>
            <li><a href="/get-in-touch">Get In Touch</a></li>
          </ul>
        </nav>
      </aside>

      <section className="twitter">
        <div className="container">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/redaboukirr/">
            <img className="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/instagram-128.png" alt="Instagram" />
          </a>
          <p>Follow me</p>
          <p>on Instagram</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
