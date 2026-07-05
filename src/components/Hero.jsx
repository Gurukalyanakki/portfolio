import React, { useState, useEffect } from "react";


import profileDesktop from "../assets/proff.png";
import profileMobile from "../assets/kalyan.png";

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
  "AI & ML Enthusiast",
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
      background: "radial-gradient(circle at 15% 25%, rgba(249, 115, 22, 0.07) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(251, 146, 60, 0.06) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(254, 215, 170, 0.02) 0%, transparent 50%), var(--bg-900)",
      color: "var(--text-100)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: isMobileOrTablet ? "120px 0 60px 0" : "120px 0 80px 0",
      position: "relative",
      overflow: "hidden",
    },
    grid: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: isMobileOrTablet ? "1fr" : "1.1fr 0.9fr",
      alignItems: "center",
      gap: isMobileOrTablet ? "60px" : "50px",
      textAlign: isMobileOrTablet ? "center" : "left",
      position: "relative",
      zIndex: 2,
    },
    greetingBadge: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 18px",
      borderRadius: "50px",
      background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
      border: "1px solid rgba(239, 68, 68, 0.25)",
      marginBottom: "20px",
      backdropFilter: "blur(10px)",
      width: "fit-content",
      margin: isMobileOrTablet ? "0 auto 20px auto" : "0 0 20px 0",
      boxShadow: "0 4px 12px rgba(239, 68, 68, 0.04)",
      transition: "0.3s ease",
    },
    greetingText: {
      fontSize: "14px",
      fontWeight: "600",
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
    },
    name: {
      fontFamily: "var(--font-heading)",
      fontSize: isMobile ? "32px" : isTablet ? "44px" : "54px",
      fontWeight: "800",
      lineHeight: 1.1,
      marginBottom: "15px",
      background: "linear-gradient(135deg, #ffffff 30%, #f97316 70%, #ef4444 100%)",
      display: "inline-block",
    },
    title: {
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 50%, #eab308 100%)",
      fontSize: isMobile ? "34px" : isTablet ? "46px" : "58px",
      fontWeight: "700",
      marginBottom: "25px",
      lineHeight: isMobile ? "42px" : isTablet ? "54px" : "68px",
      display: "inline-block",
    },
    buttonsContainer: {
      display: "flex",
      gap: "20px",
      marginBottom: "50px",
      justifyContent: isMobileOrTablet ? "center" : "flex-start",
      flexWrap: "wrap",
      alignItems: "center",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 50%, #eab308 100%)",
      color: "#fff",
      border: "none",
      padding: isMobile ? "12px 28px" : "14px 35px",
      borderRadius: "30px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 4px 20px rgba(239, 68, 68, 0.35)",
      display: "inline-block",
    },
    btnSecondary: {
      background: "linear-gradient(var(--bg-900), var(--bg-900)) padding-box, linear-gradient(135deg, #ef4444 0%, #f97316 100%) border-box",
      border: "2px solid transparent",
      color: "#ef4444",
      padding: isMobile ? "11px 27px" : "13px 34px",
      borderRadius: "30px",
      cursor: "pointer",
      fontWeight: "600",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "inline-block",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)",
    },
    statsContainer: {
      display: "flex",
      gap: isMobileOrTablet ? "10px" : "25px",
      background: "rgba(20, 20, 20, 0.75)",
      border: "1px solid rgba(239, 68, 68, 0.15)",
      padding: isMobileOrTablet ? "15px 20px" : "20px 35px",
      width: "fit-content",
      borderRadius: "20px",
      margin: isMobileOrTablet ? "0 auto" : "0",
      flexWrap: "nowrap",
      justifyContent: "center",
      backdropFilter: "blur(15px)",
      boxShadow: "0 10px 30px rgba(239, 68, 68, 0.05)",
    },
    statNum: {
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 50%, #eab308 100%)",
      fontSize: isMobileOrTablet ? "24px" : "32px",
      fontWeight: "800",
      display: "inline-block",
    },
    statDivider: {
      width: "1px",
      height: "40px",
      background: "linear-gradient(to bottom, transparent, rgba(239, 68, 68, 0.2), transparent)",
      alignSelf: "center",
      margin: isMobileOrTablet ? "0 10px" : "0 25px",
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
      background: "radial-gradient(circle, rgba(239, 68, 68, 0.65) 0%, rgba(249, 115, 22, 0.3) 50%, transparent 70%)",
      borderRadius: "50%",
      position: "absolute",
      top: isMobile ? "-20px" : isTablet ? "-10px" : "10px",
      left: "50%",
      transform: "translateX(-50%)",
      filter: "blur(40px)",
      boxShadow: `0 0 ${isMobile ? "80px 20px" : "120px 40px"} rgba(239, 68, 68, 0.45)`,
      zIndex: "1",
      opacity: 0.85,
    },
    profileImage: {
      width: isMobile ? "min(80vw, 330px)" : isTablet ? "420px" : "540px",
      position: "relative",
      zIndex: "10",
      objectFit: "contain",
      maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 100%)",
    },
    techRingOuter: {
      position: "absolute",
      width: isMobile ? "min(78vw, 320px)" : isTablet ? "400px" : "500px",
      height: isMobile ? "min(78vw, 320px)" : isTablet ? "400px" : "500px",
      border: "2px dashed rgba(239, 68, 68, 0.4)",
      borderRadius: "50%",
      top: isMobile ? "-15px" : isTablet ? "-10px" : "10px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "2",
      pointerEvents: "none",
      boxShadow: "0 0 15px rgba(239, 68, 68, 0.15)",
    },
    techRingInner: {
      position: "absolute",
      width: isMobile ? "min(70vw, 280px)" : isTablet ? "350px" : "440px",
      height: isMobile ? "min(70vw, 280px)" : isTablet ? "350px" : "440px",
      border: "1.5px dashed rgba(249, 115, 22, 0.3)",
      borderRadius: "50%",
      top: isMobile ? "5px" : isTablet ? "15px" : "40px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: "3",
      pointerEvents: "none",
      boxShadow: "0 0 15px rgba(249, 115, 22, 0.1)",
    },
    circleBg: {
      position: "absolute",
      width: isMobile ? "min(70vw, 280px)" : isTablet ? "380px" : "480px",
      height: isMobile ? "min(70vw, 280px)" : isTablet ? "380px" : "480px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.45) 50%, rgba(234, 179, 8, 0.25) 100%)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      backdropFilter: "blur(5px)",
      boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.1), 0 20px 50px rgba(239, 68, 68, 0.15)",
    },
  };
   

  return (
    <section id="home" style={styles.section}>
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-teal animate-pulse-glow" style={{ top: "10%", left: "10%", opacity: 0.07, background: "#f97316" }} />
      <div className="ambient-glow glow-violet animate-pulse-glow" style={{ bottom: "20%", right: "10%", animationDelay: "2s", opacity: 0.05, background: "#ea580c" }} />
      <div className="ambient-glow glow-indigo animate-pulse-glow" style={{ top: "40%", left: "50%", animationDelay: "4s", opacity: 0.06, background: "#fb923c" }} />

      <div className="container">
        <div style={styles.grid}>
          {/* Left Side */}
          <div>
            <div style={styles.greetingBadge}>
              <span className="gradient-text-clip" style={styles.greetingText}>Hello I'm</span>
            </div>

            <div>
              <h2 className="gradient-text-clip" style={styles.name}>THUNIKALA GURU KALYAN</h2>
            </div>

            <div style={{ minHeight: "80px" }}>
              <h1 className="gradient-text-clip" style={styles.title}>
                {text}
                <span
                  style={{
                    color: "#f97316",
                    animation: "blink 0.8s infinite",
                    fontWeight: "300",
                    marginLeft: "2px",
                  }}
                >
                  |
                </span>
              </h1>
            </div>
            
            <div style={styles.buttonsContainer}>
              <button
                onClick={() => handleScrollTo("contact")}
                style={styles.btnPrimary}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px) scale(1.02)";
                  e.target.style.boxShadow = "0 8px 30px rgba(249, 115, 22, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 4px 20px rgba(239, 68, 68, 0.35)";
                }}
              >
                Let's Talk
              </button>

              <button
                onClick={() => handleScrollTo("projects")}
                style={styles.btnSecondary}
                onMouseEnter={(e) => {
                  e.target.style.background = "linear-gradient(135deg, #ef4444 0%, #f97316 100%) border-box";
                  e.target.style.color = "#fff";
                  e.target.style.transform = "translateY(-3px) scale(1.02)";
                  e.target.style.boxShadow = "0 8px 25px rgba(249, 115, 22, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "linear-gradient(var(--bg-900), var(--bg-900)) padding-box, linear-gradient(135deg, #ef4444 0%, #f97316 100%) border-box";
                  e.target.style.color = "#ef4444";
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.03)";
                }}
              >
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div style={styles.statsContainer}>
              <div style={{ textAlign: "center" }}>
                <h2 className="gradient-text-clip" style={styles.statNum}>5+</h2>
                <p style={{ color: "#9ca3af", fontSize: isMobileOrTablet ? "11px" : "14px", marginTop: "4px", fontWeight: "600" }}>Experiences</p>
              </div>

              <div style={styles.statDivider} />

              <div style={{ textAlign: "center" }}>
                <h2 className="gradient-text-clip" style={styles.statNum}>20+</h2>
                <p style={{ color: "#9ca3af", fontSize: isMobileOrTablet ? "11px" : "14px", marginTop: "4px", fontWeight: "600" }}>Projects Done</p>
              </div>

              <div style={styles.statDivider} />

              <div style={{ textAlign: "center" }}>
                <h2 className="gradient-text-clip" style={styles.statNum}>80+</h2>
                <p style={{ color: "#9ca3af", fontSize: isMobileOrTablet ? "11px" : "14px", marginTop: "4px", fontWeight: "600" }}>Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div style={styles.imageContainer}>
            <div style={styles.glowBackdrop}></div>

            {/* Background glass-like circle */}
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
                  color: index % 2 === 0 ? "#ef4444" : "#f97316",
                  fontSize: `${9 + (index % 4) * 4}px`,
                  fontWeight: "500",
                  fontFamily: "monospace",
                  textShadow: "0 0 10px rgba(239, 68, 68, 0.6), 0 0 25px rgba(249, 115, 22, 0.4)",
                  filter: "drop-shadow(0 0 8px #ef4444)",
                  opacity: 0.65,
                  animation: `digitalRain ${10 + (index % 5)}s linear ${index * 0.4}s infinite`,
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
      </div>

    </section>
  );
};

export default Hero;