function Skills() {
  const skills = [
    { name: "Laravel", level: 85 },
    { name: "React", level: 75 },
    { name: "JavaScript", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Python", level: 70 },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Technologies I use to build scalable and modern web applications
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
