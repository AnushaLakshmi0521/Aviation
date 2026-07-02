
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsHovered(false);
  };

  return (
    <nav style={{
      background: "#071020",
      padding: "15px 30px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
      {/* INLINE CUSTOM RESPONSIVE ENGINE */}
      <style>
        {`
          .navContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }
          .navMenuWrapper {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          .navLinks {
            display: flex;
            list-style: none;
            gap: 24px;
            margin: 0;
            padding: 0;
            align-items: center; /* PERFECTLY ALIGNS ALL LINK TEXT VERTICALLY */
          }
          .navLinks a, .hoverMenuTrigger {
            color: rgba(255,255,255,0.75);
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: color 0.2s ease;
            cursor: pointer;
            display: inline-block;
          }
          .navLinks a:hover, .hoverMenuTrigger:hover, .activeLink {
            color: #E8A830 !important;
          }
          .hamburgerBtn {
            display: none;
            background: none;
            border: none;
            color: #ffffff;
            font-size: 24px;
            cursor: pointer;
          }

          /* INSTANT POPUP OPTION CARD STYLES */
          .popupItem {
            display: flex;
            align-items: center;
            gap: 18px;
            padding: 20px;
            border-radius: 12px;
            text-decoration: none;
            transition: all 0.2s ease-in-out;
          }
          .popupItem:hover {
            background: #f8fafc;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(7, 16, 32, 0.08);
          }

          /* MOBILE RESPONSIVE ENGINE */
          @media (max-width: 1024px) {
            .hamburgerBtn {
              display: block;
            }
            .navMenuWrapper {
              display: ${isMobileMenuOpen ? "flex" : "none"};
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: #071020;
              padding: 24px 0 30px 0;
              gap: 24px;
              border-bottom: 2px solid #E8A830;
              box-shadow: 0 15px 30px rgba(0,0,0,0.3);
              align-items: center;
            }
            .navLinks {
              flex-direction: column;
              align-items: center;
              gap: 18px;
              width: 100%;
            }
            .popupMenuBox {
              position: static !important;
              transform: none !important;
              width: 90% !important;
              margin: 10px auto 0 auto;
              background: #0c1524 !important;
              border: 1px solid rgba(255,255,255,0.1) !important;
              box-shadow: none !important;
            }
            .popupItem:hover {
              background: rgba(255,255,255,0.05) !important;
              transform: none !important;
            }
            .popupTitle {
              color: #ffffff !important;
            }
            .popupDesc {
              color: rgba(255,255,255,0.6) !important;
            }
          }
        `}
      </style>

      <div className="navContainer">
        {/* BRAND IDENTITY */}
        <Link to="/" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "#ffffff" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", margin: 0, letterSpacing: "0.5px" }}>
            CollabForce
          </h2>
          <span style={{ fontSize: "11px", color: "#E8A830", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", display: "block" }}>
            Aviation Training
          </span>
        </Link>

        {/* MOBILE INTERACTION MENU TRIGGER */}
        <button className="hamburgerBtn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>

        {/* NAVIGATION CONTAINER */}
        <div className="navMenuWrapper">
          <ul className="navLinks">
            <li><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "activeLink" : ""}>Home</NavLink></li>
            <li><Link to="/aboutus" onClick={closeMobileMenu}>About Us</Link></li>
            
            {/* CLEAN INTERACTION LAYOUT - PADDING SPLIT FIXES ALIGNMENT */}
            <li 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ position: "relative" }} 
            >
              <span className="hoverMenuTrigger" onClick={() => { navigate("/curriculum"); closeMobileMenu(); }}>
                Curriculum
              </span>

              {/* OVERLAY POPUP BOX WITH INTEGRATED HIGHER COGNITIVE SPACING ANCHOR */}
              {isHovered && (
                <div className="popupMenuBox" style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#ffffff",
                  width: "420px",
                  borderRadius: "16px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                  border: "1px solid #edf2f7",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  zIndex: 1100,
                  marginTop: "15px" // Keeps a clean gap but allows seamless hover bridging
                }}>
                  {/* Invisible Bridge Element so the menu doesn't disappear when cursor moves down */}
                  <div style={{ position: "absolute", top: "-15px", left: 0, width: "100%", height: "15px" }} />

                  {/* Option 1: White Collar */}
                  <Link to="/white-collar" onClick={closeMobileMenu} className="popupItem">
                    <span style={{ fontSize: "28px" }}>💼</span>
                    <div>
                      <div className="popupTitle" style={{ fontWeight: "800", color: "#071020", fontSize: "17px" }}>
                        White Collar Careers
                      </div>
                      <div className="popupDesc" style={{ fontSize: "13px", color: "#64748b", marginTop: "4px", lineHeight: "1.4" }}>
                        Explore management paths, booking desk environments, dynamic terminal logistics, and customer solutions.
                      </div>
                    </div>
                  </Link>

                  {/* Option 2: Blue Collar */}
                  <Link to="/blue-collar" onClick={closeMobileMenu} className="popupItem">
                    <span style={{ fontSize: "28px" }}>🛠️</span>
                    <div>
                      <div className="popupTitle" style={{ fontWeight: "800", color: "#071020", fontSize: "17px" }}>
                        Blue Collar Careers
                      </div>
                      <div className="popupDesc" style={{ fontSize: "13px", color: "#64748b", marginTop: "4px", lineHeight: "1.4" }}>
                        Dive into critical operational tasks, technical airside tarmac marshalling, ramp setups, and cargo logistics.
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            <li><Link to="/batches" onClick={closeMobileMenu}>Batches</Link></li>
            <li><Link to="/fees" onClick={closeMobileMenu}>Fees</Link></li>
            <li><Link to="/placements" onClick={closeMobileMenu}>Placements</Link></li>
            <li><Link to="/apply" onClick={closeMobileMenu}>Apply Now</Link></li>
            <li><Link to="/admissions" onClick={closeMobileMenu}>Admission</Link></li>
            <li><Link to="/contactus" onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>

          <button 
            className="enrollBtn"  
            onClick={() => { 
              closeMobileMenu();
              navigate("/apply"); 
              window.scrollTo(0,0); 
            }}
            style={{
              background: "#E8A830",
              color: "#071020",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "14px",
              cursor: "pointer",
              whiteSpace: "nowrap"
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;