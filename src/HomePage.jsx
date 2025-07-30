import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './HomePage.css';
import 'aos/dist/aos.css';
import StepPopup from './components/StepPopup';

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="custom-navbar">
        <div className="navbar-brand">
          <a href="#"><img src="/logo.png" alt="Logo" /></a>
        </div>

        

      <ul className={`navbar-nav ${menuOpen ? 'active' : ''}`}>
  <div className="close-btn" onClick={() => setMenuOpen(false)}>×</div>
  <li className="nav-item"><a className="nav-link" href="#">Venue</a></li>
  <li className="nav-item"><a className="nav-link" href="#">Vendors</a></li>
  <li className="nav-item"><a className="nav-link" href="#">Real Events</a></li>
  <li className="nav-item"><a className="nav-link" href="#">Ideas</a></li>
  <li className="nav-item"><a className="nav-link" href="#">Corporate Gifting</a></li>
  <li className="nav-item"><a className="nav-link" href="#">E-Invites</a></li>
</ul>


        <div className="navbar-end">
  <img src="https://flagcdn.com/in.svg" alt="India" width="24" />
  <select className="form-select form-select-sm">
    <option>All Cities</option>
  </select>
  <button className="btn btn-warning btn-sm">Log In</button>
</div>
<button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section d-flex" data-aos="fade-up">
        <div className="container text-center">
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <h1 className="fw-bold mb-3">Your Wedding, Your Way</h1>
            <p className="lead mb-4 fw-semibold">Find the best wedding vendors with thousands of trusted reviews</p>
            <div className="custom-search-wrapper d-flex justify-content-center">
              <div className="custom-search-bar">
                <div className="custom-input">
                  <span>All Categories</span>
                </div>
                <div className="custom-divider" />
                <div className="custom-input">
                  <span>All Cities</span>
                </div>
                <button className="custom-search-btn" onClick={() => setShowModal(true)}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <StepPopup onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default HomePage;
