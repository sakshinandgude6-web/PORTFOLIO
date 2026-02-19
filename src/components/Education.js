import React, { useState } from "react";

function Education() {
  const [showMSC, setShowMSC] = useState(false);
  const [showBCA, setShowBCA] = useState(false);

  const styles = {
    section: {
      backgroundColor: "#1a1a1a",
      color: "white",
      padding: "60px 30px",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "50px",
      color: "#00adb5",
      textAlign: "center",
    },
    timeline: {
      position: "relative",
      marginLeft: "20px",
      paddingLeft: "20px",
      borderLeft: "3px solid #00adb5",
    },
    item: {
      position: "relative",
      marginBottom: "40px",
    },
    dot: {
      position: "absolute",
      left: "-12px",
      top: "5px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#00adb5",
    },
    card: {
      backgroundColor: "#111",
      padding: "20px",
      borderRadius: "10px",
    },
    title: {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    institution: {
      color: "#00adb5",
      marginTop: "5px",
    },
    meta: {
      color: "#ccc",
      marginTop: "5px",
      fontSize: "14px",
    },
    button: {
      marginTop: "10px",
      padding: "6px 12px",
      backgroundColor: "#00adb5",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "13px",
    },
    moduleSection: {
      marginTop: "15px",
      color: "#ccc",
      lineHeight: "1.6",
      fontSize: "14px",
    },
  };

  return (
    <section style={styles.section} id="education">
      <div style={styles.container}>
        <h2 style={styles.heading}>Education</h2>

        <div style={styles.timeline}>
          {/* MSc */}
          <div style={styles.item}>
            <div style={styles.dot}></div>
            <div style={styles.card}>
              <div style={styles.title}>
                MSc Business Analytics (Expected Sep 2026)
              </div>
              <div style={styles.institution}>
                University of Limerick, Ireland
              </div>
              <div style={styles.meta}>September 2025 – September 2026</div>

              <button
                style={styles.button}
                onClick={() => setShowMSC(!showMSC)}
              >
                {showMSC ? "Hide Modules" : "View Modules"}
              </button>

              {showMSC && (
                <div style={styles.moduleSection}>
                  <b>Autumn Semester:</b>
                  <ul>
                    <li>Data & Analytical Decision Making</li>
                    <li>Statistics for Data Analytics</li>
                    <li>Database Systems (Relational & NoSQL)</li>
                    <li>Machine Learning & Applications</li>
                    <li>Project Management in Practice</li>
                  </ul>

                  <b>Spring Semester:</b>
                  <ul>
                    <li>Data Governance & Ethics</li>
                    <li>Applied Econometrics for Business</li>
                    <li>Digital Organisations & Markets</li>
                    <li>Applied Big Data & Visualisation</li>
                    <li>Leadership, Influence & Change</li>
                  </ul>

                  <b>Summer Semester:</b>
                  <ul>
                    <li>Digital Futures Lab</li>
                    <li>Business Simulation</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* BCA */}
          <div style={styles.item}>
            <div style={styles.dot}></div>
            <div style={styles.card}>
              <div style={styles.title}>
                Bachelor of Computer Applications (Honours) | CGPA: 9.32
              </div>
              <div style={styles.institution}>Pune University, India</div>
              <div style={styles.meta}>August 2022 – April 2025</div>

              <button
                style={styles.button}
                onClick={() => setShowBCA(!showBCA)}
              >
                {showBCA ? "Hide Subjects" : "View Subjects"}
              </button>

              {showBCA && (
                <div style={styles.moduleSection}>
                  <b>Year 1 – Foundation:</b>
                  <ul>
                    <li>C Programming & Advanced C</li>
                    <li>Web Technologies</li>
                    <li>Database Management Systems</li>
                    <li>Discrete Mathematics & Linear Algebra</li>
                    <li>Computer Organization & Architecture</li>
                  </ul>

                  <b>Year 2 – Core Development:</b>
                  <ul>
                    <li>Data Structures & Algorithms</li>
                    <li>Software Engineering</li>
                    <li>Python & Advanced Python</li>
                    <li>Object-Oriented Software Engineering</li>
                    <li>Introduction to Data Science & IoT</li>
                  </ul>

                  <b>Year 3 – Advanced Technologies:</b>
                  <ul>
                    <li>Java & Advanced Java</li>
                    <li>Machine Learning</li>
                    <li>Software Testing</li>
                    <li>Operating Systems</li>
                    <li>Big Data / Generative AI / Cloud Computing</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* HSC */}
          <div style={styles.item}>
            <div style={styles.dot}></div>
            <div style={styles.card}>
              <div style={styles.title}>
                Higher Secondary Certificate (Science) | 73.17%
              </div>
              <div style={styles.institution}>
                Jahind Junior College, Pimpri, Pune, India
              </div>
              <div style={styles.meta}>2020 – 2022</div>
            </div>
          </div>

          {/* SSC */}
          <div style={styles.item}>
            <div style={styles.dot}></div>
            <div style={styles.card}>
              <div style={styles.title}>
                Secondary School Certificate (SSC) | 92.20%
              </div>
              <div style={styles.institution}>
                Sindhu Vidya Bhavan, Aundh, Pune, India
              </div>
              <div style={styles.meta}>2019 – 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
