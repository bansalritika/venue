import React from 'react';
import './StepPopup.css';

const StepPopup = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="step-popup-container">
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Left Side */}
       <div className="step-left-panel">
  <div className="step-left-overlay">
    <h2>Find Wedding venue near you
    <p>Enquire & get Upto 30% Off</p></h2>

    <div className="step-list">
      {[1, 2, 3, 4, 5, 6, 7].map((step) => (
        <div className="step-item" key={step}>
          <div className={`step-circle ${step === 1 ? 'active' : ''}`}>{step}</div>
          <div className="step-text">
            <div className="step-title">Step {step}</div>
            <div className="step-subtitle">Select Occasion</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



        {/* Right Side */}
        <div className="step-right-panel">
          <h2>Select Occasion</h2>
          <div className="dropdown">
            <input type="text" placeholder="Corporate Party" readOnly />
            <span className="dropdown-icon">▼</span>
          </div>

          <div className="occasion-grid">
            {['Corporate Party', 'Birthday Party', 'Meeting Room', 'Corporate Party', 'Birthday Party', 'Corporate Party'].map((title, i) => (
              <div className="occasion-card" key={i}>
                <img src="https://cdn-icons-png.flaticon.com/512/1995/1995505.png" alt={title} />
                <p>{title}</p>
              </div>
            ))}
          </div>

          <div className="next-btn-container">
            <button className="next-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPopup;
