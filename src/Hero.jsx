import React from 'react';
import { Zap, Globe, Shield } from 'lucide-react';

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

export default function Hero() {
  const [hoverPrimary, setHoverPrimary] = React.useState(false);
  const gradientWords = ["Automate", "workflows"];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: C.sectionPad,
        background: C.bg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: C.maxW,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: C.primary,
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            DESIGN AUTOMATION
          </div>
          <h1
            style={{
              fontSize: C.heroSize,
              fontWeight: C.heroWeight,
              letterSpacing: C.heroTracking,
              lineHeight: C.heroLH,
              marginBottom: "24px",
            }}
          >
            {["Automate", "workflows", "for", "designers"].map((word, index) => (
              <span
                key={index}
                style={
                  gradientWords.includes(word)
                    ? {
                        background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline",
                      }
                    : { color: C.text, display: "inline" }
                }
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: C.textMuted,
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "40px",
            }}
          >
            Save time and focus on creativity with AI-powered tools.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <button
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
              style={{
                background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                padding: "14px 32px",
                borderRadius: C.btnR,
                border: "none",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: hoverPrimary ? C.glow : C.btnShadow,
                transform: hoverPrimary ? C.lift : "none",
                transition: C.ease,
              }}
            >
              Get started for free
            </button>
            <button
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "14px 32px",
                borderRadius: C.btnR,
                color: C.text,
                cursor: "pointer",
                transition: C.ease,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = C.surface)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Learn more →
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            background: C.bgAlt,
            border: `1px solid ${C.border}`,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: C.shadow,
            minHeight: "380px",
            position: "relative",
          }}
        >
          {/* Mockup Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {/* Top Bar */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              {["#f87171", "#facc15", "#4ade80"].map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    background: color,
                    borderRadius: "50%",
                  }}
                ></div>
              ))}
            </div>

            {/* Content Area */}
            <div style={{ display: "flex", flex: 1 }}>
              {/* Sidebar */}
              <div
                style={{
                  background: C.surface,
                  width: "40px",
                  marginRight: "16px",
                }}
              ></div>

              {/* Main Area */}
              <div style={{ flex: 1 }}>
                {/* Stat Cards */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {[1, 2].map((_, index) => (
                    <div
                      key={index}
                      style={{
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: "8px",
                        padding: "16px",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          color: C.textSubtle,
                          fontSize: "12px",
                          marginBottom: "8px",
                        }}
                      >
                        Metric {index + 1}
                      </div>
                      <div
                        style={{
                          color: C.text,
                          fontSize: "24px",
                          fontWeight: 600,
                        }}
                      >
                        {Math.floor(Math.random() * 1000)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bar Chart */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-end",
                  }}
                >
                  {[40, 60, 80, 50, 70].map((height, index) => (
                    <div
                      key={index}
                      style={{
                        width: "10px",
                        height: `${height}px`,
                        background: C.primary,
                        opacity: 0.6,
                        borderRadius: "4px",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Decoration */}
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${C.primaryGlow} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      ></div>
    </section>
  );
}