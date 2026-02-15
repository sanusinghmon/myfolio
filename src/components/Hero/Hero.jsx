import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">Sanu Singh</span> 👋
        </h1>

        <p className="hero-subtitle">
          Junior Full Stack Developer building scalable and modern web applications
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>
          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="counter-container">
          <div className="counter-box">
            <h2>
              <CountUp end={10} duration={3} />+
            </h2>
            <p>Projects Completed</p>
          </div>

          <div className="counter-box">
            <h2>
              <CountUp end={2} duration={3} />+
            </h2>
            <p>Years Experience</p>
          </div>

          <div className="counter-box">
            <h2>
              <CountUp end={15} duration={3} />+
            </h2>
            <p>Technologies Used</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
