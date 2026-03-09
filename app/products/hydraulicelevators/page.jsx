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
              src="/assets/images/products/img259.jpg"
              alt="Hydraulic Elevator System"
            />
            <img
              src="/assets/images/products/img260.jpg"
              alt="Hydraulic Elevator Mechanism"
            />
          </div>

          {/* RIGHT — INTRO CARD */}
          <div className="mrpd2-intro">
            <h1>Hydraulic Elevator</h1>
            <p className="mrpd2-tag">HYDROX Series</p>

            <p className="mrpd2-lead">
              Hydraulic elevators operate using advanced fluid pressure
              technology to move the elevator car smoothly within the shaft,
              offering reliable vertical transportation for low-rise buildings.
            </p>

            <div className="mrpd2-badges">
              <span>Simple & Reliable</span>
              <span>Cost Effective</span>
              <span>Ideal for Low-Rise Buildings</span>
            </div>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="mrpd2-grid">
          {/* DETAILS */}
          <div className="mrpd2-content">
            <h2>System Overview</h2>

            <p>
              <strong>Hydraulic elevator</strong> is a type of elevator that
              operates using fluid pressure to move a car (the platform that
              carries passengers or goods) up and down within a shaft.
            </p>

            <div className="mrpd2-feature">
              <h3>Hydraulic Piston</h3>
              <p>
                The hydraulic system's main component is the piston, usually
                located beneath the elevator car. When hydraulic fluid is pumped
                into the piston, it extends and pushes the car upwards. When the
                fluid is released or pumped out, the car descends smoothly.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Control System</h3>
              <p>
                The control system manages elevator operations including
                starting, stopping, and levelling. It also monitors safety
                features and may incorporate destination dispatching algorithms
                for efficient passenger transportation.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Applications & Advantages</h3>
              <p>
                Hydraulic elevators are commonly used in buildings with fewer
                floors, typically up to six floors. They are preferred for their
                simplicity, durability, and dependable performance.
              </p>
              <p>
                However, hydraulic elevators generally have slower travel speeds
                and are less energy-efficient compared to traction systems.
              </p>
            </div>

            <div className="mrpd2-feature">
              <h3>Performance Specifications</h3>
              <p>
                Hydraulic elevators can achieve maximum speeds of{" "}
                <strong>0.5 m/s</strong> with a maximum travel height of{" "}
                <strong>18 meters</strong>.
              </p>
            </div>
          </div>

          {/* SPEC TABLE (UPDATED DATA ONLY) */}
          <div className="mrpd2-specs">
            <h2>Technical Specifications</h2>

            <div className="mrpd2-table-wrap">
              <table className="mrpd2-table">
                <thead>
                  <tr>
                    <th rowSpan="2">Capacity</th>
                    <th rowSpan="2">Load</th>
                    <th colSpan="2">Shaft Size</th>
                    <th colSpan="2">Car Size</th>
                    <th colSpan="2">Entrance</th>
                    <th rowSpan="2">Type</th>
                  </tr>
                  <tr>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>D</th>
                    <th>W</th>
                    <th>H</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td>272</td>
                    <td>1500</td>
                    <td>1250</td>
                    <td>1100</td>
                    <td>700</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>ACO</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>340</td>
                    <td>1500</td>
                    <td>1400</td>
                    <td>1100</td>
                    <td>850</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>ACO</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>408</td>
                    <td>1500</td>
                    <td>1400</td>
                    <td>1200</td>
                    <td>900</td>
                    <td>700</td>
                    <td>2000</td>
                    <td>ACO</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>544</td>
                    <td>1800</td>
                    <td>1650</td>
                    <td>1300</td>
                    <td>1100</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>ACO</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>680</td>
                    <td>1800</td>
                    <td>1850</td>
                    <td>1350</td>
                    <td>1300</td>
                    <td>800</td>
                    <td>2000</td>
                    <td>ACO</td>
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
