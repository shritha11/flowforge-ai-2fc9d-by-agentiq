import React from 'react';

const C = {
  bg: "#08080f",
  bgAlt: "#0d0d18",
  surface: "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border: "rgba(255,255,255,0.08)",
  borderHover: "rgba(255,255,255,0.18)",
  primary: "#7c3aed",
  primaryGlow: "rgba(124,58,237,0.25)",
  secondary: "#06b6d4",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.5)",
  textSubtle: "rgba(255,255,255,0.25)",
  heroSize: "clamp(60px, 9vw, 110px)",
  h2Size: "clamp(36px, 5vw, 64px)",
  heroWeight: 800,
  heroTracking: "-0.06em",
  heroLH: 0.92,
  font: "'Inter', system-ui, sans-serif",
  sectionPad: "140px 80px",
  maxW: "1280px",
  cardPad: "36px",
  gap: "20px",
  cardR: "20px",
  btnR: "100px",
  shadow: "0 2px 40px rgba(0,0,0,0.4)",
  glow: "0 0 60px rgba(124,58,237,0.25)",
  btnShadow: "0 8px 32px rgba(124,58,237,0.35)",
  ease: "0.25s ease",
  lift: "translateY(-4px)",
};

export default function CTA() {
  return (
    <section
      style={{
        padding: C.sectionPad,
        position: "relative",
        overflow: "hidden",
        background: C.bgAlt,
        textAlign: "center",
        fontFamily: C.font,
      }}
    >
      <div
        style={{
          width: "600px",
          height: "300px",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            color: C.text,
            background: `linear-gradient(90deg, ${C.primary}, ${C.secondary})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px",
          }}
        >
          Automate Your Workflow <br /> with FlowForge AI
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: C.textMuted,
            marginBottom: "40px",
          }}
        >
          Unlock new levels of productivity and creativity with our AI-powered
          tools designed for freelance designers.
        </p>
        <button
          style={{
            background: C.primary,
            color: C.text,
            fontSize: "16px",
            fontWeight: 600,
            padding: "14px 32px",
            borderRadius: C.btnR,
            border: "none",
            cursor: "pointer",
            boxShadow: C.btnShadow,
            transition: C.ease,
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = C.lift;
            e.target.style.boxShadow = `0 12px 48px ${C.primaryGlow}`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = C.btnShadow;
          }}
        >
          Get started for free
        </button>
        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: C.textSubtle,
          }}
        >
          No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}