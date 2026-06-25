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
  h2Size: "clamp(36px, 5vw, 64px)",
  cardR: "20px",
  btnR: "100px",
  sectionPad: "140px 80px",
  maxW: "1280px",
  btnShadow: "0 8px 32px rgba(124,58,237,0.35)",
};

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out FlowForge AI",
      features: ["3 real features", "2 more real features", "1 more"],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For serious builders",
      features: ["Everything in Starter", "4 more real features", "Priority support"],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For teams and companies",
      features: ["Everything in Pro", "Custom features", "Dedicated support"],
      cta: "Talk to Sales",
      highlighted: false,
    },
  ];

  return (
    <section style={{ padding: C.sectionPad, background: C.bg }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <div style={{ color: C.primary, fontWeight: 600, marginBottom: "12px" }}>PRICING</div>
        <h2 style={{ fontSize: C.h2Size, color: C.text }}>Simple, transparent pricing</h2>
      </div>
      <div style={{ display: "flex", gap: "24px", justifyContent: "center", maxWidth: C.maxW, margin: "0 auto" }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: plan.highlighted ? C.bgAlt : C.surface,
              border: `1px solid ${plan.highlighted ? C.primary : C.border}`,
              borderRadius: C.cardR,
              padding: "40px 36px",
              flex: 1,
              maxWidth: "360px",
              position: "relative",
              boxShadow: plan.highlighted ? `0 0 40px ${C.primaryGlow}` : "none",
            }}
          >
            {plan.highlighted && (
              <div
                style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: `linear-gradient(135deg, ${C.primary}, ${C.secondary})`,
                  padding: "4px 16px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Most Popular
              </div>
            )}
            <h3 style={{ color: C.text, fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>{plan.name}</h3>
            <div style={{ marginBottom: "16px", color: C.textMuted }}>{plan.description}</div>
            <div style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-0.04em", color: C.text }}>
              {plan.price}
              <span style={{ fontSize: "16px", color: C.textMuted }}>{plan.period}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 32px" }}>
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: `${C.primary}20`,
                      color: C.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ fontSize: "14px", color: C.textMuted }}>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: C.btnR,
                fontWeight: 600,
                cursor: "pointer",
                border: `1px solid ${C.border}`,
                background: plan.highlighted
                  ? `linear-gradient(135deg, ${C.primary}, ${C.secondary})`
                  : "transparent",
                color: plan.highlighted ? "#fff" : C.text,
                boxShadow: plan.highlighted ? C.btnShadow : "none",
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}