import React from "react";

function ExtraActivities() {
  const styles = {
    section: {
      backgroundColor: "#1a1a1a",
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
      backgroundColor: "#111",
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
    list: {
      marginTop: "10px",
      paddingLeft: "20px",
      color: "#ccc",
      lineHeight: "1.6",
    },
  };

  return (
    <section style={styles.section} id="extra-activities">
      <div style={styles.container}>
        <h2 style={styles.heading}>Leadership & Extra Activities</h2>

        {/* Head Placement Coordinator */}
        <div style={styles.card}>
          <div style={styles.title}>Head Placement Coordinator</div>
          <div style={styles.org}>
            Indira University | June 2024 – August 2025
          </div>

          <ul style={styles.list}>
            <li>
              Managed structured placement data for 500+ students and
              coordinated with 50+ HR professionals across multiple
              organizations.
            </li>
            <li>
              Worked directly under university leadership to bring companies for
              campus recruitment and improve placement outcomes by 13%.
            </li>
            <li>
              Planned and executed campus drives, handled event logistics,
              maintained placement software records, and generated structured
              reports.
            </li>
            <li>
              Demonstrated multitasking ability, data organization skills,
              relationship management, and professional communication under
              pressure.
            </li>
          </ul>
        </div>

        {/* Class Representative */}
        <div style={styles.card}>
          <div style={styles.title}>Class Representative</div>
          <div style={styles.org}>BCA Second & Third Year</div>

          <ul style={styles.list}>
            <li>
              Acted as a communication bridge between faculty and students,
              ensuring clarity, coordination, and smooth academic operations.
            </li>
            <li>
              Addressed academic concerns, organized discussions, and
              represented student interests professionally.
            </li>
            <li>
              Strengthened leadership, accountability, problem-solving, and
              decision-making abilities.
            </li>
          </ul>
        </div>

        {/* Anchoring & Event Management */}
        <div style={styles.card}>
          <div style={styles.title}>Event Anchoring & Coordination</div>

          <ul style={styles.list}>
            <li>
              Anchored and coordinated 8–10 academic and cultural events,
              managing stage flow, audience engagement, and live transitions.
            </li>
            <li>
              Developed strong public speaking skills, confidence, adaptability,
              and the ability to think quickly in real-time situations.
            </li>
            <li>
              Contributed to event planning, scheduling, and smooth execution of
              university-level programs.
            </li>
          </ul>
        </div>

        {/* Personal Traits */}
        <div style={styles.card}>
          <div style={styles.title}>Professional Attributes</div>

          <ul style={styles.list}>
            <li>
              Continuous learner committed to strengthening core computer
              science fundamentals and emerging technologies.
            </li>
            <li>
              Hardworking, detail-oriented, and highly disciplined with strong
              time management skills.
            </li>
            <li>
              Quick learner who adapts rapidly to new environments, tools, and
              technologies.
            </li>
            <li>Strong communication, teamwork, and collaborative mindset.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExtraActivities;
