"use client";

import React from "react";
import "./machineRoomElevators.css";
import Link from "next/link";

export default function Unoprimedetails() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
          
<Link href="/" className="mre-home">Home</Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Uno Prime</span>
        </div>

        <h1 className="mre-title">Uno Prime</h1>
      </div>
    </section>
  );
}
