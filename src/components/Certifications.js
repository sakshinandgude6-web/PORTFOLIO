import React from "react";

function Certifications() {
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
    category: {
      marginBottom: "35px",
    },
    categoryTitle: {
      fontSize: "1.3rem",
      marginBottom: "15px",
      color: "#00adb5",
    },
    card: {
      backgroundColor: "#1a1a1a",
      padding: "18px",
      borderRadius: "8px",
      marginBottom: "15px",
    },
    title: {
      fontWeight: "bold",
    },
    org: {
      color: "#00adb5",
      fontSize: "14px",
      marginTop: "4px",
    },
    meta: {
      fontSize: "13px",
      color: "#ccc",
      marginTop: "4px",
    },
  };

  return (
    <section style={styles.section} id="certifications">
      <div style={styles.container}>
        <h2 style={styles.heading}>Certifications</h2>

        {/* Cloud & DevOps */}
        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Cloud & DevOps</h3>

          <div style={styles.card}>
            <div style={styles.title}>AWS Cloud Practitioner Essentials</div>
            <div style={styles.org}>Amazon Web Services | Feb 2026</div>
            <div style={styles.meta}>Credential ID: 1AXAQR9GA0CY</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Introduction to Cloud Computing</div>
            <div style={styles.org}>IBM | Nov 2025</div>
            <div style={styles.meta}>Credential ID: DIRPHWI0Q9QO</div>
          </div>
        </div>

        {/* Full Stack Development */}
        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>Full-Stack Development</h3>

          <div style={styles.card}>
            <div style={styles.title}>
              Developing Back-End Apps with Node.js & Express
            </div>
            <div style={styles.org}>IBM | Jan 2026</div>
            <div style={styles.meta}>Credential ID: UNJ2NWCQVCSG</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Developing Front-End Apps with React</div>
            <div style={styles.org}>IBM | Jan 2026</div>
            <div style={styles.meta}>Credential ID: JQFBGO4MZ4D1</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Getting Started with Git and GitHub</div>
            <div style={styles.org}>IBM | Dec 2025</div>
            <div style={styles.meta}>Credential ID: TCM6NKRI5IBR</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>
              Introduction to HTML, CSS & JavaScript
            </div>
            <div style={styles.org}>IBM | Nov 2025</div>
            <div style={styles.meta}>Credential ID: ZQRE46B8FIUE</div>
          </div>
        </div>

        {/* Software Engineering & CS */}
        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>
            Software Engineering & Computer Science
          </h3>

          <div style={styles.card}>
            <div style={styles.title}>
              Python for Data Science, AI & Development
            </div>
            <div style={styles.org}>IBM | Jan 2026</div>
            <div style={styles.meta}>Credential ID: VOUN368RLDTO</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Introduction to Software Engineering</div>
            <div style={styles.org}>IBM | Nov 2025</div>
            <div style={styles.meta}>Credential ID: 08LPUVXAH2RI</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>
              Citi - Technology Software Development Job Simulation
            </div>
            <div style={styles.org}>Forage | Feb 2026</div>
            <div style={styles.meta}>Credential ID: cWmfysfnQoCJnLJPF</div>
          </div>
        </div>

        {/* Business Analytics & Business Analysis */}
        <div style={styles.category}>
          <h3 style={styles.categoryTitle}>
            Business Analytics & Business Analysis
          </h3>

          <div style={styles.card}>
            <div style={styles.title}>
              Microsoft Business Analyst Professional Certificate
            </div>
            <div style={styles.org}>Microsoft | Oct 2025</div>
            <div style={styles.meta}>Credential ID: 2FSEGQY3FHY7</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Power Platform in Business Analysis</div>
            <div style={styles.org}>Microsoft | Sep 2025</div>
            <div style={styles.meta}>Credential ID: MHWCTO6YWZFY</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>
              Requirements Gathering in Business Analysis
            </div>
            <div style={styles.org}>Microsoft | Sep 2025</div>
            <div style={styles.meta}>Credential ID: ZE2T7XUIHIRP</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>
              Data & Business Process Modeling with Microsoft Visio
            </div>
            <div style={styles.org}>Microsoft | Jul 2025</div>
            <div style={styles.meta}>Credential ID: 1W1RBI65DR7F</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Business Analysis Fundamentals</div>
            <div style={styles.org}>Microsoft | Jul 2025</div>
            <div style={styles.meta}>Credential ID: NIIEO55P4FRW</div>
          </div>

          <div style={styles.card}>
            <div style={styles.title}>
              Data for Business Analysts Using Microsoft Excel
            </div>
            <div style={styles.org}>Microsoft | Jul 2025</div>
            <div style={styles.meta}>Credential ID: 8DUH25PJER5W</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
