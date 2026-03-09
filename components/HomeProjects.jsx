"use client";
import React from "react";
import "../app/homeprojects/home-projects.css";

export default function HomeProjects() {
  const projects = [
    { img: "/assets/images/projects/img1091.jpg", name: "Aditya Birla" },
    { img: "/assets/images/projects/img1092.jpg", name: "Mista" },
    { img: "/assets/images/projects/img1062.jpg", name: "Trifecta" },
    {
      img: "/assets/images/projects/img1087.jpg",
      name: "L&T Technology Services",
    },
    { img: "/assets/images/projects/img1089.jpg", name: "BHEL" },
    {
      img: "/assets/images/projects/img1068.jpg",
      name: "Podar International School",
    },
    { img: "/assets/images/projects/img1072.jpg", name: "ISKCON" },
    { img: "/assets/images/projects/img1070.jpg", name: "Assetz" },
    { img: "/assets/images/projects/img1066.jpg", name: "DSR Infrastructure" },
    { img: "/assets/images/projects/img1076.jpg", name: "Brigade Group" },
    { img: "/assets/images/projects/img1074.jpg", name: "DSMAX" },
    { img: "/assets/images/projects/img1086.jpg", name: "Nandi Hospital" },
    { img: "/assets/images/projects/img1079.jpg", name: "ONGC" },
    { img: "/assets/images/projects/img1064.jpg", name: "Vivechana" },
    {
      img: "/assets/images/projects/img1077.jpg",
      name: "Madras Sappers Institute",
    },
    { img: "/assets/images/projects/img1081.jpg", name: "Pashmina Developers" },
    { img: "/assets/images/projects/img1083.jpg", name: "Decathlon" },
    { img: "/assets/images/projects/img1085.jpg", name: "Hyundai" },
  ];

  // Duplicate for seamless loop
  const loopProjects = [...projects, ...projects];

  return (
    <section className="hp-section">
      <div className="hp-container">
        <div className="hp-header">
          <span className="hp-sub">Our Trusted Work</span>
          <h2 className="hp-title">Projects We’ve Delivered</h2>
          <div className="hp-line"></div>
        </div>

        <div className="hp-marquee">
          <div className="hp-track">
            {loopProjects.map((p, i) => (
              <div className="hp-card" key={i}>
                <div className="hp-logo-wrap">
                  <img src={p.img} alt={p.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
