import React from "react";
import heroPhoto from "../assets/heroPhoto.png";

function Hero() {
  const styles = {
    hero: {
      minHeight: "90vh",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 30px",
      backgroundColor: "#111",
      color: "white",
    },
    left: {
      flex: "1",
      minWidth: "280px",
    },
    right: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      minWidth: "280px",
      marginTop: "20px",
    },
    image: {
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #00adb5",
      boxShadow: "0 0 20px rgba(0, 173, 181, 0.5)",
    },
    heading: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
    },
    paragraph: {
      margin: "15px 0",
      fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
      color: "#ccc",
      lineHeight: "1.6",
    },
    button: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "#00adb5",
      color: "black",
      cursor: "pointer",
      fontWeight: "bold",
      borderRadius: "5px",
    },
  };

  return (
    <section style={styles.hero} id="hero">
      <div style={styles.left}>
        <h1 style={styles.heading}>Hi, I'm Sakshi 👋</h1>
        <p style={styles.paragraph}>
          Software Engineer focused on scalable systems, APIs & modern web
          development. solutions. Currently Deepening Expertise in Java Backend
          Engineering (Spring Boot, MVC, JDBC, JSP, Servlets)
        </p>
      </div>

      <div style={styles.right}>
        <img src={heroPhoto} alt="Sakshi" style={styles.image} />
      </div>
    </section>
  );
}

export default Hero;
