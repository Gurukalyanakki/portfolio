import React, { useState, useEffect } from "react";

import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import {
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaGitAlt,


} from "react-icons/fa";

import { TbBrain } from "react-icons/tb";
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
  { icon: <FaReact />, title: "React", desc: "Modern UI Development" },
  { icon: <SiFastapi />, title: "FastAPI", desc: "REST API Development" },
  { icon: <FaPython />, title: "Python", desc: "AI, ML & Backend" },
  { icon: <FaJava />, title: "Java", desc: "Object-Oriented Programming" },
  { icon: <SiCplusplus />, title: "C++", desc: "DSA & Competitive Programming" },
  { icon: <SiC />, title: "C", desc: "Programming Fundamentals" },
  { icon: <SiMysql />, title: "MySQL", desc: "Relational Database" },
  { icon: <SiMongodb />, title: "MongoDB", desc: "NoSQL Database" },
  { icon: <FaGitAlt />, title: "Git", desc: "Version Control" },
  { icon: <FaDocker />, title: "Docker", desc: "Containerization" },
  { icon: <TbBrain />, title: "Machine Learning", desc: "Predictive Models" },
  { icon: <SiTensorflow />, title: "Deep Learning", desc: "Neural Networks" },
  { icon: <SiOpencv />, title: "Computer Vision", desc: "Image Processing" },
  { icon: <HiCpuChip />, title: "YOLO", desc: "Object Detection" },
];
  const stats = [
  ["9.52", "CGPA"],
  ["5+", "Projects"],
  ["4000+", "Students Mentored"],
  ["AI/ML", "Specialization"],
];

  // Responsive dynamic styles
  const styles = {
    section: {
      padding: isMobileOrTablet ? "80px 0" : "120px 0",
      background: "radial-gradient(circle at top, rgba(239, 68, 68, 0.05) 0%, #121212 60%, #0a0a0a 100%)",
      color: "var(--text-200)",
      position: "relative",
      overflow: "hidden"
    },
    leftGlow: {
      position: "absolute",
      width: isMobile ? "200px" : "320px",
      height: isMobile ? "200px" : "320px",
      left: "-120px",
      top: "-80px",
      background: "#ef4444",
      filter: "blur(160px)",
      opacity: 0.12,
      borderRadius: "50%",
      pointerEvents: "none"
    },
    rightGlow: {
      position: "absolute",
      width: isMobile ? "200px" : "300px",
      height: isMobile ? "200px" : "300px",
      right: "-80px",
      bottom: "-80px",
      background: "#f97316",
      filter: "blur(160px)",
      opacity: 0.1,
      borderRadius: "50%",
      pointerEvents: "none"
    },
    titleHeader: {
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "60px"
    },
    titlePre: {
      color: "#ef4444",
      letterSpacing: "3px",
      fontWeight: 700,
      fontSize: "14px",
      marginBottom: "8px"
    },
    titleMain: {
      fontSize: isMobile ? "32px" : isTablet ? "40px" : "48px",
      margin: 0,
      lineHeight: 1.2,
      color: "#ffffff"
    },
    titleHighlight: {
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      display: "inline-block",
    },
    mainGrid: {
      display: "grid",
      gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.4fr 1fr",
      gap: "30px"
    },
    bioContainer: {
      background: "rgba(20, 20, 20, 0.7)",
      border: "1px solid rgba(239, 68, 68, 0.15)",
      borderRadius: 24,
      padding: isMobile ? "24px" : "35px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 15px 30px rgba(239, 68, 68, 0.03)"
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
      background: "rgba(239, 68, 68, 0.04)",
      border: "1px solid rgba(239, 68, 68, 0.1)",
      borderRadius: 18,
      padding: isMobile ? "15px" : "20px",
      textAlign: "center"
    },
    statVal: {
      fontSize: isMobile ? "28px" : "34px",
      fontWeight: 700,
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      display: "inline-block",
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: isExtraMobile ? "1fr" : "repeat(2, 1fr)",
      gap: 18
    },
    skillCard: {
      background: "rgba(20, 20, 20, 0.75)",
      border: "1px solid rgba(239, 68, 68, 0.15)",
      borderRadius: 20,
      padding: isMobile ? "18px 12px" : "24px",
      transition: "0.3s ease",
      textAlign: "center",
      backdropFilter: "blur(18px)",
      cursor: "pointer",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
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
            Building <span className="gradient-text-clip" style={styles.titleHighlight}>Intelligent</span> Digital Experiences
          </h2>
        </div>

        <div style={styles.mainGrid}>
          {/* Left Side: Biography terminal layout */}
          <div style={styles.bioContainer}>
            <div style={styles.terminalDots}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f97316" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
            </div>
            <p style={{ fontFamily: "monospace", color: "#ef4444", marginBottom: "15px" }}></p>
            <h3 style={{ fontSize: isMobile ? "28px" : "34px", marginBottom: "15px", fontWeight: "700", color: "#ffffff" }}>THUNIKALA GURU KALYAN</h3>
            <div style={{ color: "#cbd5e1", lineHeight: 1.9 }}>
              <p
                style={{
                  fontSize: isMobile ? "15px" : "16px",
                  marginBottom: "20px",
                }}
              >
                I'm a Computer Science undergraduate,
                Full Stack Developer, AI Engineer, and the founder of
                <strong> ElevateToOne</strong>. I enjoy designing and building modern,
                scalable software that combines clean architecture, exceptional user
                experiences, and intelligent automation to solve real-world challenges.
              </p>

              <p
                style={{
                  fontSize: isMobile ? "15px" : "16px",
                  marginBottom: "20px",
                }}
              >
                My expertise spans <strong>React</strong>, <strong>FastAPI</strong>,
                <strong>Java</strong>, <strong>Python</strong>, <strong>C</strong>, <strong>C++</strong>,
                <strong> MySQL</strong>, and modern AI technologies, including
                <strong> Machine Learning</strong>, <strong>Deep Learning</strong>, and
                <strong>Computer Vision</strong>. I enjoy transforming ideas into
                production-ready applications that are fast, secure, scalable, and built
                for real users.
              </p>

              <p
                style={{
                  fontSize: isMobile ? "15px" : "16px",
                  marginBottom: "20px",
                }}
              >
                Beyond software development, I'm passionate about mentorship, leadership,
                and continuous learning. I've mentored thousands of students, collaborated
                with startups, and contributed to building communities that inspire
                innovation, knowledge sharing, and career growth.
              </p>

              <p
                style={{
                  fontSize: isMobile ? "15px" : "16px",
                  marginBottom: "20px",
                }}
              >
                <strong>ElevateToOne</strong> is my initiative to help Students
                become industry-ready through structured learning, technical mentorship,
                placement preparation, and collaborative problem solving. The vision is simple: empower every learner to grow with
                confidence.
              </p>

              <p
                style={{
                  fontSize: isMobile ? "15px" : "16px",
                }}
              >
                I believe technology is most valuable when it creates positive impact. My
                goal is to keep learning, keep building, and develop innovative solutions
                that improve lives while contributing to the future of software engineering
                and artificial intelligence.
              </p>
            </div>
            <div style={styles.statsGrid}>
              {stats.map(([v, l]) => (
                <div key={l} style={styles.statCard}>
                  <div className="gradient-text-clip" style={styles.statVal}>{v}</div>
                  <div style={{ color: "#9ca3af", fontSize: isMobile ? "13px" : "15px", marginTop: "4px", fontWeight: "500" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Skills */}
          <div>
            <h3
              style={{
                fontSize: isMobile ? "28px" : "34px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              Technical{" "}
              <span
                className="gradient-text-clip"
                style={{
                  background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
                  display: "inline-block",
                }}
              >
                Skills
              </span>
            </h3>

            <div style={styles.cardsGrid}>
              {cards.map((c) => (
                <div
                  key={c.title}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(239, 68, 68, 0.25)";
                    e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(239, 68, 68, 0.1)";
                  }}
                  style={styles.skillCard}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "36px" : "42px",
                      color: "#f97316",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {c.icon}
                  </div>

                  <h4
                    style={{
                      fontSize: isMobile ? "16px" : "18px",
                      fontWeight: "600",
                      marginBottom: "6px",
                      color: "#ffffff",
                    }}
                  >
                    {c.title}
                  </h4>

                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: isMobile ? "12px" : "14px",
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
