
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import landing layout background images
import w4 from "../assets/w4.jpg";
import c1 from "../assets/c1.jpg";
import w3 from  "../assets/w3.jpg";
import c2 from "../assets/c2.jpg";

import w1 from  "../assets/w1.jpg";
import c3 from "../assets/c3.jpg";
import w2 from  "../assets/w2.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";

// YOUR VIDEO ASSETS (Mapped to your exact filenames)
import c11 from "../assets/c11.mp4";
import c22 from "../assets/c22.mp4";
import c33 from "../assets/c33.mp4";
import c44 from "../assets/c44.mp4";
import c55 from "../assets/c55.mp4";

function CurriculumView() {
  const heroBackgrounds = [w4, c1, w3, c2, w1, c3,w2, c4, c5];

  const trainingPhases = [
    {
      duration: "Phase 1: Duration: Foundation Training ⭐",
      title: "✈️ Airport Operations & Codes",
      location: "In-Class Core Lectures",
      desc: "Delivered by industry professionals from Jyothi Cirrus. Covers international regulatory standards, terminal structures, booking engine basics, and airport configurations.",
      videoAsset: c11,
      highlights: [
        "IATA, ICAO Codes & Global Airport Standard Operations",
        "Introduction to GDS Systems, Check-in Software & Amadeus",
        "Aviation Geography, Time Zones & Flight Path Routings",
        "Terminal Layout Management, Check-in Counters & Gate Ops"
      ]
    },
    {
      duration: "Phase 2: Communication Mastery",
      title: "Advanced Aviation English & Public Address",
      location: "Language & Audio Labs",
      desc: "Comprehensive training to master professional terminology, voice modulation, conflict management, and clear terminal announcements under operational stress.",
      videoAsset: c22,
      highlights: [
        "Aviation Vocabulary, Phonetic Alphabet & Clear Phrasing",
        "Terminal Announcement Techniques & PA System Handling",
        "Customer Service Excellence & Premium Passenger Care",
        "De-escalation Strategies, Dispute Control & Diplomacy"
      ]
    },
    {
      duration: "Phase 3: Cabin Safety & Ground Operations",
      title: "In-Flight Management & Ramp Coordination",
      location: "Technical Ground Labs",
      desc: "A hands-on approach splitting terminal service workflows from technical airside ramp tracking and luggage management systems.",
      videoAsset: c33,
      highlights: [
        "In-flight Safety Systems, Emergency Kits & Equipment",
        "Dangerous Goods Regulations (DGR) & Safety Audits",
        "Ramp Operations, Marshalling & Aircraft Turnaround Planning",
        "Baggage Handling Systems, Tagging & Cargo Operations"
      ]
    },
    {
      duration: "Phase 4: Hospitality & On-Site Practice",
      title: "Corporate Grooming & Live Airport Visits",
      location: "Live Airport Runway Exposure",
      desc: "Transform your presentation to meet elite airline standards, paired with structured observational site runs on active airside ramps.",
      videoAsset: c44,
      highlights: [
        "Elite Hair, Makeup, Uniform & Presentation Protocols",
        "Corporate Posture, Body Language & Social Etiquette",
        "Live Airside Tarmac Operational Audits & Site Visits",
        "Coordination Practices with Flight Crew & Station Managers"
      ]
    },
    {
      duration: "Phase 5: Career Preparation",
      title: "Resume Engineering, Mock Interviews & Placement",
      location: "Placement Hub / Corporate Boardroom",
      desc: "Focused finishing sessions targeted directly at converting interviews during our partner airline recruitment drives.",
      videoAsset: c55,
      highlights: [
        "Aviation-Specific Resume Engineering & Profile Building",
        "Technical Evaluation Panels & Airline Mock HR Drills",
        "Group Discussion (GD) Formats & Extempore Bootcamps",
        "Direct Placement Support for Domestic & Global Airlines"
      ]
    }
  ];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      {/* BACKGROUND SVG ANIMATION LAYOUT */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" style={{ opacity: 0.45 }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8A830" stopOpacity="0" />
              <stop offset="50%" stopColor="#E8A830" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#112548" stopOpacity="0" />
            </linearGradient>
            <style>
              {`
                @keyframes flightPath {
                  0% { stroke-dashoffset: 1200; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes pulseNode {
                  0%, 100% { transform: scale(1); opacity: 0.3; }
                  50% { transform: scale(1.4); opacity: 0.8; }
                }
                .dash-line {
                  stroke: url(#lineGrad);
                  stroke-dasharray: 8, 8;
                  animation: flightPath 45s linear infinite;
                }
                .pulse-circle {
                  transform-origin: center;
                  animation: pulseNode 4s ease-in-out infinite;
                }
              `}
            </style>
          </defs>
          
          <path d="M-100,200 C300,50 600,600 1200,300 C1500,150 1700,700 2100,400" fill="none" strokeWidth="2" className="dash-line" />
          <path d="M-50,700 C400,900 800,200 1400,650 C1800,800 1900,100 2150,300" fill="none" strokeWidth="1.5" className="dash-line" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
          
          <circle cx="300" cy="115" r="5" fill="#E8A830" className="pulse-circle" />
          <circle cx="1200" cy="300" r="6" fill="#E8A830" className="pulse-circle" style={{ animationDelay: '1.5s' }} />
          <circle cx="800" cy="470" r="4" fill="#112548" className="pulse-circle" style={{ animationDelay: '0.8s' }} />
          <circle cx="1400" cy="650" r="5" fill="#E8A830" className="pulse-circle" style={{ animationDelay: '2.2s' }} />
        </svg>
      </div>

      {/* CROSS-FADING HERO HEADER SECTION */}
      <section style={{ position: "relative", overflow: "hidden", height: "650px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
        >
          {heroBackgrounds.map((bgImg, index) => (
            <SwiperSlide key={index}>
              <img 
                src={bgImg} 
                alt="Aviation environment background" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
         /* background: "linear-gradient(to bottom, rgba(7, 16, 32, 0.8), rgba(7, 16, 32, 0.85))",*/
          zIndex: 2
        }}></div>
        
        <div style={{ zIndex: 3, position: "relative", textAlign: "center", padding: "0 20px", maxWidth: "950px", marginTop: "80px" }}>
          <span className="sectionTag" style={{ marginBottom: "20px", color: "#E8A830", letterSpacing: "2px", display: "inline-block", fontWeight: "700" }}>
            5-PHASE COMPREHENSIVE PATHWAY
          </span>
          <h2 style={{ fontSize: "48px", fontWeight: "800", color: "#ffffff", marginBottom: "20px", lineHeight: "1.2" }}>
           From the Classroom to the Runway
          </h2>
          <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.85)", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
           A proven, step-by-step training program that combines classroom learning, professional communication skills, and real-world, hands-on experience at the airport.
          </p>

          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            padding: "12px 28px",
            borderRadius: "50px",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            marginTop: "32px"
          }}>
            <span style={{ fontSize: "20px" }}>🤝</span>
            <span style={{ fontSize: "15px", color: "#ffffff", fontWeight: "500" }}>
              Official Academic Collaboration: <strong style={{ color: "#E8A830" }}>Jyothi Cirrus School of Aviation</strong>
            </span>
          </div>
        </div>
      </section>

      {/* SWIPER TIMELINE MODULES */}
      <section style={{ padding: "80px 20px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            style={{ paddingBottom: "60px" }}
          >
            {trainingPhases.map((phase, index) => (
              <SwiperSlide key={index} style={{ opacity: 1 }}>
                <div style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  border: "1px solid #edf2f7",
                  boxShadow: "0 15px 40px rgba(7, 16, 32, 0.05)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                  overflow: "hidden",
                  minHeight: "520px"
                }}>
                  
                  <div style={{
                    background: "linear-gradient(135deg, #071020 0%, #112548 100%)",
                    padding: "45px 40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "#ffffff"
                  }}>
                    <div>
                      <div style={{
                        background: "#E8A830",
                        color: "#071020",
                        display: "inline-block",
                        padding: "6px 16px",
                        borderRadius: "50px",
                        fontWeight: "700",
                        fontSize: "13px",
                        textTransform: "uppercase",
                        marginBottom: "16px"
                      }}>{phase.duration}</div>
                      
                      <h3 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "12px" }}>{phase.title}</h3>
                      <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: "1.5", marginBottom: "28px" }}>{phase.desc}</p>
                      
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "24px" }}>
                        <h4 style={{ color: "#E8A830", fontSize: "15px", fontWeight: "700", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Strategic Focus Areas:
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          {phase.highlights.map((item, idx) => (
                            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                              <span style={{ background: "rgba(232, 168, 48, 0.2)", color: "#E8A830", width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", flexShrink: 0, marginTop: "2px" }}>✓</span>
                              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", lineHeight: "1.4" }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#E8A830", fontWeight: "600", marginTop: "28px" }}>
                      <span>📍</span> {phase.location}
                    </div>
                  </div>

                  <div style={{ 
                    background: "#0c1524", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    padding: "30px 20px"
                  }}>
                    <div style={{ 
                      width: "100%", 
                      borderRadius: "16px", 
                      overflow: "hidden",
                      boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
                      position: "relative",
                      aspectRatio: "16/9",
                      background: "#000000"
                    }}>
                      <video
                        key={phase.videoAsset}
                        src={phase.videoAsset}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* NEW SECTION: 3-MONTH INTENSIVE CLASSROOM TRAINING BREAKDOWN */}
      <section style={{ padding: "60px 20px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span style={{ color: "#E8A830", fontSize: "14px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
              Deep Academic Structure
            </span>
            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#071020", marginTop: "10px" }}>
              The 3-Month Institutional Curriculum Breakdown
            </h2>
            <p style={{ color: "#64748b", fontSize: "16px", marginTop: "12px", maxWidth: "700px", margin: "12px auto 0" }}>
              Every candidate undergoes 90 days of high-intensity operational and psychological grooming before moving onto real tarmac environments.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
            marginTop: "20px"
          }}>
            
            {/* Month 1 Card */}
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "35px", border: "1px solid #edf2f7", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#E8A830", background: "rgba(232, 168, 48, 0.1)", padding: "4px 12px", borderRadius: "50px" }}>WEEKS 1 - 4</span>
                <span style={{ fontSize: "24px" }}>📚</span>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#071020", marginBottom: "12px" }}>Month 1: Foundation & Corporate Persona</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Focuses primarily on rebuilding corporate posture, understanding uniform standards, learning global geography matrix codes, and shedding stage fear.
              </p>
              <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Skin Care, Grooming, Hair Design & Wardrobe Planning</li>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Introduction to Civil Aviation Authorities (DGCA, ICAO, FAA)</li>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Phonetic Decodes, Call Signs & Functional Terminal Layouts</li>
              </ul>
            </div>

            {/* Month 2 Card */}
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "35px", border: "1px solid #edf2f7", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#E8A830", background: "rgba(232, 168, 48, 0.1)", padding: "4px 12px", borderRadius: "50px" }}>WEEKS 5 - 8</span>
                <span style={{ fontSize: "24px" }}>💻</span>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#071020", marginBottom: "12px" }}>Month 2: Core Engineering Systems & Logic</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Transition into complex ticketing architecture platforms, managing dynamic reservation logic databases, handling VIP profiles, and managing emergency protocols.
              </p>
              <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Amadeus Global Distribution System (GDS) Training</li>
                <li style={{ fontSize: "14px", color: "#334155" }}>• In-flight Cabin Security Regulations & Handling Hazard Kits</li>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Live PA Sound Announcements & Public Interaction Rounds</li>
              </ul>
            </div>

            {/* Month 3 Card */}
            <div style={{ background: "#ffffff", borderRadius: "20px", padding: "35px", border: "1px solid #edf2f7", boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
              <div style={{ display: "flex", justifyContent: "between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "14px", fontWeight: "800", color: "#E8A830", background: "rgba(232, 168, 48, 0.1)", padding: "4px 12px", borderRadius: "50px" }}>WEEKS 9 - 12</span>
                <span style={{ fontSize: "24px" }}>🎯</span>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#071020", marginBottom: "12px" }}>Month 3: Placement Runs & Recruitment Drills</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Aggressive corporate refinement module to prepare you for actual interview setups through daily panel stress evaluations and assessment sheets.
              </p>
              <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Airline Panel Mock Rounds & Stress Interview Drills</li>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Group Discussion Mapping & Extempore Modulations</li>
                <li style={{ fontSize: "14px", color: "#334155" }}>• Final Verification, Certification Awards & Deployment</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* GUARANTEE BOX */}
      <section style={{ padding: "20px 20px 100px", position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "linear-gradient(135deg, rgba(232, 168, 48, 0.1) 0%, rgba(232, 168, 48, 0.02) 100%)",
          border: "2px dashed #E8A830",
          borderRadius: "24px",
          padding: "40px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "40px", marginBottom: "16px" }}>🛡️</div>
          <h3 style={{ color: "#071020", fontSize: "24px", fontWeight: "800", marginBottom: "12px" }}>
            100% Job Placement Guarantee or Full Fee Refund*
          </h3>
          <p style={{ color: "#64748b", fontSize: "16px", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            Our structural pipeline ensures all qualified graduates are ready for employment. If you successfully complete the course with <strong>Jyothi Cirrus School of Aviation</strong> but fail to secure a relevant airport white-collar or blue-collar operational job offer, your entire tuition fee will be returned seamlessly. No conditions hidden.
          </p>
        </div>
      </section>

    </div>
  );
}

export default CurriculumView;