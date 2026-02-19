import React from "react";

function Projects() {
  const styles = {
    section: {
      backgroundColor: "#111",
      color: "white",
      padding: "60px 30px",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "40px",
      color: "#00adb5",
      textAlign: "center",
    },
    card: {
      backgroundColor: "#1a1a1a",
      padding: "25px",
      borderRadius: "10px",
      marginBottom: "25px",
    },
    title: {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    duration: {
      color: "#00adb5",
      marginTop: "5px",
    },
    list: {
      marginTop: "10px",
      paddingLeft: "20px",
      color: "#ccc",
      lineHeight: "1.6",
    },
    link: {
      color: "#00adb5",
      textDecoration: "none",
    },
  };

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <h2 style={styles.heading}>Projects</h2>

        {/* URL Shortener */}
        <div style={styles.card}>
          <div style={styles.title}>URL Shortener Web Application</div>
          <div style={styles.duration}>Dec 2025 – Jan 2026</div>

          <ul style={styles.list}>
            <li>
              Designed and developed a full-stack web application using React,
              Node.js, Express, and MongoDB with well-structured RESTful APIs.
            </li>
            <li>
              Implemented secure JWT-based authentication, middleware-driven
              route protection, and role-based access controls.
            </li>
            <li>
              Conducted end-to-end automated testing and deployed the
              production-ready application using Render (backend) and Vercel
              (frontend).
            </li>
          </ul>

          <p style={{ marginTop: "10px" }}>
            🔗{" "}
            <a
              href="https://github.com/sakshinandgude6-web/Url_Shortener_App"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              View on GitHub
            </a>
          </p>
        </div>

        {/* Image Processing App */}
        <div style={styles.card}>
          <div style={styles.title}>Image Processing Application</div>
          <div style={styles.duration}>Feb 2026</div>

          <ul style={styles.list}>
            <li>
              Developing a full-stack application using Angular, Node.js,
              Express, and MongoDB with RESTful API architecture.
            </li>
            <li>
              Implementing an end-to-end image upload and transformation
              pipeline using Multer and Sharp, integrated with Amazon S3 for
              scalable file storage.
            </li>
            <li>
              Designed hash-based caching using Node.js crypto module to prevent
              redundant processing and optimize performance.
            </li>
            <li>
              Writing automated tests using Jest and Supertest to ensure secure
              authentication, protected routes, and API reliability.
            </li>
          </ul>

          <p style={{ marginTop: "10px" }}>
            🔗{" "}
            <a
              href="https://github.com/sakshinandgude6-web/Image_Processing_App"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              View on GitHub
            </a>
          </p>
        </div>

        {/* Portfolio Website */}
        <div style={styles.card}>
          <div style={styles.title}>Personal Portfolio Website</div>
          <div style={styles.duration}>September 2025</div>

          <ul style={styles.list}>
            <li>
              Designed and developed a responsive developer portfolio using
              React with modular component architecture and clean UI design.
            </li>
            <li>
              Structured sections for projects, technical experience,
              certifications, and education with smooth scrolling navigation.
            </li>
            <li>
              Focused on performance optimization, responsive layout, and
              professional presentation tailored for tech recruiters.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
