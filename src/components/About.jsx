import "./About.css";

const STATS = [
  { value: "Final", label: "Year Student" },
  { value: "MERN", label: "Stack" },
  { value: "Python", label: "Developer" },
  { value: "AI&DS", label: "Specialization" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">

        <p className="section-label">About me</p>
        <h2 className="section-title">Who I am</h2>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm <strong>Kanishka</strong>, a final-year B.Tech student
              majoring in Artificial Intelligence and Data Science at{" "}
              <span className="highlight">
                KGISL Institute of Technology, Coimbatore
              </span>.
            </p>
            <p style={{ marginTop: "16px" }}>
              I specialize in full-stack web development with the{" "}
              <span className="highlight">MERN stack</span> (MongoDB, Express,
              React, Node.js) and have a strong foundation in{" "}
              <span className="highlight">Python</span> development. I enjoy
              building scalable, user-friendly applications and am always eager
              to learn new technologies.
            </p>
            <p style={{ marginTop: "16px" }}>
              As I approach graduation, I'm actively looking for opportunities
              where I can contribute, grow, and continue developing my skills
              in a challenging environment.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat-card">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}