
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// Import your assets here
const bh5 ="https://res.cloudinary.com/doihibg9v/video/upload/v1782969105/bh5_g0ha8p.mp4";
const wc1="https://res.cloudinary.com/doihibg9v/video/upload/v1782967453/wc1_gsgq9x.mp4";  
const wc2="https://res.cloudinary.com/doihibg9v/video/upload/v1782967477/wc2_vhmsgj.mp4";
const wc3="https://res.cloudinary.com/doihibg9v/video/upload/v1782967456/wc3_tkti2i.mp4";
  

// Scroll wrapper that handles bidirectional reveals (entering from top OR bottom)
function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This continuously updates: true when on screen, false when off screen
        setIsVisible(entry.isIntersecting);
      },
      {         
        // Triggers when at least 10% of the element enters or leaves the window
        threshold: 0.1,
        // Optional: Adds a tiny margin to make the trigger feel perfectly timed
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
    <div 
      ref={elementRef} 
      className={`reveal-element ${isVisible ? "active" : ""}`}
    >
      {children}
    </div>
  );
}

function WhiteCollar() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const jobRoles = [
    { title: "Airport Operations Officer", salary: "$55,000 - $78,000", demand: "High", placement: "International Hubs" },
    { title: "GDS Ticketing Specialist", salary: "$48,000 - $65,000", demand: "Steady", placement: "Airlines & Travel Agencies" },
    { title: "Aviation Station Manager", salary: "$72,000 - $110,000", demand: "Very High", placement: "Global Carrier Operations" },
    { title: "Passenger Service Supervisor", salary: "$50,000 - $70,000", demand: "High", placement: "Airport Terminal Lounges" }
  ];

  const faqs = [
    { q: "What global booking platforms are taught in the GDS module?", a: "We provide comprehensive hands-on training on both Amadeus and Sabre platforms, covering live PNR generation, fare construction, split-billing, and international tax routing configurations." },
    { q: "Is previous airline experience mandatory for this track?", a: "No. This curriculum is engineered from the ground up, moving from foundational aviation law to complex airport resource management, making it perfect for fresh graduates." },
    { q: "What corporate entities recruit from this program?", a: "Our graduates are routinely placed with major international carriers, private jet charter syndicates, elite airport ground hospitality firms, and global logistics networks." }
  ];

  return (
    <div style={{ background: "#071020", color: "#ffffff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" }}>
      
      {/* Bidirectional Scroll Style Configuration */}
      <style>{`
        /* Default hidden state */
        .reveal-element {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: opacity, transform;
        }
        
        /* Active visible state (applies when scrolling up or down into view) */
        .reveal-element.active {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes pulseGold {
          0% { border-left-color: #E8A830; }
          50% { border-left-color: #ffd276; }
          100% { border-left-color: #E8A830; }
        }
        
        /* Premium Interactive Hover States */
        .hover-card { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease !important; }
        .hover-card:hover { transform: translateY(-6px); border-color: rgba(232, 168, 48, 0.3) !important; box-shadow: 0 12px 30px rgba(0,0,0,0.4); }
        
        .hover-metric { transition: all 0.3s ease !important; }
        .hover-metric:hover { background: rgba(255,255,255,0.04) !important; border-color: rgba(255,255,255,0.15) !important; }
        
        .hover-faq { transition: background 0.2s ease !important; }
        .hover-faq:hover { background: rgba(255,255,255,0.02) !important; }
        
        .hover-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease !important; }
        .hover-btn:hover { transform: scale(1.03); background: #f0b84c !important; box-shadow: 0 6px 20px rgba(232, 168, 48, 0.4) !important; }
      `}</style>

      {/* 1. HERO VIDEO SECTION */}
      <div style={{ position: "relative", width: "100%", height: "65vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <video 
          src={bh5} 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "1", top: "0", left: "0" }}
        />
        
        <div style={{ position: "relative", zIndex: "3", textAlign: "center", padding: "0 20px", maxWidth: "900px" }}>
          <span style={{ color: "#E8A830", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2.5px", fontSize: "14px", display: "block", marginBottom: "14px", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
            Aviation Management, Administration & Executive Logistics
          </span>
          <h1 style={{ fontSize: "56px", fontWeight: "900", marginTop: "0", marginBottom: "22px", letterSpacing: "-0.5px", color: "#ffffff", textShadow: "0 4px 16px rgba(0,0,0,0.85)", lineHeight: "1.1" }}>
            White Collar Aviation Careers
          </h1>
          <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "19px", lineHeight: "1.75", margin: "0", textShadow: "0 2px 10px rgba(0,0,0,0.8)", fontWeight: "400" }}>
            Bridge the gap between ground operations and corporate management. Our highly rigorous management curriculum equips ambitious candidates with the administrative prowess, software certifications, and leadership skills required by elite global airlines.
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT WRAPPER */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "70px 20px 80px 20px" }}>
        
        {/* 2. CORE PILLARS GRID */}
        <ScrollReveal>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "35px", borderLeft: "4px solid #E8A830", paddingLeft: "15px", animation: "pulseGold 3s infinite" }}>
            Core Pillars of Study
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px", marginBottom: "70px" }}>
            
            <div className="hover-card" style={{ background: "#0c1524", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "100%", height: "205px", overflow: "hidden", background: "#000" }}>
                <video src={wc1} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginTop: "0", marginBottom: "12px", color: "#E8A830" }}>
                  GDS Reservation & Global Ticketing
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: "1.65", margin: "0" }}>
                  Master foundational and complex booking engines including Amadeus and Sabre. Students learn real-time flight inventory tracking, dynamic fare calculation, interline routing modifications, and global ticketing compliance procedures.
                </p>
              </div>
            </div>

            <div className="hover-card" style={{ background: "#0c1524", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "100%", height: "205px", overflow: "hidden", background: "#000" }}>
                <video src={wc2} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginTop: "0", marginBottom: "12px", color: "#E8A830" }}>
                  Airport Hub Operations & Scheduling
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: "1.65", margin: "0" }}>
                  Dive deep into terminal workflows, flight slot planning, gate allocation analytics, and emergency crisis simulation protocols. Gain insight into international civil aviation guidelines and regulatory frameworks.
                </p>
              </div>
            </div>

            <div className="hover-card" style={{ background: "#0c1524", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ width: "100%", height: "205px", overflow: "hidden", background: "#000" }}>
                <video src={wc3} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "700", marginTop: "0", marginBottom: "12px", color: "#E8A830" }}>
                  Elite Passenger Care & VIP Lounges
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: "1.65", margin: "0" }}>
                  Develop high-profile conflict resolution strategies, customer experience models, and corporate presentation habits. Train for luxury concierge management and first-class passenger relations.
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* 3. SYLLABUS TABLE */}
        <ScrollReveal>
          <div style={{ background: "#0c1524", padding: "40px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", marginBottom: "70px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: "800", marginBottom: "10px" }}>Academic Training Blueprints</h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "30px" }}>A breakdown of the instructional phases, lab requirements, and structural testing.</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.1)" }}>
                    <th style={{ padding: "15px 12px", color: "#E8A830", fontWeight: "700", fontSize: "15px" }}>Syllabus Focus Block</th>
                    <th style={{ padding: "15px 12px", color: "#E8A830", fontWeight: "700", fontSize: "15px" }}>Core Competency Matrix</th>
                    <th style={{ padding: "15px 12px", color: "#E8A830", fontWeight: "700", fontSize: "15px" }}>Lab Simulation Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "20px 12px", fontWeight: "600", fontSize: "15px" }}>Phase 1: Civil Aviation Foundations</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>IATA codes, aviation geography, international flight freedoms, and customs compliance protocols.</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>30 Lecture Hours</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "20px 12px", fontWeight: "600", fontSize: "15px" }}>Phase 2: Live GDS Operational Mastery</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>Live command-line console practice, building active PNR files, ticketing loops, and processing schedule changes.</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>65 Hands-on Lab Hours</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <td style={{ padding: "20px 12px", fontWeight: "600", fontSize: "15px" }}>Phase 3: Terminal Resource Optimization</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.5" }}>Gate distribution metrics, check-in queue management, luggage sorting administration, and peak hour traffic troubleshooting.</td>
                    <td style={{ padding: "20px 12px", color: "rgba(255,255,255,0.7)", fontSize: "15px" }}>45 Lab Simulation Hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* 4. METRICS / DEMAND CARDS */}
        <ScrollReveal>
          <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "30px", borderLeft: "4px solid #E8A830", paddingLeft: "15px" }}>Career Metrics & Opportunities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px", marginBottom: "70px" }}>
            {jobRoles.map((role, idx) => (
              <div key={idx} className="hover-metric" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.06)", padding: "25px", borderRadius: "12px" }}>
                <div style={{ textTransform: "uppercase", fontSize: "11px", color: "#E8A830", fontWeight: "700", letterSpacing: "1px", marginBottom: "6px" }}>Demand: {role.demand}</div>
                <h4 style={{ fontSize: "18px", margin: "0 0 10px 0", fontWeight: "700" }}>{role.title}</h4>
                <div style={{ fontSize: "22px", color: "#ffffff", fontWeight: "800", marginBottom: "6px" }}>{role.salary}</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Placement Scope: {role.placement}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 5. FAQ ACCORDION */}
        <ScrollReveal>
          <div style={{ maxWidth: "800px", margin: "0 auto 70px auto" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "30px", textAlign: "center" }}>Frequently Asked Questions</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ background: "#0c1524", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="hover-faq"
                    style={{ width: "100%", background: "none", border: "none", color: "#ffffff", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontWeight: "700", fontSize: "16px", textAlign: "left" }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: "#E8A830", transition: "transform 0.3s ease", transform: activeFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }}>
                      ▼
                    </span>
                  </button>
                  <div style={{ 
                    maxHeight: activeFaq === idx ? "200px" : "0px", 
                    opacity: activeFaq === idx ? "1" : "0", 
                    overflow: "hidden", 
                    transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease",
                    background: "rgba(0,0,0,0.1)"
                  }}>
                    <div style={{ padding: "0 20px 20px 20px", color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: "1.65", borderTop: "1px solid rgba(255,255,255,0.02)", paddingTop: "15px" }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 6. ENROLLMENT CTA BANNER */}
        <ScrollReveal>
          <div style={{ background: "linear-gradient(135deg, #0c1524 0%, #111e36 100%)", padding: "50px", borderRadius: "20px", textAlign: "center", border: "1px solid rgba(232, 168, 48, 0.2)", boxShadow: "0 15px 40px rgba(0,0,0,0.4)" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "15px" }}>Ready to Take Command of Your Future?</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 30px auto", fontSize: "15px", lineHeight: "1.6" }}>
              Admissions for the upcoming executive aviation batch are closing soon. Connect with an admissions counselor to map out your transfer options, interview prep steps, and secure financial support.
            </p>
            <button 
              onClick={() => { navigate("/apply"); window.scrollTo(0,0); }}
              className="hover-btn"
              style={{ background: "#E8A830", color: "#071020", border: "none", padding: "18px 45px", borderRadius: "8px", fontWeight: "700", fontSize: "16px", cursor: "pointer", boxShadow: "0 4px 15px rgba(232, 168, 48, 0.3)" }}
            >
              Apply for White Collar Tracks Now
            </button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}

export default WhiteCollar;