"use client";
import React from "react";
import "./machineRoomElevatorDetails.css";

const Machineroomlesselevatordetails = () => {
  return (
    <section className="mrel-section">
      <div className="mrel-wrapper">
        {/* LEFT IMAGE */}
        <div className="mrel-left">
          <div className="mrel-imageCard">
            <img
              src="/assets/images/p12.jpg"
              alt="Machine Room Less Elevator"
              className="mrel-image"
            />
          </div>

          <h2 className="mrel-title">Machine Room Less Elevators</h2>

          {/* MACHINE ROOM LESS CONTENT */}

          <div className="mrcd-section">
            <p className="mrcd-text">
              Machine room less elevators are traction elevators that do not
              have a dedicated machine room above the elevator shaft. The
              machine sits in the overhead space and is accessed from the top of
              the elevator cab when maintenance or repairs are required.
            </p>

            <p className="mrcd-text">
              The control boxes are located in the control room that is adjacent
              to the elevator shaft on the highest landing within 50 feet of the
              machine.
            </p>

            <p className="mrcd-text">
              Machine room less elevators have a maximum travel distance of up
              to 150 feet and can travel at speeds up to 300 feet per minute.
              MRL elevators are comparable to geared traction elevators in terms
              of initial and maintenance costs, but they have relatively low
              energy consumption compared to geared elevators.
            </p>

            <p className="mrcd-text">
              Machine room less elevators are becoming the most popular choice
              for mid-rise buildings where the travel distance is up to 250
              feet. They are energy efficient, require less space, and their
              operation and reliability are on par with gear-less traction
              elevators.
            </p>

            <p className="mrcd-text">
              Unosafe Elevator Pvt Ltd — Elevate our imagination, safely lift
              our life.
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
                    <td>0.65 - 2 mps</td>
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
                    <td>Break Type</td>
                    <td>Disc</td>
                  </tr>

                  <tr>
                    <td>Roping</td>
                    <td>2:1</td>
                  </tr>

                  <tr>
                    <td>Machine Room</td>
                    <td>Nil</td>
                  </tr>

                  <tr>
                    <td>Overhead</td>
                    <td>4800</td>
                  </tr>

                  <tr>
                    <td>Pit</td>
                    <td>1500</td>
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
                      <td>1700</td>
                      <td>1200</td>
                      <td>1100</td>
                      <td>800</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>375</td>
                      <td>1700</td>
                      <td>1400</td>
                      <td>1100</td>
                      <td>1000</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>6</td>
                      <td>450</td>
                      <td>1800</td>
                      <td>1400</td>
                      <td>1200</td>
                      <td>1000</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>8</td>
                      <td>600</td>
                      <td>1800</td>
                      <td>1650</td>
                      <td>1200</td>
                      <td>1300</td>
                      <td>700</td>
                    </tr>

                    <tr>
                      <td>10</td>
                      <td>750</td>
                      <td>2100</td>
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

            <a href="/machine-room-elevators" className="mrel-item">
              <span>Machine Room Elevators</span>
              <span className="mrel-check">✓</span>
            </a>

            <a href="/machine-room-less-elevators" className="mrel-item active">
              <span>Machine Room Less Elevators</span>
              <span className="mrel-check">✓</span>
            </a>

            <a href="/hydraulic-elevators" className="mrel-item">
              <span>Hydraulic Elevators</span>
              <span className="mrel-check">✓</span>
            </a>
          </div>

          {/* VARIANTS */}
          <div className="mrel-card">
            <h3 className="mrel-cardTitle">Variants</h3>

            <a href="unoclassics" className="mrel-item">
              <span>UNO CLASSIC</span>
              <span className="mrel-check">✓</span>
            </a>

            <a href="/Unomax" className="mrel-item">
              <span>UNO MAX</span>
              <span className="mrel-check">✓</span>
            </a>

            <a href="uno-prime" className="mrel-item">
              <span>UNO PRIME</span>
              <span className="mrel-check">✓</span>
            </a>

            <a href="uno-gold" className="mrel-item">
              <span>UNO GOLD</span>
              <span className="mrel-check">✓</span>
            </a>

            <a href="uno-luxury" className="mrel-item">
              <span>UNO LUXURY</span>
              <span className="mrel-check">✓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machineroomlesselevatordetails;
