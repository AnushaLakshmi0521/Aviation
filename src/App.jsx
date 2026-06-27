
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout & Pages
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CurriculumView from "./components/CurriculumView";
import AboutUs from "./components/AboutUs";
import Batches from "./components/Batches";
import Fees from "./components/Fees";
import Placements from "./components/Placements";
import Apply from "./components/Apply";
import Admissions from "./components/Admissions";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays pinned globally across pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/curriculum" element={<CurriculumView />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      {/* Global Footer */}
      <footer className="footer">
        <div className="container">
          <h2>CollabForce Aviation Training</h2>
          <p>India's most accessible aviation ground training programme built for aspiring aviation professionals.</p>
          <div className="footerBottom">© 2026 CollabForce. All Rights Reserved.</div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;