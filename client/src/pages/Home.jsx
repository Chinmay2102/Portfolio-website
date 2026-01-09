import Devstats from "../components/Devstats/Devstats";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaRocket, FaDownload, FaArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1 className="fade-in">Hi, I'm Chinmay Gawande</h1>
        <h2 className="slide-up">Full Stack Developer</h2>
        <p className="slide-up">
          I build clean, scalable web applications using React and Django. 
          Passionate about creating elegant solutions to complex problems.
        </p>
        
        <div className="cta-buttons slide-up">
          <NavLink to="/projects" className="btn btn-primary">
            <FaCode /> View Projects
          </NavLink>
          <a href="/resume.pdf" className="btn btn-secondary" download>
            <FaDownload /> Download Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            <FaRocket /> Contact Me
          </a>
        </div>
        
        <Devstats
          stats={[
            { id: 1, label: "Projects Built", value: "8+" },
            { id: 2, label: "Git Commits", value: "120+" },
            { id: 3, label: "Technologies", value: "6+" },
            { id: 4, label: "Deployed Apps", value: "3+" },
          ]}
        />
        
        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            <div className="tech-icon">⚛️</div>
            <div className="tech-icon">🐍</div>
            <div className="tech-icon">🚀</div>
            <div className="tech-icon">⚡</div>
            <div className="tech-icon">🔧</div>
            <div className="tech-icon">💾</div>
          </div>
        </div>
        
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter />
          </a>
          <a href="mailto:hello@example.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <i><FaArrowDown /></i>
        </div>
      </section>
    </main>
  );
}

export default Home;