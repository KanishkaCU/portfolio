import "./Contact.css";

export default function Contact() {
return ( <section id="contact"> <div className="container"> <p className="section-label">Get In Touch</p> <h2 className="section-title">Contact Me</h2>


    <div className="contact-card">
      <p className="contact-text">
        I'm currently looking for internship and full-time opportunities.
        Feel free to reach out if you'd like to connect or collaborate.
      </p>

      <div className="contact-links">
        <a
          href="mailto:yourmail@gmail.com"
          className="contact-btn"
        >
          📧 Email Me
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  </div>
</section>


);
}
