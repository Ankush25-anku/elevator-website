"use client";
import React from "react";

export default function FounderCard() {
  return (
    <section className="founder-section">
      <div className="founder-card">
        {/* LEFT IMAGE */}
        <div className="founder-image">
          <img
            src="/assets/images/deepak11.png" // 👈 replace with your image path
            alt="Founder"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="founder-content">
          <h2>Mr.Deepak B Poojary (Founder and Director)</h2>

          <p>
            Deepak's vision led him to establish DS Elevator in 2009. The
            company operated under this name until 2019, when it introduced
            advanced technology and rebranded as UNOSAFE ELEVATOR PVT LTD. to
            expand its presence in the global market.
          </p>

          <p>
            UNOSAFE ELEVATOR is a leading provider of vertical transportation
            (VT) solutions, specializing in the design, manufacture, and
            installation of Elevator, escalators, and moving walks. With a
            strong focus on safety, innovation, and sustainability, Unosafe
            Elevator caters to a wide range of sectors, including residential,
            commercial, industrial, and high-rise projects. The company is also
            an authorized vendor for prestigious government projects such as NGV
            Bangalore, and Shivamogga APMC. Its state-of-the-art manufacturing
            facility and dedicated team of professionals ensure the delivery of
            top-quality products that meet international standards.
          </p>
          <p>
            Under his leadership, UNOSAFE ELEVATOR continues to deliver
            innovative, reliable, and customer-focused mobility solutions while
            maintaining the highest standards of quality, safety, and service
            excellence across every project.
          </p>
          <p>
            His dedication to continuous improvement and passion for engineering
            excellence have played a key role in establishing UNOSAFE ELEVATOR
            as a trusted and growing brand in the vertical transportation
            industry.
          </p>
        </div>
      </div>
    </section>
  );
}
