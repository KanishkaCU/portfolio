import "./Contact.css";

export default function Contact() {
return ( <section id="contact"> <div className="container"> <p className="section-label">Get In Touch</p> <h2 className="section-title">Contact Me</h2>


    <div className="contact-card">
      <p className="contact-text">
        I'm currently looking for internship and full-time opportunities.
        Feel free to connect with me through email, LinkedIn, or GitHub.
      </p>

      <div className="contact-links">
        <a
          href="mailto:kanishkacu888@gmail.com"
          className="contact-btn"
        >
          📧 Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/kanishkacu"
          target="_blank"
          rel="noreferrer"
          className="contact-btn"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/KanishkaCU"
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
