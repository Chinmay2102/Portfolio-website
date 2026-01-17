import React from 'react'
import { useEffect,useState } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { data } from 'react-router-dom';

const Projects = () => {
  const [projects, setProject] = useState([]);
  const [loading, setLoading]= useState(true);
  const [error, setError]= useState(null);
  
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/projects/')
      .then((res)=>{
        if(!res.ok) {
          throw new Error('Failed to fetch projects');
        }
        return res.json();
      })
      .then((data)=> {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  },[])

  if (loading) {
    return <p>Loading projects ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="projects-page" id='projects'> 
      <h1>My Projects</h1>
      
      {/* Stats Bar */}
      <div className="projects-stats">
        <div className="stat-item">
          <div className="stat-number">8</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">3</div>
          <div className="stat-label">Deployed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">6</div>
          <div className="stat-label">Technologies</div>
        </div>
      </div>
      
      {/* Filter Buttons */}
      <div className="projects-filter">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">React</button>
        <button className="filter-btn">Django</button>
        <button className="filter-btn">Full Stack</button>
      </div>
      
      {/* Project Cards */}
      <div className="projects-grid">
        {projects.map((project) =>(
          <ProjectCard 
            key={project.id}
            title={project.title} 
            description={project.discription}
            fullDescription={project.discription}
            tech={project.tech_stack}
            demoLink={project.demo_link}
            codeLink={project.code_link}
          />
        ))}
        
      </div>
      
      {/* Call to Action */}
      <div className="projects-cta">
        <h3>Have a project in mind?</h3>
        <p>Let's work together to bring your ideas to life</p>
        <button 
          className="cta-button"
          onClick={() => {
            window.location.href = "mailto:chinmay@example.com";
          }}
        >
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Projects