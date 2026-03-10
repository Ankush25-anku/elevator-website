"use client";
import React from "react";
import "./machineRoomElevatorDetails.css";
import { usePathname } from "next/navigation";

const MachineRoomElevatorDetails1 = () => {
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

          <h2 className="mrel-title">Machine Room Less Elevators</h2>

          {/* MACHINE ROOM LESS CONTENT */}

          <div className="mrcd-section">
            <p className="mrcd-text">
              Machine room less elevators (MRL) are traction elevators that do
              not require a dedicated machine room above the elevator shaft. The
              traction machine is installed within the hoistway, which helps
              save building space and reduces construction costs.
            </p>

            <p className="mrcd-text">
              In MRL elevators, the compact gearless traction motor is mounted
              inside the elevator shaft. The control system is usually located
              in a small cabinet near the landing door, making maintenance
              easier while eliminating the need for a separate machine room.
            </p>

            <p className="mrcd-text">
              Machine room less elevators are widely used in mid-rise buildings
              because they provide energy-efficient operation, smooth ride
              quality, and require less structural space compared to traditional
              machine room elevators.
            </p>

            {/* TABLE */}

            <div className="mrcd-tableWrapper">
              <table className="mrcd-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Machine Room Less</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Traction</td>
                    <td>Gearless</td>
                  </tr>

                  <tr>
                    <td>Speed</td>
                    <td>0.65 – 2 m/s</td>
                  </tr>

                  <tr>
                    <td>Power Consumption</td>
                    <td>3 unit / hr (approx)</td>
                  </tr>

                  <tr>
                    <td>Oil Maintenance</td>
                    <td>No</td>
                  </tr>

                  <tr>
                    <td>Machine Location</td>
                    <td>Inside Shaft</td>
                  </tr>

                  <tr>
                    <td>Energy Efficiency</td>
                    <td>High</td>
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

                    <tr>
                      <td>13</td>
                      <td>975</td>
                      <td>2100</td>
                      <td>2000</td>
                      <td>1400</td>
                      <td>1800</td>
                      <td>900</td>
                    </tr>

                    <tr>
                      <td>16</td>
                      <td>1200</td>
                      <td>2400</td>
                      <td>2400</td>
                      <td>1400</td>
                      <td>2100</td>
                      <td>1000</td>
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

export default MachineRoomElevatorDetails1;
