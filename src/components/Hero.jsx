import "./Hero.css";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
return ( <section id="home" className="hero"> <div className="container hero-inner">


    <div className="hero-left">

      <p
        className="hero-greeting fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        Aspiring Full Stack Developer
      </p>

      <h1
        className="hero-name fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        Kanishka C U
      </h1>

      <div
        className="hero-tags fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="hero-tag">Full Stack Developer</span>
        <span className="hero-tag">AI & Data Science</span>
        <span className="hero-tag">Python</span>
      </div>

      <div
        className="hero-tag-outline fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <span>🚀 Open to Internships & Opportunities</span>
      </div>

      <p
        className="hero-desc fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        Passionate Full Stack Developer and AI & Data Science student
        focused on building modern web applications using the MERN Stack.
        I enjoy solving real-world problems, creating intuitive user
        experiences, and continuously learning new technologies.
      </p>

      <div
        className="hero-actions fade-in"
        style={{ animationDelay: "0.6s" }}
      >
        <a
          href="https://github.com/KanishkaCU"
          target="_blank"
          rel="noreferrer"
          className="btn-github"
        >
          View GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kanishkacu"
          target="_blank"
          rel="noreferrer"
          className="btn-linkedin"
        >
          Connect on LinkedIn
        </a>
      </div>

    </div>

    <div
      className="hero-right fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="hero-photo-area">

        <img
          src={profileImg}
          alt="Kanishka"
          className="hero-img"
        />

        <svg
          className="hero-arc"
          viewBox="0 0 480 420"
          fill="none"
        >
          <path
            d="M 180 20 C 460 20, 460 400, 180 400"
            stroke="#151515"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            fill="none"
          />
          <circle cx="180" cy="20" r="7" fill="#151515" />
          <circle cx="180" cy="400" r="7" fill="#151515" />
        </svg>

        <a href="#about" className="float-icon float-about">
          <div className="float-icon-circle">
            <span>👤</span>
          </div>
          <span>About</span>
        </a>

        <a href="#skills" className="float-icon float-skills">
          <div className="float-icon-circle">
            <span>⚡</span>
          </div>
          <span>Skills</span>
        </a>

        <a href="#projects" className="float-icon float-projects">
          <div className="float-icon-circle">
            <span>💼</span>
          </div>
          <span>Projects</span>
        </a>

        <a href="#contact" className="float-icon float-contact">
          <div className="float-icon-circle">
            <span>✉️</span>
          </div>
          <span>Contact</span>
        </a>

      </div>
    </div>

  </div>
</section>


);
}
