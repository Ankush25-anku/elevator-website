"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "../app/homevariants/home-variants.css";

export default function HomeVariants() {
  const router = useRouter();

  const variants = [
    {
      name: "Uno Classic",
      desc: "Mild steel powder coated cabin and doors",
      path: "/unoclassics", // ✅ matches app/unoclassics/page.jsx
    },
    {
      name: "Uno Max",
      desc: "SS304/441 Matte finish cabin and doors",
      path: "/Unomax",
    },
    {
      name: "Uno Prime",
      desc: "SS304/441 Cabin with Glass doors",
      path: "/uno-prime",
    },
    {
      name: "Uno Gold",
      desc: "SS304/441 Gold cabin with Gold/Glass doors",
      path: "/uno-gold",
    },
    {
      name: "Uno Luxury",
      desc: "Kings choice Premium segment",
      path: "/uno-luxury",
    },
  ];

  return (
    <section className="hv-section">
      <div className="hv-wrap">
        <div className="hv-head">
          <span className="hv-sub">What We Offer For You</span>
          <h2 className="hv-title">Elevator Variants</h2>
          <div className="hv-bar"></div>
        </div>

        <div className="hv-grid">
          {variants.map((v, i) => (
            <div
              key={i}
              className="hv-card"
              onClick={() => router.push(v.path)}
            >
              <div className="hv-card-inner">
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
                <span className="hv-link">View Details →</span>
              </div>
              <div className="hv-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
