
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const bh5 ="https://res.cloudinary.com/doihibg9v/video/upload/v1782969105/bh5_g0ha8p.mp4";
const b1="https://res.cloudinary.com/doihibg9v/video/upload/v1782967467/b1_yb2tcf.mp4";
const b2="https://res.cloudinary.com/doihibg9v/video/upload/v1782967457/b2_ebnfzv.mp4";
const b3="https://res.cloudinary.com/doihibg9v/video/upload/v1782967440/b3_kqhoto.mp4";

// Reusable scroll reveal wrapper that handles both downward and upward transitions
function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggles active state dynamically as elements enter or exit from top or bottom
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: "-20px 0px -20px 0px"
      } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div className={`reveal-element ${isVisible ? "active" : ""}`} ref={elementRef}>
      {children}
    </div>
  );
}

function BlueCollar() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  
  // Custom Hover States
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const jobRoles = [
    { title: "Lead Airside Ramp Marshal", salary: "$52,000 - $70,000", demand: "Extremely Critical", placement: "Tarmac Control Zones" },
    { title: "Air Cargo Logistics Controller", salary: "$58,000 - $82,000", demand: "High Demand", placement: "Freight Hub Warehouses" },
    { title: "Turnaround Coordinator (TRC)", salary: "$65,000 - $90,000", demand: "Very High", placement: "Live Dispatch Terminals" },
    { title: "Dangerous Goods Inspector", salary: "$60,000 - $85,000", demand: "Specialized", placement: "Global Freight Networks" }
  ];

  const faqs = [
    { q: "What physical and safety credentials are built into the curriculum?", a: "Students undergo exhaustive training on IATA Airport Handling Manuals (AHM) standards, active safety vest protocols, line-of-sight marshalling commands, and industrial Ground Support Equipment operation frameworks." },
    { q: "Does this course involve physical on-site simulation labs?", a: "Yes. In addition to core interactive system logic modeling, this course contains real-world ramp turnaround labs mimicking pushback, fueling layouts, chocking, and cargo load tracking." },
    { q: "What certifications are granted upon conclusion?", a: "Graduates exit fully prepared to sit for certified regulatory examinations in Airfield Safety compliance, Dangerous Goods Regulations (DGR Course Core), and ULD Manifest Operations." }
  ];

  return (
    <div style={{ background: "#071020", color: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" }}>
      
      {/* Bidirectional Inline Styling */}
      <style>{`
        .reveal-element {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: opacity, transform;
        }
        
        .reveal-element.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* 1. HERO VIDEO SECTION (Raw and Unlayered) */}
      <div style={{ position: "relative", width: "100%", height: "65vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <video 
          src={bh5} 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "1", top: "0", left: "0" }}
        />
        
        {/* Hero Content Layer */}
        <div style={{ position: "relative", zIndex: "3", textAlign: "center", padding: "0 20px", maxWidth: "900px" }}>
          <span style={{ color: "#E8A830", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2.5px", fontSize: "14px", display: "block", marginBottom: "12px" }}>
            Airside Operations, Tarmac Control & Heavy Cargo Engineering
          </span>
          <h1 style={{ fontSize: "52px", fontWeight: "900", marginTop: "0", marginBottom: "20px", letterSpacing: "-0.5px", color: "#ffffff" }}>
            Blue Collar Aviation Careers
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "18px", lineHeight: "1.7", margin: "0" }}>
            The physical backbone of flight execution. Become an expert engineer of the tarmac. Our deep technical track prepares professionals to command precision turnaround processes, manage heavy air cargo loads, and protect line-of-sight aircraft movements under rigorous timetables.
          </p>
        </div>
      </div>

      {/* WRAPPER FOR MAIN PAGE CONTENT */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "70px 20px 80px 20px" }}>
        
        {/* 2. THE THREE VIDEO CORE SPECIALIZATIONS GRID */}
        <ScrollReveal>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "35px", borderLeft: "4px solid #E8A830", paddingLeft: "15px" }}>Technical Fields of Mastery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px", marginBottom: "70px" }}>
            
            {/* Track Card 1 */}
            <div 
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                background: "#0c1524", 
                borderRadius: "16px", 
                overflow: "hidden", 
                border: "1px solid rgba(255,255,255,0.05)",
                transform: hoveredCard === 1 ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredCard === 1 ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden", background: "#000" }}>
                <video src={b1} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginTop: "0", marginBottom: "12px", color: "#E8A830" }}>
                  Technical Aircraft Marshalling & GSE
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: "1.6", margin: "0" }}>
                  Master precision handheld wand signaling configurations used internationally. Students gain full operational knowledge regarding Ground Support Equipment (GSE) configurations, towing physics, and plane docking chock constraints.
                </p>
              </div>
            </div>

            {/* Track Card 2 */}
            <div 
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                background: "#0c1524", 
                borderRadius: "16px", 
                overflow: "hidden", 
                border: "1px solid rgba(255,255,255,0.05)",
                transform: hoveredCard === 2 ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredCard === 2 ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden", background: "#000" }}>
                <video src={b2} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginTop: "0", marginBottom: "12px", color: "#E8A830" }}>
                  Air Freight Logistical Engineering
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: "1.6", margin: "0" }}>
                  Deconstruct dynamic weight-and-balance metrics. Learn the structural math behind locking Unit Load Devices (ULD), calculating localized cargo centers of gravity, and handling highly hazardous or volatile inventory shipments safely.
                </p>
              </div>
            </div>

            {/* Track Card 3 */}
            <div 
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                background: "#0c1524", 
                borderRadius: "16px", 
                overflow: "hidden", 
                border: "1px solid rgba(255,255,255,0.05)",
                transform: hoveredCard === 3 ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hoveredCard === 3 ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease"
              }}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden", background: "#000" }}>
                <video src={b3} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginTop: "0", marginBottom: "12px", color: "#E8A830" }}>
                  Airside Safety & Hazard Suppression
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: "1.6", margin: "0" }}>
                  Enforce extreme airfield compliance structures. Learn to identify micro-threats across the tarmac, manage foreign object debris (FOD) sweeps, handle emergency jet fueling lockdowns, and coordinate with airport fire services.
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* DETAILED CURRICULUM SYLLABUS TABLE */}
        <ScrollReveal>
          <div style={{ background: "#0c1524", padding: "40px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "70px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "10px" }}>Practical Field Blueprints</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "30px" }}>A breakdown of on-site technical tracks, compliance auditing, and hardware tests.</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                    <th style={{ padding: "15px 12px", color: "#E8A830", fontWeight: "700", fontSize: "15px" }}>Technical Lab Module</th>
                    <th style={{ padding: "15px 12px", color: "#E8A830", fontWeight: "700", fontSize: "15px" }}>Field Competency Target Metrics</th>
                    <th style={{ padding: "15px 12px", color: "#E8A830", fontWeight: "700", fontSize: "15px" }}>On-Site Practical Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "20px 12px", fontWeight: "600", fontSize: "15px" }}>Module 1: Ground Fleet Integration</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>Operating belt loaders, secondary power supply couplers, pneumatic engine start links, and aircraft steps alignment.</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>50 Practical Field Hours</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "20px 12px", fontWeight: "600", fontSize: "15px" }}>Module 2: ULD Build-up & Balancing</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>Structuring aircraft hold weight sheets, tiedown stress configurations, bulk packing calculations, and dynamic crane tracking.</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>45 Cargo Bay Simulation Hours</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "20px 12px", fontWeight: "600", fontSize: "15px" }}>Module 3: Precision Turnaround (TRC)</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>Time-critical asset tracking, coordination of concurrent boarding and catering connections, and tarmac speed auditing.</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>40 Fast-Loop Sim Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* TRACK STATISTICS & SALARY ANALYSIS */}
        <ScrollReveal>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "30px", borderLeft: "4px solid #E8A830", paddingLeft: "15px" }}>Field Industrial Opportunities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px", marginBottom: "70px" }}>
            {jobRoles.map((role, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: "25px", borderRadius: "12px" }}>
                <div style={{ textTransform: "uppercase", fontSize: "11px", color: "#E8A830", fontWeight: "700", letterSpacing: "1px", marginBottom: "5px" }}>Priority: {role.demand}</div>
                <h4 style={{ fontSize: "18px", margin: "0 0 10px 0", fontWeight: "700" }}>{role.title}</h4>
                <div style={{ fontSize: "20px", color: "#ffffff", fontWeight: "800", marginBottom: "5px" }}>{role.salary}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Location Profile: {role.placement}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ACCORDION FAQ SECTION */}
        <ScrollReveal>
          <div style={{ maxWidth: "800px", margin: "0 auto 70px auto" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "30px", textAlign: "center" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ background: "#0c1524", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    style={{ width: "100%", background: "none", border: "none", color: "#ffffff", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: "700", fontSize: "16px", textAlign: "left" }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: "#E8A830" }}>{activeFaq === idx ? "▲" : "▼"}</span>
                  </button>
                  {activeFaq === idx && (
                    <div style={{ padding: "0 20px 20px 20px", color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: "1.6", borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: "15px" }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ADMISSIONS CTA BANNER */}
        <ScrollReveal>
          <div style={{ background: "linear-gradient(135deg, #0c1524 0%, #111e36 100%)", padding: "50px", borderRadius: "20px", textAlign: "center", border: "1px solid rgba(232, 168, 48, 0.2)", boxShadow: "0 15px 40px rgba(0,0,0,0.4)" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "15px" }}>Take Command of Airside Operations</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 30px auto", fontSize: "15px", lineHeight: "1.6" }}>
              Airports worldwide operate non-stop and need certified logistics teams to handle the demand. Apply now to step directly into our high-intensity, career-ready operations lab environments.
            </p>
            <button 
              onClick={() => { navigate("/apply"); window.scrollTo(0,0); }}
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              style={{ 
                background: "#E8A830", 
                color: "#071020", 
                border: "none", 
                padding: "18px 45px", 
                borderRadius: "8px", 
                fontWeight: "700", 
                fontSize: "16px", 
                cursor: "pointer", 
                boxShadow: isBtnHovered ? "0 6px 20px rgba(232, 168, 48, 0.45)" : "0 4px 15px rgba(232, 168, 48, 0.3)", 
                transform: isBtnHovered ? "scale(1.02)" : "scale(1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease" 
              }}
            >
              Apply for Blue Collar Tracks Now
            </button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

export default BlueCollar;