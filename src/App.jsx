import { useState, useEffect } from 'react'
import myImage from './images/pf.jpeg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const url = "https://backend-tt2b.onrender.com/send-mail";

  async function sendEmail(event) {
    event.preventDefault();

    if (name.length > 0 && email.length > 10 && content.length > 2) {
      const data = {
        from: { email: email, name: name },
        to: [{ email: "adnanobuya@gmail.com" }],
        subject: "Portfolio Fan",
        text: content,
        category: "Integration Test"
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
          alert("Yes! Email sent successfully!");
        } else {
          alert(`Failed: ${result['message']}`);
        }
      } catch (error) {
        alert("Unable to send email. Please try again.");
      }
    } else {
      alert("Please fill out all fields correctly.");
    }
  }
  return (
    <>
      <section className="hero">
        <img src={myImage} alt="Description" id="pf" />
        <h1>Hi, I'm Adnan Obuya</h1>
        <p>I'm a passionate Software Developer.</p>
        <button className="cta-btn"><a href="https://github.com/Adnangad/diabetes_predictor">View my work</a></button>
      </section>
      <section id="about" className="about">
        <h2>Who am I?</h2>
        <p>Results-driven Software Developer with expertise in full-stack web
          development, API design, and machine learning. Passionate about
          building scalable applications and leveraging technology to create
          impactful, data-driven solutions. Proven ability to lead projects from
          ideation to deployment, optimizing efficiency and user experience.
          Always eager to learn and tackle complex technical challenges.</p>
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Django</li>
          <li>Flask</li>
          <li>Rest APIs</li>
          <li>C</li>
          <li>Docker</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
        </ul>
      </section>
      <section id="projects" className="projects">
        <h2 id='proj'>Sample Projects:</h2>
        <div className="project-card">
          <h3>Diabetes Prediction App</h3>
          <p>Developed an AI-powered web app to predict diabetes risk based on
            user-submitted data.</p>
          <a href="https://github.com/Adnangad/diabetes_predictor">View Project</a>
        </div>
        <div className="project-card">
          <h3>Online Learning Platform</h3>
          <p>Developed a real-time learning platform that enhances student-teacher engagement.</p>
          <p>Implemented user authentication, real-time messaging, and file uploads.</p>
          <a href="https://github.com/Adnangad/Edu-_Hub">View Project</a>
        </div>
        <div className="project-card">
          <h3>E-Commerce Web App</h3>
          <p>Built a feature-rich online shopping platform with a seamless UI/UX.</p>
          <a href="https://github.com/Adnangad/Iman_caffe_project">View Project</a>
        </div>
        <div className="project-card">
          <h3>Task Management App</h3>
          <p>A lightweight and intuitive tool designed to help users efficiently organize their daily tasks. Whether you need to manage personal to-dos or track work assignments, this app provides a seamless experience with a clean and responsive interface.</p>
          <a href="https://github.com/Adnangad/Iman_caffe_project">View Project</a>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Email Me</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Your Message" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
      <footer className="footer">
        <p><a href='https://www.linkedin.com/in/adnan-obuya-9bb70a289/'>Linkedin</a></p>
        <a href='https://github.com/Adnangad'>Github</a>
        <p>&copy; 2025 Adnan. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
