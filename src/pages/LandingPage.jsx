
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

// Assets
import cabin from "../assets/cabin.jpg";
import baggage from "../assets/baggage.jpg";
import refueling from "../assets/refueling.jpg";
import maintenance from "../assets/maintenance.jpg";
import equipmentoperator from "../assets/equipmentoperator.jpg";
import cargohandler from "../assets/cargohandler.jpg";
import busdriver from "../assets/busdriver.jpg";

import security from "../assets/security.jpg";
import rampagent from "../assets/rampagent.jpg";
import deicing from "../assets/deicing.jpg";
import catering from "../assets/catering.jpg";

// Hero Videos (Replace these paths with your actual local video files)
const h1="https://res.cloudinary.com/doihibg9v/video/upload/v1782967443/h1_fqv3mu.mp4";
const h2="https://res.cloudinary.com/doihibg9v/video/upload/v1782967457/h2_tgd5eg.mp4";
const h3="https://res.cloudinary.com/doihibg9v/video/upload/v1782967457/h3_b4bix3.mp4";
const h4="https://res.cloudinary.com/doihibg9v/video/upload/v1782967447/h4_zmyuq5.mp4";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Required for cross-fade effect

function LandingPage() {
  const navigate = useNavigate();

  // Array containing your 4 hero videos
  const heroVideos = [h4, h2, h3, h1];

  const services = [
   { image: cabin, title: "cabin crew", description: "Ensures passenger safety, comfort, and exceptional in-flight service. " },
    { image: baggage, title: "Baggage Handler", description: "Load and unload passenger baggage and cargo safely." },
    { image: refueling, title: "Aircraft Refueling Technician", description: "Refuel aircraft while following strict aviation safety standards." },
    { image: maintenance, title: "Aircraft Maintenance Technician", description: "Inspect, repair and maintain aircraft systems." },
    { image: equipmentoperator, title: "Ground Support Equipment Operator", description: "Operate airport vehicles like tugs and belt loaders." },
    { image: cargohandler, title: "Cargo Handler", description: "Sort and handle freight shipments for airlines." },
    { image: busdriver, title: "Airport Bus Driver", description: "Transport passengers between terminals and aircraft." },

    { image: security, title: "Security Screener", description: "Screen passengers and baggage for airport security." },
    { image: rampagent, title: "Ramp Agent", description: "Support aircraft turnaround and baggage loading." },
    { image: deicing, title: "De-Icing Crew", description: "Remove ice and snow from aircraft before departure." },
    { image: catering, title: "Flight Catering Loader", description: "Deliver and load airline catering supplies." }
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* Background Swiper with Video Cross-Fading */}
        <div className="heroVideoSliderContainer">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false} // Prevents users from manually swiping the background
            className="heroVideoSwiper"
          >
            {heroVideos.map((videoSrc, index) => (
              <SwiperSlide key={index}>
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="heroVideo"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="heroOverlay"></div>
        
        <div className="heroContent">
          <div className="glassBox">
            <span className="heroTag">AVIATION TRAINING • HYDERABAD</span>
            <h1>Your Gateway to a Successful Career in Aviation.</h1>
            <p>Launch your career in the fast-growing aviation industry with industry-oriented training, hands-on practical sessions, expert mentorship, internationally aligned curriculum, and dedicated placement assistance. Prepare for exciting opportunities at airports, airlines, and aviation service organizations.</p>
            <div className="heroButtons">
              <button className="primaryBtn" onClick={()=>{ navigate("/apply"); window.scrollTo(0,0); }}>Apply Now</button>
              <button className="secondaryBtn" onClick={() => { navigate("/curriculum"); window.scrollTo(0,0); }}>
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="careersSection">
        <div className="container">
          <div className="careerHeader">
            <span className="sectionTag">CAREER OPPORTUNITIES</span>
            <h2 className="sectionTitle">Airport Ground Handling Careers</h2>
            <p className="sectionSubtitle">Start your aviation journey with industry-focused training for airport ground handling and support operations.</p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="careerCard">
                  <div className="careerImage">
                    <img src={service.image} alt={service.title} />
                    <div className="careerOverlay"></div>
                  </div>
                  <div className="careerContent">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="whyChoose">
        <div className="container">
          <div className="whyHeader">
            <span className="sectionTag">WHY CHOOSE US</span>
            <h2 className="sectionTitle">Why Students Choose CollabForce</h2>
            <p className="sectionSubtitle">We provide industry-focused aviation training with practical exposure, experienced trainers, and dedicated placement support.</p>
          </div>

          <div className="featuresGrid">
            <div className="featureCard"><div className="featureIcon">✈️</div><h3>Industry Experts</h3><p>Learn from experienced aviation professionals with real airport expertise.</p></div>
            <div className="featureCard"><div className="featureIcon">🎓</div><h3>Practical Training</h3><p>Hands-on sessions that prepare students for airport ground operations.</p></div>
            <div className="featureCard"><div className="featureIcon">🏆</div><h3>Certification</h3><p>Receive industry-recognized training certification after course completion.</p></div>
            <div className="featureCard"><div className="featureIcon">💼</div><h3>100% Placement Assistance</h3><p>We are committed to helping every eligible student secure a job after successfully completing the training.</p></div>
            <div className="featureCard"><div className="featureIcon">💰</div><h3>Placement or Fee Refund*</h3><p>If a placement is not provided as per our terms and conditions, your course fee will be refunded.</p></div>
            <div className="featureCard"><div className="featureIcon">✈️</div><h3>₹3.5 LPA Starting Package</h3><p>Get opportunities for blue-collar airport jobs with starting salary packages up to ₹3.5 lakhs per annum.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;