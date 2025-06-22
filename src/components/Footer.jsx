import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              Yash<span className="footer-logo-dot">.</span>
            </h3>
            <p className="footer-description">
              Full Stack Web Developer passionate about creating amazing digital experiences. Let's build something
              great together!
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect With Me</h4>
            <div className="footer-social">
              <a href="https://github.com/Yash-Ghatge/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yash-ghatge-4a44252a9/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Linkedin size={24} />
              </a>
              <a href="mailto:yashghatge012.com" className="footer-social-link">
                <Mail size={24} />
              </a>
            </div>
            <div className="footer-contact">
              <p>yashghatge012.com</p>
              <p>+91 9326241429</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Yash. Made with <Heart className="heart-icon" size={16} /> and lots of passion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
