"use client";

import React from "react";
import "./machineRoomElevator.css";
import Link from "next/link";

export default function MachineroomlessElevator1() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
          <Link href="/" className="mre-home">
            Home
          </Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Machine Room Less Elevator</span>
        </div>

        <h1 className="mre-title">Machine Room Less Elevator</h1>
      </div>
    </section>
  );
}
