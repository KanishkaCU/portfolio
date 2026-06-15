import "./Projects.css";

const PROJECTS = [
  {
    title: "Campus Connect",
    description:
      "A college communication platform that helps students and faculty share announcements, events, and academic updates efficiently.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "DailyWage",
    description:
      "A web application for managing daily wage workers, attendance records, and payment tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Food Calorie Estimator",
    description:
      "A machine learning application that estimates food calories and provides nutritional insights.",
    tech: ["Python", "Machine Learning", "Pandas"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">
              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="project-links"> */}
                {/* <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}