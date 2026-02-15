import { Code, LayoutDashboard, Server } from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description:
        "Full-stack web applications using Laravel, React, and modern best practices.",
    },
    {
      icon: <LayoutDashboard size={40} />,
      title: "Admin Panels",
      description:
        "Secure and scalable dashboards with role-based authentication systems.",
    },
    {
      icon: <Server size={40} />,
      title: "API Integration",
      description:
        "REST API development, third-party integrations, and backend architecture.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <p className="services-subtitle">
          Solutions I provide to build scalable and production-ready applications
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
