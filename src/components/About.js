import React from "react";

function About() {
  const styles = {
    section: {
      backgroundColor: "#1a1a1a",
      color: "white",
      padding: "80px 50px",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      color: "#00adb5",
    },
    text: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      color: "#ccc",
    },
  };

  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <h2 style={styles.heading}>About Me</h2>
       <p style={styles.text}>
  I’m a Computer Science graduate and software engineer focused on building
  scalable, secure, and production-ready systems. I enjoy designing clean
  architectures, developing RESTful APIs, and implementing authentication and
  authorization flows that are reliable and maintainable.
</p>

<p style={{ ...styles.text, marginTop: "15px" }}>
  My experience spans Java, Spring Boot, React, and cloud deployment on AWS.
  I’ve built and deployed backend services with layered architecture,
  PostgreSQL schema design, JWT-based security, and performance-focused
  optimizations such as caching and structured data modeling. I’m particularly
  interested in system design, distributed systems, and building software that
  performs reliably at scale.
</p>

<p style={{ ...styles.text, marginTop: "15px" }}>
  Beyond writing code, I value clarity in technical decisions, clean
  separation of concerns, and thoughtful problem-solving. I aim to build
  systems that are not only functional, but maintainable, secure, and aligned
  with real-world requirements.
</p>
      </div>
    </section>
  );
}

export default About;
