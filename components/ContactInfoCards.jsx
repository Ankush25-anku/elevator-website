"use client";
import React from "react";
import "./contactInfoCards.css";

export default function ContactInfoCards() {
  return (
    <section className="cic-section">
      <div className="cic-container">
        {/* CARD 1 */}
        <div className="cic-card">
          <div className="cic-icon">📍</div>
          <div className="cic-line"></div>
          <h3 className="cic-title">Visit Us</h3>
          <p className="cic-text">
            Shri Krishna Prime, No 28, 4th floor, 24th cross,
            <br />
            Basavanapura Main Rd, opposite National Sports &<br />
            Cultural Trust, Bengaluru.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="cic-card">
          <div className="cic-icon">📞</div>
          <div className="cic-line"></div>
          <h3 className="cic-title">Phone Us</h3>

          <div className="cic-text">
            <ul>
            <li><a href="tel:+91-9606639933">+91-9606639933</a></li>
                <li><a href="tel:+91-8296206645">+91-8296206645</a></li>
                <li><a href="tel:+91-9632831433">+91-9632831433</a></li>
                <li><a href="tel:+91-9986962476">+91-9986962476</a></li>
            </ul>
            
          </div>

          <div className="cic-line cic-line-small"></div>

          <h4 className="cic-subtitle">Toll Free No.</h4>
          <p className="cic-text">18005998246</p>
        </div>

        {/* CARD 3 */}
        <div className="cic-card">
          <div className="cic-icon">✉️</div>
          <div className="cic-line"></div>
          <h3 className="cic-title">Mail Us</h3>

          <div className="cic-text">
            <p>
              <a href="mailto:info@unosafeelevator.com">
                info@unosafeelevator.com
              </a>
            </p>
            <p>
              <a href="mailto:unosafeads@gmail.com">unosafeads@gmail.com</a>
            </p>
            <p>
              <a href="mailto:unosafeelevator@gmail.com">
                unosafeelevator@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
