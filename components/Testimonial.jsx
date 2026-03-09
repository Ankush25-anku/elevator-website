"use client";
import React from "react";
import "../app/testimonial/testimonial.css";

export default function HomeTestimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      img: "/assets/images/testimonials/t1.jpeg",
      text: "UNOSAFE delivered exceptional elevator solutions with outstanding safety standards. Their professionalism and timely execution truly impressed us.",
    },
    {
      name: "Ananya Rao",
      img: "/assets/images/testimonials/t2.jpeg",
      text: "Smooth installation, reliable performance, and great support team. UNOSAFE elevators enhanced our infrastructure quality significantly.",
    },
    {
      name: "Vikram Desai",
      img: "/assets/images/testimonials/t3.jpeg",
      text: "High-rise expertise and precision engineering at its best. UNOSAFE is a trusted partner for vertical mobility solutions.",
    },
  ];

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-header">
          <span className="ht-sub">Testimonials</span>
          <h2 className="ht-title">What Our Clients Say</h2>
          <div className="ht-line"></div>
        </div>

        <div className="ht-grid">
          {testimonials.map((t, i) => (
            <div className="ht-card" key={i}>
              <div className="ht-quote">“</div>

              <p className="ht-text">{t.text}</p>

              <div className="ht-rating">★★★★★</div>

              <div className="ht-user">
                <img src={t.img} alt={t.name} />
                <h4>{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
