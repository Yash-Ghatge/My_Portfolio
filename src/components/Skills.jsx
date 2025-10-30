import { Globe, Server, Database, Smartphone, GitBranch, Palette } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Prebuilt UI", "Material UI"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Middleware", "Socket.io"],
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["MongoDB", "Mongoose", "MySQL" , "Local Storage", "Session Storage"],
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "npm/yarn", "Webpack"],
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      skills: ["Mobile-First Design", "CSS Grid", "Flexbox", "Media Queries", "Cross-Browser Testing"],
    },
    {
      icon: Palette,
      title: "UI/UX Skills",
      skills: ["User Interface Design", "User Experience",  "Prototyping", "Color Theory"],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Here are the technologies and tools I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <category.icon className="skill-icon" size={40} />
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-dot"></div>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
