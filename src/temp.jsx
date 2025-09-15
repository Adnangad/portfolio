import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const projects = [
    {
      name: '⚽ Sports Q&A Bot',
      tech: 'Django, Selenium, LLMs',
      desc: 'Aggregates live sports data and answers queries like a pundit.',
      link: '#',
    },
    {
      name: '🎨 Anime Scene Generator',
      tech: 'Python, OpenCV',
      desc: 'Creates stylized anime scenes from prompts.',
      link: '#',
    },
    {
      name: '🛠️ Windows Troubleshooter',
      tech: 'Batch, PowerShell',
      desc: 'Automates fixes for common Windows errors.',
      link: '#',
    },
  ];

  const toggleTheme = () => setDarkMode(!darkMode);
  const triggerEasterEgg = () => setShowEasterEgg(true);

  return (
    <div style={{ ...styles.container, backgroundColor: darkMode ? '#0f0f1a' : '#f4f4f4', color: darkMode ? '#e0e0e0' : '#222' }}>
      {/* Theme Toggle */}
      <button onClick={toggleTheme} style={styles.toggle}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.title}>Adnan Obuya</h1>
        <p style={styles.tagline}>Backend Dev | Scraper | Football Fanatic</p>
        <code style={styles.terminal}>$ whoami</code>
        <button onClick={triggerEasterEgg} style={styles.easterButton}>Type "Luffy"</button>
      </header>

      {/* Easter Egg */}
      {showEasterEgg && (
        <div style={styles.easterEgg}>
          <p>“I’m gonna be the King of the Developers!” – Luffy (probably)</p>
        </div>
      )}

      {/* About Section */}
      <section style={styles.section}>
        <h2>🧠 About Me</h2>
        <p>
          I build scalable web apps with Django, scrape the web with Selenium, and automate the boring stuff. I also love anime, football, and digital art.
        </p>
      </section>

      {/* Projects Section */}
      <section style={styles.section}>
        <h2>🚀 Projects</h2>
        <div style={styles.projectGrid}>
          {projects.map((proj, idx) => (
            <div key={idx} style={styles.card}>
              <h3>{proj.name}</h3>
              <p><strong>Tech:</strong> {proj.tech}</p>
              <p>{proj.desc}</p>
              <a href={proj.link}>View Project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section style={styles.section}>
        <h2>📝 Blog</h2>
        <ul>
          <li>How I scraped 10,000 football stats in 10 minutes</li>
          <li>Football Meets Code: Predicting Match Outcomes with Python</li>
          <li>Anime Logic in Web Design: Lessons from Luffy</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section style={styles.section}>
        <h2>📬 Contact</h2>
        <p>Email: adnan@example.com</p>
        <p>GitHub: github.com/adnan</p>
        <p>LinkedIn: linkedin.com/in/adnan</p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '2rem',
    transition: 'all 0.3s ease-in-out',
  },
  toggle: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '3rem',
    color: '#00ffff',
    animation: 'pulse 2s infinite',
  },
  tagline: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
  },
  terminal: {
    backgroundColor: '#1e1e2f',
    padding: '0.5rem 1rem',
    display: 'inline-block',
    marginTop: '1rem',
    borderRadius: '5px',
  },
  easterButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#ff4500',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  easterEgg: {
    backgroundColor: '#222',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: '2rem',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },
  card: {
    backgroundColor: '#1a1a2e',
    padding: '1rem',
    borderRadius: '8px',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
};

export default App;