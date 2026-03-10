"use client";
import React from "react";
import "./machineRoomElevatorDetails.css";
import { usePathname } from "next/navigation";

const MachineRoomElevatorDetails2 = () => {
  const pathname = usePathname();
  return (
    <section className="mrel-section">
      <div className="mrel-wrapper">
        {/* LEFT IMAGE */}
        <div className="mrel-left">
          <div className="mrel-imageCard">
            <img
              src="/assets/images/p13.jpg"
              alt="Machine Room Elevator"
              className="mrel-image"
            />
          </div>

          <h2 className="mrel-title">Hydraulic Elevators</h2>

          {/* HYDRAULIC ELEVATOR CONTENT */}

          <div className="mrcd-section">
            <p className="mrcd-text">
              Hydraulic elevators operate using a hydraulic piston that is
              driven by pressurized oil through a pump system. The piston pushes
              the elevator car upward while gravity assists in lowering the car
              when the hydraulic pressure is released.
            </p>

            <p className="mrcd-text">
              These elevators are commonly used in low-rise buildings such as
              residential apartments, hospitals, warehouses, and commercial
              buildings. Hydraulic elevators do not require overhead machinery,
              making them suitable for buildings where vertical space is
              limited.
            </p>

            <p className="mrcd-text">
              Hydraulic elevator systems are known for their smooth ride
              quality, strong lifting capability, and relatively simple
              mechanical design. They are cost-effective for buildings with
              fewer floors and are easy to maintain compared to traction
              elevator systems.
            </p>

            {/* TABLE */}

            <div className="mrcd-tableWrapper">
              <table className="mrcd-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Hydraulic Elevator</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Drive System</td>
                    <td>Hydraulic Piston</td>
                  </tr>

                  <tr>
                    <td>Speed</td>
                    <td>0.25 – 1 m/s</td>
                  </tr>

                  <tr>
                    <td>Maximum Travel</td>
                    <td>Up to 60 ft</td>
                  </tr>

                  <tr>
                    <td>Power Consumption</td>
                    <td>Moderate</td>
                  </tr>

                  <tr>
                    <td>Oil Maintenance</td>
                    <td>Required</td>
                  </tr>

                  <tr>
                    <td>Machine Location</td>
                    <td>Separate Pump Room</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* INTERNATIONAL STANDARD DIMENSIONS */}

            <div className="mrcd-dimensionSection">
              <h3 className="mrcd-dimensionTitle">
                International Standard Dimensions
              </h3>

              <div className="mrcd-dimensionTableWrapper">
                <table className="mrcd-dimensionTable">
                  <thead>
                    <tr>
                      <th>Capacity</th>
                      <th>Load</th>
                      <th colSpan="2">Shaft Size</th>
                      <th colSpan="2">Car Size</th>
                      <th>Entrance</th>
                    </tr>
                    <tr>
                      <th>PC</th>
                      <th>KG</th>
                      <th>SW</th>
                      <th>SD</th>
                      <th>CW</th>
                      <th>CD</th>
                      <th>CO</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>4</td>
                      <td>320</td>
                      <td>1500</td>
                      <td>1400</td>
                      <td>1100</td>
                      <td>850</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>400</td>
                      <td>1600</td>
                      <td>1500</td>
                      <td>1200</td>
                      <td>1000</td>
                      <td>800</td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>480</td>
                      <td>1700</td>
                      <td>1600</td>
                      <td>1300</td>
                      <td>1100</td>
                      <td>800</td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>640</td>
                      <td>1800</td>
                      <td>1800</td>
                      <td>1400</td>
                      <td>1300</td>
                      <td>900</td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>800</td>
                      <td>2000</td>
                      <td>2000</td>
                      <td>1500</td>
                      <td>1400</td>
                      <td>900</td>
                    </tr>

                    <tr>
                      <td>13</td>
                      <td>1000</td>
                      <td>2200</td>
                      <td>2100</td>
                      <td>1600</td>
                      <td>1800</td>
                      <td>1000</td>
                    </tr>

                    <tr>
                      <td>16</td>
                      <td>1250</td>
                      <td>2500</td>
                      <td>2400</td>
                      <td>1700</td>
                      <td>2100</td>
                      <td>1100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="mrel-sidebar">
          {/* OUR PRODUCTS */}
          <div className="mrel-card">
            <h3 className="mrel-cardTitle">Our Products</h3>

            <a
              href="/machine-room-elevators"
              className={`mrel-item ${
                pathname === "/machine-room-elevators" ? "active" : ""
              }`}
            >
              <span>Machine Room Elevators</span>
              <span className="mrel-check">✓</span>
            </a>

            <a
              href="/machine-room-less-elevators"
              className={`mrel-item ${
                pathname === "/machine-room-less-elevators" ? "active" : ""
              }`}
            >
              <span>Machine Room Less Elevators</span>
              <span className="mrel-check">✓</span>
            </a>

            <a
              href="/hydraulic-elevators"
              className={`mrel-item ${
                pathname === "/hydraulic-elevators" ? "active" : ""
              }`}
            >
              <span>Hydraulic Elevators</span>
              <span className="mrel-check">✓</span>
            </a>
          </div>

          {/* VARIANTS */}
          <div className="mrel-card">
            <h3 className="mrel-cardTitle">Variants</h3>

            <a
              href="/unoclassics"
              className={`mrel-item ${pathname === "/unoclassics" ? "active" : ""}`}
            >
              <span>UNO CLASSIC</span>
              <span className="mrel-check">✓</span>
            </a>

            <a
              href="/Unomax"
              className={`mrel-item ${pathname === "/Unomax" ? "active" : ""}`}
            >
              <span>UNO MAX</span>
              <span className="mrel-check">✓</span>
            </a>

            <a
              href="/uno-prime"
              className={`mrel-item ${pathname === "/uno-prime" ? "active" : ""}`}
            >
              <span>UNO PRIME</span>
              <span className="mrel-check">✓</span>
            </a>

            <a
              href="/uno-gold"
              className={`mrel-item ${pathname === "/uno-gold" ? "active" : ""}`}
            >
              <span>UNO GOLD</span>
              <span className="mrel-check">✓</span>
            </a>

            <a
              href="/uno-luxury"
              className={`mrel-item ${pathname === "/uno-luxury" ? "active" : ""}`}
            >
              <span>UNO LUXURY</span>
              <span className="mrel-check">✓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineRoomElevatorDetails2;
