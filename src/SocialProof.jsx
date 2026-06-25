import React from 'react';

const C = {
  bg:           "#08080f",
  bgAlt:        "#0d0d18",
  surface:      "rgba(255,255,255,0.04)",
  surfaceHover: "rgba(255,255,255,0.07)",
  border:       "rgba(255,255,255,0.08)",
  borderHover:  "rgba(255,255,255,0.18)",
  primary:      "#7c3aed",
  primaryGlow:  "rgba(124,58,237,0.25)",
  secondary:    "#06b6d4",
  text:         "#ffffff",
  textMuted:    "rgba(255,255,255,0.5)",
  textSubtle:   "rgba(255,255,255,0.25)",
  heroSize:     "clamp(60px, 9vw, 110px)",
  h2Size:       "clamp(36px, 5vw, 64px)",
  heroWeight:   800,
  heroTracking: "-0.06em",
  heroLH:       0.92,
  font:         "'Inter', system-ui, sans-serif",
  sectionPad:   "140px 80px",
  maxW:         "1280px",
  cardPad:      "36px",
  gap:          "20px",
  cardR:        "20px",
  btnR:         "100px",
  shadow:       "0 2px 40px rgba(0,0,0,0.4)",
  glow:         "0 0 60px rgba(124,58,237,0.25)",
  btnShadow:    "0 8px 32px rgba(124,58,237,0.35)",
  ease:         "0.25s ease",
  lift:         "translateY(-4px)",
};

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sophia Carter",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "FlowForge AI has completely transformed how I manage my workflow. The automation tools are a game-changer!"
    },
    {
      name: "James Lee",
      role: "Freelance Illustrator",
      image: "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The intuitive design and powerful features of FlowForge AI have saved me countless hours."
    },
    {
      name: "Emily Davis",
      role: "UI/UX Consultant",
      image: "https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "I’ve never felt more in control of my design projects. FlowForge AI is a must-have for any freelancer."
    }
  ];

  return (
    <section style={{ backgroundColor: C.bg, padding: C.sectionPad, color: C.text, fontFamily: C.font }}>
      <div style={{ maxWidth: C.maxW, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: C.h2Size, fontWeight: C.heroWeight, marginBottom: C.gap }}>
          Trusted by Freelancers Worldwide
        </h2>
        <div style={{ display: 'flex', gap: C.gap, justifyContent: 'center', flexWrap: 'wrap' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: C.surface,
                padding: C.cardPad,
                borderRadius: C.cardR,
                boxShadow: C.shadow,
                width: '300px',
                textAlign: 'left'
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  marginBottom: C.gap
                }}
              />
              <p style={{ fontStyle: 'italic', marginBottom: C.gap }}>{`"${testimonial.quote}"`}</p>
              <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{testimonial.name}</p>
              <p style={{ color: C.textMuted }}>{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}