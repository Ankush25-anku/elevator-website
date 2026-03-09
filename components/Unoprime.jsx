"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./unoClassicExact.css";

export default function Unoprime() {
  const router = useRouter();

  return (
    <section className="uce-section">
      <div className="uce-container">
        {/* LEFT SIDE */}
        <div className="uce-left">
          {/* SINGLE IMAGE */}
          <div className="uce-imageSingle">
            <img src="/assets/images/pro4.jpg" alt="Uno Classic" />
          </div>

          {/* TITLE */}
          <div className="uce-titleWrap">
            <h2>UNO PRIME</h2>
          </div>

          {/* CONTENT */}
          <ul className="uce-list">
            <li>
              <strong>Cabin :</strong> SS304/441 Matte finish cabin
            </li>
            <li>
              <strong>Doors :</strong> SS304/441 Frame Glass doors
            </li>
          </ul>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="uce-sidebar">
          {/* VARIANTS */}
          <div className="uce-card">
            <h3>Our Variants</h3>

            <div
              className="uce-item active"
              onClick={() => router.push("/unoclassics")}
            >
              UNO CLASSIC <span>✓</span>
            </div>

            <div className="uce-item" onClick={() => router.push("/Unomax")}>
              UNO MAX <span>✓</span>
            </div>

            <div className="uce-item" onClick={() => router.push("/uno-prime")}>
              UNO PRIME <span>✓</span>
            </div>

            <div className="uce-item" onClick={() => router.push("/uno-gold")}>
              UNO GOLD <span>✓</span>
            </div>

            <div
              className="uce-item"
              onClick={() => router.push("/uno-luxury")}
            >
              UNO LUXURY <span>✓</span>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="uce-card">
            <h3>Our Products</h3>

            <div
              className="uce-item"
              onClick={() => router.push("/machine-room-elevators")}
            >
              Machine Room Elevators <span>✓</span>
            </div>

            <div
              className="uce-item"
              onClick={() => router.push("/machine-room-less-elevators")}
            >
              Machine Room Less Elevators <span>✓</span>
            </div>

            <div
              className="uce-item"
              onClick={() => router.push("/hydraulic-elevators")}
            >
              Hydraulic Elevators <span>✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
