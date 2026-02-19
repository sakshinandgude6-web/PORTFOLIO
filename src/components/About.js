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
          I am a full-stack developer and MSc Business Analytics student at the
          University of Limerick, driven by a strong foundation in computer
          science and a passion for building scalable, secure, and data-driven
          systems. With a Bachelor’s degree in Computer Applications (Honours)
          and a CGPA of 9.32, I have developed deep technical competence
          alongside analytical and leadership capabilities.
        </p>
        <p style={{ ...styles.text, marginTop: "15px" }}>
          My technical expertise spans Java, JavaScript, TypeScript, Node.js,
          Express, React, and AWS. I focus on designing clean architectures,
          developing RESTful APIs, implementing secure JWT-based authentication
          systems, and building efficient database structures using MySQL,
          MongoDB, and PostgreSQL. Through projects such as a fully deployed URL
          Shortener and an Image Processing Application integrated with AWS S3
          and caching mechanisms, I have demonstrated end-to-end ownership —
          from system design and implementation to testing and deployment.
        </p>
        <p style={{ ...styles.text, marginTop: "15px" }}>
          Beyond technical skills, I bring proven leadership and organizational
          experience. As Head Placement Coordinator at Indira University, I
          managed structured data for over 500 students, coordinated with 50+ HR
          professionals, and worked closely with university leadership to
          improve placement outcomes by 13%. This role required analytical
          thinking, relationship management, event planning, and the ability to
          multitask efficiently under deadlines. Additionally, I served as Class
          Representative during the second and third years of my undergraduate
          program. In this role, I acted as a bridge between faculty and
          students, ensuring smooth communication, resolving concerns, and
          coordinating academic and co-curricular initiatives. This experience
          strengthened my accountability, problem-solving approach, and ability
          to represent collective interests professionally. I have also anchored
          and coordinated 8–10 university events, which significantly enhanced
          my public speaking, confidence, and stage presence. Managing event
          flow, handling live audiences, and adapting to real-time challenges
          strengthened my composure, quick decision-making ability, and
          communication clarity.
        </p>
        <p style={{ ...styles.text, marginTop: "15px" }}>
          What distinguishes me is my disciplined approach to continuous
          learning. I actively pursue certifications, deepen my understanding of
          core computer science fundamentals, and build practical projects to
          consolidate theoretical knowledge. I am hardworking, detail-oriented,
          and a quick learner who adapts rapidly to new technologies and
          environments. I take pride in my ability to multitask effectively,
          remain composed under pressure, and approach challenges with curiosity
          and dedication.
        </p>
      </div>
    </section>
  );
}

export default About;
