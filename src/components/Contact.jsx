"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yashghatge012@gmail.com",
      link: "mailto:yashghatge012@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9326241429",
      link: "tel:+919326241429",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Talk</h3>
            <p className="contact-info-text">
              I'm always interested in hearing about new projects and opportunities. Whether you're a company looking to
              hire, or you're someone with an idea you'd like to discuss, I'd love to hear from you.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail">
                  <div className="contact-detail-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="contact-detail-content">
                    <h4 className="contact-detail-title">{info.title}</h4>
                    <a href={info.link} className="contact-detail-value">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3 className="form-title">Send Me a Message</h3>
              <p className="form-subtitle">Fill out the form below and I'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                />
                <button type="submit" className="form-submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
