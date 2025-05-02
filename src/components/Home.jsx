import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="parent-container">
      <div class="container">
        <div class="left-section">
          <h1>Open. Activate. Bank—all in minutes</h1>
          <p class="subtitle">
            Set up your account instantly and start banking hassle-free.
          </p>

          <ul class="feature-list">
            <li class="feature-item">
              <span class="arrow">→</span>
              <span class="feature-text">No minimum balance requirement</span>
            </li>
            <li class="feature-item">
              <span class="arrow">→</span>
              <span class="feature-text">
                Instant account opening with Aadhaar and PAN
              </span>
            </li>
            <li class="feature-item">
              <span class="arrow">→</span>
              <span class="feature-text">
                Convenient KYC with video verification
              </span>
            </li>
            <li class="feature-item">
              <span class="arrow">→</span>
              <span class="feature-text">Free virtual debit card</span>
            </li>
            <li class="feature-item">
              <span class="arrow">→</span>
              <span class="feature-text">
                Physical debit card delivered with an Insta kit
              </span>
            </li>
          </ul>
        </div>

        <div class="right-section">
          <div class="arrow-overlay"></div>

          <div class="steps-container">
            <div class="step-line"></div>

            <div class="step">
              <div class="step-number">1</div>
              <div class="step-text">Step 1: Signup with mobile number</div>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <div class="step-text">Step 2: Enter your PAN Card Details</div>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <div class="step-text">
                Step 3: Setup your Savings Account (Jupiter PRO)
              </div>
            </div>

            <div class="step">
              <div class="step-number">4</div>
              <div class="step-text">
                Step 4: Activate your account with KYC
              </div>
            </div>

            <div class="step">
              <div class="step-number">5</div>
              <div class="step-text">Step 5: Start using Trexo!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
