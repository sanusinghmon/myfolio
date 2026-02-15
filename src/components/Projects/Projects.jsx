function Projects() {
  const projectData = [
    {
      title: "Online Testing Platform",
      description: "Full-featured testing platform built with Laravel, MySQL and authentication system.",
      image: "/images/project1.png",
      github: "https://github.com/yourgithub/project1",
    },
    {
      title: "Admin Panel System",
      description: "Role-based authentication & dynamic CRUD management system.",
      image: "/images/project2.png",
      github: "https://github.com/yourgithub/project2",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Some of the applications I’ve built recently
        </p>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
