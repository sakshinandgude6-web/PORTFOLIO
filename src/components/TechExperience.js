import React from "react";

function TechExperience() {
  const styles = {
    section: {
      backgroundColor: "#111",
      color: "white",
      padding: "60px 30px",
    },
    container: {
      maxWidth: "1000px",
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
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    org: {
      color: "#00adb5",
      marginTop: "5px",
    },
    text: {
      marginTop: "10px",
      color: "#ccc",
      lineHeight: "1.6",
    },
    list: {
      marginTop: "10px",
      paddingLeft: "20px",
      color: "#ccc",
      lineHeight: "1.6",
    },
  };

  return (
   <section style={styles.section} id="tech-experience">
  <div style={styles.container}>
    <h2 style={styles.heading}>Technical Experience</h2>

    {/* Agentic AI Intern */}
    <div style={styles.card}>
      <div style={styles.title}>Agentic AI Intern</div>
      <div style={styles.org}>Innomatics Research Labs | Feb 2026 – Present</div>

      <ul style={styles.list}>
        <li>
          Designed and implemented backend APIs integrating LLM-based reasoning
          with structured relational databases.
        </li>
        <li>
          Contributed to backend architecture discussions and feature planning
          within an agile development environment.
        </li>
        <li>
          Deployed scalable backend services on AWS infrastructure.
        </li>
      </ul>
    </div>

    {/* Backend Engineering Focus */}
    <div style={styles.card}>
      <div style={styles.title}>Backend Engineering & System Design</div>

      <ul style={styles.list}>
        <li>
          Designed secure RESTful services using Java and Spring Boot following
          layered architecture (Controller–Service–Repository).
        </li>
        <li>
          Implemented JWT-based authentication and role-based access control
          (RBAC) for protected routes and secure API access.
        </li>
        <li>
          Architected PostgreSQL schemas supporting user workflows and
          transaction-style operations.
        </li>
        <li>
          Deployed production-ready services on AWS EC2 with RDS integration.
        </li>
      </ul>
    </div>

    {/* Citi Simulation */}
    <div style={styles.card}>
      <div style={styles.title}>
        Citi ICG Technology – Software Development Simulation
      </div>
      <div style={styles.org}>Forage | February 2026</div>

      <ul style={styles.list}>
        <li>
          Modeled loan lifecycle workflows using UML state diagrams to
          represent system behavior and transition states.
        </li>
        <li>
          Produced technical documentation and API usage examples to simulate
          backend service design within financial systems.
        </li>
      </ul>
    </div>
  </div>
</section>
  );
}

export default TechExperience;
