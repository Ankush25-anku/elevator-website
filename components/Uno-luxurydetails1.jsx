"use client";

import React from "react";
import "./machineRoomElevator.css";
import Link from "next/link";

export default function Unoluxurydetails1() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
          <Link href="/" className="mre-home">
            Home
          </Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Uno Luxury</span>
        </div>

        <h1 className="mre-title">Uno Luxury</h1>
      </div>
    </section>
  );
}
