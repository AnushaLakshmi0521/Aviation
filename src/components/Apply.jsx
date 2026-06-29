
import React, { useState } from "react";

function Apply() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "Female",
    age: "",
    qualification: "12th Pass",
    height: "",
    weight: "",
    selectedCenter: "South Bengaluru (Head Office)",
    careerTrack: "White-Collar (Passenger / Cabin Crew)",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const centers = [
    "South Bengaluru (Head Office)",
    "Rajajinagar Center (North Bengaluru)",
    "Hubballi Center (Karnataka)",
    "Navalgund Center (Karnataka)",
    "Solapur Center (Maharashtra)"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValidationError(""); // Reset error message on edit
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const parsedAge = parseInt(formState.age, 10);

    // 1. Minimum Qualification Validation
    if (formState.qualification === "Under 12th") {
      setValidationError("Minimum qualification rule violation: Candidates must have completed at least 12th standard to apply.");
      return;
    }

    // 2. Career Track Specific Age Limits Rules
    if (formState.careerTrack.includes("White-Collar")) {
      if (formState.gender === "Female" && parsedAge > 26) {
        setValidationError("Age profile mismatch: Maximum limit for White-Collar Female applicants is 26 years.");
        return;
      }
      if (formState.gender === "Male" && parsedAge > 28) {
        setValidationError("Age profile mismatch: Maximum limit for White-Collar Male applicants is 28 years.");
        return;
      }
    } else if (formState.careerTrack.includes("Blue-Collar")) {
      if (parsedAge < 26) {
        setValidationError("Age profile mismatch: Minimum operational age threshold for Blue-Collar tracks is 26 years.");
        return;
      }
    }

    // Processing hardware submission simulation
    setIsSubmitted(true);
    setTimeout(() => {
      setFormState({
        fullName: "",
        email: "",
        phone: "",
        gender: "Female",
        age: "",
        qualification: "12th Pass",
        height: "",
        weight: "",
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
        `}
      </style>

      {/* CLEAN HERO BANNER BLOCK */}
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
            Aviation Screening Portal
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginTop: "20px", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Student Profile Registry Form
          </h1>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.6", maxWidth: "650px", margin: "0 auto" }}>
            Submit your physiological metrics and career milestones to calibrate alignment metrics with CollabForce & Jyothy Cirruss placement regulations.
          </p>
        </div>
      </section>

      {/* FORM OVERVIEW STAGE WITH STATIC BACKGROUND DESIGN ELEMENTS */}
      <section style={{ 
        padding: "60px 20px 100px", 
        maxWidth: "1050px", 
        margin: "-40px auto 0", 
        position: "relative",
        zIndex: 10
      }}>
        
        {/* ========================================================= */}
        {/* STATIC BACKGROUND ARTWORK LAYERED DIRECTLY BEHIND THE FORM */}
        {/* ========================================================= */}
        
        {/* Top-Left Flight Path Behind Card */}
        <div style={{
          position: "absolute",
          top: "100px",
          left: "0px",
          pointerEvents: "none",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <span style={{ fontSize: "24px", opacity: 0.15, transform: "rotate(40deg)" }}>✈️</span>
          <svg width="200" height="80" viewBox="0 0 200 80" style={{ opacity: 0.12 }}>
            <path d="M0,0 Q60,60 200,80" fill="none" stroke="#071020" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        {/* Top-Right Decorative Background Cloud */}
        <div style={{
          position: "absolute",
          top: "40px",
          right: "20px",
          opacity: 0.05,
          fontSize: "75px",
          pointerEvents: "none",
          zIndex: 1
        }}>☁️</div>

        {/* Center-Right Flight Path Behind Card */}
        <div style={{
          position: "absolute",
          top: "45%",
          right: "-10px",
          pointerEvents: "none",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexDirection: "row-reverse"
        }}>
          <span style={{ fontSize: "20px", opacity: 0.12, transform: "rotate(-135deg) scaleX(-1)" }}>✈️</span>
          <svg width="180" height="50" viewBox="0 0 180 50" style={{ opacity: 0.1 }}>
            <path d="M180,10 Q90,40 0,0" fill="none" stroke="#071020" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        {/* Bottom-Left Decorative Background Cloud */}
        <div style={{
          position: "absolute",
          bottom: "120px",
          left: "10px",
          opacity: 0.04,
          fontSize: "85px",
          pointerEvents: "none",
          zIndex: 1
        }}>☁️</div>

        {/* Bottom-Right Flight Path Behind Card */}
        <div style={{
          position: "absolute",
          bottom: "60px",
          right: "40px",
          pointerEvents: "none",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <svg width="160" height="40" viewBox="0 0 160 40" style={{ opacity: 0.12 }}>
            <path d="M0,40 Q80,20 160,0" fill="none" stroke="#071020" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          <span style={{ fontSize: "18px", opacity: 0.15, transform: "rotate(25deg)" }}>✈️</span>
        </div>

        {/* ========================================================= */}
        {/* THE MAIN FORM CARD INTERFACE (Elevated over the graphics) */}
        {/* ========================================================= */}
        <div className="animate-fade" style={{ 
          background: "#ffffff", 
          borderRadius: "28px", 
          padding: "40px", 
          border: "1px solid #edf2f7", 
          boxShadow: "0 20px 40px rgba(7, 16, 32, 0.04)",
          position: "relative",
          zIndex: 5, // Sits safely above graphics
          maxWidth: "850px",
          margin: "0 auto"
        }}>
          
          <h3 style={{ fontSize: "24px", fontWeight: "800", color: "#071020", marginBottom: "6px" }}>Candidate Enrollment Desk</h3>
          <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "28px", lineHeight: "1.5" }}>Provide complete measurements. Fields running metrics mismatch automatically trigger criteria blocks.</p>

          {/* CRITERIA NOTICE BAR */}
          <div style={{ background: "#f8fafc", borderLeft: "4px solid #E8A830", padding: "14px 18px", borderRadius: "0 12px 12px 0", marginBottom: "24px", fontSize: "13px", color: "#475569" }}>
            <strong>Mandatory Guidelines:</strong> Minimum 12th standard clear logic required. 
            <br />• <strong>White-Collar:</strong> Females max 26, Males max 28. 
            <br />• <strong>Blue-Collar:</strong> Minimum entry boundary is 26 years old for both genders.
          </div>

          {/* DYNAMIC SUBMISSION RESPONSE LAYERS */}
          {validationError && (
            <div style={{ background: "#fef2f2", border: "1px solid #fee2e2", color: "#b91c1c", padding: "14px 18px", borderRadius: "12px", fontSize: "14px", fontWeight: "600", marginBottom: "20px" }}>
              ⚠️ {validationError}
            </div>
          )}

          {isSubmitted ? (
            <div style={{ 
              background: "rgba(232, 168, 48, 0.08)", 
              border: "2px dashed #E8A830", 
              borderRadius: "20px", 
              padding: "50px 20px", 
              textAlign: "center"
            }}>
              <div style={{ fontSize: "50px", marginBottom: "16px" }}>🛫</div>
              <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#071020", marginBottom: "6px" }}>Application Received & Verified</h4>
              <p style={{ color: "#64748b", fontSize: "14px", margin: 0, lineHeight: "1.5" }}>
                Profile specifications fit our current target batch allocation rules. An eligibility representative will call your primary contact digits shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              
              {/* ROW 1: FULL NAME */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Full Legal Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formState.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your passport or matching 12th certificate name" 
                  className="input-focus"
                  style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                />
              </div>

              {/* ROW 2: EMAIL & PHONE */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
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

              {/* ROW 3: GENDER, AGE, QUALIFICATION */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Gender Identity</label>
                  <select 
                    name="gender"
                    value={formState.gender}
                    onChange={handleInputChange}
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", background: "#ffffff", boxSizing: "border-box", cursor: "pointer" }}
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Current Age (Years)</label>
                  <input 
                    type="number" 
                    name="age"
                    required
                    min="16"
                    max="60"
                    value={formState.age}
                    onChange={handleInputChange}
                    placeholder="Age metrics numerical value" 
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Highest Qualification</label>
                  <select 
                    name="qualification"
                    value={formState.qualification}
                    onChange={handleInputChange}
                    className="input-focus"
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", background: "#ffffff", boxSizing: "border-box", cursor: "pointer" }}
                  >
                    <option value="Under 12th">Below 12th standard</option>
                    <option value="12th Pass">12th Pass / HSC</option>
                    <option value="Undergraduate">Undergraduate Degree Pursuing</option>
                    <option value="Postgraduate">Graduate / Professional Holder</option>
                  </select>
                </div>
              </div>

              {/* ROW 4: AVIATION METRICS (HEIGHT & WEIGHT) */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Height (in cm)</label>
                  <input 
                    type="number" 
                    name="height"
                    required
                    placeholder="e.g. 165" 
                    className="input-focus"
                    value={formState.height}
                    onChange={handleInputChange}
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Weight (in kg)</label>
                  <input 
                    type="number" 
                    name="weight"
                    required
                    placeholder="e.g. 58" 
                    className="input-focus"
                    value={formState.weight}
                    onChange={handleInputChange}
                    style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box" }}
                  />
                </div>
              </div>

              {/* ROW 5: CENTER TARGET & CAREER TRACK */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
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
              </div>

              {/* ROW 6: ADDITIONAL MESSAGE NOTES */}
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" }}>Prior Medical or Communication Background Notes (Optional)</label>
                <textarea 
                  name="message"
                  rows="3"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Mention any passport availability, language fluency levels, or placement location preferences..." 
                  className="input-focus"
                  style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box", resize: "vertical" }}
                />
              </div>

              {/* SUBMIT TRIGGERS BUTTON */}
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
                Submit Screening Application
              </button>

            </form>
          )}

        </div>
      </section>
    </div>
  );
}

export default Apply;