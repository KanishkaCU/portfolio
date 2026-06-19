import "./Skills.css";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "AI & Data Science",
    icon: "🤖",
    skills: ["Pandas", "NumPy", "Machine Learning"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">

        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="skill-group"
            >
              <div className="skill-group-header">
                <span className="skill-icon">
                  {group.icon}
                </span>

                <h3 className="skill-category">
                  {group.category}
                </h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                  >
                    {skill}
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