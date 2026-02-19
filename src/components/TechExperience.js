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

        {/* Citi Simulation */}
        <div style={styles.card}>
          <div style={styles.title}>
            Citi ICG Technology Software Development Job Simulation
          </div>
          <div style={styles.org}>Forage | February 2026</div>

          <ul style={styles.list}>
            <li>
              Created a detailed state diagram of the loan management process
              using Unified Modeling Language (UML) to model system behavior and
              workflow transitions.
            </li>
            <li>
              Developed a Java-based internal tool to visualize stock market
              risk in real time, demonstrating understanding of financial data
              modeling and system design principles.
            </li>
          </ul>
        </div>

        {/* You can keep your other experiences below */}

        <div style={styles.card}>
          <div style={styles.title}>Full Stack Development Projects</div>
          <p style={styles.text}>
            Designed and deployed secure web applications using React, Node.js,
            Express, RESTful APIs, and cloud deployment platforms such as Render
            and Vercel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TechExperience;
