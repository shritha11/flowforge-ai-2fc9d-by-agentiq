import React from 'react';
import { Zap, Globe, Shield, TrendingUp, Layers, Code } from 'lucide-react';

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

export default function Features() {
  const [hovered, setHovered] = React.useState(null);

  const keyFeatures = [
    { icon: Zap, title: "Instant Automation", body: "Eliminate repetitive tasks with one click.", extra: "10x faster" },
    { icon: Globe, title: "Cloud Integration", body: "Seamlessly connect with your favorite tools." },
    { icon: Shield, title: "Secure by Design", body: "Your data is protected with enterprise-grade security." },
    { icon: TrendingUp, title: "Boost Productivity", body: "Achieve more in less time with AI." },
    { icon: Layers, title: "Customizable Workflows", body: "Tailor automation to fit your unique needs." },
    { icon: Code, title: "Developer Friendly", body: "Integrate with APIs for advanced use cases." },
  ];

  return (
    <section style={{ background: C.bgAlt, padding: C.sectionPad }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <div style={{ fontSize: "14px", fontWeight: 600, color: C.textSubtle, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
          WHY FLOWFORGE
        </div>
        <h2 style={{ fontSize: C.h2Size, fontWeight: 700, color: C.text, lineHeight: 1.2 }}>
          Powerful tools for creative efficiency
        </h2>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: C.gap,
        maxWidth: C.maxW,
        margin: "0 auto",
      }}>
        {keyFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const isHero = index === 0;
          return (
            <div
              key={index}
              style={{
                gridColumn: isHero ? "span 2" : "span 1",
                padding: isHero ? "48px" : C.cardPad,
                background: hovered === index ? C.surfaceHover : C.surface,
                border: `1px solid ${hovered === index ? C.borderHover : C.border}`,
                borderRadius: C.cardR,
                transition: C.ease,
                cursor: "pointer",
                transform: hovered === index ? C.lift : "none",
                boxShadow: hovered === index ? C.shadow : "none",
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Icon size={32} color={C.primary} style={{ marginBottom: "20px" }} />
              <div style={{
                fontSize: "17px",
                fontWeight: 700,
                color: C.text,
                marginBottom: "8px",
              }}>
                {feature.title}
              </div>
              <div style={{
                fontSize: "14px",
                color: C.textMuted,
                lineHeight: 1.75,
              }}>
                {feature.body}
              </div>
              {isHero && feature.extra && (
                <div style={{
                  marginTop: "20px",
                  padding: "6px 12px",
                  background: C.primaryGlow,
                  color: C.primary,
                  fontSize: "12px",
                  fontWeight: 600,
                  borderRadius: "12px",
                  display: "inline-block",
                }}>
                  {feature.extra}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}