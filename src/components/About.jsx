import React, { useState, useEffect } from "react";
import {
  FaReact, FaPython, FaJava, FaDocker, FaGitAlt, FaAws
} from "react-icons/fa";
import {
  SiFastapi, SiMongodb, SiMysql, SiOpencv, SiTailwindcss
} from "react-icons/si";
import { HiCpuChip } from "react-icons/hi2";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  const isMobileOrTablet = windowWidth <= 768;
  const isExtraMobile = windowWidth <= 380;

  const cards = [
    { icon: <FaReact />, title: "React", desc: "Modern UI" },
    { icon: <SiFastapi />, title: "FastAPI", desc: "REST APIs" },
    { icon: <FaPython />, title: "Python", desc: "AI & Backend" },
    { icon: <FaJava />, title: "Java", desc: "OOP" },
    { icon: <SiMysql />, title: "MySQL", desc: "Database" },
    { icon: <SiMongodb />, title: "MongoDB", desc: "NoSQL" },
    { icon: <SiOpencv />, title: "OpenCV", desc: "Vision" },
    { icon: <HiCpuChip />, title: "YOLO", desc: "Detection" },
    { icon: <FaDocker />, title: "Docker", desc: "Containers" },
    { icon: <FaGitAlt />, title: "Git", desc: "Version Control" },
    { icon: <FaAws />, title: "AWS", desc: "Cloud" },
    { icon: <SiTailwindcss />, title: "Tailwind", desc: "Styling" },
  ];

  const stats = [
    ["9.52", "CGPA"],
    ["10+", "Projects"],
    ["4000+", "Students"],
    ["AI", "Focus"]
  ];

  // Responsive dynamic styles
  const styles = {
    section: {
      padding: isMobileOrTablet ? "80px 0" : "120px 0",
      background: "radial-gradient(circle at top, #faf5ff 0%, #f8fafc 50%, #ffffff 100%)",
      color: "#0f172a",
      position: "relative",
      overflow: "hidden"
    },
    leftGlow: {
      position: "absolute",
      width: isMobile ? "200px" : "320px",
      height: isMobile ? "200px" : "320px",
      left: "-120px",
      top: "-80px",
      background: "#38bdf8",
      filter: "blur(160px)",
      opacity: 0.08,
      borderRadius: "50%",
      pointerEvents: "none"
    },
    rightGlow: {
      position: "absolute",
      width: isMobile ? "200px" : "300px",
      height: isMobile ? "200px" : "300px",
      right: "-80px",
      bottom: "-80px",
      background: "#c084fc",
      filter: "blur(160px)",
      opacity: 0.06,
      borderRadius: "50%",
      pointerEvents: "none"
    },
    titleHeader: {
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "60px"
    },
    titlePre: {
      color: "#2884ed",
      letterSpacing: "3px",
      fontWeight: 700,
      fontSize: "14px",
      marginBottom: "8px"
    },
    titleMain: {
      fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
      margin: 0,
      lineHeight: 1.2
    },
    titleHighlight: {
      background: "linear-gradient(135deg, #38bdf8 0%, #c084fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block"
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.4fr 1fr",
      gap: "30px"
    },
    bioContainer: {
      background: "rgba(255, 255, 255, 0.85)",
      border: "1px solid rgba(0, 0, 0, 0.08)",
      borderRadius: 24,
      padding: isMobile ? "24px" : "35px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.03)"
    },
    terminalDots: {
      display: "flex",
      gap: 8,
      marginBottom: 20
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(2, 1fr)",
      gap: 18,
      marginTop: 35
    },
    statCard: {
      background: "rgba(0, 0, 0, 0.02)",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      borderRadius: 18,
      padding: isMobile ? "15px" : "20px",
      textAlign: "center"
    },
    statVal: {
      fontSize: isMobile ? "28px" : "34px",
      fontWeight: 700,
      background: "linear-gradient(135deg, #38bdf8 0%, #c084fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block"
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: isExtraMobile ? "1fr" : "repeat(2, 1fr)",
      gap: 18
    },
    skillCard: {
      background: "rgba(255, 255, 255, 0.85)",
      border: "1px solid rgba(0, 0, 0, 0.06)",
      borderRadius: 20,
      padding: isMobile ? "18px 12px" : "24px",
      transition: "0.3s ease",
      textAlign: "center",
      backdropFilter: "blur(18px)",
      cursor: "pointer",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)"
    }
  };

  return (
    <section id="about" style={styles.section}>
      <div className="container">
        <div style={styles.leftGlow} />
        <div style={styles.rightGlow} />

        <div style={styles.titleHeader}>
        <p style={styles.titlePre}>ABOUT</p>
        <h2 style={styles.titleMain}>
          Building <span style={styles.titleHighlight}>Intelligent</span> Digital Experiences
        </h2>
      </div>

      <div style={styles.mainGrid}>
        {/* Left Side: Biography terminal layout */}
        <div style={styles.bioContainer}>
          <div style={styles.terminalDots}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
          </div>
          <p style={{ fontFamily: "monospace", color: "#2884ed", marginBottom: "15px" }}>{"> boot profile"}</p>
          <h3 style={{ fontSize: isMobile ? "28px" : "34px", marginBottom: "15px", fontWeight: "700", color: "#0f172a" }}>Gurukalyan Akki</h3>
          <p style={{ color: "#475569", lineHeight: 1.9, fontSize: isMobile ? "15px" : "16px" }}>
            Full Stack Developer, AI enthusiast and founder of ElevateToOne.
            Passionate about scalable web applications, computer vision and
            automation. I enjoy transforming ideas into production-ready software.
          </p>

          <div style={styles.statsGrid}>
            {stats.map(([v, l]) => (
              <div key={l} style={styles.statCard}>
                <div style={styles.statVal}>{v}</div>
                <div style={{ color: "#64748b", fontSize: isMobile ? "13px" : "15px", marginTop: "4px", fontWeight: "500" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Skill Cards Grid */}
        <div style={styles.cardsGrid}>
          {cards.map((c) => (
            <div
              key={c.title}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(192, 132, 252, 0.15)";
                e.currentTarget.style.borderColor = "rgba(192, 132, 252, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.06)";
              }}
              style={styles.skillCard}
            >
              <div style={{ fontSize: isMobile ? "36px" : "42px", color: "#2884ed", marginBottom: "10px", display: "flex", justifyContent: "center" }}>
                {c.icon}
              </div>
              <h4 style={{ fontSize: isMobile ? "16px" : "18px", fontWeight: "600", marginBottom: "6px", color: "#0f172a" }}>{c.title}</h4>
              <p style={{ color: "#64748b", fontSize: isMobile ? "12px" : "14px", margin: 0 }}>{c.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
