"use client";

import React from "react";
import "./machineRoomElevators.css";
import Link from "next/link";


export default function MachineroomlessElevators1() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
      <Link href="/" className="mre-home">Home</Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Machine Room Less Elevators</span>
        </div>

        <h1 className="mre-title">Machine Room Less Elevators</h1>
      </div>
    </section>
  );
}
