import { useState, useEffect } from 'react'
import myImage from './images/pf.png'
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
        <TypeWritter text={"Hi, I'm Adnan Obuya.\nI am a software engineer who builds exceptional and user friendly interfaces"} delay={50}></TypeWritter>
        <button className="cta-btn"><a href="https://github.com/Adnangad" id="mywork">View my work</a></button>
      </section>
      <section id="about" className="about">
        <p>
          Backend-focused Software Engineer passionate about building reliable, scalable, and high-performance systems using <strong>Node.js</strong>, <strong>TypeScript</strong>, <strong>Express.js</strong>, <strong>Python</strong>, and <strong>PostgreSQL</strong>. I enjoy designing clean API architectures, optimizing backend performance, and writing maintainable, production-grade code that supports real-world impact.
        </p>
        <p>
          My efficiency and technical depth in <strong>Python</strong> allow me to build data-driven systems and automation tools with frameworks like <strong>Django</strong> and <strong>FastAPI</strong>. I’ve also explored practical applications of <strong>Large Language Models (LLMs)</strong>—integrating them into backend workflows and project prototypes to enhance data processing, text analysis, and intelligent automation.
        </p>
        <p>
          I thrive in collaborative, agile environments and take pride in delivering thoughtful, well-tested code. While my core focus is backend development, I maintain fullstack awareness through experience with tools like <strong>Django REST Framework</strong> and <strong>React</strong>, enabling seamless integration across the stack when needed.
        </p>
      </section>
      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className='expCont' style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <div className="experience-item">
            <h3>Backend Developer Intern(Fullstack exposure) - Goymarey Software Solutions</h3>
            <p className="date">APR 2025 - JULY 2025</p>
            <ul>
              <li>Engineered and maintained scalable backend systems using Node.js, Express.js, and GraphQL, ensuring high performance and reliability across production environments.</li>
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
          <h3>Career Copilot App</h3>
          <p>🔹 Developed an AI-powered platform that helps job seekers discover and analyze opportunities.</p>
          <p>🔹  The app lists jobs scraped from Hiring caffe website.It automatically scrapes jobs, analyzes candidate–job fit using AI, and generates personalized cover letters based on the candidate’s resume.</p>
          <p>🔹 Implemented Selenium and BeautifulSoup to scrape job opportunities  from Hiring Caffe.</p>
          <p>🔹 Utilised Grok LLM to categorize each scraped job and to also generate analysis and cover letters based on the candidates resume and job description.</p>
          <p>🔹 Built a Fastapi backend to manage fetch data, interact with the llm, and API endpoints.</p>
          <p>🔹 Designed a React.js frontend for a responsive and user-friendly interface.</p>

          <a className="project-link" href="https://career-copilot.netlify.app/" target="_blank" rel="noopener noreferrer">
            View Live Project
          </a>
           <a className="project-link" href="https://github.com/Adnangad/career_copilot" target="_blank" rel="noopener noreferrer">
            View Project On GitHub
          </a>

        </div>
        <div className="project-card">
          <h3>Interactive News QA System</h3>
          <p>🔹 Developed an interactive Question-Answering system capable of responding to user queries with real-time news insights.</p>
          <p>🔹 Implemented Selenium and BeautifulSoup to scrape news data from Al Jazeera, storing and utilizing it to enhance LLaMA LLM responses via RAG (Retrieval-Augmented Generation).</p>
          <p>🔹 Built a Django backend to manage data, scraping workflows, and API endpoints.</p>
          <p>🔹 Designed a Next.js frontend for a responsive and user-friendly interface.</p>
          <p>🔹 Enabled the system to provide accurate, up-to-date answers on global news topics.</p>

          <a className="project-link" href="https://github.com/Adnangad/interactive_QA_system" target="_blank" rel="noopener noreferrer">
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
          <h3>E-Commerce Web App</h3>
          <p>🔹 Developed an end-to-end e-commerce application with Flask, featuring user authentication, dynamic product browsing, and secure cart management.</p>
          <p>🔹 Implemented a seamless checkout process, reducing user drop-off rate during purchasing by 25%.</p>
          <p>🔹 Designed a clean, responsive UI using HTML/CSS for optimal desktop and mobile experience.</p>
          <a className="project-link" href="https://github.com/Adnangad/Iman_caffe_project" target="_blank" rel="noopener noreferrer">
            View Project on GitHub
          </a>
        </div>
      </section>
      <section id='skills' className='skills'>
        <h2>🛠️ Skills</h2>
        <div className="skills-list">
          <h4>Backend:</h4>
          <ul>
            <li>Node.js (Express.js, TypeScript, Prisma ORM)</li>
            <li>Python (Django, Flask, FastAPI)</li>
            <li>PHP (Laravel)</li>
            <li>REST APIs & GraphQL</li>
          </ul>
          <h4>Frontend:</h4>
          <ul>
            <li>JavaScript (ES6+), TypeScript</li>
            <li>React.js, Next.js</li>
            <li>HTML5, CSS3, Tailwind CSS, Bootstrap</li>
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
