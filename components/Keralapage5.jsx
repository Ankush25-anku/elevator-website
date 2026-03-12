"use client";

import React from "react";
import "./machineRoomElevators.css";
import Link from "next/link";

export default function Keralapage5() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
          <Link href="/" className="mre-home">
            Home
          </Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Elite Elevators Kerala</span>
        </div>

        <h1 className="mre-title">Elite Elevators Kerala</h1>
      </div>
    </section>
  );
}
