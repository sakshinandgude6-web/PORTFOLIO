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

        <div style={styles.grid}>
          <div>
            {/* Languages */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Languages</div>
              <div style={styles.line}></div>
              <div style={styles.text}>
                Java, Python, JavaScript, TypeScript
              </div>
            </div>

            {/* Backend */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Backend Development</div>
              <div style={styles.line}></div>
              <div style={styles.text}>
                Node.js, Express, RESTful APIs, JWT Authentication, Middleware,
                Secure Access Controls
              </div>
            </div>

            {/* Web & Architecture */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Web & System Architecture</div>
              <div style={styles.line}></div>
              <div style={styles.text}>
                React, Angular, HTML, CSS, HTTP/HTTPS, Client–Server
                Architecture, Microservices Architecture, Asynchronous Systems,
                Browser Request–Response Lifecycle, CORS, Cookies & Sessions,
                Authentication vs Authorization, Core Web Security Practices
              </div>
            </div>

            {/* Databases */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Databases</div>
              <div style={styles.line}></div>
              <div style={styles.text}>MySQL, MongoDB, PostgreSQL</div>
            </div>
          </div>

          <div>
            {/* DevOps & Cloud */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>DevOps & Cloud</div>
              <div style={styles.line}></div>
              <div style={styles.text}>
                Git, GitHub, Docker, Kubernetes, AWS (VPC, EC2, Lambda, Route
                53, S3)
              </div>
            </div>

            {/* Testing */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Testing & Debugging</div>
              <div style={styles.line}></div>
              <div style={styles.text}>Postman, Jest, Chrome DevTools</div>
            </div>

            {/* Deployment */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Deployment</div>
              <div style={styles.line}></div>
              <div style={styles.text}>Render, Vercel</div>
            </div>

            {/* CS Fundamentals */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>
                Computer Science Foundations
              </div>
              <div style={styles.line}></div>
              <div style={styles.text}>
                Data Structures (DSA), Object-Oriented Programming (OOP), UML,
                System Design, Agile Methodologies
              </div>
            </div>

            {/* Soft Skills */}
            <div style={styles.category}>
              <div style={styles.categoryTitle}>Professional Skills</div>
              <div style={styles.line}></div>
              <div style={styles.text}>
                Problem-Solving, Detail-Oriented, Strong Communication,
                Teamwork, Adaptability, Time Management, Multitasking,
                Continuous Learning, Dedication, Quick Learner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
