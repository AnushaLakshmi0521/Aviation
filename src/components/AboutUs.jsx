
import React, { useState } from "react";

function AboutUs() {
  // Interactive State for the Core Career Tracks
  const [activeTrack, setActiveTrack] = useState(0);

  const stats = [
    { value: "2024", label: "Established" },
    { value: "5+", label: "Regional Training Centers" },
    { value: "10+", label: "Batches Graduated Annually" },
    { value: "100%", label: "Placement Accountability" },
  ];

  const centers = [
    { name: "Jyothy ICM Campus", location: "South Bengaluru (Head Office)", region: "Bengaluru Core" },
    { name: "Rajajinagar Center", location: "North Bengaluru", region: "Bengaluru Core" },
    { name: "The Elegant Institute", location: "Hubballi, Karnataka", region: "North Karnataka" },
    { name: "Shri Shankar College", location: "Navalgund, Karnataka", region: "North Karnataka" },
    { name: "Fantasy Foundation", location: "Solapur, Maharashtra", region: "Maharashtra Belt" },
  ];

  const coreTracks = [
    {
      title: "White-Collar Career Track",
      icon: "✈️",
      focus: "Passenger-Facing & Corporate Management",
      desc: "Tailored for premium service execution. Prepares candidates for high-profile client ecosystems requiring world-class grooming standards, native fluency in global aviation vocabulary, and core system navigation competencies.",
      roles: ["Cabin Crew Management", "Hospitality Management", "Airport Lounge Supervision", "VIP Customer Facilitation"],
      badge: "Corporate Elite"
    },
    {
      title: "Blue-Collar Career Track",
      icon: "⚙️",
      focus: "Technical Airside & Ground Operations",
      desc: "Engineered around rigorous terminal logistics, heavy aircraft technical coordination, and absolute airside safety compliance standards. Focuses on the physical engine powering airfield metrics.",
      roles: ["Airport Ground Handling", "Dangerous Goods (DG) Regulations", "Aircraft Load Control", "Air Cargo & Logistics Hub Ops"],
      badge: "Technical Operations"
    }
  ];

  const specializedLabs = [
    {
      title: "Aviation Grooming Studio",
      icon: "💄",
      desc: "A professional corporate vanity lab simulating elite airline presentation baselines. Students undergo strict evaluation on wardrobe protocols, skin care compliance, uniform posture alignments, and social etiquette symmetry."
    },
    {
      title: "Airport Check-In & Mock Counter",
      icon: "🧳",
      desc: "A live terminal simulator environment enabling hands-on practice. Students manipulate operational baggage tagging protocols, execute passenger manifest security screenings, and handle ticket issuance processing via Amadeus terminal logic."
    },
    {
      title: "Safety & Emergency Procedures (SEP) Lab",
      icon: "🚨",
      desc: "A highly technical hazard lab equipped with simulated decompression systems, functional oxygen distribution rigs, life vests, and evacuation pathway guides for high-stress crisis simulation drills."
    }
  ];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" }}>
      
      {/* GLOBAL ANIMATION STYLES INJECTED VIA TEMPLATE TAG */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.05); }
          }
          .animate-fade-in {
            animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .hover-lift {
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          .hover-lift:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 35px rgba(7, 16, 32, 0.08) !important;
          }
        `}
      </style>

      {/* HERO SECTION WITH LAYERED AMBIENT GLOWS */}
      <section style={{
        background: "linear-gradient(135deg, #071020 0%, #112548 100%)",
        color: "#ffffff",
        padding: "140px 20px 100px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Animated Background Gradients */}
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,168,48,0.15) 0%, rgba(232,168,48,0) 70%)",
          animation: "pulseGlow 8s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          bottom: "-30%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,168,48,0.1) 0%, rgba(232,168,48,0) 70%)",
          animation: "pulseGlow 6s ease-in-out infinite alternate"
        }} />

        <div className="animate-fade-in" style={{ maxWidth: "950px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <span style={{ 
            color: "#E8A830", 
            fontSize: "13px", 
            fontWeight: "700", 
            letterSpacing: "3px", 
            textTransform: "uppercase",
            background: "rgba(232, 168, 48, 0.12)",
            padding: "6px 16px",
            borderRadius: "50px",
            border: "1px solid rgba(232, 168, 48, 0.25)"
          }}>
            The Strategic Training Alliance
          </span>
          <h1 style={{ fontSize: "52px", fontWeight: "800", marginTop: "24px", marginBottom: "24px", lineHeight: "1.15", letterSpacing: "-0.5px" }}>
            CollabForce & Jyothy Cirruss <br/>School of Aviation
          </h1>
          <p style={{ fontSize: "19px", color: "rgba(255,255,255,0.78)", lineHeight: "1.65", maxWidth: "800px", margin: "0 auto" }}>
            Bridging the structural gap between regional potential and global aviation infrastructure. Backed by the multi-decade industrial legacy of the <strong>Jyothy Group</strong>, we transform candidates into high-readiness airfield assets within 90 days.
          </p>
        </div>
      </section>

      {/* INDUSTRIAL LEGACY & ACCOUNTABILITY STATS */}
      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#071020", marginBottom: "20px", lineHeight: "1.2" }}>
              Shaping Futures <br/>Across Regional Runways
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.75", marginBottom: "20px" }}>
              Established under the structural umbrella of the 50-year-old <strong>Jyothy Group</strong>, Jyothy Cirruss School of Aviation (JCSA) functions as a premier technical gateway for modern airport mechanics and cabin guest services. 
            </p>
            <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.75" }}>
              Through our unified alliance with <strong>CollabForce</strong>, our operations specialize heavily in identifying talents from rural belts, Tier-2, and Tier-3 urban segments across India—equipping them with the linguistic fluency, software tool mastery, and tactical rescue drill protocols demanded by international air operators.
            </p>
          </div>

          {/* STATS GRID COMPONENT WITH HOVER INTERACTION */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="hover-lift"
                style={{ 
                  background: "#ffffff", 
                  padding: "40px 24px", 
                  borderRadius: "24px", 
                  border: "1px solid #edf2f7", 
                  textAlign: "center", 
                  boxShadow: "0 10px 30px rgba(7, 16, 32, 0.02)",
                  cursor: "default"
                }}
              >
                <div style={{ fontSize: "38px", fontWeight: "800", color: "#112548", marginBottom: "8px", letterSpacing: "-1px" }}>{stat.value}</div>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PATHWAYS INTERACTIVE TAB SYSTEM (WHITE COLLAR VS BLUE COLLAR) */}
      <section style={{ background: "#071020", color: "#ffffff", padding: "100px 20px", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "38px", fontWeight: "800", marginBottom: "14px" }}>Two Structured Professional Tracks</h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
              Click on a discipline track below to review specific terminal roles and targeted execution frameworks.
            </p>
          </div>

          {/* Tab Switch Controls */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px", 
            marginBottom: "50px"
          }}>
            {coreTracks.map((track, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTrack(idx)}
                style={{
                  background: activeTrack === idx ? "#E8A830" : "rgba(255, 255, 255, 0.05)",
                  color: activeTrack === idx ? "#071020" : "#ffffff",
                  border: activeTrack === idx ? "1px solid #E8A830" : "1px solid rgba(255,255,255,0.1)",
                  padding: "14px 28px",
                  borderRadius: "50px",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: activeTrack === idx ? "0 10px 25px rgba(232, 168, 48, 0.3)" : "none"
                }}
              >
                {track.icon} {track.title}
              </button>
            ))}
          </div>

          {/* Stateful Display Window with Key Trigger to Force Rerender Animations */}
          <div 
            key={activeTrack}
            className="animate-fade-in"
            style={{ 
              background: "rgba(255,255,255,0.02)", 
              border: "1px solid rgba(255,255,255,0.08)", 
              borderRadius: "32px", 
              padding: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              alignItems: "center"
            }}
          >
            <div>
              <span style={{ color: "#E8A830", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "12px" }}>
                🎯 {coreTracks[activeTrack].badge}
              </span>
              <h3 style={{ fontSize: "30px", fontWeight: "800", marginBottom: "6px" }}>{coreTracks[activeTrack].title}</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>{coreTracks[activeTrack].focus}</p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>{coreTracks[activeTrack].desc}</p>
            </div>

            <div style={{ background: "rgba(7, 16, 32, 0.6)", borderRadius: "24px", padding: "35px", border: "1px solid rgba(255,255,255,0.04)" }}>
              <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#E8A830", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
                Target Placement Directives:
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}>
                {coreTracks[activeTrack].roles.map((role, rIdx) => (
                  <div key={rIdx} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ 
                      width: "24px", 
                      height: "24px", 
                      background: "rgba(232, 168, 48, 0.15)", 
                      borderRadius: "50%", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center",
                      color: "#E8A830",
                      fontSize: "12px",
                      flexShrink: 0
                    }}>✓</span> 
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SIMULATION INFRASTRUCTURE LAB REVEAL CARDS */}
      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span style={{ color: "#E8A830", fontSize: "13px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>Tactile Asset Integration</span>
          <h2 style={{ fontSize: "38px", fontWeight: "800", color: "#071020", marginTop: "12px" }}>Advanced Simulator Facilities</h2>
          <p style={{ color: "#64748b", fontSize: "16px", marginTop: "8px", maxWidth: "600px", margin: "8px auto 0" }}>
            We reduce technical response friction by exposing students to operational equipment replicas before final regulatory evaluations.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {specializedLabs.map((lab, idx) => (
            <div 
              key={idx} 
              className="hover-lift"
              style={{ 
                background: "#ffffff", 
                padding: "40px", 
                borderRadius: "28px", 
                border: "1px solid #edf2f7", 
                boxShadow: "0 10px 30px rgba(7, 16, 32, 0.01)", 
                display: "grid", 
                gridTemplateColumns: "auto 1fr", 
                gap: "35px", 
                alignItems: "center",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{ 
                fontSize: "36px", 
                background: "#f0f4f8", 
                width: "80px", 
                height: "80px", 
                borderRadius: "20px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)"
              }}>
                {lab.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#112548", marginBottom: "8px" }}>
                  {lab.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.65", margin: 0 }}>{lab.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GEOGRAPHIC NETWORK MAP FOOTPRINT */}
      <section style={{ background: "#edf2f7", padding: "100px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#071020" }}>Our Expanding Operational Map</h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "8px" }}>Unified academic points delivering matching aviation certifications across state boundaries.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {centers.map((center, idx) => (
              <div 
                key={idx} 
                className="hover-lift"
                style={{ 
                  background: "#ffffff", 
                  padding: "30px", 
                  borderRadius: "24px", 
                  border: "1px solid #e2e8f0",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div style={{ 
                  position: "absolute", 
                  top: 0, 
                  right: 0, 
                  background: "#112548", 
                  color: "#ffffff", 
                  fontSize: "10px", 
                  fontWeight: "700", 
                  padding: "4px 12px", 
                  borderBottomLeftRadius: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}>
                  {center.region}
                </div>
                <div style={{ fontSize: "24px", marginBottom: "16px", marginTop: "6px" }}>🏢</div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#071020", marginBottom: "6px" }}>{center.name}</h4>
                <p style={{ color: "#64748b", fontSize: "14px", margin: 0, lineHeight: "1.4" }}>{center.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;