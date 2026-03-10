import "../../../app/products/mr-geared-elevator/mrGeared.css";

export default function MRGearedElevator() {
  return (
    <section className="mrpd2-section">
      <div className="mrpd2-container">
        {/* HERO */}
        <div className="mrpd2-hero">
          {/* LEFT — IMAGES */}
          <div className="mrpd3-media">
            <img
              src="/assets/images/products/img301.jpg"
              alt="Escalator System"
            />
            <img
              src="/assets/images/products/img302.jpg"
              alt="Escalator Interior View"
            />
          </div>

          {/* RIGHT — INTRO CARD */}
          <div className="mrpd2-intro">
            <h1>Escalator</h1>
            <p className="mrpd2-tag">UNOSAFE Public Mobility Series</p>

            <p className="mrpd2-lead">
              Escalators are modern vertical transportation systems designed to
              move large numbers of people smoothly and safely between floors.
              UNOSAFE Escalators combine advanced engineering, passenger safety,
              and elegant design to deliver reliable mobility solutions for
              public and commercial spaces.
            </p>

            <div className="mrpd2-badges">
              <span>High Passenger Capacity</span>
              <span>Smooth Continuous Movement</span>
              <span>Safe & Energy Efficient</span>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mrpd2-grid">
          {/* DETAILS */}
          <div className="mrpd2-content">
            <h2>System Overview</h2>

            <p>
              <strong>UNOSAFE Escalators</strong> are engineered for continuous
              passenger flow in high-traffic environments such as shopping
              malls, airports, metro stations, hospitals, and commercial
              complexes. They ensure safe, efficient, and comfortable
              transportation across different floor levels.
            </p>

            <div className="mrpd2-feature">
              <h3>Heavy-Duty Structure</h3>
              <p>
                Built with high-strength truss and step-chain systems designed
                for long operational life under demanding public usage
                conditions.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Energy Efficient Drive</h3>
              <p>
                Intelligent drive systems with variable frequency technology
                optimize power consumption and ensure energy-efficient
                operation.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Passenger Safety Systems</h3>
              <p>
                Equipped with skirt protection, emergency stop buttons,
                anti-slip steps, and handrail safety monitoring for maximum
                passenger protection.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Smooth & Silent Operation</h3>
              <p>
                Precision-engineered step-chain mechanism and vibration control
                ensure smooth, low-noise, and comfortable travel experience.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>High Traffic Performance</h3>
              <p>
                Designed to handle continuous passenger movement efficiently,
                making them ideal for crowded commercial and public spaces.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Modern Aesthetic Design</h3>
              <p>
                Sleek glass balustrades, stainless steel finishes, and modern
                lighting options enhance architectural appeal.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Performance Specifications</h3>
              <p>
                <strong>Available Rated Speed:</strong> 0.5 / 0.65 m/s
              </p>
              <p>
                <strong>Inclination Angle:</strong> 30° / 35°
              </p>
              <p>
                <strong>Step Width Options:</strong> 600 / 800 / 1000 mm
              </p>
            </div>
          </div>

          {/* SPEC TABLE (DESIGN UNCHANGED) */}
          <div className="mrpd2-specs">
            <h2>Technical Specifications</h2>
            <div className="mrpd2-table-wrap">
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th colSpan="10">Escalator — Standard Series</th>
                  </tr>
                  <tr>
                    <th>Step Width (mm)</th>
                    <th>Rise Height</th>
                    <th colSpan="2">Truss Width (mm)</th>
                    <th colSpan="2">Step Size (mm)</th>
                    <th>Balustrade H</th>
                    <th>Handrail H</th>
                    <th>Pit</th>
                    <th>O.H.</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>D</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>600</td>
                    <td>3000</td>
                    <td>1200</td>
                    <td>3500</td>
                    <td>600</td>
                    <td>400</td>
                    <td>900</td>
                    <td>1000</td>
                    <td>1400</td>
                    <td>4200</td>
                  </tr>
                  <tr>
                    <td>800</td>
                    <td>4500</td>
                    <td>1400</td>
                    <td>5000</td>
                    <td>800</td>
                    <td>400</td>
                    <td>900</td>
                    <td>1000</td>
                    <td>1600</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>1000</td>
                    <td>6000</td>
                    <td>1600</td>
                    <td>6500</td>
                    <td>1000</td>
                    <td>400</td>
                    <td>900</td>
                    <td>1000</td>
                    <td>1800</td>
                    <td>4800</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mrpd2-table-wrap" style={{ marginTop: "30px" }}>
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th colSpan="9">
                      Structural & Installation Dimensions (Public Escalator)
                    </th>
                  </tr>
                  <tr>
                    <th>Step Width</th>
                    <th>Truss Height</th>
                    <th>Floor Opening W</th>
                    <th>Floor Opening D</th>
                    <th>Support W</th>
                    <th>Support D</th>
                    <th>Deck W</th>
                    <th>Deck H</th>
                    <th>Headroom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>600</td>
                    <td>1200</td>
                    <td>1800</td>
                    <td>4200</td>
                    <td>1200</td>
                    <td>3500</td>
                    <td>1000</td>
                    <td>900</td>
                    <td>4200</td>
                  </tr>
                  <tr>
                    <td>800</td>
                    <td>1300</td>
                    <td>2000</td>
                    <td>5800</td>
                    <td>1400</td>
                    <td>5000</td>
                    <td>1200</td>
                    <td>900</td>
                    <td>4500</td>
                  </tr>
                  <tr>
                    <td>1000</td>
                    <td>1400</td>
                    <td>2200</td>
                    <td>7200</td>
                    <td>1600</td>
                    <td>6500</td>
                    <td>1400</td>
                    <td>900</td>
                    <td>4800</td>
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
