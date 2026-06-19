import "./About.css";

const STATS = [
{ value: "2027", label: "Graduation" },
{ value: "MERN", label: "Stack" },
{ value: "Python", label: "Developer" },
{ value: "AI & DS", label: "Specialization" },
];

export default function About() {
return ( <section id="about"> <div className="container">


    <p className="section-label">About Me</p>
    <h2 className="section-title">Who I Am</h2>

    <div className="about-grid">

      <div className="about-text">
        <p>
          I'm <strong>Kanishka</strong>, a passionate B.Tech student
          specializing in <span className="highlight">
          Artificial Intelligence & Data Science
          </span>.
        </p>

        <p>
          I enjoy building modern web applications using the
          <span className="highlight"> MERN Stack </span>
          and solving real-world problems through technology.
          My interests include Full Stack Development,
          Python programming, Data Science, and Software Engineering.
        </p>

        <p>
          Currently, I am focused on improving my development skills,
          building impactful projects, and preparing for software
          development opportunities. I am always eager to learn,
          experiment with new technologies, and grow as a developer.
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
