import React, { useState, useEffect } from "react";

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close mobile menu if viewport resized to desktop width
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);

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

  const styles = {
    navbar: {
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "92%",
      maxWidth: "1300px",
      zIndex: 1000,
      transition: "all .3s ease",
    },

    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "12px 20px" : "18px 35px",
      borderRadius: "999px",
      background: scrolled
        ? "rgba(10, 10, 10, 0.6)"
        : "rgba(15, 15, 15, 0.35)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: scrolled
        ? "1px solid rgba(255, 255, 255, 0.12)"
        : "1px solid rgba(255, 255, 255, 0.07)",
      boxShadow: scrolled
        ? "0 15px 45px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.03)"
        : "0 10px 30px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.01)",
      transition: ".35s",
    },

    logo: {
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontSize: isMobile ? "24px" : "30px",
      fontWeight: "700",
      cursor: "pointer",
      userSelect: "none",
      letterSpacing: "1px",
      display: "inline-block",
    },

    links: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      gap: "35px",
    },

    link: {
      background: "transparent",
      border: "none",
      color: "#a3a3a3",
      cursor: "pointer",
      fontSize: "15px",
      transition: ".3s",
      fontWeight: 500,
    },

    activeLink: {
      color: "#ef4444",
      fontWeight: "600",
    },

    button: {
      background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      color: "#fff",
      border: "none",
      padding: "12px 28px",
      borderRadius: "999px",
      cursor: "pointer",
      fontWeight: "600",
      transition: ".3s",
    },

    toggle: {
      display: isMobile ? "block" : "none",
      background: "transparent",
      border: "none",
      color: "#ffffff",
      fontSize: "28px",
      cursor: "pointer",
    },

    mobileMenu: {
      marginTop: "15px",
      background: "rgba(15, 15, 15, 0.75)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "30px",
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      border: "1px solid rgba(255, 255, 255, 0.12)",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.03)",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div
          style={styles.logo}
          onClick={() => handleLinkClick("home")}
        >
          GK
          <span style={{ WebkitTextFillColor: "#eab308" }}>.</span>
        </div>

        <div style={styles.links}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              style={{
                ...styles.link,
                ...(activeSection === item.id
                  ? styles.activeLink
                  : {}),
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316";
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  activeSection === item.id
                    ? "#ef4444"
                    : "#a3a3a3";
              }}
            >
              {item.label}
            </button>
          ))}

          <button
            style={styles.button}
            onClick={() => handleLinkClick("contact")}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #f97316 0%, #eab308 100%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "linear-gradient(135deg, #ef4444 0%, #f97316 100%)";
            }}
          >
            Let's Talk
          </button>
        </div>

        <button
          style={styles.toggle}
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && isMobile && (
        <div style={styles.mobileMenu}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              style={{
                ...styles.link,
                ...(activeSection === item.id
                  ? styles.activeLink
                  : {}),
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#f97316";
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  activeSection === item.id
                    ? "#ef4444"
                    : "#a3a3a3";
              }}
            >
              {item.label}
            </button>
          ))}

          <button
            style={styles.button}
            onClick={() => handleLinkClick("contact")}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #f97316 0%, #eab308 100%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "linear-gradient(135deg, #ef4444 0%, #f97316 100%)";
            }}
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;