import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import SocialProof from './SocialProof.jsx';
import Features from './Features.jsx';
import DashboardPreview from './DashboardPreview.jsx';
import Pricing from './Pricing.jsx';
import CTA from './CTA.jsx';
import Footer from './Footer.jsx';

// ─── DESIGN TOKENS — use these exact values everywhere. Never invent hex colors. ───
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

export default function App() {
  return (
    <div style={{
      background: C.bg,
      minHeight: "100vh",
      fontFamily: C.font,
      color: C.text,
      overflowX: "hidden"
    }}>
      {/* Render all components in order */}
      <Navbar />
      <Hero 
        heroImage="https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <SocialProof />
      <Features 
        featureImages={[
          "https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080",
          "https://images.unsplash.com/photo-1630514969818-94aefc42ec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
        ]}
      />
      <DashboardPreview 
        previewImage="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <Pricing />
      <CTA 
        ctaImage="https://images.unsplash.com/photo-1682056598904-9aa7ea5e8991?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw1fHxDcmVhdGUlMjBhJTIwZnV0dXJpc3RpYyUyMEFJJTIwU2FhUyUyMHdlYnNpdGUlMjBmb3IlMjBhJTIwc3RhcnR1cCUyMGhlbHBpbmclMjBmcmVlbGFuY2UlMjBkZXNpZ25lcnMlMjBhdXRvbWF0ZSUyMHdvcmtmbG93cy4lMEQlMEElMEQlMEFTdHlsZSUzQSUwRCUwQS0lMjBjaW5lbWF0aWMlMjBkYXJrJTIwVUklMEQlMEEtJTIwZmxvYXRpbmclMjBnbGFzc21vcnBoaXNtJTBEJTBBLSUyMGltbWVyc2l2ZSUyMGRhc2hib2FyZCUyMHByZXZpZXdzJTBEJTBBLSUyMHByZW1pdW0lMjBzdGFydHVwJTIwYnJhbmRpbmclMEQlMEEtJTIwYW5pbWF0ZWQlMjBncmFkaWVudHMlMEQlMEEtJTIwYmVsaWV2YWJsZSUyMHByb2R1Y3QlMjBVSSUwRCUwQS0lMjBsYXllcmVkJTIwc2VjdGlvbnMlMEQlMEEtJTIwYmVudG8lMjBsYXlvdXRzJTBEJTBBJTBEJTBBSW5zcGlyZWQlMjBieSUzQSUwRCUwQS0lMjBMaW5lYXIlMEQlMEEtJTIwUmF5Y2FzdCUwRCUwQS0lMjBTdHJpcGUlMEQlMEEtJTIwVmVyY2VsfGVufDB8fHx8MTc4MjQwNjQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <Footer />
    </div>
  );
}