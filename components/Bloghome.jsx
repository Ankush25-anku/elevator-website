"use client";

import React from "react";
import "./machineRoomElevators.css";
import Link from "next/link";

export default function Bloghome() {
  return (
    <section className="mre-hero-section">
      <div className="mre-overlay"></div>

      <div className="mre-container">
        <div className="mre-breadcrumb">
          <Link href="/" className="mre-home">
            Home
          </Link>
          <span className="mre-separator">/</span>
          <span className="mre-current">Blog</span>
        </div>

        <h1 className="mre-title">Blog</h1>
      </div>
    </section>
  );
}
