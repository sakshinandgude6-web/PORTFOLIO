import React from "react";

function Contact() {
  const styles = {
    section: {
      backgroundColor: "#111",
      color: "white",
      padding: "80px 50px",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "40px",
      color: "#00adb5",
    },
    card: {
      backgroundColor: "#1a1a1a",
      padding: "30px",
      borderRadius: "10px",
      lineHeight: "2",
    },
    link: {
      color: "#00adb5",
      textDecoration: "none",
    },
  };

  return (
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact Me</h2>

        <div style={styles.card}>
          <p>
            📧 Email:{" "}
            <a href="mailto:sakshinandgude6@gmail.com" style={styles.link}>
              sakshinandgude6@gmail.com
            </a>
          </p>

          <p>
            📞 Phone: <span>+353 858083112</span>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sakshi-nandgude-2457a4302/"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              https://www.linkedin.com/in/sakshi-nandgude-2457a4302/
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/sakshinandgude6-web"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              https://github.com/sakshinandgude6-web
            </a>
          </p>

          <p>📍 Location: Limerick, Ireland</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
