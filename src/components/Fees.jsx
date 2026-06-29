
import React from "react";
import { useNavigate } from "react-router-dom";

function Fees() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif", position: "relative", overflow: "hidden" }}>
      
      {/* RICH BACKGROUND VECTOR GRAPHICS (Extensively detailed based on image_ae23e1.png) */}
      <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, pointerEvents: "none", zIndex: 1, opacity: 0.9 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          
          {/* Flight Path Loop 1 - High Level */}
          <path d="M-50 150 C 150 50, 350 220, 550 120 C 700 40, 950 180, 1250 80" stroke="#e2e8f0" strokeWidth="2.5" strokeDasharray="8 6" fill="none"/>
          <path d="M546 118 L554 120 L548 124 L547 121 Z" fill="#cbd5e1"/>
          
          {/* Flight Path Loop 2 - Mid Horizon Cross */}
          <path d="M-20 480 C 200 380, 450 580, 700 450 C 900 350, 1050 500, 1250 400" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" fill="none"/>
          <path d="M696 448 L704 450 L698 454 L697 451 Z" fill="#94a3b8"/>

          {/* Flight Path Loop 3 - Low Level Deep Jetstream */}
          <path d="M50 850 C 300 750, 600 950, 850 820 C 1000 740, 1100 860, 1250 800" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 6" fill="none"/>

          {/* DENSE CLOUD CLUSTERS (Layered across multiple responsive coordinates) */}
          {/* Cluster 1 - Top Left */}
          <path d="M140 90 C140 82, 155 78, 166 83 C174 78, 189 80, 193 88 C201 88, 205 96, 200 102 C200 105, 140 105, 140 90 Z" fill="#e2e8f0" opacity="0.8"/>
          <path d="M180 100 C180 90, 202 85, 218 92 C229 85, 251 88, 257 99 C268 99, 274 110, 266 118 C266 123, 180 123, 180 100 Z" fill="#cbd5e1" opacity="0.4"/>
          
          {/* Cluster 2 - Top Right */}
          <path d="M950 130 C950 122, 966 118, 977 123 C985 118, 1000 120, 1004 128 C1012 128, 1016 136, 1011 142 C1011 145, 950 145, 950 130 Z" fill="#edf2f7" opacity="0.9"/>
          
          {/* Cluster 3 - Mid Center */}
          <path d="M580 410 C580 395, 605 388, 624 397 C637 388, 663 392, 670 406 C683 406, 690 420, 680 430 C680 436, 580 436, 580 410 Z" fill="#e2e8f0" opacity="0.75"/>
          <path d="M640 420 C640 412, 655 408, 665 413 C672 408, 688 410, 692 418 C700 418, 704 426, 699 432 C699 435, 640 435, 640 420 Z" fill="#edf2f7" opacity="0.6"/>

          {/* Cluster 4 - Mid Left Ambient */}
          <path d="M60 520 C60 508, 80 502, 95 510 C105 502, 125 505, 130 517 C140 517, 145 528, 138 537 C138 542, 60 542, 60 520 Z" fill="#e2e8f0" opacity="0.6"/>
          
          {/* Cluster 5 - Lower Right Runway Stack */}
          <path d="M880 790 C880 775, 905 768, 924 777 C937 768, 963 772, 970 786 C983 786, 990 800, 980 810 C980 816, 880 816, 880 790 Z" fill="#e2e8f0" opacity="0.85"/>
          <path d="M840 810 C840 798, 860 792, 875 800 C885 792, 905 795, 910 807 C120 807, 125 818, 118 827 C118 832, 840 832, 840 810 Z" fill="#cbd5e1" opacity="0.5"/>

          {/* Cluster 6 - Deep Bottom Left */}
          <path d="M220 940 C220 928, 240 922, 255 930 C265 922, 285 925, 290 937 C300 937, 305 948, 298 957 C298 962, 220 962, 220 940 Z" fill="#e2e8f0" opacity="0.5"/>
        </svg>
      </div>

      {/* HERO BANNER SECTION */}
      <section style={{ background: "linear-gradient(135deg, #071020 0%, #112548 100%)", color: "#ffffff", padding: "110px 20px 75px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at 50% 30%, rgba(232,168,48,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <span style={{ color: "#E8A830", fontSize: "12px", fontWeight: "850", letterSpacing: "4px", textTransform: "uppercase", background: "rgba(232,168,48,0.1)", padding: "6px 16px", borderRadius: "50px" }}>
          Investment Breakdown & Syllabus Matrix
        </span>
        <h1 style={{ fontSize: "44px", fontWeight: "900", marginTop: "20px", marginBottom: "15px", letterSpacing: "-0.5px" }}>Tuition, Curriculum & Career Outcomes</h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "720px", margin: "0 auto", lineHeight: "1.65" }}>
          An all-inclusive institutional preparation cycle with an explicit, legally secure placement safety loop engineered for certified operational roles.
        </p>
      </section>

      {/* MAIN CONTENT GRID */}
      <main style={{ padding: "0 24px 100px", maxWidth: "1240px", margin: "-35px auto 0", position: "relative", zIndex: 3 }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "35px", alignItems: "start" }}>
          
          {/* ================= LEFT SIDEBAR: TUITION & GUARANTEE ================= */}
          <div style={{ display: "flex", flexDirection: "column", gap: "35px", position: "sticky", top: "30px" }}>
            
            {/* TUITION RATE CARD */}
            <div 
              style={{ background: "#ffffff", borderRadius: "28px", padding: "45px", border: "1px solid #edf2f7", boxShadow: "0 25px 50px rgba(7,16,32,0.035)", transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <span style={{ background: "#e8a83015", color: "#e8a830", fontSize: "11px", fontWeight: "800", padding: "6px 14px", borderRadius: "50px", textTransform: "uppercase", letterSpacing: "1px" }}>
                All-Inclusive Tuition Fee
              </span>
              <div style={{ margin: "25px 0 15px 0", display: "flex", alignItems: "baseline", gap: "5px" }}>
                <span style={{ fontSize: "60px", fontWeight: "900", color: "#071020", letterSpacing: "-1px" }}>₹25,000</span>
                <span style={{ color: "#64748b", fontSize: "16px", fontWeight: "600" }}>/ Fixed Total</span>
              </div>
              <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: "1.65", marginBottom: "35px" }}>
                Covers complete ground technical training assets, real-time simulator evaluations, core layout study guides, module materials, and administrative clearance runs.
              </p>
              <button 
                onClick={() => navigate("/admissions")}
                style={{ width: "100%", padding: "18px", background: "#071020", color: "#ffffff", border: "none", borderRadius: "14px", fontWeight: "700", fontSize: "15px", cursor: "pointer", transition: "all 0.2s ease", boxShadow: "0 8px 20px rgba(7,16,32,0.15)" }}
                onMouseEnter={(e) => { e.target.style.background = "#E8A830"; e.target.style.color = "#071020"; }}
                onMouseLeave={(e) => { e.target.style.background = "#071020"; e.target.style.color = "#ffffff"; }}
              >
                Book Upcoming Batches 🛫
              </button>
            </div>

            {/* 100% REFUND PLACEMENT GUARANTEE PANEL */}
            <div style={{ background: "linear-gradient(135deg, #fff5f5 0%, #fef2f2 100%)", borderRadius: "28px", padding: "40px", border: "1px dashed #fca5a5", boxShadow: "0 15px 30px rgba(239,68,68,0.02)" }}>
              <div style={{ background: "#ef444415", width: "50px", height: "50px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "20px" }}>🛡️</div>
              <h3 style={{ fontSize: "19px", fontWeight: "800", color: "#991b1b", margin: "0 0 12px 0", letterSpacing: "-0.2px" }}>
                100% Job Placement Guarantee or Full Fee Refund*
              </h3>
              <p style={{ color: "#7f1d1d", fontSize: "14px", lineHeight: "1.7", margin: 0, opacity: 0.95 }}>
                Our structural pipeline ensures all qualified graduates are ready for employment. If you successfully complete the course with <strong>Jyothi Cirrus School of Aviation</strong> but fail to secure a relevant airport white-collar or blue-collar operational job offer, your entire tuition fee will be returned seamlessly. No conditions hidden.
              </p>
            </div>

            {/* PLACEMENT SECTOR DEFINITIONS */}
            <div style={{ background: "#ffffff", borderRadius: "28px", padding: "40px", border: "1px solid #edf2f7", boxShadow: "0 20px 40px rgba(7,16,32,0.02)" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#071020", marginBottom: "25px", letterSpacing: "-0.2px" }}>Target Placement Sectors</h3>
              
              {/* White Collar */}
              <div style={{ marginBottom: "25px", display: "flex", gap: "16px", alignItems: "start" }}>
                <div style={{ background: "#10b98115", color: "#10b981", padding: "10px", borderRadius: "12px", fontSize: "18px", lineHeight: 1 }}>👔</div>
                <div>
                  <span style={{ fontSize: "14px", color: "#10b981", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.5px" }}>White-Collar Tracks</span>
                  <p style={{ color: "#475569", fontSize: "13.5px", margin: "6px 0 0 0", lineHeight: "1.6" }}>
                    Office-based scheduling configurations, customer interface desks, aviation documentation logs, and corporate ticketing system workflows.
                  </p>
                </div>
              </div>

              {/* Blue Collar */}
              <div style={{ display: "flex", gap: "16px", alignItems: "start" }}>
                <div style={{ background: "#3b82f615", color: "#3b82f6", padding: "10px", borderRadius: "12px", fontSize: "18px", lineHeight: 1 }}>🔧</div>
                <div>
                  <span style={{ fontSize: "14px", color: "#3b82f6", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.5px" }}>Blue-Collar Tracks</span>
                  <p style={{ color: "#475569", fontSize: "13.5px", margin: "6px 0 0 0", lineHeight: "1.6" }}>
                    On-ground terminal logistics execution, ramp safety operations, precision cargo allocation grids, and fleet response maintenance handling setups.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ACADEMIC FRAMEWORK TIMELINE ================= */}
          <div style={{ background: "#ffffff", borderRadius: "28px", padding: "45px", border: "1px solid #edf2f7", boxShadow: "0 25px 50px rgba(7,16,32,0.02)" }}>
            <span style={{ color: "#64748b", fontSize: "11px", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", background: "#f1f5f9", padding: "6px 12px", borderRadius: "6px" }}>
              Deep Academic Structure
            </span>
            <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#071020", marginTop: "15px", marginBottom: "15px", letterSpacing: "-0.5px" }}>
              The 3-Month Institutional Curriculum
            </h2>
            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "45px" }}>
              Every candidate undergoes 90 days of high-intensity operational and psychological grooming before moving onto real tarmac environments.
            </p>

            {/* TIMELINE TRACK */}
            <div style={{ position: "relative", paddingLeft: "10px" }}>
              
              {/* MONTH 1 */}
              <div 
                style={{ position: "relative", paddingLeft: "40px", borderLeft: "3px solid #e2e8f0", paddingBottom: "50px", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = "#e8a830"}
                onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = "#e2e8f0"}
              >
                {/* Floating Node Icon */}
                <div style={{ position: "absolute", left: "-21px", top: "0", background: "#ffffff", width: "38px", height: "38px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", border: "3px solid #e2e8f0", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>
                  📚
                </div>
                <span style={{ fontSize: "11px", color: "#e8a830", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", background: "#e8a83010", padding: "4px 10px", borderRadius: "50px" }}>
                  WEEKS 1 - 4
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#071020", margin: "10px 0 12px 0", letterSpacing: "-0.2px" }}>
                  Month 1: Foundation & Corporate Persona
                </h3>
                <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "20px" }}>
                  Focuses primarily on rebuilding corporate posture, understanding uniform standards, learning global geography matrix codes, and shedding stage fear.
                </p>
                
                <div style={{ background: "#f8fafc", padding: "20px 25px", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
                  <ul style={{ margin: 0, paddingLeft: "15px", color: "#475569", fontSize: "14px", lineHeight: "2" }}>
                    <li>Skin Care, Grooming, Hair Design & Wardrobe Planning</li>
                    <li>Introduction to Civil Aviation Authorities (<span style={{ fontWeight: "600", color: "#071020" }}>DGCA, ICAO, FAA</span>)</li>
                    <li>Phonetic Decodes, Call Signs & Functional Terminal Layouts</li>
                  </ul>
                </div>
              </div>

              {/* MONTH 2 */}
              <div 
                style={{ position: "relative", paddingLeft: "40px", borderLeft: "3px solid #e2e8f0", paddingBottom: "50px", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = "#10b981"}
                onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = "#e2e8f0"}
              >
                {/* Floating Node Icon */}
                <div style={{ position: "absolute", left: "-21px", top: "0", background: "#ffffff", width: "38px", height: "38px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", border: "3px solid #e2e8f0", boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>
                  💻
                </div>
                <span style={{ fontSize: "11px", color: "#10b981", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", background: "#10b98110", padding: "4px 10px", borderRadius: "50px" }}>
                  WEEKS 5 - 8
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#071020", margin: "10px 0 12px 0", letterSpacing: "-0.2px" }}>
                  Month 2: Core Engineering Systems & Logic
                </h3>
                <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "20px" }}>
                  Transition into complex ticketing architecture platforms, managing dynamic reservation logic databases, handling VIP profiles, and managing emergency protocols.
                </p>
                
                <div style={{ background: "#f8fafc", padding: "20px 25px", borderRadius: "16px", border: "1px solid #f1f5f9" }}>
                  <ul style={{ margin: 0, paddingLeft: "15px", color: "#475569", fontSize: "14px", lineHeight: "2" }}>
                    <li><span style={{ fontWeight: "600", color: "#071020" }}>Amadeus Global Distribution System (GDS)</span> Training</li>
                    <li>In-flight Cabin Security Regulations & Handling Hazard Kits</li>
                    <li>Live PA Sound Announcements & Public Interaction Rounds</li>
                  </ul>
                </div>
              </div>

              {/* MONTH 3 */}
              <div 
                style={{ position: "relative", paddingLeft: "40px", borderLeft: "3px solid transparent", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = "#3b82f6"}
                onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = "#transparent"}
              >
                {/* Line segment continuation fix for final node */}
                <div style={{ position: "absolute", left: "-1.5px", top: 0, bottom: "20px", width: "3px", background: "#e2e8f0", zIndex: 0 }} />
                
                {/* Floating Node Icon */}
                <div style={{ position: "absolute", left: "-21px", top: "0", background: "#ffffff", width: "38px", height: "38px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", border: "3px solid #e2e8f0", boxShadow: "0 4px 10px rgba(0,0,0,0.03)", zIndex: 1 }}>
                  🎯
                </div>
                <span style={{ fontSize: "11px", color: "#3b82f6", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1.5px", background: "#3b82f610", padding: "4px 10px", borderRadius: "50px", position: "relative", zIndex: 1 }}>
                  WEEKS 9 - 12
                </span>
                <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#071020", margin: "10px 0 12px 0", letterSpacing: "-0.2px", position: "relative", zIndex: 1 }}>
                  Month 3: Placement Runs & Recruitment Drills
                </h3>
                <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: "1.7", marginBottom: "20px", position: "relative", zIndex: 1 }}>
                  Aggressive corporate refinement module to prepare you for actual interview setups through daily panel stress evaluations and assessment sheets.
                </p>
                
                <div style={{ background: "#f8fafc", padding: "20px 25px", borderRadius: "16px", border: "1px solid #f1f5f9", position: "relative", zIndex: 1 }}>
                  <ul style={{ margin: 0, paddingLeft: "15px", color: "#475569", fontSize: "14px", lineHeight: "2" }}>
                    <li>Airline Panel Mock Rounds & Stress Interview Drills</li>
                    <li>Group Discussion Mapping & Extempore Modulations</li>
                    <li>Final Verification, Certification Awards & Deployment</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Fees;