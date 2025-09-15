import { useState, useEffect } from 'react'
import myImage from './images/pf.jpeg'
import './App.css'
import TypeWritter from './Typewriter';
import Header from './Header';

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
      <Header></Header>
      <section className="hero">
        <img src={myImage} alt="Description" id="pf" />
        <TypeWritter text={"Hi, I'm Adnan Obuya.\nI am a software developer who builds exceptional and user friendly interfaces"} delay={50}></TypeWritter>
        <button className="cta-btn"><a href="https://github.com/Adnangad" id="mywork">View my work</a></button>
      </section>
      <section id="about" className="about">
        <h2>🧠 About Me</h2>
        <p>Motivated and detail-oriented Junior Fullstack Developer with a strong emphasis on backend development. Skilled in building and maintaining scalable web applications using technologies such as Node.js, Express, Django REST Framework, and PostgreSQL. Adept at working with Git, handling API design, and implementing clean, maintainable code. Comfortable with modern development practices and always eager to learn new tools and frameworks. Demonstrates a proactive approach to problem-solving, code optimization, and collaboration within agile teams. Recently gaining familiarity with frontend and design tools like Figma to better support fullstack workflows.</p>
      </section>
      <section id='skills' className='skills'>
        <h2>🛠️ Skills</h2>
        <div className="skills-list">
          <h4>Frontend:</h4>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React.js, Next.js</li>
            <li>HTML5, CSS3, Tailwind CSS, Bootstrap</li>
          </ul>

          <h4>Backend:</h4>
          <ul>
            <li>Python (Django, Flask, FastAPI)</li>
            <li>Node.js (Express.js, Prisma ORM)</li>
            <li>PHP (Laravel)</li>
            <li>REST APIs & GraphQL</li>
          </ul>

          <h4>Databases:</h4>
          <ul>
            <li>PostgreSQL, MySQL</li>
            <li>MongoDB (basic), Redis</li>
          </ul>

          <h4>DevOps & Tools:</h4>
          <ul>
            <li>Docker</li>
            <li>Git & GitHub</li>
            <li>Linux CLI</li>
          </ul>

          <h4>Data, AI & Automation:</h4>
          <ul>
            <li>Web Scraping & Automation (Selenium, BeautifulSoup)</li>
            <li>Pandas & Scikit-learn (ML fundamentals)</li>
            <li>Large Language Models (LLaMA, RAG implementation)</li>
          </ul>
        </div>
      </section>
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className='expCont' style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <div className="experience-item">
            <h3>Full Stack Developer Intern - Goymarey Software Solutions</h3>
            <p className="date">APR 2025 - JULY 2025</p>
            <ul>
              <li>Developed and deployed scalable web applications using React,
                Tailwind CSS, and TypeScript (frontend) and Node.js, Express.js, and
                GraphQL (backend).</li>
              <li>Designed and maintained PostgreSQL databases, leveraging PrismaORM for efficient data operations.</li>
              <li>Integrated LinkedIn and Twitter APIs into the companys CRM,
                enabling users to view analytics, post content, delete posts, and
                analyze comment sentiment</li>
              <li>Led backend development for a comprehensive school management
                system, handling core functionality and system architecture
                Wrote clean, maintainable, and well-documented code following
                industry best practices</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Python Developer Intern - Oasis Infobyte</h3>
            <p className="date">SEP 2024 - NOV 2024</p>
            <ul>
              <li>Developed backend APIs using Django and Flask, implementing authentication and CRUD operations.</li>
              <li>Built and deployed Dockerized microservices for internal use.</li>
              <li>Collaborated in Agile teams to deliver real-time chat applications using WebSocket protocols.</li>
            </ul>
          </div>
        </div>
      </section>
      <h2>Sample Projects:</h2>
      <section id="projects" className="projects">
        <div className="project-card">
          <h3>Interactive News QA System</h3>
          <p>🔹 Developed an interactive Question-Answering system capable of responding to user queries with real-time news insights.</p>
          <p>🔹 Implemented Selenium and BeautifulSoup to scrape news data from Al Jazeera, storing and utilizing it to enhance LLaMA LLM responses via RAG (Retrieval-Augmented Generation).</p>
          <p>🔹 Built a Django backend to manage data, scraping workflows, and API endpoints.</p>
          <p>🔹 Designed a Next.js frontend for a responsive and user-friendly interface.</p>
          <p>🔹 Enabled the system to provide accurate, up-to-date answers on global news topics.</p>

          <a className="project-link" href="https://github.com/Adnangad/news-qa-system" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a>

        </div>
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
