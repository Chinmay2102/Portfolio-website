import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import useProjects from "../hooks/useProjects";
import { isAdmin } from "../utils/authService";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const PAGE_SIZE = 5;

function Projects() {
  const [search, setSearch] = useState("");
  const [tech, setTech] = useState("");
  const [page, setPage] = useState(1);

  const { projects, count, loading, error } = useProjects({
    search,
    tech,
    page,
  });

  const totalPages = Math.ceil(count / PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [search, tech]);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;
  const token = localStorage.getItem("accessToken");
  // console.log(JSON.parse(atob(token.split('.')[1])));

  return (
    <main className="projects-page" >
      <h1>Projects</h1>
       {isAdmin() && <span className="admin-badge">Admin</span>}

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


      <div className="projects-filter">
        <button className="filter-btn active" onClick={() => { setTech(''); setSearch(''); }}>All</button>
        <button className="filter-btn" onClick={() => setTech('React')}>React</button>
        <button className="filter-btn" onClick={() => setTech('Django')}>Django</button>
        <button className="filter-btn" onClick={() => setTech('Full Stack')}>Full Stack</button>
      </div>

      <section className="projects-grid" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 2fr))',
    gap: '2.5rem',
    justifyItems: 'center',
    alignItems: 'start'
  }}>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.discription}
              tech={project.tech_stack}
              image={project.image}
            />
          ))
        )}
      </section>

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
    </main>
  );
}

export default Projects;
