"use client";

import React from "react";
import "./bangaloreHomeElevator.css";
import Link from "next/link";

export default function Chennai3() {
  return (
    <section className="bhe-section">
      <div className="bhe-container">
        {/* LEFT CONTENT */}

        <div className="bhe-left">
          {/* IMAGE */}

          <div className="bhe-left">
            {/* IMAGE */}

            <div className="bhe-imageCard">
              <img
                src="/assets/images/products/kone-elevators-in-chennai.jpg"
                alt="KONE Elevators in Chennai"
                className="bhe-image"
              />
            </div>

            {/* CONTENT */}

            <div className="bhe-content">
              <h2 className="bhe-title">KONE Elevators In Chennai</h2>

              <p className="bhe-subtitle">
                Advanced KONE Elevator Solutions in Chennai from Unosafe
                Elevators
              </p>

              <p className="bhe-text">
                As the vertical landscape in Chennai continues to evolve across
                residential towers, healthcare facilities, corporate campuses,
                and industrial complexes, reliable elevator technology becomes
                essential. KONE, a global leader in elevator innovation, is
                known for its safety, sustainability, and smart mobility
                solutions.
              </p>

              <p className="bhe-text">
                <strong>Unosafe Elevator Pvt. Ltd.</strong> brings KONE’s
                advanced elevator systems closer to clients in Chennai by
                combining global engineering with expert local installation and
                service support. Through this partnership, businesses and
                residential projects gain access to world-class elevator
                technology backed by dependable local expertise.
              </p>

              {/* WHY BEST */}

              <h3 className="bhe-heading">
                Our KONE Elevator Offerings in Chennai
              </h3>

              <ul className="bhe-list">
                <li>
                  Passenger Elevators – Elegant KONE passenger lifts available
                  in Machine Room Less (MRL) and traditional models for
                  residential and commercial buildings.
                </li>
                <li>
                  Goods Elevators – High-capacity KONE goods lifts designed for
                  warehouses, factories, and industrial environments requiring
                  heavy load transportation.
                </li>
                <li>
                  Home Elevators – Compact and stylish KONE home lift systems
                  designed for luxury villas and modern residences.
                </li>
                <li>
                  Hospital Elevators – Specialized KONE elevators designed to
                  transport patients, stretchers, and medical equipment safely
                  and efficiently.
                </li>
                <li>
                  Smart Elevator Systems – Advanced KONE digital monitoring
                  solutions for improved performance and predictive maintenance.
                </li>
              </ul>

              {/* PRICING */}

              <h3 className="bhe-heading">
                Distinctive Features of KONE Elevators
              </h3>

              <p className="bhe-text">
                KONE elevators are globally recognized for innovation, safety
                standards, and energy-efficient performance. When combined with
                Unosafe’s local expertise, clients receive a powerful
                combination of international technology and reliable service
                support.
              </p>

              <div className="bhe-priceCard">
                <h4>Safety First Technology</h4>
                <p>
                  KONE MonoSpace Smart elevators compliant with IS 17900
                  standards
                </p>
                <p>
                  PESSRAL electronic safety systems for enhanced reliability
                </p>
                <p>
                  Programmable electronic safety logic for operational security
                </p>

                <h4>Energy Efficiency</h4>
                <p>EcoDisc® motors designed to reduce energy consumption</p>
                <p>Regenerative drive technology saving up to 30% power</p>
                <p>Smart building integration for optimized performance</p>

                <h4>Connected Digital Systems</h4>
                <p>Predictive maintenance with intelligent diagnostics</p>
                <p>Digital monitoring for improved elevator performance</p>
                <p>Integration with building management systems</p>
              </div>

              {/* VARIANTS */}

              <h3 className="bhe-heading">End-to-End Services from Unosafe</h3>

              <ul className="bhe-list">
                <li>
                  Design & Consultation – Experts evaluate building requirements
                  and recommend the most suitable KONE elevator system.
                </li>
                <li>
                  Manufacturing & Technology Integration – Advanced global
                  elevator systems delivered with high engineering standards.
                </li>
                <li>
                  Precision Installation – Certified teams ensure safe and
                  compliant installation aligned with building infrastructure.
                </li>
                <li>
                  Modernization – Upgrade older elevators with KONE’s modern
                  safety features and energy-efficient technologies.
                </li>
                <li>
                  Annual Maintenance Contracts (AMC) – Structured maintenance
                  plans ensuring long-term elevator performance.
                </li>
              </ul>

              {/* BENEFITS */}

              <h3 className="bhe-heading">Industries We Serve in Chennai</h3>

              <ul className="bhe-list">
                <li>Residential Towers and Gated Communities</li>
                <li>Corporate Offices and IT Parks</li>
                <li>Malls and Commercial Complexes</li>
                <li>Hospitals and Healthcare Facilities</li>
                <li>Hotels and Hospitality Projects</li>
                <li>Warehouses and Industrial Facilities</li>
              </ul>

              {/* CLIENT RELATIONSHIP */}

              <h3 className="bhe-heading">
                Why Choose KONE Elevators Through Unosafe
              </h3>

              <p className="bhe-text">
                By combining KONE’s global elevator technology with Unosafe’s
                local expertise, clients in Chennai receive advanced elevator
                systems with reliable service support. Our Chennai-based teams
                ensure faster response times, efficient installation, and
                professional maintenance services.
              </p>

              <p className="bhe-text">
                With international safety standards, energy-efficient
                technologies, and dedicated support, Unosafe ensures that every
                KONE elevator installation delivers long-term reliability,
                smooth operation, and maximum safety.
              </p>

              {/* CONCLUSION */}

              <h3 className="bhe-heading">Conclusion</h3>

              <p className="bhe-text">
                Transform your building’s vertical mobility with KONE’s advanced
                elevator systems installed and maintained by Unosafe Elevator
                Pvt. Ltd. in Chennai. Combining global innovation with
                dependable local service, we deliver safe, efficient, and
                future-ready elevator solutions for modern buildings.
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDEBAR */}

        <div className="bhe-sidebar">
          <div className="bhe-card">
            <h3 className="bhe-cardTitle">Bangalore</h3>

            <Link href="/Bangalore" className="bhe-item">
              Home Elevators in Bangalore
              <span className="bhe-check">✓</span>
            </Link>
          </div>

          <div className="bhe-card">
            <h3 className="bhe-cardTitle">Chennai</h3>

            <Link href="/Chennai1" className="bhe-item">
              Goods Lift Manufacturers In Chennai{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Chennai2" className="bhe-item">
              Lift Companies In Chennai <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Chennai3" className="bhe-item">
              KONE Elevators In Chennai <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Chennai4" className="bhe-item">
              Elite Elevators Chennai <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Chennai5" className="bhe-item">
              Hydraulic Lift Manufacturers In Chennai{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Chennai6" className="bhe-item">
              Home Elevators In Chennai <span className="bhe-check">✓</span>
            </Link>
          </div>

          <div className="bhe-card">
            <h3 className="bhe-cardTitle">Kerala</h3>

            <Link href="/Kerala1" className="bhe-item">
              Goods Lift Manufacturers In Kerala{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Kerala2" className="bhe-item">
              Lift Companies In Kerala <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Kerala3" className="bhe-item">
              Kone Elevators In Kerala <span className="bhe-check">✓</span>
            </Link>
          
            <Link href="/Kerala5" className="bhe-item">
              Elite Elevators in Kerala<span className="bhe-check">✓</span>
            </Link>
            <Link href="/Kerala6" className="bhe-item">
              Hydraulic Lift Manufactures In kerala{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Kerala7" className="bhe-item">
              Best Elevator Manufactureres in kerala{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Kerala8" className="bhe-item">
              Home Elevators in kerala <span className="bhe-check">✓</span>
            </Link>
          </div>

          <div className="bhe-card">
            <h3 className="bhe-cardTitle">Andhra Pradesh</h3>

            <Link href="/Andhra1" className="bhe-item">
              Goods Lift Manufacturers In Andhra Pradesh{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Andhra2" className="bhe-item">
              Lift Companies In Andhra Pradesh{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Andhra3" className="bhe-item">
              Kone Elevators In Andhra Pradesh{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Andhra4" className="bhe-item">
              Elite Elevators In Andhra Pradesh{" "}
              <span className="bhe-check">✓</span>
            </Link>

            <Link href="/Andhra5" className="bhe-item">
              Hydraulice Lift Manufactureres In Andhra Pradesh{" "}
              <span className="bhe-check">✓</span>
            </Link>
            <Link href="/Andhra6" className="bhe-item">
              Capsule Elevators in Hyderabad{" "}
              <span className="bhe-check">✓</span>
            </Link>

            <Link href="/Andhra7" className="bhe-item">
              Esco Lifts India-Anantpur-UNOSAFE{" "}
              <span className="bhe-check">✓</span>
            </Link>

            <Link href="/Andhra8" className="bhe-item">
              Home Elevators in Andhra Pradesh{" "}
              <span className="bhe-check">✓</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
