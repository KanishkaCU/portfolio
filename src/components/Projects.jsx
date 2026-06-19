import "./Projects.css";

const PROJECTS = [
  {
    title: "Campus Connect",
    description:
      "A modern college communication platform that enables students and faculty to share announcements, events, academic resources, and important updates in real time.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "DailyWage",
    description:
      "A workforce management system for tracking daily wage employees, attendance records, salary calculations, and payment history through a simple dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Food Calorie Estimator",
    description:
      "An AI-powered application that predicts food calories and nutritional information using machine learning techniques and data analysis.",
    tech: ["Python", "Machine Learning", "Pandas"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">

        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">

              <h3 className="project-title">
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}