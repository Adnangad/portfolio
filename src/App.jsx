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
          body: JSON.stringify(data),
          mode: "cors",
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
        <button className="cta-btn"><a href="https://github.com/Adnangad" id="mywork">View my work</a></button>
      </section>
      <section id="about" className="about">
        <h2>Who am I?</h2>
        <p>Results-driven backend-focused software engineer with expertise in
          Python, Django, Flask, and Node.js. Passionate about building scalable
          APIs, AI-powered applications, and real-time systems. Experienced in
          designing secure, efficient, and data-driven solutions. Strong problem-
          solving skills, eager to tackle technical challenges and optimize system
          performance.</p>
        <h2>Skills</h2>
        <div className="skills-list">
          <h4>Frontend:</h4>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>TypeScript (basic)</li>
            <li>HTML5 & CSS3</li>
          </ul>

          <h4>Backend:</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>php</li>
            <li>Laravel</li>
            <li>GraphQL</li>
            <li>FastAPI</li>
            <li>Django</li>
            <li>Flask</li>
            <li>REST APIs</li>
          </ul>

          <h4>Databases:</h4>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Redis</li>
            <li>MongoDB (basic)</li>
          </ul>

          <h4>Tools & Other:</h4>
          <ul>
            <li>Docker</li>
            <li>Git & GitHub</li>
            <li>Linux CLI</li>
          </ul>
        </div>
      </section>
      <section id="experience" className="experience">
        <h2>Experience</h2>

        <div className="experience-item">
          <h3>Python Developer Intern - Oasis Infobyte</h3>
          <p className="date">OCT 2024 - DEC 2024</p>
          <ul>
            <li>Developed backend APIs using Django and Flask, implementing authentication and CRUD operations.</li>
            <li>Built and deployed Dockerized microservices for internal use.</li>
            <li>Collaborated in Agile teams to deliver real-time chat applications using WebSocket protocols.</li>
          </ul>
        </div>
      </section>
      <h2>Sample Projects:</h2>
      <section id="projects" className="projects">
        <div className="project-card">
          <h3>Diabetes Prediction App</h3>
          <p>🔹 Developed an AI-powered diabetes prediction web app using Flask and Scikit-learn.</p>
          <p>🔹 Built REST API endpoints and integrated them with a React.js frontend.</p>
          <p>🔹 Deployed on Render for public access.</p>
          <p>🔹 Allows users to input medical data like blood sugar level and instantly receive risk assessment.</p>

          <a className="project-link" href="https://github.com/Adnangad/diabetes_predictor" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Online Learning Platform</h3>
          <p>🔹 Designed and built a real-time education platform enabling instant student-teacher interaction using Django and React.</p>
          <p>🔹 Integrated Pusher.js for real-time messaging and notifications, ensuring reliable and scalable live communication.</p>
          <p>🔹 Implemented secure user authentication, file uploads, and dynamic classroom features to boost engagement.</p>
          <a className="project-link" href="https://github.com/Adnangad/Edu-_Hub" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a>
        </div>
        <div className='project-card'>
          <h3>Social Media App</h3>
          <p>🔹 Built a scalable social media platform with user authentication, post
            creation, and real-time like/follow interactions using Node.js, GraphQL,
            and PostgreSQL.</p>
          <p>🔹 Optimized GraphQL queries to improve data retrieval by 30%, enabling
            a smooth, dynamic user feed experience.</p>
          <p>🔹 Integrated secure image upload functionality and user account management features, enhancing user engagement.</p>
          <a className="project-link" href="https://github.com/Adnangad/goymarey_project" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>E-Commerce Web App</h3>
          <p>🔹 Developed an end-to-end e-commerce application with Flask, featuring user authentication, dynamic product browsing, and secure cart management.</p>
          <p>🔹 Implemented a seamless checkout process, reducing user drop-off rate during purchasing by 25%.</p>
          <p>🔹 Designed a clean, responsive UI using HTML/CSS for optimal desktop and mobile experience.</p>
          <a className="project-link" href="https://github.com/Adnangad/Iman_caffe_project" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a>
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
