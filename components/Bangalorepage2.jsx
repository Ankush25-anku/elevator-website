"use client";

import React from "react";
import "./bangaloreHomeElevator.css";
import Link from "next/link";

export default function Bangalorepage2() {
  return (
    <section className="bhe-section">
      <div className="bhe-container">
        {/* LEFT CONTENT */}

        <div className="bhe-left">
          {/* IMAGE */}

          <div className="bhe-imageCard">
            <img
              src="/assets/images/products/home-elevators-in-bangalore.jpg"
              alt="Home Elevators Bangalore"
              className="bhe-image"
            />
          </div>

          {/* CONTENT */}

          <div className="bhe-content">
            <h2 className="bhe-title">Home Elevators in Bangalore</h2>

            <p className="bhe-subtitle">
              Best Home Elevators in Bangalore from Unosafe Elevators
            </p>

            <p className="bhe-text">
              When it comes to home elevators in Bangalore, families look for
              safety, comfort, and durability. At{" "}
              <strong>Unosafe Elevators</strong>, we combine all three with
              world-class engineering and design.
            </p>

            <p className="bhe-text">
              We are an <strong>ISO 9001:2015 certified company</strong> and one
              of the most trusted lift manufacturers in Bangalore Karnataka. Our
              elevators operate smoothly across homes and apartments with
              superior safety standards.
            </p>

            {/* WHY BEST */}

            <h3 className="bhe-heading">
              Why Our Elevators Are Simply the Best
            </h3>

            <ul className="bhe-list">
              <li>Superior Technology – Smooth vibration-free rides</li>
              <li>Energy Efficient – Smart power saving systems</li>
              <li>Aesthetic Interiors – Stylish designs for modern homes</li>
              <li>Unmatched Safety – Emergency brakes & rescue devices</li>
              <li>Trusted Service – Fast maintenance support</li>
            </ul>

            {/* PRICING */}

            <h3 className="bhe-heading">Unosafe Lift Prices in Bangalore</h3>

            <p className="bhe-text">
              Lift prices vary depending on elevator type, passenger capacity,
              number of floors, and cabin interiors.
            </p>

            <div className="bhe-priceCard">
              <h4>Machine Room Elevators</h4>
              <p>6 Passenger – ₹8,70,000</p>
              <p>8 Passenger – ₹9,70,000</p>
              <p>10 Passenger – ₹10,20,000</p>

              <h4>Machine Room Less Elevators (MRL)</h4>
              <p>6 Passenger – ₹9,50,000</p>
              <p>8 Passenger – ₹10,50,000</p>
              <p>10 Passenger – ₹11,00,000</p>

              <h4>Hydraulic Elevators</h4>
              <p>6 Passenger – ₹9,50,000</p>
              <p>8 Passenger – ₹10,50,000</p>
              <p>10 Passenger – ₹11,00,000</p>
            </div>

            {/* VARIANTS */}

            <h3 className="bhe-heading">Our Elevator Variants</h3>

            <ul className="bhe-list">
              <li>UNO CLASSIC – Budget friendly</li>
              <li>UNO MAX – Spacious & durable</li>
              <li>UNO PRIME – Premium technology</li>
              <li>UNO GOLD – Stylish luxury elevators</li>
              <li>UNO LUXURY – Fully customizable</li>
            </ul>

            {/* BENEFITS */}

            <h3 className="bhe-heading">Benefits of Our Home Elevators</h3>

            <ul className="bhe-list">
              <li>Reliable installation & AMC service</li>
              <li>Silent and smooth ride technology</li>
              <li>Energy efficient drive systems</li>
              <li>Flexible customization options</li>
            </ul>

            {/* WHY CHOOSE US */}

            <h3 className="bhe-heading">
              Why Choose Unosafe Elevators in Bangalore
            </h3>

            <p className="bhe-text">
              Unosafe Elevators has built a strong reputation as one of the most
              reliable elevator manufacturers in Bangalore. Our elevators are
              installed in villas, apartments, commercial buildings, and
              residential complexes across the city. With advanced engineering,
              premium materials, and expert installation, we ensure every lift
              delivers smooth performance, long life, and complete safety.
            </p>

            <p className="bhe-text">
              Our experienced technical team provides complete support — from
              design and installation to regular maintenance and AMC services.
              This ensures your home elevator continues to operate efficiently
              for many years. With Unosafe, homeowners get a perfect combination
              of technology, safety, and elegant design that enhances both
              convenience and property value.
            </p>

            {/* CONCLUSION */}

            <h3 className="bhe-heading">Conclusion</h3>

            <p className="bhe-text">
              If you are planning to install a home elevator in Bangalore,
              Unosafe Elevators offers the perfect solution. With multiple
              elevator types, competitive lift prices, and professional
              installation services, we help families experience safe and
              comfortable vertical mobility. Our commitment to quality and
              service makes us one of the most trusted elevator companies in
              Bangalore Karnataka.
            </p>
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
