
import React from "react";
import { useNavigate } from "react-router-dom";

function Batches() {
  const navigate = useNavigate();

  // Unified data array capturing active, upcoming, and expired cohorts
  const batchesData = [
    {
      id: 1,
      name: "Q3 Alpha Aviation Cohort",
      timeline: "July 2026 - September 2026",
      status: "Admissions Closing Soon",
      seatsLeft: "4 Seats Left",
      color: "#e8a830",
      isExpired: false
    },
    {
      id: 2,
      name: "Q4 Bravo Strategic Cohort",
      timeline: "October 2026 - December 2026",
      status: "Early Bird Open",
      seatsLeft: "Registration Active",
      color: "#10b981",
      isExpired: false
    },
    {
      id: 3,
      name: "Q1 Charlie Vanguard Cohort",
      timeline: "January 2027 - March 2027",
      status: "Reservations Open",
      seatsLeft: "Pre-booking Active",
      color: "#64748b",
      isExpired: false
    },
    // COMPLETED / EXPIRED BATCHES
    {
      id: 4,
      name: "Q2 Delta Placement Cohort",
      timeline: "April 2026 - June 2026",
      status: "Batch Expired",
      seatsLeft: "0 Seats Left",
      color: "#ef4444",
      isExpired: true
    },
    {
      id: 5,
      name: "Q1 Echo Foundation Cohort",
      timeline: "January 2026 - March 2026",
      status: "Batch Expired",
      seatsLeft: "Completed",
      color: "#ef4444",
      isExpired: true
    }
  ];

  // Filter batches into active and expired categories
  const activeBatches = batchesData.filter(b => !b.isExpired);
  const expiredBatches = batchesData.filter(b => b.isExpired);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", overflow: "hidden" }}>
      
      {/* BACKGROUND SVG GRAPHICS (Inspired by image_ae23e1.png) */}
      <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none", zIndex: 1, opacity: 0.85 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <path d="M50 120 C 150 70, 300 160, 450 100" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
          <path d="M446 98 L454 100 L448 104 L447 101 Z" fill="#cbd5e1"/>
          <path d="M160 80 C160 70, 180 65, 195 72 C205 65, 225 68, 230 78 C240 78, 245 88, 238 95 C238 100, 160 100, 160 80 Z" fill="#e2e8f0" opacity="0.7"/>
          <path d="M550 250 C 680 180, 850 320, 1050 230" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
          <path d="M846 250 L854 253 L847 257 L846 253 Z" fill="#cbd5e1"/>
          <path d="M720 310 C720 300, 740 295, 755 302 C765 295, 785 298, 790 308 C800 308, 805 318, 798 325 C798 330, 720 330, 720 310 Z" fill="#e2e8f0" opacity="0.7"/>
        </svg>
      </div>

      {/* HERO BANNER SECTION */}
      <section style={{ background: "linear-gradient(135deg, #071020 0%, #112548 100%)", color: "#ffffff", padding: "120px 20px 80px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <span style={{ color: "#E8A830", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase" }}>
          Every 3 Months — A New Generation Takes Flight
        </span>
        <h1 style={{ fontSize: "40px", fontWeight: "800", marginTop: "15px", marginBottom: "15px" }}>Academic Training Cycles</h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          Explore our structured quarterly cohorts built to transform applicants through verified placement tracks.
        </p>
      </section>

      {/* BATCHES CONTAINER CONTAINER */}
      <main style={{ padding: "60px 20px", maxWidth: "1100px", margin: "-30px auto 0", position: "relative", zIndex: 3 }}>
        
        {/* SECTION 1: ACTIVE / UPCOMING COHORTS */}
        <h2 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "25px", color: "#071020", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }}></span>
          Active & Upcoming Batches
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          {activeBatches.map((batch) => (
            <div key={batch.id} style={{ background: "#ffffff", borderRadius: "24px", padding: "35px", border: "1px solid #edf2f7", boxShadow: "0 20px 40px rgba(7,16,32,0.03)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ background: `${batch.color}15`, color: batch.color, fontSize: "12px", fontWeight: "700", padding: "6px 14px", borderRadius: "50px", textTransform: "uppercase" }}>
                    {batch.status}
                  </span>
                  <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>{batch.seatsLeft}</span>
                </div>
                
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#071020", margin: "0 0 8px 0" }}>{batch.name}</h3>
                <p style={{ color: "#64748b", fontSize: "14px", fontWeight: "500", margin: "0 0 25px 0" }}>⏱️ {batch.timeline}</p>
                
                <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", marginBottom: "30px" }}>
                  Full immersion program including aviation compliance modules, technical parameters, and direct partner scheduling loops.
                </p>
              </div>

              {/* THREE DEDICATED ACTION BUTTONS */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
                <button 
                  onClick={() => navigate("/curriculum")}
                  style={{ width: "100%", padding: "14px", background: "#f1f5f9", color: "#1e293b", border: "none", borderRadius: "12px", fontWeight: "700", fontSize: "14px", cursor: "pointer", transition: "0.2s" }}
                  onMouseEnter={(e) => e.target.style.background = "#e2e8f0"}
                  onMouseLeave={(e) => e.target.style.background = "#f1f5f9"}
                >
                  View Curriculum Syllabus
                </button>
                <button 
                  onClick={() => navigate("/admissions")}
                  style={{ width: "100%", padding: "14px", background: "transparent", color: "#071020", border: "2px solid #071020", borderRadius: "12px", fontWeight: "700", fontSize: "14px", cursor: "pointer", transition: "0.2s" }}
                  onMouseEnter={(e) => { e.target.style.background = "#071020"; e.target.style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#071020"; }}
                >
                  Get Admission Criteria
                </button>
                <button 
                  onClick={() => navigate("/apply")}
                  style={{ width: "100%", padding: "14px", background: "#E8A830", color: "#071020", border: "none", borderRadius: "12px", fontWeight: "700", fontSize: "14px", cursor: "pointer", transition: "0.2s", boxShadow: "0 4px 12px rgba(232,168,48,0.2)" }}
                  onMouseEnter={(e) => e.target.style.background = "#d49624"}
                  onMouseLeave={(e) => e.target.style.background = "#E8A830"}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VISUAL SEPARATOR */}
        <hr style={{ border: "none", height: "1px", background: "#cbd5e1", margin: "40px 0" }} />

        {/* SECTION 2: EXPIRED / COMPLETED COHORTS */}
        <h2 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "25px", color: "#64748b", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#94a3b8" }}></span>
          Historical & Expired Batches
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", opacity: 0.75 }}>
          {expiredBatches.map((batch) => (
            <div key={batch.id} style={{ background: "#f1f5f9", borderRadius: "24px", padding: "35px", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", fontSize: "12px", fontWeight: "700", padding: "6px 14px", borderRadius: "50px", textTransform: "uppercase" }}>
                    {batch.status}
                  </span>
                  <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: "500" }}>{batch.seatsLeft}</span>
                </div>
                
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#475569", margin: "0 0 8px 0", textDecoration: "line-through" }}>{batch.name}</h3>
                <p style={{ color: "#94a3b8", fontSize: "14px", fontWeight: "500", margin: "0 0 25px 0" }}>⏱️ {batch.timeline}</p>
                
                <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "30px" }}>
                  This operational run has concluded. Classroom timelines, field screening criteria loops, and direct pipeline enrollment access handles for this quadrant have expired.
                </p>
              </div>

              {/* LOCKED STATE ACTIONS */}
              <div style={{ marginTop: "auto" }}>
                <div style={{ 
                  width: "100%", 
                  padding: "16px", 
                  background: "#cbd5e1", 
                  color: "#475569", 
                  borderRadius: "12px", 
                  fontWeight: "700", 
                  fontSize: "14px", 
                  textAlign: "center",
                  boxSizing: "border-box",
                  cursor: "not-allowed",
                  border: "1px dashed #94a3b8"
                }}>
                  🔒 Batch Closed / Expired
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

export default Batches;