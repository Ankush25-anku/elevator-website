"use client";

import React from "react";
import "./machineRoomElevator.css";
import Link from "next/link";

export default function Keralapage3() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
          <Link href="/" className="mre-home">
            Home
          </Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Kone Elevator in Kerala</span>
        </div>

        <h1 className="mre-title">Kone Elevator in Kerala</h1>
      </div>
    </section>
  );
}
