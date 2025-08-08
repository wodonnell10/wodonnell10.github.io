import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <header className="header">
        <h1>Hi, I'm Your Name</h1>
        <p>Welcome to my personal website!</p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I'm a [Your Profession/Field] passionate about [your specialties].</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Project Title</h3>
          <p>Brief description of what you built.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
        <p>GitHub: <a href="https://github.com/USERNAME" target="_blank" rel="noopener noreferrer">github.com/USERNAME</a></p>
      </section>

      <footer className="footer">
        <p>© 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default App;