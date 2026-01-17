import React from 'react'
import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const Projects = () => {
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [tech, setTech] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const PAGE_SIZE = 5;
  const totalPages = Math.ceil(count / PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [search, tech]);
  
  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    params.append("page", page);

    if (search) params.append("search", search);
    if (tech) params.append("tech", tech);

    fetch(`http://127.0.0.1:8000/api/projects/?${params.toString()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects");
        return res.json();
      })
      .then((data) => {
        setProject(data.results);
        setCount(data.count);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, search, tech]);


  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;


  return (
    <section className="projects-page" id='projects'> 
      <h1>My Projects</h1>
      
      {/* Stats Bar */}
      <div className="projects-stats">
        <div className="stat-item">
          <div className="stat-number">{projects.length}</div>
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
        <button className="filter-btn active" onClick={() => { setTech(''); setSearch(''); }}>All</button>
        <button className="filter-btn" onClick={() => setTech('React')}>React</button>
        <button className="filter-btn" onClick={() => setTech('Django')}>Django</button>
        <button className="filter-btn" onClick={() => setTech('Full Stack')}>Full Stack</button>
      </div>
      
      {/* Project Cards */}
      <div className="projects-grid">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.discription}
              fullDescription={project.discription}
              tech={project.tech_stack}
              image={project.image}
            />
          ))
        )}
      </div>

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
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