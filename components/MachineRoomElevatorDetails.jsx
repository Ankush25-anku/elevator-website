"use client";
import React from "react";
import "./machineRoomElevatorDetails.css";
import { usePathname } from "next/navigation";

const MachineRoomElevatorDetails = () => {
  const pathname = usePathname();
  return (
    <section className="mrel-section">
      <div className="mrel-wrapper">
        {/* LEFT IMAGE */}
        <div className="mrel-left">
          <div className="mrel-imageCard">
            <img
              src="/assets/images/machine-room-elevator.png"
              alt="Machine Room Elevator"
              className="mrel-image"
            />
          </div>

          <h2 className="mrel-title">Machine Room Elevators</h2>

          {/* MACHINE ROOM CONTENT */}

          <div className="mrcd-section">
            <p className="mrcd-text">
              Traction elevators are lifted by ropes, which pass over a wheel
              attached to an electric motor above the elevator shaft. They are
              used for mid and high-rise applications and have much higher
              travel speed than hydraulic elevators.
            </p>

            <p className="mrcd-text">
              Geared traction elevators have a gearbox that is attached to the
              motor, which drives the wheel that moves the ropes. Geared
              traction elevators are capable of travel speeds upto 170 feet per
              minute. The maximum travel distance for a geared traction elevator
              is around 250 feet.
            </p>

            <p className="mrcd-text">
              Geared traction elevators are in the middle of the road in terms
              of initial cost, ongoing maintenance costs, and energy
              consumption. Gear-less traction elevators have a high initial cost
              but use energy more efficiently.
            </p>

            {/* TABLE */}

            <div className="mrcd-tableWrapper">
              <table className="mrcd-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Machine Room</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Traction</td>
                    <td>Geared</td>
                  </tr>

                  <tr>
                    <td>Speed</td>
                    <td>Up to 170 ft/min</td>
                  </tr>

                  <tr>
                    <td>Maximum Travel</td>
                    <td>Approx 250 ft</td>
                  </tr>

                  <tr>
                    <td>Maintenance</td>
                    <td>Medium</td>
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
                      <td>300</td>
                      <td>1500</td>
                      <td>1350</td>
                      <td>1100</td>
                      <td>800</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>375</td>
                      <td>1500</td>
                      <td>1500</td>
                      <td>1100</td>
                      <td>1000</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>450</td>
                      <td>1650</td>
                      <td>1500</td>
                      <td>1200</td>
                      <td>1000</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>600</td>
                      <td>1650</td>
                      <td>1800</td>
                      <td>1200</td>
                      <td>1300</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>750</td>
                      <td>1800</td>
                      <td>2000</td>
                      <td>1400</td>
                      <td>1400</td>
                      <td>800</td>
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
              href="/unomax"
              className={`mrel-item ${pathname === "/unomax" ? "active" : ""}`}
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

export default MachineRoomElevatorDetails;
