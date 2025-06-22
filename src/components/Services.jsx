import { Code, Smartphone, Database, Globe, Zap, Users } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies like React, Node.js, and MongoDB for optimal performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first responsive websites that look and work perfectly across all devices and screen sizes.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side solutions with RESTful APIs, database design, and secure authentication systems.",
    },
    {
      icon: Code,
      title: "Full-Stack Solutions",
      description:
        "End-to-end web application development from concept to deployment with ongoing maintenance and support.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Website speed optimization, code refactoring, and performance audits to ensure fast loading times.",
    },
    {
      icon: Users,
      title: "Consultation & Support",
      description: "Technical consultation, code reviews, and ongoing support to help your projects succeed.",
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What I Can Do ?</h2>
          <p className="section-subtitle">
            I offer comprehensive web development services to help bring your ideas to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" size={32} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
