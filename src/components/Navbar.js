import React from "react";

function Navbar() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 30px",
      backgroundColor: "#1a1a1a",
      color: "white",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      flexWrap: "wrap",
    },
    logo: {
      color: "#00adb5",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "20px",
      flexWrap: "wrap",
    },
    navItem: {
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo} onClick={() => scrollToSection("hero")}>
        Sakshi Vijay Nandgude
      </h2>

      <ul style={styles.navLinks}>
        <li style={styles.navItem} onClick={() => scrollToSection("about")}>
          About
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("education")}>
          Education
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("projects")}>
          Projects
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("skills")}>
          Skills
        </li>
        <li
          style={styles.navItem}
          onClick={() => scrollToSection("tech-experience")}
        >
          Tech-Experience
        </li>
        <li
          style={styles.navItem}
          onClick={() => scrollToSection("extra-activities")}
        >
          Extra-Activities
        </li>
        <li
          style={styles.navItem}
          onClick={() => scrollToSection("certifications")}
        >
          Certifications
        </li>
        <li style={styles.navItem} onClick={() => scrollToSection("contact")}>
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
