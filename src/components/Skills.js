import React from "react";

function Skills() {
  const styles = {
    section: {
      backgroundColor: "#111",
      color: "white",
      padding: "80px 30px",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "60px",
      color: "#00adb5",
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "50px",
    },
    category: {
      marginBottom: "30px",
    },
    categoryTitle: {
      fontSize: "1.2rem",
      color: "#00adb5",
      marginBottom: "10px",
    },
    line: {
      height: "1px",
      backgroundColor: "rgba(0,173,181,0.3)",
      marginBottom: "10px",
    },
    text: {
      color: "#ccc",
      lineHeight: "1.8",
      fontSize: "14px",
    },
  };

  return (
    <section style={styles.section} id="skills">
      <div style={styles.container}>
        <h2 style={styles.heading}>Technical Expertise</h2>
      </div>
      <div style={styles.grid}>
  <div>
    {/* Languages */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Languages</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        Java, JavaScript, TypeScript, Python
      </div>
    </div>

    {/* Backend */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Backend Engineering</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        Spring Boot, Node.js, Express.js, RESTful APIs,
        JWT Authentication, Role-Based Access Control (RBAC),
        Middleware, Layered Architecture (Controller–Service–Repository)
      </div>
    </div>

    {/* Frontend */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Frontend Development</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        React.js, HTML, CSS, Client–Server Architecture,
        HTTP/HTTPS, CORS, Cookies & Sessions
      </div>
    </div>

    {/* Databases */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Databases</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        PostgreSQL, MySQL, MongoDB,
        Relational Schema Design, Query Optimization Basics
      </div>
    </div>
  </div>

  <div>
    {/* Cloud & DevOps */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Cloud & DevOps</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        AWS (EC2, S3, RDS, Lambda),
        Docker, Git, GitHub Actions,
        CI/CD Pipelines, Render, Vercel
      </div>
    </div>

    {/* Testing */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Testing & Debugging</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        Jest, Supertest, Postman,
        API Testing, Chrome DevTools, IDE Debugging
      </div>
    </div>

    {/* Architecture & CS */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>
        Computer Science & System Design
      </div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        Data Structures & Algorithms,
        Object-Oriented Programming (OOP),
        Database Design,
        REST Architecture Principles,
        Authentication vs Authorization,
        Scalable System Design Concepts,
        UML
      </div>
    </div>

    {/* Professional Skills */}
    <div style={styles.category}>
      <div style={styles.categoryTitle}>Professional Skills</div>
      <div style={styles.line}></div>
      <div style={styles.text}>
        Cross-Functional Collaboration,
        Technical Communication,
        Ownership & Accountability,
        Analytical Problem-Solving,
        Detail-Oriented Execution
      </div>
    </div>
  </div>
</div>
    </section>
  );
}

export default Skills;
