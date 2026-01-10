import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'

const Projects = () => {
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
        <ProjectCard 
          title="E-Commerce Platform" 
          description="Full-featured shopping platform with cart and payment integration"
          image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1470&auto=format&fit=crop"
          fullDescription="A complete e-commerce solution with user authentication, product management, shopping cart, and Stripe payment integration."
          technologies={["React", "Django", "PostgreSQL", "Stripe API", "JWT"]}
        />
        <ProjectCard 
          title="Task Management App" 
          description="Collaborative task management with real-time updates"
          image="https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1469&auto=format&fit=crop"
          fullDescription="A productivity app for team collaboration with real-time updates, drag-and-drop interface, and progress tracking."
          technologies={["React", "Node.js", "Socket.io", "MongoDB", "Express"]}
        />
        <ProjectCard 
          title="Social Media Dashboard" 
          description="Analytics dashboard for social media metrics"
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
          fullDescription="Dashboard for tracking social media performance with data visualization, trend analysis, and report generation."
          technologies={["React", "Django REST", "Chart.js", "PostgreSQL", "Redis"]}
        />
        <ProjectCard 
          title="Weather Forecast App" 
          description="Real-time weather forecasting with location detection"
          image="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop"
          fullDescription="Weather application with location-based forecasts, 7-day predictions, and severe weather alerts."
          technologies={["React", "OpenWeather API", "Geolocation", "Chart.js", "CSS3"]}
        />
        <ProjectCard 
          title="Recipe Sharing Platform" 
          description="Community-driven recipe sharing and meal planning"
          image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop"
          fullDescription="Platform for food enthusiasts to share recipes, create meal plans, and discover new dishes."
          technologies={["React", "Django", "PostgreSQL", "AWS S3", "REST API"]}
        />
        <ProjectCard 
          title="Fitness Tracker" 
          description="Personal fitness tracking with progress analytics"
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
          fullDescription="Fitness application for tracking workouts, nutrition, and progress with detailed analytics and charts."
          technologies={["React Native", "Firebase", "Chart.js", "Redux", "Expo"]}
        />
        <ProjectCard 
          title="Expense Manager" 
          description="Personal finance tracking and budget management"
          image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1411&auto=format&fit=crop"
          fullDescription="Finance management tool for tracking expenses, setting budgets, and generating financial reports."
          technologies={["React", "Node.js", "MongoDB", "Express", "JWT"]}
        />
        <ProjectCard 
          title="Portfolio Website" 
          description="Personal portfolio with project showcase"
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop"
          fullDescription="Responsive portfolio website showcasing projects, skills, and experience with modern design."
          technologies={["React", "CSS3", "JavaScript", "Netlify", "Git"]}
        />
      </div>
      
      {/* Call to Action */}
     {/* // In your Projects.jsx, update the contact button section: */}
      <div className="projects-cta">
        <h3>Have a project in mind?</h3>
        <p>Let's work together to bring your ideas to life</p>
        <button 
          className="cta-button"
          onClick={() => {
            // You can change this to navigate to a contact page or show a modal
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