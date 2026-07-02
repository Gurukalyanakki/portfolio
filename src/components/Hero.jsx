import React, { useState, useEffect } from "react";


import profileDesktop from "../assets/kalyan.png";
import profileMobile from "../assets/dpmob.png";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const titles = [
  "Full Stack Developer",
  "AI Enthusiast",
];
const rainSymbols = [
  "⚛",
  "</>",
  "{ }",
  "AI",
  "ML",
  "JS",
  "C++",
  "PY",
  "⚡",
  "<>",
  "01",
  "10",
  "∞",
  "λ",
  "#",
  "$",
  "//",
  "✓",
  "DEV",
  "API",
  "SQL",
  "NODE",
  "HTML",
  "CSS",
];
const [text, setText] = useState("");
const [titleIndex, setTitleIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
    
  
  const current = titles[titleIndex];

  const speed = isDeleting ? 40 : 80;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));

      if (text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      setText(current.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

  }, speed);
 

  return () => clearTimeout(timer);

}, [text, isDeleting, titleIndex]);
  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  const isMobileOrTablet = windowWidth <= 768;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    
  };

  // Dynamic Styles based on screen size
  const styles = {
    section: {
      background: "radial-gradient(circle at top right, #e0f2fe 0%, #faf5ff 40%, #ffffff 100%)",
      color: "#0f172a",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: isMobileOrTablet ? "120px 24px 60px 24px" : "120px 8% 80px 8%",
    },
    grid: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.1fr 0.9fr",
      alignItems: "center",
      gap: isMobileOrTablet ? "60px" : "50px",
      textAlign: isMobileOrTablet ? "center" : "left",
    },
    greeting: {
      color: "#64748b",
      fontSize: isMobile ? "16px" : "18px",
      marginBottom: "10px",
      fontWeight: "500",
    },
    name: {
      color: "#0f172a",
      fontSize: isMobileOrTablet ? "28px" : "32px",
      marginBottom: "15px",
      fontWeight: "600",
    },
    title: {
      background: "linear-gradient(135deg, #38bdf8 0%, #c084fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontSize: isMobile ? "38px" : isTablet ? "52px" : "65px",
      fontWeight: "700",
      marginBottom: "20px",
      lineHeight: isMobile ? "46px" : isTablet ? "60px" : "75px",
      display: "inline-block",
    },
   
    buttonsContainer: {
      display: "flex",
      gap: "20px",
      marginBottom: "50px",
      justifyContent: isMobileOrTablet ? "center" : "flex-start",
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #2884ed 0%, #a855f7 100%)",
      color: "#fff",
      border: "none",
      padding: isMobile ? "12px 28px" : "14px 35px",
      borderRadius: "6px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s ease",
      boxShadow: "0 4px 15px rgba(40, 132, 237, 0.25)",
    },
    btnSecondary: {
      background: "transparent",
      color: "#475569",
      border: "1px solid #cbd5e1",
      padding: isMobile ? "12px 28px" : "14px 35px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "border-color 0.3s ease, color 0.3s ease",
    },
    statsContainer: {
      display: "flex",
      gap: isMobile ? "10px" : "25px",
      background: "rgba(255, 255, 255, 0.85)",
      border: "1px solid rgba(56, 189, 248, 0.2)",
      padding: isMobile ? "12px 15px" : "25px",
      width: "fit-content",
      borderRadius: "10px",
      margin: isMobileOrTablet ? "0 auto" : "0",
      flexWrap: "nowrap",
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
    },
    statNum: {
      background: "linear-gradient(135deg, #38bdf8 0%, #c084fc 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontSize: isMobile ? "18px" : "24px",
      fontWeight: "700",
      display: "inline-block",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      order: isMobileOrTablet ? -1 : 1,
    },
    glowBackdrop: {
      width: isMobile ? "min(85vw, 360px)" : isTablet ? "460px" : "570px",
      height: isMobile ? "min(85vw, 360px)" : isTablet ? "460px" : "570px",
      background: "radial-gradient(circle, rgba(56, 189, 248, 0.55) 0%, rgba(40, 132, 237, 0.2) 50%, transparent 70%)",
      borderRadius: "50%",
      position: "absolute",
      top: isMobile ? "-20px" : isTablet ? "-10px" : "10px",
      filter: "blur(30px)",
      boxShadow: `0 0 ${isMobile ? "80px 20px" : "120px 40px"} rgba(56, 189, 248, 0.55)`,
      zIndex: "1",
    },
    profileImage: {
      width: isMobile ? "min(80vw, 330px)" : isTablet ? "420px" : "540px",
      position: "relative",
      zIndex: "10",
      objectFit: "contain",
      maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
    },
    techRingOuter: {
      position: "absolute",
      width: isMobile ? "min(78vw, 320px)" : isTablet ? "400px" : "500px",
      height: isMobile ? "min(78vw, 320px)" : isTablet ? "400px" : "500px",
      border: "2px dashed rgba(56, 189, 248, 0.4)",
      borderRadius: "50%",
      top: isMobile ? "-15px" : isTablet ? "-10px" : "10px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "2",
      pointerEvents: "none",
    },
    techRingInner: {
      position: "absolute",
      width: isMobile ? "min(70vw, 280px)" : isTablet ? "350px" : "440px",
      height: isMobile ? "min(70vw, 280px)" : isTablet ? "350px" : "440px",
      border: "1px double rgba(192, 132, 252, 0.35)",
      borderRadius: "50%",
      top: isMobile ? "5px" : isTablet ? "15px" : "40px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "3",
      pointerEvents: "none",
    },
    techSymbol: {
      position: "absolute",
      fontSize: isMobile ? "18px" : "24px",
      fontWeight: "700",
      fontFamily: "monospace",
      userSelect: "none",
      zIndex: "4",
      pointerEvents: "none",
      opacity: 0.85,
    },
    circleBg: {
      position: "absolute",
      width: isMobile ? "min(70vw, 280px)" : isTablet ? "380px" : "480px",
      height: isMobile ? "min(70vw, 280px)" : isTablet ? "380px" : "480px",
      borderRadius: "60%",
      background: "radial-gradient(circle, #60A5FA 0%, #2563EB 70%, #1D4ED8 100%)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
    },
  };
   

  return (
    <section id="home" style={styles.section}>
      <div style={styles.grid}>
        {/* Left Side */}
        <div>
          <p style={styles.greeting}>Hi I am</p>

          <h2 style={styles.name}>THUNIKALA GURU KALYAN</h2>

        <h1
  style={{
    ...styles.title,
    minHeight: "70px",
    color: "#38bdf8",
    transition: "0.4s ease",
  }}
>
  {text}
  <span
    style={{
      color: "#38bdf8",
      animation: "blink 0.8s infinite",
    }}
  >
    |
  </span>
</h1>

          
          <div style={styles.buttonsContainer}>
            <button
              onClick={() => handleScrollTo("contact")}
              style={styles.btnPrimary}
              onMouseEnter={(e) => (e.target.style.background = "linear-gradient(135deg, #38bdf8 0%, #c084fc 100%)")}
              onMouseLeave={(e) => (e.target.style.background = "linear-gradient(135deg, #2884ed 0%, #a855f7 100%)")}
            >
              Let's Talk
            </button>

          
          </div>

          {/* Stats */}
          <div style={styles.statsContainer}>
            <div style={{ textAlign: "center" }}>
              <h2 style={styles.statNum}>5+</h2>
              <p style={{ color: "#64748b", fontSize: isMobile ? "11px" : "14px", marginTop: "4px", fontWeight: "500" }}>Experiences</p>
            </div>

            <div style={{ textAlign: "center", borderLeft: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0", padding: isMobile ? "0 10px" : "0 25px" }}>
              <h2 style={styles.statNum}>20+</h2>
              <p style={{ color: "#64748b", fontSize: isMobile ? "11px" : "14px", marginTop: "4px", fontWeight: "500" }}>Projects Done</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <h2 style={styles.statNum}>80+</h2>
              <p style={{ color: "#64748b", fontSize: isMobile ? "11px" : "14px", marginTop: "4px", fontWeight: "500" }}>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
       <div style={styles.imageContainer}>
  <div style={styles.glowBackdrop}></div>

  {/* NEW BLUE CIRCLE */}
  <div style={styles.circleBg}></div>

  <div
    className="animate-spin-slow"
    style={styles.techRingOuter}
  ></div>

  <div
    className="animate-spin-reverse-slow"
    style={styles.techRingInner}
  ></div>

  {rainSymbols.map((symbol, index) => (
  <span
    key={index}
  style={{
  position: "absolute",

  top: "-120px",

  left: `${(index * 4.2) % 95 + 2.5}%`,

  color:
    index % 2 === 0
      ? "#38bdf8"
      : "#8b5cf6",

  fontSize: `${9 + (index % 4) * 4}px`,

  fontWeight: "500",

  fontFamily: "monospace",

  textShadow:
    "0 0 10px rgba(56,189,248,.9), 0 0 25px rgba(56,189,248,.7), 0 0 45px rgba(56,189,248,.5)",

  filter: "drop-shadow(0 0 12px #38bdf8)",

  opacity: 0.85,

  animation: `digitalRain ${10 + (index % 5)}s linear infinite`,

  animationDelay: `${index * .4}s`,

  zIndex: 4,

  pointerEvents: "none",
}}
  >
    {symbol}
  </span>
))}

  <img
    src={isMobileOrTablet ? profileMobile : profileDesktop}
    alt="profile"
    style={styles.profileImage}
  />
</div>
      </div>
      <style>{`
      @keyframes digitalRain {
        0% {
          transform: translateY(-120px);
          opacity: 0;
        }

        10% {
          opacity: .6;
        }

        90% {
          opacity: .6;
        }

        100% {
          transform: translateY(900px);
          opacity: 0;
        }
      }
    `}</style>
    </section>
  );
};

export default Hero;