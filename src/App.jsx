import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>Hi, I'm Will O'Donnell</h1>
        <p>Welcome to my personal website!</p>
      </header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I'm a Computer Science student with a minor in Data Science, passionate about technology and innovation.</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>My Awesome Project</h3>
          <p>Description of the project goes here.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
        <p>GitHub: <a href="https://github.com/wodonnell10" target="_blank" rel="noopener noreferrer">github.com/wodonnell10</a></p>
      </section>

      <footer className="footer">
        <p>© 2025 Will O'Donnell</p>
      </footer>
    </div>
  );
}

export default App;