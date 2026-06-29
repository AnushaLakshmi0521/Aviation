
import React, { useState } from "react";

function Admissions() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedCenter: "South Bengaluru (Head Office)",
    careerTrack: "White-Collar (Passenger / Cabin Crew)",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const centers = [
    "South Bengaluru (Head Office)",
    "Rajajinagar Center (North Bengaluru)",
    "Hubballi Center (Karnataka)",
    "Navalgund Center (Karnataka)",
    "Solapur Center (Maharashtra)"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardware submission mechanics simulation
    setIsSubmitted(true);
    setTimeout(() => {
      // Clear values safely after processing feedback
      setFormState({
        fullName: "",
        email: "",
        phone: "",
        selectedCenter: "South Bengaluru (Head Office)",
        careerTrack: "White-Collar (Passenger / Cabin Crew)",
        message: ""
      });
    }, 2000);
  };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", color: "#1e293b", fontFamily: "system-ui, -apple-system, sans-serif", overflowX: "hidden" }}>
      
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade {
            animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .input-focus {
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .input-focus:focus {
            outline: none;
            border-color: #E8A830 !important;
            box-shadow: 0 0 0 4px rgba(232, 168, 48, 0.15) !important;
          }
          .contact-card-lift {
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .contact-card-lift:hover {
            transform: translateY(-4px);
          }
        `}
      </style>

      {/* HEADER HERO SECTION */}
      <section style={{
        background: "linear-gradient(135deg, #071020 0%, #112548 100%)",
        color: "#ffffff",
        padding: "130px 20px 80px",
        textAlign: "center"
      }}>
        <div className="animate-fade" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ 
            color: "#E8A830", 
            fontSize: "13px", 
            fontWeight: "700", 
            letterSpacing: "3px", 
            textTransform: "uppercase",
            background: "rgba(232, 168, 48, 0.12)",
            padding: "6px 16px",
            borderRadius: "50px"
          }}>
            Admissions Open
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: "800", marginTop: "20px", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Connect with Academic Admissions
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: "1.6", maxWdith: "650px", margin: "0 auto" }}>
            Have structural questions about the 90-day training modules, fees structures, or our placement accountability clauses? Initiate contact with our partner registration desk.
          </p>
        </div>
      </section>

      {/* CORE INTERACTIVE COMBINED BLOCK */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "-40px auto 0", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "40px" }}>
          
          {/* LEFT COLUMN: INTERACTIVE FORM CONTAINER */}
          <div className="animate-fade" style={{ background: "#ffffff", borderRadius: "28px", padding: "40px", border: "1px solid #edf2f7", boxShadow: "0 20px 40px rgba(7, 16, 32, 0.04)" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#071020", marginBottom: "8px" }}>Candidate Enrollment Desk</h3>
            <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "28px", lineHeight: "1.5" }}>Complete the mandatory fields below to register your profiling preferences with a student coordinator.</p>
            
            {isSubmitted ? (
              <div style={{ 
                background: "rgba(232, 168, 48, 0.08)", 
                border: "2px dashed #E8A830", 
                borderRadius: "20px", 
                padding: "40px 20px", 
                textAlign: "center",
                animation: "fadeInUp 0.5s ease"
              }}>
                <div style={{ fontSize: "44px", marginBottom: "16px" }}>🚀</div>
                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#071020", marginBottom: "6px" }}>Application Transmitted Successfully</h4>
                <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: "1.4" }}>An allocations coordinator from the selected training point will interface with your provided digits within 24 operational hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Full Legal Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formState.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your matching passport/ID name" 
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com" 
                      className="input-focus"
                      style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Mobile Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="Primary contact digits" 
                      className="input-focus"
                      style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Target Training Center Base</label>
                  <select 
                    name="selectedCenter"
                    value={formState.selectedCenter}
                    onChange={handleInputChange}
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", background: "#ffffff", boxSizing: "border-box", cursor: "pointer" }}
                  >
                    {centers.map((center, index) => (
                      <option key={index} value={center}>{center}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Preferred Career Track Focus</label>
                  <select 
                    name="careerTrack"
                    value={formState.careerTrack}
                    onChange={handleInputChange}
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", background: "#ffffff", boxSizing: "border-box", cursor: "pointer" }}
                  >
                    <option value="White-Collar (Passenger / Cabin Crew)">White-Collar Career Track (Passenger/Corporate Facing)</option>
                    <option value="Blue-Collar (Airside / Ground Logistics)">Blue-Collar Career Track (Airside/Technical Ground Handling)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Additional Notes / Query Summary</label>
                  <textarea 
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Provide any prior education details or placement location preferences..." 
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box", resize: "vertical" }}
                  />
                </div>

                <button 
                  type="submit"
                  style={{
                    background: "#071020",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "14px",
                    padding: "16px",
                    fontSize: "15px",
                    fontWeight: "700",
                    cursor: "pointer",
                    marginTop: "10px",
                    transition: "background 0.2s ease, transform 0.1s ease",
                    boxShadow: "0 10px 20px rgba(7, 16, 32, 0.1)"
                  }}
                  onMouseEnter={(e) => e.target.style.background = "#112548"}
                  onMouseLeave={(e) => e.target.style.background = "#071020"}
                >
                  Submit Registration Request
                </button>
              </form>
            )}
          </div>

          {/* RIGHT COLUMN: INSTITUTIONAL COORDINATES DIRECTORY */}
          <div className="animate-fade" style={{ display: "flex", flexDirection: "column", gap: "24px", animationDelay: "0.2s" }}>
            
            {/* Primary Operations Card */}
            <div className="contact-card-lift" style={{ background: "#ffffff", padding: "35px", borderRadius: "24px", border: "1px solid #edf2f7", boxShadow: "0 10px 30px rgba(0,0,0,0.01)" }}>
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(232, 168, 48, 0.1)", color: "#E8A830", width: "54px", height: "54px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                  🏢
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#071020", marginBottom: "4px" }}>Jyothy ICM Headquarters</h4>
                  <span style={{ fontSize: "11px", color: "#E8A830", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>Academic Command Base</span>
                  <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                    Jyothy Institute of Commerce and Management Campus,<br/>
                    South Bengaluru, Karnataka - 560062
                  </p>
                </div>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="contact-card-lift" style={{ background: "#ffffff", padding: "35px", borderRadius: "24px", border: "1px solid #edf2f7", boxShadow: "0 10px 30px rgba(0,0,0,0.01)" }}>
              <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ background: "rgba(17, 37, 72, 0.06)", color: "#112548", width: "54px", height: "54px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                  ✉️
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#071020", marginBottom: "4px" }}>Verification & Infrastructure Lines</h4>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>Digital Correspondence</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <div style={{ fontSize: "14px", color: "#334155" }}>
                      <strong>Partner Admissions:</strong> <span style={{ color: "#112548" }}>anu26446@gmail.com</span>
                    </div>
                    <div style={{ fontSize: "14px", color: "#334155" }}>
                      <strong>Institutional Platform:</strong> <span style={{ color: "#112548" }}>info@jyothycirrussaviation.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification Guarantee Notice */}
            <div style={{ 
              background: "linear-gradient(135deg, #071020 0%, #112548 100%)", 
              color: "#ffffff", 
              padding: "35px", 
              borderRadius: "24px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "100px", opacity: 0.06, pointerEvents: "none" }}>🛡️</div>
              <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#E8A830", marginBottom: "8px" }}>Unified Strategic Alignment Notice</h4>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", lineHeight: "1.6", margin: 0 }}>
                All processing configurations mapped through this portal map contextually to active academic programs run inside certified spaces within Bengaluru, Hubballi, Navalgund, and Solapur configurations. Your details stay strictly private and directly feed automated career batch assignments.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Admissions;