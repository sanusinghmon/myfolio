function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src="/images/profile.jpg" alt="Sanu Singh" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Sanu Singh</strong>, a passionate Junior Full Stack
            Developer from India. I build scalable and responsive web applications
            using Laravel, React, MySQL, and Python.
          </p>

          <p>
            I have experience developing admin dashboards, online testing platforms,
            and secure CRUD-based systems. I focus on writing clean, maintainable
            code and creating user-friendly interfaces.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>2+ Years</h3>
              <p>Development Experience</p>
            </div>

            <div className="highlight-card">
              <h3>10+ Projects</h3>
              <p>Completed Successfully</p>
            </div>

            <div className="highlight-card">
              <h3>Full Stack</h3>
              <p>Frontend & Backend</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
