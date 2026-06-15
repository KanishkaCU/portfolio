import "./Hero.css";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">

        <div className="hero-left">
          <p className="hero-greeting fade-in" style={{ animationDelay: "0.1s" }}>
            Hello, I'm
          </p>

          <h1 className="hero-name fade-in" style={{ animationDelay: "0.2s" }}>
            Kanishka
          </h1>

          <div className="hero-tags fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="hero-tag">MERN Stack Developer</span>
            <span className="hero-tag">Python Developer</span>
          </div>

          <div className="hero-tag-outline fade-in" style={{ animationDelay: "0.4s" }}>
            <span>⚡ Ready to handle your new project</span>
          </div>

          <p className="hero-desc fade-in" style={{ animationDelay: "0.5s" }}>
            Curious and hardworking full stack web developer with a deep interest in
            MERN Stack, Python and problem-solving, looking for an opportunity to work
            on real-world projects, enhance technical skills, and grow professionally.
          </p>

          <div className="hero-actions fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="https://github.com/KanishkaCU" target="_blank" rel="noreferrer" className="btn-github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kanishkacu" target="_blank" rel="noreferrer" className="btn-linkedin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-right fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="hero-photo-area">

            <img src={profileImg} alt="Kanishka" className="hero-img" />

            <svg className="hero-arc" viewBox="0 0 480 420" fill="none">
              <path
                d="M 180 20 C 460 20, 460 400, 180 400"
                stroke="#bfcfff"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                fill="none"
              />
              <circle cx="180" cy="20"  r="7" fill="#2563eb" />
              <circle cx="180" cy="400" r="7" fill="#2563eb" />
            </svg>

            <a href="#about" className="float-icon float-about">
              <div className="float-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span>About</span>
            </a>

            <a href="#skills" className="float-icon float-skills">
              <div className="float-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                  <line x1="12" y1="12" x2="12" y2="16"/>
                  <line x1="10" y1="14" x2="14" y2="14"/>
                </svg>
              </div>
              <span>Skills</span>
            </a>

            <a href="#projects" className="float-icon float-projects">
              <div className="float-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <span>Projects</span>
            </a>

           <a href="#contact" className="float-icon float-contact">
              <div className="float-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <span>Contact</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}