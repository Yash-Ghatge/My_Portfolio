import { ExternalLink, Github } from "lucide-react"

import ecommerceImage from "../assets/e-commerce.png";
import todoImage from "../assets/todo.png";
import CodeReviewer from "../assets/CodeReviewer.png"
import jobImage from "../assets/job.png"

const Projects = () => {
  const projects = [
    {
      title: "AI CodeReviewer Website",
      description:
        "An AI-powered web app that analyzes and reviews your code for improvements, readability, and best practices using the Gemini 2.5 Flash API.",
      image: CodeReviewer,
      technologies: ["React", "Node.js", "Express", "AI", "Gemini API"],
      liveUrl: "https://ai-reviewer-j876.vercel.app/",
      githubUrl: "https://github.com/Yash-Ghatge/AI_Reviewer",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce website with shopping cart, payment integration, order management, and admin dashboard.",
      image: ecommerceImage,
      technologies: ["React", "Prebuilt UI", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://shop-website-y4as.vercel.app/",
      githubUrl: "https://github.com/Yash-Ghatge/shop_website",
    },
    {
      title: "Job Portal Website",
      description:
        "A comprehensive job portal platform connecting job seekers with employers. Features include job posting, application tracking, and user profiles.",
      image: jobImage,
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveUrl: "https://t-y-website-tlz7.vercel.app/",
      githubUrl: "https://github.com/Yash-Ghatge/T.Y.Website",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with fetures like create task, delete task and update task etc.",
      image: todoImage,
      technologies: ["React", "Socket.io", "CSS"],
      liveUrl: "https://github.com/Yash-Ghatge/Task-Management",
      githubUrl: "https://github.com/Yash-Ghatge/Task-Management",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on that showcase my skills and experience
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
