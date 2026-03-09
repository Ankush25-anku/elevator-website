"use client";
import React from "react";
import "../app/Awards/Awards.css";

export default function HomeAwards() {
  const awards = [
    {
      img: "/assets/images/awards/img1103.jpg",
      title: "Asia-Pacific Emerging Elevator Brand",
      place: "Thailand",
    },
    {
      img: "/assets/images/awards/img1104.jpg",
      title: "Asia’s Safest & Fastest-Growing Elevator Brand",
      place: "Times of India",
    },
    {
      img: "/assets/images/awards/img1105.jpg",
      title: "Asia’s Top Elevator Brand",
      place: "Colombo, Sri Lanka",
    },
    {
      img: "/assets/images/awards/img1106.jpg",
      title: "Redefining Safety & Excellence",
      place: "VK Bengaluru",
    },
    {
      img: "/assets/images/awards/img1107.jpg",
      title: "Excellence in Engineering – Sir MV Award",
      place: "Bengaluru",
    },
    {
      img: "/assets/images/awards/img1108.jpg",
      title: "ASIA'S SAFEST & FASTEST-GROWING ELEVATOR BRAND",

      place: "Mumbai",
    },
    {
      img: "/assets/images/awards/img1109.jpg",
      title: "Recognised by Shri Veerendra Hegde",
      place: "India",
    },

    {
      img: "/assets/images/awards/img1110.jpg",
      title: "TOP ELEVATOR BRAND – PRIDE OF KARNATAKA",
      place: "Mysore",
    },

    {
      img: "/assets/images/awards/img1111.jpg",
      title: "HIGH-RISE ELEVATOR EXCELLENCE",
      place: " KBA BENGALURU",
    },

    {
      img: "/assets/images/awards/img1112.jpg",
      title: "BEST PASSENGER ELEVATOR MANUFACTURER",
      place: " BENGALURU",
    },
    // {
    //   img: "/assets/images/awards/img1100.jpg",
    // },
    // {
    //   img: "/assets/images/awards/img1099.jpg",
    // },
    // {
    //   img: "/assets/images/awards/img1101.jpg",
    // },
    // {
    //   img: "/assets/images/awards/img1098.jpg",
    // },
    // {
    //   img: "/assets/images/awards/img1102.jpg",
    // },
  ];

  return (
    <section className="aw-section">
      <div className="aw-container">
        <div className="aw-header">
          <span className="aw-sub">Awards & Recognition</span>
          <h2 className="aw-title">Moments of Honor</h2>
          <div className="aw-line"></div>
        </div>

        <div className="aw-wall">
          {awards.map((a, i) => (
            <div className="aw-frame" key={i}>
              <div className="aw-image">
                <img src={a.img} alt={a.title} />
              </div>
              <div className="aw-info">
                <h4>{a.title}</h4>
                <span>{a.place}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
