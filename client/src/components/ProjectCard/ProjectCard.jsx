import React, { useState } from 'react'
import './ProjectCard.css'

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  fullDescription, 
  tech, 
  liveLink,
  codeLink,
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
          src={image} 
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
                src={image}
                alt={title}
                className="modal-image"
              />
              
              <div className="modal-details">
                <h2>{title}</h2>
                <p>{fullDescription}</p>
                
                <div className="modal-tech">
                  {tech.map((item, index) => (
                    <span key={index} className="tech-tag">{item}</span>
                  ))}
                </div>
                
                <div className="modal-links">
                  <a href={liveLink} className="modal-link" target="_blank" rel="noopener noreferrer">
                    <span>🌐 Live Demo</span>
                  </a>
                  <a href={codeLink} className="modal-link secondary" target="_blank" rel="noopener noreferrer">
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