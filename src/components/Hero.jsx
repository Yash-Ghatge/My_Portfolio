"use client"
import { ArrowDown, Github, Linkedin, Mail, Code, Zap } from "lucide-react"

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-icons">
          <Code className="floating-icon icon-1" size={30} />
          <Zap className="floating-icon icon-2" size={25} />
          <Github className="floating-icon icon-3" size={28} />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Yash</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <p className="hero-description">
              Passionate about creating amazing web sites with React, Node.js, Express, MongoDB and MySQL. I build
              scalable applications that solve real-world problems.
            </p>

            <div className="hero-buttons">
              <button onClick={() => scrollToSection("projects")} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollToSection("contact")} className="btn btn-secondary">
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/Yash-Ghatge/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yash-ghatge-4a44252a9/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yashghatge012@gmail.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <button onClick={() => scrollToSection("about")} className="scroll-btn">
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
