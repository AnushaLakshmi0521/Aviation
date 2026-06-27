
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
          }
          .navLinks a {
            color: rgba(255,255,255,0.75);
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            transition: color 0.2s ease;
          }
          .navLinks a:hover, .activeLink {
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

          /* SINGLE LAYER RESPONSIVE DROPDOWN (PREVENTS OVERLAPPING) */
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

        {/* UNIFIED CONTAINER FOR LINKS & CALL TO ACTION */}
        <div className="navMenuWrapper">
          <ul className="navLinks">
            <li><NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "activeLink" : ""}>Home</NavLink></li>
            <li><Link to="/aboutus" onClick={closeMobileMenu}>About Us</Link></li>
            <li><NavLink to="/curriculum" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "activeLink" : ""}>Curriculum</NavLink></li>
            <li><Link to="/batches" onClick={closeMobileMenu}>Batches</Link></li>
            <li><Link to="/fees" onClick={closeMobileMenu}>Fees</Link></li>
            <li><Link to="/placements" onClick={closeMobileMenu}>Placements</Link></li>
            <li><Link to="/apply" onClick={closeMobileMenu}>Apply Now</Link></li>
            <li><Link to="/admissions" onClick={closeMobileMenu}>Admission</Link></li>
            <li><Link to="/contactus" onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>

          {/* BUTTON IS NOW STACKED STABLY BENEATH THE LINKS IN COLD RECONCILIATION */}
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