"use client";
import React from "react";

export default function VicePresidentCard() {
  return (
    <section className="vp-section">
      <div className="vp-card">
        {/* LEFT CONTENT */}
        <div className="vp-content">
          <h2>Mr.Pravin Kenneth (Vice president)</h2>

          <p>
            Pravin Kenneth is a seasoned professional with a robust background
            in sales and marketing, particularly in the finance and elevator
            industries. With over a decade of experience, he has developed a
            deep understanding of market dynamics, client management, and
            strategic planning.
          </p>

          <p>
            Throughout his career, Pravin Kenneth has demonstrated a strong
            ability to build and maintain relationships with key stakeholders,
            ensuring customer satisfaction and long-term partnerships.
          </p>

          <p>
            His leadership extends beyond sales and marketing. He plays a
            crucial role in overseeing all departments within the organization,
            ensuring smooth operations and alignment with the company’s vision.
          </p>

          <p>
            With a results-oriented approach and commitment to excellence, he is
            dedicated to driving the company forward.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="vp-image">
          <img src="/assets/images/pravin.jpg" alt="Vice President" />
        </div>
      </div>
    </section>
  );
}
