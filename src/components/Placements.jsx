
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Placements() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [currentStory, setCurrentStory] = useState(0);

  // Real aviation partners historically aligned with the training ecosystem
  const placementPartners = [
    { name: "IndiGo Airlines", role: "Passenger Service Executive", category: "white" },
    { name: "Air India", role: "Operations Coordinator", category: "white" },
    { name: "DHL Cargo Logistics", role: "Cargo Logistics Monitor", category: "blue" },
    { name: "KIAL (Kempegowda Int. Airport)", role: "Flight Scheduler", category: "white" },
    { name: "Bhadra International", role: "Ground Handling Technician", category: "blue" },
    { name: "GGI Bangalore", role: "Fleet Maintenance Crew", category: "blue" },
    { name: "SpiceJet", role: "Guest Relations Executive", category: "white" },
    { name: "Taj-SATS Air Catering", role: "Safety Systems Inspector", category: "blue" },
  ];

  // Placement Success Stories Data
  const successStories = [
    {
      name: "Rahul Sharma",
      placedAt: "IndiGo Airlines",
      role: "Passenger Service Officer",
      quote: "Coming from a non-aviation background, the 90-day transformation cycle completely overhauled my confidence and core GDS ticketing knowledge. Within weeks of completing the mock drills, I cleared my first airline panel.",
      type: "👔 White-Collar Success"
    },
    {
      name: "Priya Nair",
      placedAt: "KIAL (Bangalore Airport)",
      role: "Flight Operations Scheduler",
      quote: "The structural corporate grooming sessions shed my stage fear completely. Understanding DGCA protocols step-by-step made me clear the technical evaluation setup effortlessly.",
      type: "👔 White-Collar Success"
    },
    {
      name: "Arun Kumar",
      placedAt: "DHL Cargo Logistics",
      role: "Cargo Logistics Monitor",
      quote: "The field logistics training and tarmac orientation routines give you real practical engineering logic. If you put in the hours, the placement pipeline guarantees you deployment.",
      type: "🔧 Blue-Collar Success"
    }
  ];

  const filteredPartners = activeTab === "all" 
    ? placementPartners 
    : placementPartners.filter(p => p.category === activeTab);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", overflow: "hidden" }}>
      
      {/* RICH BACKGROUND VECTOR GRAPHICS */}
      <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none", zIndex: 1, opacity: 0.85 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M-50 150 C 150 50, 350 220, 550 120 C 700 40, 950 180, 1250 80" stroke="#e2e8f0" strokeWidth="2.5" strokeDasharray="8 6" fill="none"/>
          <path d="M-20 480 C 200 380, 450 580, 700 450 C 900 350, 1050 500, 1250 400" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
          <path d="M140 90 C140 82, 155 78, 166 83 C174 78, 189 80, 193 88 C201 88, 205 96, 200 102 C200 105, 140 105, 140 90 Z" fill="#e2e8f0" opacity="0.8"/>
          <path d="M950 130 C950 122, 966 118, 977 123 C985 118, 1000 120, 1004 128 C1012 128, 1016 136, 1011 142 C1011 145, 950 145, 950 130 Z" fill="#edf2f7" opacity="0.9"/>
          <path d="M580 410 C580 395, 605 388, 624 397 C637 388, 663 392, 670 406 C683 406, 690 420, 680 430 C680 436, 580 436, 580 410 Z" fill="#e2e8f0" opacity="0.75"/>
        </svg>
      </div>

      {/* HERO SECTION */}
      <section style={{ background: "linear-gradient(135deg, #071020 0%, #112548 100%)", color: "#ffffff", padding: "110px 20px 75px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <span style={{ color: "#E8A830", fontSize: "12px", fontWeight: "850", letterSpacing: "4px", textTransform: "uppercase", background: "rgba(232,168,48,0.1)", padding: "6px 16px", borderRadius: "50px" }}>
          Collab Force × Jyothy Cirruss Aviation
        </span>
        <h1 style={{ fontSize: "44px", fontWeight: "900", marginTop: "20px", marginBottom: "15px", letterSpacing: "-0.5px" }}>
          Placement Ecosystem & Partners
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "720px", margin: "0 auto", lineHeight: "1.65" }}>
          Accelerating your aviation trajectory with industry-recognized certifications and 100% assured recruitment deployments across India.
        </p>
      </section>

      {/* PLACEMENT STATISTICS STRIP */}
      <div style={{ maxWidth: "1100px", margin: "-30px auto 40px", padding: "0 20px", position: "relative", zIndex: 3 }}>
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "30px", border: "1px solid #edf2f7", boxShadow: "0 15px 35px rgba(7,16,32,0.04)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", textAlign: "center" }}>
          <div>
            <div style={{ fontSize: "36px", fontWeight: "900", color: "#071020" }}>100%</div>
            <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "650", textTransform: "uppercase", marginTop: "5px" }}>Placement Assured</div>
          </div>
          <div style={{ borderLeft: "1px solid #e2e8f0", borderRight: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: "36px", fontWeight: "900", color: "#e8a830" }}>90 Days</div>
            <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "650", textTransform: "uppercase", marginTop: "5px" }}>To Start Earning</div>
          </div>
          <div>
            <div style={{ fontSize: "36px", fontWeight: "900", color: "#071020" }}>10+</div>
            <div style={{ fontSize: "13px", color: "#64748b", fontWeight: "650", textTransform: "uppercase", marginTop: "5px" }}>Batches Transformed Yearly</div>
          </div>
        </div>
      </div>

      {/* CONTENT INNER WRAPPER */}
      <main style={{ padding: "0 24px 80px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 3 }}>
        
        {/* FRAMEWORK STEPS */}
        <div style={{ marginBottom: "60px" }}>
          <span style={{ color: "#64748b", fontSize: "11px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", background: "#f1f5f9", padding: "6px 12px", borderRadius: "6px" }}>
            Our Framework Approach
          </span>
          <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#071020", marginTop: "12px", marginBottom: "30px" }}>
            The Structured Placement Journey
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "25px" }}>
            {[
              { num: "01", title: "Career Mapping", desc: "Identifying the precise airport career domain trajectory customized around student baseline preferences." },
              { num: "02", title: "Skill Development", desc: "Rigorous focus parameters centering around global system logics, corporate grammar grooming, and vocal delivery." },
              { num: "03", title: "Industry Exposure", desc: "Direct terminal field visits, tarmac insights, and practical scenario evaluation structures." },
              { num: "04", title: "Interview Readiness", desc: "Aviation panel mock layouts, aggressive stress mitigation metrics, and structural application routing." }
            ].map((step, index) => (
              <div key={index} style={{ background: "#ffffff", padding: "30px", borderRadius: "20px", border: "1px solid #edf2f7", boxShadow: "0 10px 20px rgba(0,0,0,0.01)" }}>
                <div style={{ fontSize: "13px", color: "#e8a830", fontWeight: "800" }}>STEP {step.num}</div>
                <h4 style={{ fontSize: "17px", fontWeight: "800", color: "#071020", margin: "8px 0" }}>{step.title}</h4>
                <p style={{ color: "#475569", fontSize: "13.5px", lineHeight: "1.6", margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW SECTION: PLACEMENT SUCCESS STORIES CAROUSEL */}
        <div style={{ marginBottom: "60px", background: "linear-gradient(135deg, #071020 0%, #1a3668 100%)", borderRadius: "24px", padding: "45px", color: "#ffffff", position: "relative", boxShadow: "0 20px 40px rgba(7,16,32,0.15)" }}>
          <span style={{ color: "#E8A830", fontSize: "11px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase" }}>
            Alumni Testimonials
          </span>
          <h2 style={{ fontSize: "28px", fontWeight: "900", marginTop: "8px", marginBottom: "30px", color: "#ffffff" }}>
            Real Career Transformations
          </h2>

          <div style={{ minHeight: "160px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "18px", lineHeight: "1.7", fontStyle: "italic", color: "rgba(255,255,255,0.9)", margin: "0 0 25px 0" }}>
              "{successStories[currentStory].quote}"
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
              <div>
                <h4 style={{ fontSize: "16px", fontWeight: "800", margin: 0, color: "#ffffff" }}>{successStories[currentStory].name}</h4>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)" }}>
                  Placed as {successStories[currentStory].role} at <strong>{successStories[currentStory].placedAt}</strong>
                </span>
              </div>
              <span style={{ background: "rgba(255,255,255,0.1)", fontSize: "12px", fontWeight: "700", padding: "6px 14px", borderRadius: "30px", color: "#E8A830" }}>
                {successStories[currentStory].type}
              </span>
            </div>
          </div>

          {/* Carousel Buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "30px", justifyContent: "flex-end" }}>
            <button onClick={prevStory} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#ffffff", cursor: "pointer", fontWeight: "700" }}>←</button>
            <button onClick={nextStory} style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#ffffff", cursor: "pointer", fontWeight: "700" }}>→</button>
          </div>
        </div>

        {/* PARTNERS MATRIX INTERFACE WITH TABS */}
        <div style={{ background: "#ffffff", borderRadius: "24px", padding: "40px", border: "1px solid #edf2f7", boxShadow: "0 20px 40px rgba(7,16,32,0.02)" }}>
          <div style={{ display: "flex", justifyContent: "between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "35px", borderBottom: "1px solid #f1f5f9", paddingBottom: "20px" }}>
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#071020", margin: 0 }}>Active Onboarding Verification</h3>
              <p style={{ color: "#64748b", fontSize: "14px", margin: "4px 0 0 0" }}>Filter roles by corporate administration or tarmac execution grids.</p>
            </div>
            
            <div style={{ display: "flex", background: "#f1f5f9", padding: "4px", borderRadius: "10px", gap: "4px" }}>
              {["all", "white", "blue"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "8px 16px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    background: activeTab === tab ? "#071020" : "transparent",
                    color: activeTab === tab ? "#ffffff" : "#475569",
                    transition: "all 0.2s"
                  }}
                >
                  {tab === "all" ? "All Sectors" : tab === "white" ? "👔 White-Collar" : "🔧 Blue-Collar"}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {filteredPartners.map((partner, index) => (
              <div 
                key={index} 
                style={{ border: "1px solid #f1f5f9", borderRadius: "16px", padding: "20px", transition: "all 0.2s", background: "#fafafa" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.background = "#ffffff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.background = "#fafafa"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "15px", fontWeight: "800", color: "#071020" }}>{partner.name}</span>
                  <span style={{ fontSize: "10px", fontWeight: "800", padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase", background: partner.category === "white" ? "#10b98115" : "#3b82f615", color: partner.category === "white" ? "#10b981" : "#3b82f6" }}>
                    {partner.category}
                  </span>
                </div>
                <div style={{ fontSize: "13px", color: "#64748b", marginTop: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span>🎯</span> {partner.role}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "50px", borderTop: "1px solid #f1f5f9", paddingTop: "35px" }}>
            <p style={{ color: "#475569", fontSize: "14.5px", marginBottom: "20px" }}>
              Ready to initialize your evaluation parameters with Jyothy Cirruss School of Aviation?
            </p>
            <button 
              onClick={() => navigate("/admissions")}
              style={{ padding: "14px 32px", background: "#071020", color: "#ffffff", border: "none", borderRadius: "10px", fontWeight: "700", fontSize: "14px", cursor: "pointer", transition: "0.2s" }}
              onMouseEnter={(e) => e.target.style.background = "#112548"}
              onMouseLeave={(e) => e.target.style.background = "#071020"}
            >
              Initialize Admission Form Verification
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Placements;