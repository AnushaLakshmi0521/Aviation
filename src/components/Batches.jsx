
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

  const activeBatches = batchesData.filter(b => !b.isExpired);
  const expiredBatches = batchesData.filter(b => b.isExpired);

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", overflow: "hidden" }}>
      
      {/* INLINE ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes driftSlow {
          0% { transform: translateX(-50px); opacity: 0; }
          10% { opacity: 0.75; }
          90% { opacity: 0.75; }
          100% { transform: translateX(1250px); opacity: 0; }
        }
        @keyframes driftFast {
          0% { transform: translateX(-100px); opacity: 0; }
          15% { opacity: 0.85; }
          85% { opacity: 0.85; }
          100% { transform: translateX(1300px); opacity: 0; }
        }
      `}</style>

      {/* RICH ANIMATED BACKGROUND SECTOR */}
      <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none", zIndex: 1 }}>
        
        {/* Flight Routes & Tracks (SVG Grid) */}
        <svg width="100%" height="100%" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.85 }}>
          {/* Flight Path Route 1 */}
          <path d="M-50 200 C 200 80, 450 300, 700 150 C 900 50, 1050 220, 1250 100" stroke="#e2e8f0" strokeWidth="2.5" strokeDasharray="8 6" fill="none"/>
          {/* Flight Path Route 2 */}
          <path d="M-20 550 C 250 420, 500 680, 750 500 C 950 380, 1100 550, 1280 420" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
        </svg>

        {/* Dynamic Cloud Vectors with Keyframe Assignments */}
        <div style={{ position: "absolute", top: "140px", left: 0, animation: "driftSlow 45s linear infinite" }}>
          <svg width="90" height="40" viewBox="0 0 100 45" fill="#e2e8f0">
            <path d="M20 30 C20 20, 35 15, 50 20 C60 10, 80 15, 85 25 C95 25, 100 33, 93 40 C93 43, 20 43, 20 30 Z" />
          </svg>
        </div>

        <div style={{ position: "absolute", top: "380px", left: 0, animation: "driftFast 30s linear infinite", animationDelay: "-10s" }}>
          <svg width="110" height="50" viewBox="0 0 100 45" fill="#edf2f7">
            <path d="M15 35 C15 22, 35 15, 50 22 C65 12, 85 18, 90 30 C98 30, 103 38, 96 45 C96 45, 15 45, 15 35 Z" />
          </svg>
        </div>

        <div style={{ position: "absolute", top: "720px", left: 0, animation: "driftSlow 55s linear infinite", animationDelay: "-25s" }}>
          <svg width="130" height="60" viewBox="0 0 100 45" fill="#e2e8f0">
            <path d="M20 30 C20 18, 40 12, 55 20 C70 8, 90 14, 95 28 C103 28, 108 36, 101 43 C101 43, 20 43, 20 30 Z" />
          </svg>
        </div>

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

      {/* BATCHES CONTAINER */}
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
