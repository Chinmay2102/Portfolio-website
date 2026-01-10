import React, { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  fullDescription = "This is a full description of the project with more details about technologies used, challenges faced, and solutions implemented.", 
  technologies = ["React", "Django", "PostgreSQL", "Tailwind CSS", "REST API"],
  liveLink = "#",
  githubLink = "#"
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e) => {
    e.stopPropagation()
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <img 
          src={image || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop"} 
          alt={title}
          className="imgcover" 
        />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className='PVM' onClick={openModal}>View Project</button>
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && (
        <div className="project-modal-overlay active" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-content">
              <img 
                src={image || "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop"}
                alt={title}
                className="modal-image"
              />
              
              <div className="modal-details">
                <h2>{title}</h2>
                <p>{fullDescription}</p>
                
                <div className="modal-tech">
                  {technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="modal-links">
                  <a href={liveLink} className="modal-link" target="_blank" rel="noopener noreferrer">
                    <span>🌐 Live Demo</span>
                  </a>
                  <a href={githubLink} className="modal-link secondary" target="_blank" rel="noopener noreferrer">
                    <span>💻 View Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard