import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="parent-container">
      <div className="container">
        <div className="left-section">
          <h1>Open. Activate. Bank—all in minutes</h1>
          <p className="subtitle">
            Set up your account instantly and start banking hassle-free.
          </p>

          <ul className="feature-list">
            <li className="feature-item">
              <span className="arrow">→</span>
              <span className="feature-text">
                No minimum balance requirement
              </span>
            </li>
            <li className="feature-item">
              <span className="arrow">→</span>
              <span className="feature-text">
                Instant account opening with Aadhaar and PAN
              </span>
            </li>
            <li className="feature-item">
              <span className="arrow">→</span>
              <span className="feature-text">
                Convenient KYC with video verification
              </span>
            </li>
            <li className="feature-item">
              <span className="arrow">→</span>
              <span className="feature-text">Free virtual debit card</span>
            </li>
            <li className="feature-item">
              <span className="arrow">→</span>
              <span className="feature-text">
                Physical debit card delivered with an Insta kit
              </span>
            </li>
          </ul>
        </div>

        <div className="right-section">
          <div className="arrow-overlay"></div>

          <div className="steps-container">
            <div className="step-line"></div>

            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">Step 1: Signup with mobile number</div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">
                Step 2: Enter your PAN Card Details
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">
                Step 3: Setup your Savings Account (Jupiter PRO)
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-text">
                Step 4: Activate your account with KYC
              </div>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <div className="step-text">Step 5: Start using Trexo!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
