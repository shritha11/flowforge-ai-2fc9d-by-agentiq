import React from 'react';
import { LayoutDashboard, Users, BarChart2, Settings, FileText } from 'lucide-react';

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

export default function DashboardPreview() {
  return (
    <section
      style={{
        padding: C.sectionPad,
        background: C.bgAlt,
        fontFamily: C.font,
        color: C.text,
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "64px" }}>
        <div
          style={{
            fontSize: "14px",
            textTransform: "uppercase",
            color: C.textSubtle,
            marginBottom: "12px",
            letterSpacing: "0.1em",
          }}
        >
          SEE IT IN ACTION
        </div>
        <h2
          style={{
            fontSize: C.h2Size,
            fontWeight: C.heroWeight,
            letterSpacing: C.heroTracking,
            lineHeight: C.heroLH,
            margin: 0,
          }}
        >
          A dashboard built for clarity
        </h2>
      </div>

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: C.bg,
          borderRadius: "24px",
          border: `1px solid ${C.border}`,
          boxShadow: `0 32px 80px rgba(0,0,0,0.5)`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "44px",
            background: C.bgAlt,
            borderBottom: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          ></div>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          ></div>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#28c840",
            }}
          ></div>
          <div
            style={{
              marginLeft: "auto",
              fontSize: "13px",
              color: C.textSubtle,
            }}
          >
            FlowForge AI
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "200px",
              background: C.bgAlt,
              borderRight: `1px solid ${C.border}`,
              padding: "20px 0",
            }}
          >
            {[
              { icon: <LayoutDashboard />, label: "Dashboard" },
              { icon: <Users />, label: "Users" },
              { icon: <BarChart2 />, label: "Analytics" },
              { icon: <Settings />, label: "Settings" },
              { icon: <FileText />, label: "Reports" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 20px",
                  gap: "10px",
                  height: "36px",
                  background: index === 0 ? C.surface : "transparent",
                  color: index === 0 ? C.text : C.textMuted,
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, padding: "28px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {[
                { label: "Active Users", value: "1,245", change: "+5%" },
                { label: "Projects", value: "342", change: "+2%" },
                { label: "Revenue", value: "$12.4K", change: "+8%" },
                { label: "Tasks Completed", value: "9,876", change: "+12%" },
              ].map((stat, index) => (
                <div
                  key={index}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textSubtle,
                      marginBottom: "6px",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: C.text,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#22c55e",
                    }}
                  >
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: C.surface,
                borderRadius: "12px",
                border: `1px solid ${C.border}`,
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: "16px",
                }}
              >
                Weekly Activity
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "8px",
                  height: "120px",
                }}
              >
                {[30, 50, 70, 100, 80, 60, 90].map((height, index) => (
                  <div
                    key={index}
                    style={{
                      background: `linear-gradient(to top, ${C.primary}, ${C.secondary})`,
                      borderRadius: "4px 4px 0 0",
                      flex: 1,
                      height: `${height}%`,
                      opacity: 0.8,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: C.surface,
                borderRadius: "12px",
                border: `1px solid ${C.border}`,
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: "16px",
                }}
              >
                Recent Activity
              </div>
              {[
                { text: "User John created a new project", time: "2 hours ago" },
                { text: "Alice completed a task", time: "5 hours ago" },
                { text: "Revenue milestone reached", time: "1 day ago" },
                { text: "New user registration: Sarah", time: "2 days ago" },
              ].map((activity, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: C.text,
                      fontSize: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: C.primary,
                      }}
                    ></div>
                    {activity.text}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textSubtle,
                    }}
                  >
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}