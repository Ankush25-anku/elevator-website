import "./mrGeared.css";

export default function MRGearedElevator() {
  return (
    <section className="mrpd2-section">
      <div className="mrpd2-container">
        {/* HERO */}
        <div className="mrpd2-hero">
          {/* LEFT — IMAGES */}
          {/* LEFT — IMAGES */}
          <div className="mrpd3-media">
            <img
              src="/assets/images/products/img237.jpg"
              alt="MR Geared Elevator"
            />
            <img
              src="/assets/images/products/img245.jpg"
              alt="MR Geared Machine Room"
            />
          </div>

          {/* RIGHT — INTRO CARD */}
          <div className="mrpd2-intro">
            <h1>MR Geared Elevator</h1>
            <p className="mrpd2-tag">Machine Room Geared Technology</p>

            <p className="mrpd2-lead">
              High-performance geared elevator systems engineered for precision
              movement, heavy-duty reliability, and efficient vertical
              transportation in mid-to-high rise buildings.
            </p>

            <div className="mrpd2-badges">
              <span>High Torque Drive</span>
              <span>Energy Efficient</span>
              <span>Heavy Load Ready</span>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mrpd2-grid">
          {/* DETAILS */}
          <div className="mrpd2-content">
            <h2>System Overview</h2>

            <p>
              <strong>MR Geared Elevator</strong> refers to an elevator system
              that incorporates a gear mechanism in its design, specifically a
              Machine Room (MR) Geared Elevator. The machine room houses the
              motor, gearbox, and control equipment that powers the system.
            </p>

            <div className="mrpd2-feature">
              <h3>Control System</h3>
              <p>
                Manages starting, stopping, levelling, and safety monitoring.
                Advanced dispatching algorithms ensure smooth passenger flow.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Counterweight</h3>
              <p>
                Balances car load using precision cable and pulley systems,
                reducing motor strain and improving energy efficiency.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Gearbox</h3>
              <p>
                Regulates speed and torque. Reduces motor speed while increasing
                torque for controlled and powerful lift movement.
              </p>
            </div>
          </div>

          {/* SPEC TABLE */}
          <div className="mrpd2-specs">
            <h2>Technical Specifications</h2>

            <div className="mrpd2-table-wrap">
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th>Capacity</th>
                    <th>Load</th>
                    <th>Shaft W</th>
                    <th>Shaft D</th>
                    <th>Car W</th>
                    <th>Car D</th>
                    <th>Ent W</th>
                    <th>Ent H</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>272</td>
                    <td>1500</td>
                    <td>1200</td>
                    <td>1100</td>
                    <td>700</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>340</td>
                    <td>1500</td>
                    <td>1350</td>
                    <td>1100</td>
                    <td>850</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>408</td>
                    <td>1500</td>
                    <td>1500</td>
                    <td>1100</td>
                    <td>1000</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>544</td>
                    <td>1800</td>
                    <td>1600</td>
                    <td>1300</td>
                    <td>1100</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>680</td>
                    <td>1900</td>
                    <td>1800</td>
                    <td>1350</td>
                    <td>1300</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>884</td>
                    <td>1800</td>
                    <td>2500</td>
                    <td>1100</td>
                    <td>2000</td>
                    <td>900</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>1088</td>
                    <td>2100</td>
                    <td>2500</td>
                    <td>1300</td>
                    <td>2000</td>
                    <td>900</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>1360</td>
                    <td>2300</td>
                    <td>2500</td>
                    <td>1500</td>
                    <td>2000</td>
                    <td>900</td>
                    <td>2000</td>
                    <td>AC0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
