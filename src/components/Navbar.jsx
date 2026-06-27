
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navContainer">
        {/* Clicking logo routes back home */}
        <Link to="/" className="logo" style={{ textDecoration: "none" }}>
          <h2>CollabForce</h2>
          <span>Aviation Training</span>
        </Link>

        <ul className="navLinks">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : ""}>Home</NavLink>
          </li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? "activeLink" : ""}>Curriculum</NavLink>
          </li>
          <li><Link to="/batches">Batches</Link></li>
          <li><Link to="/fees">Fees</Link></li>
          <li><Link to="/placements">Placements</Link></li>
             <li><Link to="/apply">Apply Now</Link></li>
              <li><Link to="/admissions">Admission</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>

        <button className="enrollBtn"  onClick={() => { navigate("/apply"); window.scrollTo(0,0); }}>Enroll Now</button>
      </div>
    </nav>
  );
}

export default Navbar;