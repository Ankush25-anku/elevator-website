"use client";
import { useEffect, useState } from "react";

export default function ElevatorEnquiryPopup() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const popupShown = sessionStorage.getItem("elevatorPopupShown");

    // Show only if not shown before
    if (!popupShown) {
      const timer = setTimeout(() => {
        setVisible(true);

        // Save popup shown state
        sessionStorage.setItem("elevatorPopupShown", "true");
      }, 300);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="elevator-popup-overlay">
      <div className="elevator-popup-box">
        {/* Close Button */}
        <div className="elevator-popup-close" onClick={() => setVisible(false)}>
          ×
        </div>

        {/* Header */}
        <div className="elevator-popup-header">
          <h2>UNOSAFE ELEVATOR s PVT LTD</h2>
        </div>

        {/* Form */}
        <div className="elevator-popup-form">
          <h3>Submit Your Enquiry</h3>

          <div className="elevator-row">
            <div className="elevator-field">
              <label>
                Name <span>*</span>
              </label>
              <input placeholder="Name" />
            </div>

            <div className="elevator-field">
              <label>
                Phone <span>*</span>
              </label>
              <input placeholder="Phone" />
            </div>
          </div>

          <div className="elevator-row">
            <div className="elevator-field">
              <label>Email Address</label>
              <input placeholder="Add email" />
            </div>

            <div className="elevator-field">
              <label>Location</label>
              <input placeholder="Site Location" />
            </div>
          </div>

          <div className="elevator-row">
            <div className="elevator-field">
              <label>Elevator Type</label>
              <select defaultValue="">
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="home">Home Elevators</option>
                <option value="villa">Villa Elevators</option>
                <option value="hospital">Hospital Elevators</option>
                <option value="commercial">Commercial Elevators</option>
              </select>
            </div>

            <div className="elevator-field">
              <label>Requirement</label>
              <select defaultValue="">
                <option value="" disabled hidden>
                  Select
                </option>
                <option value="G+1">G+1</option>
                <option value="G+2">G+2</option>
                <option value="G+3">G+3</option>
                <option value="G+4">G+4</option>
                <option value="G+5">G+5</option>
                <option value="G+5+">G+5 and above</option>
              </select>
            </div>
          </div>

          <button className="elevator-submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}
