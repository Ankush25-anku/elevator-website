"use client";
import React from "react";

export default function FounderCard() {
  return (
    <section className="founder-section">
      <div className="founder-card">
        {/* LEFT IMAGE */}
        <div className="founder-image">
          <img
            src="/assets/images/deepak.jpg" // 👈 replace with your image path
            alt="Founder"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="founder-content">
          <h2>Mr.Deepak B Poojary (Founder and Director)</h2>

          <p>
            Deepak's vision led him to establish DS Elevator in 2009. The
            company operated under this name until 2019, when it introduced
            advanced technology and rebranded as Unosafe Elevator Pvt. Ltd. to
            expand its presence in the global market.
          </p>

          <p>
            Unosafe Elevator is a leading provider of vertical transportation
            (VT) solutions, specializing in the design, manufacture, and
            installation of elevators, escalators, and moving walks. With a
            strong focus on safety, innovation, and sustainability, Unosafe
            Elevator caters to a wide range of sectors, including residential,
            commercial, industrial, and high-rise projects. The company is also
            an authorized vendor for prestigious government projects such as NGV
            Bangalore, and Shivamogga APMC. Its state-of-the-art manufacturing
            facility and dedicated team of professionals ensure the delivery of
            top-quality products that meet international standards.
          </p>
        </div>
      </div>
    </section>
  );
}
